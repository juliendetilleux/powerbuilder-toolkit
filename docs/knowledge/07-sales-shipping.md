# 07 - Livraisons et Expeditions (Shipping)

## Vue d'ensemble

Le module Livraisons/Expeditions de PmiGest gere le cycle complet depuis la preparation de commande (picking) jusqu'a l'expedition physique des marchandises. Il couvre la creation des bons de livraison (`shiphead`/`shipline`), le colisage (`shippack`, `colisage`), le groupage des colis (`shipgroup`), les couts de transport (`shipcost`), la gestion des camions (`truckhead`) et des tournees (`turnhead`), les codes SSCC (`ssccline`), les etiquettes (`labelconfig`), les codes-barres EAN128 (`ean128`), ainsi que l'integration FedEx. Le code est reparti entre les modules `_sales` (fenetres de gestion), `_stkbarcod` (preparation par scanner), `_stock` (mouvements), `_fedex` (integration transporteur) et `_prints_std`/`_prints_mod2t` (impressions).

---

## Tables principales

### Modele de donnees expedition

```
salhead/salline (commande)
    |
    v
shiphead ──────────────── shipline ──────────── shippack
  (en-tete livraison)       (lignes livraison)     (colis par ligne)
    |                          |
    |                          +──── ssccline (codes SSCC)
    |                          |
    +──── invoiceline          +──── shipcost (couts transport)
    |     (facturation)
    +──── adresses (client/destinataire)

colisage ──── salline (pre-colisage commande)

truckhead (camions)
turnhead ──── turn_prev (tournees planifiees)

shipto (adresses de livraison par client)
labelconfig (configuration etiquettes)
ean128 (definition codes-barres GS1-128)

fedex_parameter / fedex_constant / fedex_payment / fedex_pdf (integration FedEx)
```

### shiphead - En-tete expedition

Table principale des bons de livraison. Chaque expedition est liee a un client et une adresse de livraison.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **shcode** | numeric(8) | NON | **PK** - Numero de livraison (auto-incremente) |
| **shcust** | char(10) | NON | Code client (FK vers `adresses.adcode`) |
| **shshipto** | numeric(4) | NON | Sequence adresse livraison (FK vers `shipto.stseq`) |
| **shdate** | timestamp | NON | Date/heure de l'expedition |
| shprint | char(1) | OUI | Indicateur imprime (Y/N) |
| shcomment | long varchar | OUI | Commentaire libre (memo) |
| shprseq | numeric(4) | OUI | Sequence d'impression |
| shpalnbr | numeric(3) | OUI | Nombre de palettes |
| shgroweight | numeric(8,3) | OUI | Poids brut total (kg) |
| shreservation | varchar(20) | OUI | Numero de reservation |
| shexpedi | char(1) | OUI | Type d'expedition |
| shmccode | varchar(10) | OUI | Code maison de commerce |
| shclot | char(1) | OUI | Cloture expedition (Y=cloturee) |
| shcreauser | char(50) | OUI | Utilisateur createur |
| sh_tosend_wms | numeric(1) | NON | A envoyer vers WMS (0/1) |
| sh_sended_wms | timestamp | OUI | Date envoi vers WMS |
| shchassis | varchar(17) | OUI | Numero de chassis vehicule |
| shregistre | varchar(20) | OUI | Numero d'immatriculation |
| shmarque | varchar(25) | OUI | Marque vehicule |
| shdatereg | timestamp | OUI | Date registre |
| shkm | numeric(6) | OUI | Kilometres |
| shcash | numeric(1) | OUI | Indicateur vente comptoir |

**Relations** :
- FK sortantes : `adresses` (x2 : client et adresse livraison)
- FK entrantes : `invoiceline` (facturation), `shipline` (lignes livraison)

### shipline - Lignes expedition

Detail des articles expedies. Chaque ligne reference la commande client d'origine.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **slcode** | numeric(8) | NON | **PK** - Numero livraison (FK vers `shiphead.shcode`) |
| **slline** | numeric(4) | NON | **PK** - Numero de ligne |
| slsalorder | numeric(6) | OUI | Numero commande client d'origine |
| slsalline | numeric(4) | OUI | Numero ligne commande d'origine |
| **slitem** | char(20) | NON | Code article (FK vers `items.itcode`) |
| slitcustnam | char(30) | OUI | Designation article client |
| sllot | char(30) | OUI | Numero de lot |
| **slqty** | numeric(12,3) | NON | Quantite expediee |
| slinv | char(1) | OUI | Facture (Y/N) |
| slinvno | numeric(6) | OUI | Numero de facture |
| slcomment | long varchar | OUI | Commentaire ligne |
| slqcip | numeric(8) | OUI | Numero controle qualite |
| sltransfered | char(1) | OUI | Transfere (Y/N) |
| slcustpc | numeric(12,3) | OUI | Prix unitaire client |
| slaction | numeric(6) | OUI | Numero d'action |
| slbascost | numeric(12,4) | OUI | Cout de base |
| slxtrcost | numeric(12,4) | OUI | Cout supplementaire |

**Relations** :
- FK sortantes : `items`, `salline`, `shiphead`
- FK entrantes : `shippack` (colis), `ssccline` (codes SSCC)

### shippack - Colis par ligne d'expedition

Detail du colisage par ligne d'expedition. Permet de repartir une ligne en plusieurs colis.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **spcode** | numeric(8) | NON | **PK** - Numero livraison |
| **spline** | numeric(3) | NON | **PK** - Numero colis |
| sppackid | char(4) | OUI | Identifiant colis |
| spqty | numeric(5) | OUI | Quantite dans ce colis |
| spinv | char(1) | OUI | Facture (Y/N) |
| spcurrconv2 | numeric(10,6) | OUI | Taux de conversion devise |
| spshipline | numeric(4) | OUI | Numero ligne expedition |

**Relations** : FK sortante vers `shipline`.

### shipcost - Couts d'expedition

Frais de transport et couts annexes associes a une expedition.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **sccode** | numeric(8) | NON | **PK** - Numero livraison |
| **scline** | numeric(5) | NON | **PK** - Numero ligne cout |
| scdesc | varchar(30) | OUI | Description du cout |
| sccost | numeric(8,2) | OUI | Montant du cout |
| scinv | char(1) | OUI | Facture (Y/N) |
| scinvno | numeric(6) | OUI | Numero de facture |
| sctype | numeric(3) | OUI | Type de cout |
| scstdval | numeric(10,4) | OUI | Valeur standard |
| scqty | numeric(10,3) | OUI | Quantite |
| scum | char(2) | OUI | Unite de mesure |
| scshipline | numeric(3) | OUI | Ligne expedition associee |
| scsalorder | numeric(6) | OUI | Commande d'origine |
| scsalline | numeric(4) | OUI | Ligne commande d'origine |
| scwithtva | char(1) | OUI | Soumis a TVA (Y/N) |
| sccurrconv2 | numeric(10,6) | OUI | Taux de conversion devise |

### colisage - Pre-colisage commande

Table de pre-colisage liee aux lignes de commande client (avant expedition).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **clcode** | numeric(9) | NON | **PK** - Numero colisage |
| clsalhead | numeric(6) | OUI | Numero commande (FK vers `salline`) |
| clsalline | numeric(4) | OUI | Numero ligne commande |
| clallocseq | numeric(4) | OUI | Sequence d'allocation |
| clpallet | varchar(30) | OUI | Identifiant palette |
| clcraft | varchar(50) | OUI | Conditionnement |
| clqty | numeric(8,3) | OUI | Quantite |
| cllot | char(30) | OUI | Numero de lot |

### shipto - Adresses de livraison

Adresses de livraison multiples par client. Chaque client peut avoir plusieurs destinations.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **stcode** | char(10) | NON | **PK** - Code client |
| **stseq** | numeric(4) | NON | **PK** - Sequence adresse |
| stdesc | char(30) | OUI | Description/nom destinataire |
| stactiv | char(1) | OUI | Actif (Y/N) |
| stmain | char(1) | OUI | Adresse principale (Y/N) |
| stadr1 | char(30) | OUI | Adresse ligne 1 |
| stadr2 | char(30) | OUI | Adresse ligne 2 |
| stzip | char(10) | OUI | Code postal |
| stloc | char(25) | OUI | Localite/ville |
| stcountr | char(20) | OUI | Pays |
| stshipdays | numeric(4) | OUI | Delai de livraison (jours) |
| sttel | char(20) | OUI | Telephone |
| stfax | char(20) | OUI | Fax |
| stmail | char(50) | OUI | E-mail |
| stcontact | char(30) | OUI | Personne de contact |
| stcustomdoc | char(1) | OUI | Document douanier requis (Y/N) |
| steancode | char(13) | OUI | Code EAN du destinataire |
| stdefturn | numeric(3) | OUI | Tournee par defaut (FK vers `turnhead`) |
| stshipcmnt | varchar(40) | OUI | Commentaire expedition |
| sttype | char(1) | OUI | Type d'adresse |
| stshipadcode | char(10) | OUI | Code adresse expedition alternative |
| stshipseq | numeric(4) | OUI | Sequence adresse alternative |
| stuseadrescomp | char(1) | OUI | Utiliser adresse complementaire |
| stadrescomp1-6 | varchar(100) | OUI | Lignes adresse complementaire (6 lignes) |
| stref | varchar(60) | OUI | Reference |
| stturnbyday | char(1) | OUI | Tournee par jour active (Y/N) |
| stturnmonday-sunday | numeric(3) | OUI | Tournee par jour de la semaine |
| stcountrid | char(2) | OUI | Code pays ISO |
| ststateid | varchar(5) | OUI | Code etat/province |
| stapbcode | char(20) | OUI | Code APB |

---

## Tables camions et tournees

### truckhead - Camions/transports

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **thcode** | numeric(6) | NON | **PK** - Numero camion |
| thtyp | numeric(3) | OUI | Type de camion |
| thdat | timestamp | OUI | Date du transport |
| thstatus | char(1) | OUI | Statut |
| thstarttim | char(5) | OUI | Heure depart (HH:MM) |
| thstoptim | char(5) | OUI | Heure arrivee (HH:MM) |
| thtrucktim | numeric(4,2) | OUI | Duree trajet |
| thstartkm | numeric(7) | OUI | Kilometres depart |
| thstopkm | numeric(7) | OUI | Kilometres arrivee |
| thdriver | char(20) | OUI | Chauffeur |
| thcost | numeric(7,2) | OUI | Cout du transport |
| thweight | numeric(8) | OUI | Poids total |
| thpack | numeric(4) | OUI | Nombre de colis |
| thcmnt | varchar(1000) | OUI | Commentaire |

### turnhead - Tournees

Definition des tournees de livraison recurrentes.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **thid** | numeric(3) | NON | **PK** - Identifiant tournee |
| thdesc | varchar(20) | OUI | Description |
| thactiv | char(1) | OUI | Active (Y/N) |
| tlcmnt | varchar(120) | OUI | Commentaire |
| thday_inteval | integer | OUI | Intervalle en jours |

**Relation** : FK entrante depuis `turn_prev` (previsions de tournees).

### turn_prev - Previsions de tournees

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **tpid** | integer | NON | **PK** - Identifiant |
| tpturnhead | numeric(3) | NON | FK vers `turnhead.thid` |
| tpdate | timestamp | NON | Date prevue |

---

## Tables SSCC et EAN128

### ssccline - Codes SSCC (Serial Shipping Container Code)

Tracabilite des unites logistiques par code SSCC 18 chiffres. Lie aux lignes d'expedition.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **slcode** | char(18) | NON | **PK** - Code SSCC (18 caracteres) |
| sllot | char(30) | OUI | Numero de lot |
| slqty | numeric(10,3) | OUI | Quantite |
| slloc | char(8) | OUI | Emplacement stock |
| slin | char(1) | OUI | Indicateur entree (Y/N) |
| sl_lastmod | timestamp | OUI | Derniere modification |
| slshiphead | numeric(8) | OUI | Numero livraison (FK vers `shipline.slcode`) |
| slshipline | numeric(4) | OUI | Ligne livraison (FK vers `shipline.slline`) |

### ean128 - Definition codes-barres GS1-128

Table de reference pour les identifiants d'application (AI) du standard EAN128/GS1-128.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **eabalise** | varchar(10) | NON | **PK** - Code balise (AI : Application Identifier) |
| easizebalise | numeric(2) | NON | Taille de la balise |
| easizedata | numeric(3) | NON | Taille maximale des donnees |
| eavariable | char(1) | NON | Longueur variable (Y/N) |

---

## Etiquettes

### labelconfig - Configuration des etiquettes

Parametrage des formats d'etiquettes pour l'impression (dimensions, marges, grille).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| **lbid** | numeric(3) | NON | **PK** - Identifiant |
| **lbname** | varchar(30) | NON | Nom du format |
| **lbwidth** | numeric(5,1) | NON | Largeur (mm) |
| **lbheight** | numeric(5,1) | NON | Hauteur (mm) |
| **lbrowsnb** | numeric(2) | NON | Nombre de lignes par page |
| **lbcolsnb** | numeric(2) | NON | Nombre de colonnes par page |
| **lbmargleft** | numeric(3,1) | NON | Marge gauche (mm) |
| **lbmargright** | numeric(3,1) | NON | Marge droite (mm) |
| **lbmargtop** | numeric(3,1) | NON | Marge haute (mm) |
| **lbmargbottom** | numeric(3,1) | NON | Marge basse (mm) |
| **lbrowspace** | numeric(3,1) | NON | Espacement inter-lignes (mm) |
| **lbcolspace** | numeric(3,1) | NON | Espacement inter-colonnes (mm) |
| lbmain | char(1) | OUI | Format principal (Y/N) |
| lbactiv | char(1) | OUI | Actif (Y/N) |

---

## Tables FedEx

### fedex_parameter - Parametres FedEx

| Colonne | Type | Description |
|---------|------|-------------|
| **id_parameter** | integer | **PK** |
| name | varchar(255) | Nom du parametre |
| value | varchar(255) | Valeur |
| isconstant | bit | Est une constante (0/1) |

### fedex_constant - Constantes FedEx

| Colonne | Type | Description |
|---------|------|-------------|
| **id_constant** | integer | **PK** |
| type_name | varchar(255) | Nom du type |
| type_value | integer | Valeur du type |

### fedex_payment - Paiements FedEx

Stocke le detail des couts retournes par l'API FedEx apres creation d'un envoi.

| Colonne | Type | Description |
|---------|------|-------------|
| **id_payment** | integer | **PK** |
| mastertrackingid | varchar(255) | Numero de suivi principal |
| totalbillingweight | decimal(12,3) | Poids facturable total |
| totalbasecharge | decimal(12,3) | Frais de base |
| totalnetfreight | decimal(12,3) | Fret net |
| totalsurcharges | decimal(12,3) | Surcharges |
| totalnetfedexcharge | decimal(12,3) | Charge nette FedEx |
| totaltaxes | decimal(12,3) | Taxes |
| totalnetcharge | decimal(12,3) | Charge nette totale |

### fedex_pdf - Etiquettes FedEx

| Colonne | Type | Description |
|---------|------|-------------|
| mastertrackingi | varchar(255) | Numero de suivi principal |
| trackingnumber | varchar(255) | Numero de suivi du colis |
| stringbarcodes | varchar(255) | Codes-barres en chaine |
| label | long binary | Etiquette PDF (binaire) |

---

## Objets PowerBuilder cles

### Fenetres principales d'expedition (module `_sales`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_sales_ship` | `w_response` | Ecran principal d'expedition. Selection commandes par client/shipto, validation des livraisons. Variables cles : `isel_cust_id`, `isel_shipto_id`, `last_shipordno`, `ii_TruckRef`. Fonctions : `filteritem()`, `filtercmd()`, `uof_init_var_inst()`, `uof_launchof()` (lancement OF), `uof_treat_of()`, `uof_merge_com_lines()`. |
| `w_sales_ship_shipable` | `w_sales_ship` | Variante de `w_sales_ship` pour articles disponibles a expedier. |
| `w_sales_ship_by_transport` | `w_response` | Expedition par mode de transport/camion. Variables : `il_sel_truck_id`, `is_TURNTRUK1`. Fonctions : `wf_filteritem()`, `wf_check_dateperiod()`, `wf_check_precolisage()`. |
| `w_sales_ship_desallocate` | `w_response` | Desallocation d'une expedition (annulation de preparation). |
| `w_sales_shipable` | `w_response` | Vue des articles prets a expedier (pourcentage disponibilite). Variables : `is_custid`, `il_custord`, `ii_percent`. |

### Fenetres bons de livraison (module `_sales`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_sales_shipnotice` | `w_response` | Gestion des bons de livraison (version 1). Fonctions CRUD : `wf_shippack_create()`, `wf_shippack_modify()`, `wf_shippack_delete()`, `wf_delete_shipcost()`. Fonctions speciales : `wf_desadv()` (avis d'expedition EDI), `wf_dsadv_sscc()` (DESADV SSCC), `wf_dsadv_191()` (DESADV 191), `wf_generic_qc()` (controle qualite), `wf_clotship()` (cloture), `wf_fedex_truckrefmodify()` (ref FedEx). |
| `w_sales_shipnotice2` | `w_response` | Gestion des bons de livraison (version 2). Fonctions identiques + `wf_colandedi()` (colisage et EDI). |
| `w_sales_shipnotice_print` | `w_response` | Impression des bons de livraison. Fonctions : `wf_shipnoticeprint()`, `wf_shipnoticepdf()` (export PDF), `wf_print_pdf()`, `wf_clotship()`, `wf_where_clause()`. |
| `w_shiphead_search` | `w_response` | Recherche d'expeditions par date/periode/client. Variables : `il_shiphead`, `nb_days_horizon`. |
| `w_ship_summary` | `w_window` | Vue resumee des expeditions (ancetre `w_window` = fenetre autonome). |

### Fenetres colisage et groupage (module `_sales`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_shippack_update` | `w_response` | Mise a jour d'un colis (CRUD). Fonctions : `wf_init_window()`, `wf_check_tr()`, `wf_save_tr()`. |
| `w_shippack_quick` | `w_response` | Saisie rapide de colisage. Fonctions : `wf_checkinsertline()`, `wf_check_tr()`, `wf_save()`, `wf_checknumber()`. |
| `w_shipgroup_update` | `w_response` | Gestion du groupage (TreeView drag-drop). Fonctions : `create_tv()`, `fill_tv_level()`, `wf_groupcreate()`, `wf_groupdelete()`, `wf_itemdelete()`, `wf_labelprint()`, `wf_listprint()`. Supporte le drag-drop pour reorganiser les groupes. |
| `w_shipgrouphead_update` | `w_response` | En-tete de groupe d'expedition. |
| `w_shipgroup_link` | `w_response` | Association d'un colis a un groupe existant. |
| `w_shipcost_update` | `w_response` | Gestion des couts d'expedition. Fonctions : `wf_inputok()`, `wf_init_window()`. |

### Fenetres etiquettes (module `_sales`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_ship_label_print` | `w_response` | Impression d'etiquettes d'expedition. Fonction : `wf_win_print(lot_id, nbcopies)`. |
| `w_ship_label_prepare_std` | `w_response` | Preparation standard des etiquettes. Variables : `il_shiphead`, `ids_print` (DataStore). |
| `w_sales_ship_label` | `w_response` | Selection d'etiquettes pour une expedition. |

### Fenetres adresses de livraison (module `_masters`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_shipto_update` | `w_response` | Mise a jour d'une adresse de livraison. Fonctions : `shiptoinputok()`, `wf_creation_fichier_shipto()`. |
| `w_shipto_sqlselect` | `w_response` | Recherche/selection d'adresses de livraison. |
| `w_shiptoturn` | `w_response` | Association adresses de livraison et tournees. |
| `w_shipto_turnbyday` | `w_response` | Affectation de tournees par jour de la semaine. |
| `w_multipleship` | `w_response` | Livraisons multiples (multi-destinations). |

### Fenetres camions et tournees (module `_sales`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_transship` | `w_response` | Gestion des expeditions par camion. Fonctions : `truck_refresh()`, `wf_addne()`. Variables : `iSel_truck`, `iSel_shiphead`, `iSel_truck_typ`. |

### Fenetres codes-barres expedition (module `_stkbarcod`)

| Fenetre | Ancetre | Type | Description |
|---------|---------|------|-------------|
| `w_brf_ship_prepare` | `w_response` | BRF | Preparation expedition par scan code-barres (filaire). NVO partage : `nvo_bcd_brf`. Variables cles : `il_OrdNo`, `is_CustId`, `id_Qty2prep`. Fonctions : `wf_error()`, `wf_modif_qty()`, `wf_checkphysiol()`. |
| `w_bcd_ship_prepare` | `w_main` | BCD | Idem pour scanner portable. |
| `w_brf_ship_prepare_bycust` | `w_response` | BRF | Preparation par client (selection client puis commandes). |
| `w_bcd_ship_prepare_bycust` | `w_main` | BCD | Idem scanner portable. |
| `w_bcd_ship_prepare2` | `w_response` | BCD | Preparation v2 avec controle de lot. Fonctions : `wf_check_lot()`, `wf_check_custorder()`, `wf_make_ship_alloc()`. |
| `w_bcd_ship_prepare3` | `w_response` | BCD | Preparation v3 avancee. Fonctions EAN : `wf_ean13()`, `wf_ean128()`. Fonctions : `wf_scan_s()`, `wf_save()`, `wf_check_article()`, `wf_check_lot()`, `wf_check_qty()`, `wf_calc_packweight()`, `wf_etigroup_print()`. |
| `w_bcd_ship_prepare3_sel` | `w_response` | BCD | Selection pour preparation v3. Fonctions : `wf_see_etiq()`, `wf_trsp_send_mail()`. |
| `w_brf_sscc_ship_prepare` | `w_response` | BRF | Preparation expedition par SSCC. Fonctions : `wf_check_sscc()`, `wf_check_custorder()`, `wf_make_ship_alloc()`. |
| `w_bcd_sales_directship` | `w_response` | BCD | Expedition directe (vente + livraison en une etape). Fonctions : `wf_save()`, `wf_ship()`, `wf_alloc()`, `wf_create_sale()`, `wf_exp()`, `wf_get_ean_info()`. Structures EAN : `istr_ean128`, `istr_ean13`. |

### Autres fenetres liees

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_ship_sample` | `_quality` | Expedition d'echantillons (controle qualite). |
| `w_ship_action` | `_projects` | Actions liees aux expeditions dans les projets. |
| `w_smt_sal_shipped` | `_query` | Requete statistique des ventes expediees. |
| `w_fedex_shipmanval_input` | `_fedex` | Saisie manuelle des valeurs FedEx. Ancetre : `w_response_dw`. |

---

## DataWindows principaux

### Expedition et bons de livraison

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_custord_ship_sel` | `_sales` | Selection commandes client a expedier (par client + shipto + mcdo) |
| `ds_custord_ship_sel` | `_sales` | DataStore equivalent pour traitement batch |
| `d_custord_ship_sel_garage` | `_sales` | Variante "garage" de la selection commandes |
| `d_custord_ship_truck_sel` | `_sales` | Selection commandes par camion/transport |
| `d_shiphead_sel` / `d_shiphead_sel2` / `d_shiphead_sel3` | `_sales` | Selection en-tetes d'expedition (3 variantes) |
| `d_shiphead_cmnt_update` | `_sales` | Mise a jour commentaire en-tete (+ palettes, poids, shipto, reservation) |
| `d_shipline_sel` | `_sales` | Selection lignes d'expedition |
| `d_shipline_cmnt_update` | `_sales` | Mise a jour commentaire ligne |
| `d_shipline_return_sel` / `d_shipline_return_sel2` | `_sales` | Selection lignes pour retour |
| `d_shipnotice_print` | `_sales` | Impression bon de livraison |
| `d_shipnotice_dircash_print` | `_sales` | Impression BL vente directe/comptoir |
| `d_ship_label_prepare_std` | `_sales` | Preparation etiquettes standard |
| `d_ship_label_prepare_list_print` | `_sales` | Liste etiquettes alternatives (via `altreport`) |
| `d_ship_prep_label_print` | `_sales` | Impression etiquettes preparation |

### Colisage et groupage

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_shippack` | `_sales` | Liste colis d'une expedition |
| `d_shippack_quick` | `_sales` | Saisie rapide colis |
| `d_shipcost` / `d_shipcost_update` | `_sales` | Couts d'expedition |
| `d_shipgroup_line_sel` | `_sales` | Lignes par groupe (jointure `shipline` + `items`) |
| `d_shipgroup_update` | `_sales` | Mise a jour groupe |
| `d_shipgroup_link` | `_sales` | Association colis-groupe |
| `d_shipgr_show` | `_sales` | Affichage groupe |

### Codes-barres expedition

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_barcode_ship` / `d_barcode_ship2` | `_stkbarcod` | Grilles preparation expedition par scan |
| `d_bcd_ship_prepare` / `d_bcd_ship_prepare2` | `_stkbarcod` | Preparation expedition scanner portable |
| `d_salhead_ship_prepare` | `_stkbarcod` | Selection commande pour preparation |
| `d_salhead_ship_prepare_sel` | `_stkbarcod` | Selection commandes a preparer |
| `d_scanned_ship_prepare` | `_stkbarcod` | Articles scannes en preparation |

### SSCC et stock

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_sscclist` | `_stock` | Liste des codes SSCC (avec `slshiphead`, `slshipline`) |
| `d_sscclist_qty` | `_stock` | SSCC avec quantites |
| `d_tab_item_qtyexp` | `_stock` | Quantites expediees par semaine (4 semaines glissantes) |

### Impressions expedition

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_ship_pallet_mod1_print` | `_prints_mod2t` | Impression palette (nested reports : adresse shipto + adresse MC) |
| `d_shiptruck_mod1_print` | `_prints_mod2t` | Impression feuille camion (nested reports : commentaires + details) |
| `d_shiptruck_mod2_print` | `_prints_mod2t` | Feuille camion variante 2 |
| `d_shiptruck_mod4_print` | `_prints_mod2t` | Feuille camion variante 4 |
| `d_shiptruck_mod5_print` | `_prints_mod2t` | Feuille camion variante 5 |
| `d_shipline_label_print` | `_prints_std` | Etiquette ligne de livraison |
| `d_invoice_prepdirect` | `_sales` | Preparation facture directe (jointure `shiphead` + `shipline`) |

---

## Flux de preparation et expedition

### 1. Preparation de commande (Picking classique)

```
Commande client (salhead/salline)
    |
    v
[w_sales_ship / w_sales_shipable]
    Selection des commandes prates a expedier
    Filtrage par client, shipto, date, pourcentage disponibilite
    |
    v
[w_salline_prepare / w_salline_prep]
    DataWindow: d_custord_ship_sel
    Preparation des lignes : allocation stock (slqtyalloc)
    |
    v
[Validation expedition]
    Creation shiphead + shiplines
    Mouvements de stock (stockmvt)
    |
    v
[w_sales_shipnotice / w_sales_shipnotice2]
    Bon de livraison : consultation, modification, impression
    Gestion couts, colis, groupes, QC, cloture
```

### 2. Preparation par scanner (Picking codes-barres)

```
[w_brf_ship_prepare / w_bcd_ship_prepare]
    Selection commande par scan ou saisie numero
    |
    v
[Scan articles]
    nvo_bcd_brf : decodage code-barres, validation metier
    Verification : article existe, commande correcte, stock disponible
    Controles : lot, emplacement, quantite, date expiration
    |
    v
[w_bcd_ship_prepare3 - Version avancee]
    wf_ean13() : decodage EAN-13
    wf_ean128() : decodage GS1-128 (lot, DLUO, poids, SSCC)
    wf_check_article() + wf_check_lot() + wf_check_qty()
    wf_calc_packweight() : calcul poids colis
    wf_save() : enregistrement
    |
    v
[Allocation]
    wf_make_ship_alloc() : allocation stock
    Tables : salline (slqtyalloc), stockmvt
    |
    v
[Impression etiquettes]
    wf_etigroup_print() : etiquettes par groupe
    DataWindow : d_prepcmd_etiq_print
```

### 3. Preparation par SSCC

```
[w_brf_sscc_ship_prepare]
    Scan du code SSCC (18 caracteres)
    |
    v
[wf_check_sscc()]
    Verification SSCC dans ssccline
    Verification lot, quantite, emplacement
    |
    v
[wf_check_custorder()]
    Association SSCC a une commande client
    |
    v
[wf_make_ship_alloc()]
    Allocation et expedition
    Mise a jour ssccline.slshiphead / slshipline
```

### 4. Expedition directe (vente comptoir)

```
[w_bcd_sales_directship]
    Vente + livraison en une seule etape
    |
    v
[wf_create_sale()]
    Creation commande de vente (salhead/salline)
    |
    v
[Scan articles]
    wf_get_ean_info() : decodage EAN128/EAN13
    wf_lot_treatment() : tracabilite lot
    wf_autoallocatelot() : allocation automatique par lot
    |
    v
[wf_ship()]
    Creation expedition (shiphead/shipline)
    |
    v
[wf_exp()]
    Mouvements de sortie de stock
    |
    v
[Impression BL]
    DataWindow: d_shipnotice_dircash_print
```

---

## Flux colisage

```
[Pre-colisage commande]
    Table colisage : clsalhead, clsalline, clpallet, clcraft, clqty, cllot
    Optionnel : associe les quantites aux palettes AVANT expedition
    Fenetre : w_sales_ship_by_transport → wf_check_precolisage()

[Colisage expedition]
    Table shippack : spcode (livraison), spline (colis), sppackid, spqty
    Fenetres :
      - w_shippack_update : CRUD colis par colis
      - w_shippack_quick : saisie rapide (mode batch)
    Fonctions :
      - wf_shippack_create() / wf_shippack_modify() / wf_shippack_delete()

[Groupage]
    Fenetres :
      - w_shipgroup_update : TreeView avec drag-drop
        Niveaux hierarchiques (palette > colis > articles)
        Fonctions : create_tv(), fill_tv_level(), wf_groupcreate()
      - w_shipgrouphead_update : en-tete de groupe
      - w_shipgroup_link : association
    Impression :
      - wf_labelprint() : etiquettes par groupe
      - wf_listprint() : liste contenu groupe
```

---

## Flux camions et tournees

```
[Definition des tournees]
    Table turnhead : thid, thdesc, thactiv, thday_inteval
    Table turn_prev : dates prevues par tournee
    Fenetres :
      - w_shiptoturn : association shipto/tournee
      - w_shipto_turnbyday : tournees par jour de la semaine

[Affectation tournee au shipto]
    Table shipto : stdefturn (tournee par defaut)
    Champs par jour : stturnmonday .. stturnsunday
    Fenetre : w_shipto_update, w_shipto_turnbyday

[Expedition par camion]
    Table truckhead : thcode, thtyp, thdat, thdriver, thcost, thweight
    Fenetres :
      - w_transship : affectation expeditions aux camions
        Fonctions : truck_refresh(), wf_addne()
      - w_sales_ship_by_transport : expedition filtree par transport
    Impression :
      - d_shiptruck_mod1-5_print : feuilles de route camion (5 variantes)
```

---

## Flux SSCC et EAN128

### Codes SSCC

Les codes SSCC (Serial Shipping Container Code) sont des identifiants uniques de 18 chiffres assignes a chaque unite logistique (palette, colis). Ils permettent la tracabilite complete depuis le stock jusqu'a l'expedition.

```
[Gestion SSCC en stock]
    Table ssccline : slcode (SSCC 18 car), sllot, slqty, slloc
    DataWindows : d_sscclist, d_sscclist_qty

[Association SSCC a expedition]
    ssccline.slshiphead → shiphead.shcode
    ssccline.slshipline → shipline.slline
    Fenetre : w_brf_sscc_ship_prepare

[DESADV (Avis d'expedition EDI)]
    w_sales_shipnotice : wf_desadv() - generation avis expedition
    w_sales_shipnotice : wf_dsadv_sscc() - DESADV avec codes SSCC
    w_sales_shipnotice : wf_dsadv_191() - DESADV type 191
```

### Codes EAN128 / GS1-128

La table `ean128` definit les identifiants d'application (AI) du standard GS1-128 :
- `eabalise` : code AI (ex: "01" = GTIN, "10" = lot, "17" = DLUO, "310x" = poids)
- `easizebalise` : taille de l'AI en caracteres
- `easizedata` : taille max des donnees
- `eavariable` : Y si longueur variable (necessite separateur FNC1)

Le decodage est implemente dans :
- `w_bcd_ship_prepare3.wf_ean128()` : extraction lot, DLUO, poids, SSCC
- `w_bcd_ship_prepare3.wf_ean13()` : decodage code article EAN-13
- `w_bcd_sales_directship.wf_get_ean_info()` : extraction info EAN pour vente directe
- `nvo_bcd_brf` : objet non-visuel central (>25000 lignes) pour tout le decodage codes-barres

---

## Etiquettes (labelconfig)

La table `labelconfig` definit les formats physiques d'etiquettes :

- **Dimensions** : largeur (`lbwidth`), hauteur (`lbheight`) en mm
- **Grille** : nombre de lignes (`lbrowsnb`), colonnes (`lbcolsnb`)
- **Marges** : gauche, droite, haut, bas en mm
- **Espacement** : entre lignes (`lbrowspace`), entre colonnes (`lbcolspace`)
- **Statut** : actif (`lbactiv`), principal (`lbmain`)

Fenetres d'impression :
- `w_ship_label_print` : impression etiquettes expedition
- `w_ship_label_prepare_std` : preparation etiquettes standard (DataStore `d_ship_label_prepare_list_print`)
- `w_sales_ship_label` : selection etiquettes par expedition
- `w_bcd_ship_prepare3` : `wf_etigroup_print()` pour etiquettes par groupe
- `w_shipgroup_update` : `wf_labelprint()` pour etiquettes de groupage

DataWindows d'etiquettes :
- `d_ship_prep_label_print` : etiquette preparation expedition
- `d_shipline_label_print` : etiquette ligne expedition
- `d_prepcmd_etiq_print` : etiquette preparation commande
- `d_ship_pallet_mod1_print` : etiquette palette (with shipto subprint)

---

## Integration FedEx

Le module `_fedex` (205 objets dont 194 user objects, 8 DataWindows, 3 fenetres) gere l'integration avec les services d'expedition FedEx.

### Tables FedEx

| Table | Fonction |
|-------|----------|
| `fedex_parameter` | Parametres de connexion API (URL, credentials, compte) |
| `fedex_constant` | Constantes de l'API (types de service, d'emballage) |
| `fedex_payment` | Resultats financiers d'un envoi (frais, poids, taxes, tracking) |
| `fedex_pdf` | Stockage des etiquettes FedEx generees (PDF binaire + tracking) |

### Integration dans le flux expedition

- `w_sales_shipnotice` : `wf_fedex_truckrefmodify()` - modification reference camion FedEx
- `w_fedex_shipmanval_input` : saisie manuelle des valeurs d'envoi FedEx (ancetre `w_response_dw`)
- Les 194 user objects du module `_fedex` encapsulent les appels API FedEx (web services)

### Liaison avec shiphead

Le champ `shiphead.shreservation` stocke le numero de tracking FedEx. Le champ `shiphead.shexpedi` identifie le type d'expediteur (dont FedEx).

---

## Points d'attention

### Coherence des donnees

- **Lien shiphead/shipline** : `shipline.slcode` = `shiphead.shcode` (cle composee). Toujours verifier que l'en-tete existe avant de creer des lignes.
- **Lien vers commande** : `shipline.slsalorder`/`slsalline` referencent `salline.slcode`/`slline`. Les quantites expediees doivent etre coherentes avec les quantites commandees.
- **Facturation** : `shipline.slinv` = 'Y' et `slinvno` rempli indiquent que la ligne est facturee. La table `invoiceline` reference `shiphead.shcode` via FK.
- **Cloture** : `shiphead.shclot` = 'Y' empeche toute modification. La fonction `wf_clotship()` gere ce verrouillage.

### Stock et mouvements

- L'expedition genere un mouvement de sortie dans `stockmvt`.
- L'allocation (`salline.slqtyalloc`) est decrementee lors de la creation de la livraison.
- Le retour (`w_sales_return_sel`, DataWindows `d_shipline_return_sel`/`d_shipline_return_sel2`) genere un mouvement inverse.

### WMS (Warehouse Management System)

- `shiphead.sh_tosend_wms` : indicateur de synchronisation WMS (0 = non, 1 = a envoyer)
- `shiphead.sh_sended_wms` : timestamp de l'envoi vers le WMS

### Codes-barres

- **BRF vs BCD** : BRF = lecteur fixe/filaire (ancetre `w_response`), BCD = scanner portable (ancetre `w_main`).
- **NVO partage** : `nvo_bcd_brf` (>25000 lignes) est utilise par les deux types de terminaux.
- **EAN128 decodage** : les fonctions `wf_ean128()` et `wf_ean13()` dans `w_bcd_ship_prepare3` gerent le decodage.
- **SSCC** : codes de 18 caracteres, stockes dans `ssccline.slcode`. La preparation par SSCC (`w_brf_sscc_ship_prepare`) scanne le SSCC et cree automatiquement les lignes d'expedition.

### Tournees et transport

- Une adresse de livraison (`shipto`) peut avoir une tournee par defaut (`stdefturn`) ou des tournees par jour de la semaine (`stturnmonday` .. `stturnsunday`).
- La table `turn_prev` planifie les dates de passage des tournees.
- Les camions (`truckhead`) regroupent plusieurs expeditions pour un meme transport.

---

## Recherche rapide

### Par table

| Je cherche... | Table(s) | Colonnes cles |
|---------------|----------|---------------|
| Un bon de livraison | `shiphead` | `shcode`, `shcust`, `shdate` |
| Les articles livres | `shipline` | `slcode`, `slline`, `slitem`, `slqty` |
| La commande d'origine | `shipline` | `slsalorder`, `slsalline` |
| Le colisage | `shippack` | `spcode`, `spline`, `spqty` |
| Le pre-colisage | `colisage` | `clcode`, `clsalhead`, `clpallet` |
| Les couts transport | `shipcost` | `sccode`, `scline`, `sccost` |
| L'adresse de livraison | `shipto` | `stcode`, `stseq`, `stdesc` |
| La tournee | `turnhead` | `thid`, `thdesc` |
| Le camion | `truckhead` | `thcode`, `thdriver`, `thdat` |
| Un code SSCC | `ssccline` | `slcode`, `slshiphead`, `slshipline` |
| La config etiquette | `labelconfig` | `lbid`, `lbname`, `lbwidth`, `lbheight` |
| Le tracking FedEx | `fedex_payment` | `mastertrackingid` |
| L'etiquette FedEx | `fedex_pdf` | `trackingnumber`, `label` |
| Si l'expedition est facturee | `shipline` | `slinv` = 'Y', `slinvno` |
| Si l'expedition est cloturee | `shiphead` | `shclot` = 'Y' |

### Par fenetre

| Je veux... | Fenetre | Module |
|------------|---------|--------|
| Expedier des commandes | `w_sales_ship` | `_sales` |
| Voir les articles prets | `w_sales_shipable` | `_sales` |
| Consulter un BL | `w_sales_shipnotice` | `_sales` |
| Imprimer un BL | `w_sales_shipnotice_print` | `_sales` |
| Rechercher une expedition | `w_shiphead_search` | `_sales` |
| Gerer les colis | `w_shippack_update` / `w_shippack_quick` | `_sales` |
| Grouper les colis | `w_shipgroup_update` | `_sales` |
| Gerer les couts | `w_shipcost_update` | `_sales` |
| Affecter a un camion | `w_transship` | `_sales` |
| Expedier par transport | `w_sales_ship_by_transport` | `_sales` |
| Gerer adresses livraison | `w_shipto_update` | `_masters` |
| Gerer les tournees | `w_shiptoturn` / `w_shipto_turnbyday` | `_masters` |
| Preparer par scan (BRF) | `w_brf_ship_prepare` | `_stkbarcod` |
| Preparer par scan (BCD) | `w_bcd_ship_prepare` / `w_bcd_ship_prepare3` | `_stkbarcod` |
| Preparer par SSCC | `w_brf_sscc_ship_prepare` | `_stkbarcod` |
| Vente directe + livraison | `w_bcd_sales_directship` | `_stkbarcod` |
| Imprimer etiquettes | `w_ship_label_print` | `_sales` |
| Desallouer | `w_sales_ship_desallocate` | `_sales` |
| Expedition echantillon | `w_ship_sample` | `_quality` |
| Saisie valeur FedEx | `w_fedex_shipmanval_input` | `_fedex` |

### Par DataWindow

| Je cherche... | DataWindow | Requete cle |
|---------------|------------|-------------|
| Commandes a expedier | `d_custord_ship_sel` | `salline` par client/shipto |
| En-tetes expedition | `d_shiphead_sel` | `shiphead` avec filtres date |
| Lignes expedition | `d_shipline_sel` | `shipline` par `slcode` |
| Colis | `d_shippack` | `shippack` par expedition |
| Couts | `d_shipcost` | `shipcost` par expedition |
| Groupes | `d_shipgroup_line_sel` | `shipline` + `items` par expedition |
| Expeditions hebdo article | `d_tab_item_qtyexp` | `shipline` + `shiphead` sur 4 semaines |
| Codes SSCC | `d_sscclist` | `ssccline` avec `slshiphead`/`slshipline` |
| BL impression | `d_shipnotice_print` | `shiphead` + `shipline` + adresses |
| Feuille camion | `d_shiptruck_mod1_print` | `truckhead` + details expeditions |

### Par fonction

| Je cherche... | Fonction | Objet |
|---------------|----------|-------|
| Creer un BL | `uof_shiphead()` | `w_ship_sample` |
| Valider colisage | `wf_check_precolisage()` | `w_sales_ship_by_transport` |
| Generer DESADV | `wf_desadv()` | `w_sales_shipnotice` |
| DESADV avec SSCC | `wf_dsadv_sscc()` | `w_sales_shipnotice` |
| Cloturer expedition | `wf_clotship()` | `w_sales_shipnotice` / `w_sales_shipnotice_print` |
| Creer colis | `wf_shippack_create()` | `w_sales_shipnotice` |
| Imprimer BL | `wf_shipnoticeprint()` | `w_sales_shipnotice_print` |
| Export BL en PDF | `wf_shipnoticepdf()` | `w_sales_shipnotice_print` |
| Allocation stock scan | `wf_make_ship_alloc()` | `w_bcd_ship_prepare2` / `w_brf_sscc_ship_prepare` |
| Decoder EAN128 | `wf_ean128()` | `w_bcd_ship_prepare3` |
| Decoder EAN13 | `wf_ean13()` | `w_bcd_ship_prepare3` |
| Verifier SSCC | `wf_check_sscc()` | `w_brf_sscc_ship_prepare` |
| Calcul poids colis | `wf_calc_packweight()` | `w_bcd_ship_prepare3` |
| Lancer OF depuis exp. | `uof_launchof()` | `w_sales_ship` |
