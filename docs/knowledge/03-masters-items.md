# Domaine : Articles (Masters)

## Vue d'ensemble

Le catalogue articles est le referentiel central de PmiGest ERP (PMIX). La table `items` constitue le coeur du systeme -- c'est la table la plus referencee de toute la base de donnees avec **31 cles etrangeres entrantes** provenant de pratiquement tous les modules fonctionnels (ventes, achats, stock, fabrication, qualite, planification, expeditions, etc.).

Chaque article est identifie par un code unique (`itcode`, char(20)) et porte l'ensemble des informations techniques, commerciales, logistiques et comptables necessaires a sa gestion dans l'ERP.

### Types d'articles

| Valeur `ittyp` | Signification | Description |
|-----------------|---------------|-------------|
| `F` | Fabrique | Article produit en interne (nomenclature + gamme) |
| `A` | Achete | Article approvisionne aupres de fournisseurs |
| `P` | Phantom | Article fantome (eclate dans les nomenclatures) |

### Categories d'articles

Le champ `itcat` (char(1)) permet de classer les articles par categorie fonctionnelle. Les categories determinent la visibilite des champs dans les fenetres de saisie (via `gf_item_visibility`).

### Statut actif/inactif

Le champ `itactiv` (char(1)) controle si l'article est actif. Un article inactif ne peut plus etre utilise dans les transactions courantes mais reste present pour l'historique.

---

## Tables principales

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| `items` | Referentiel article (table centrale) | `itcode` (PK), `itname`, `ittyp`, `itum`, `itactiv` | -- |
| `lots` | Tracabilite par lot | `locode`+`loitem` (PK), `lostatus`, `loexpdat` | `items` |
| `measures` | Unites de mesure | `umcode` (PK), `umname`, `umactiv` | -- |
| `altmeasures` | Unites alternatives (conversions) | `ambaseumid`+`amcode` (PK), `amconv` | -- |
| `italtmeas` | Unites alternatives par article | `imitcode`+`imaltumcode` (PK) | -- |
| `ratehead` | En-tetes de tarifs | `rhcode` (PK), `rhdesc`, `rhcurr`, `rhtyp` | -- |
| `rateline` | Lignes de tarifs (prix par article) | `rlcode`+`rlitem` (PK), `rlval` | `items`, `ratehead` |
| `dischead` | En-tetes de remises | `dhcode` (PK), `dhname`, `dhstartdate`, `dhstopdate` | -- |
| `discline` | Lignes de remise (paliers) | `dlcode`+`dlline` (PK), `dlitem`, `dldiscpc` | `dischead` |
| `promohead` | En-tetes de promotions | `phcode` (PK), `phname`, `phstartdate`, `phstopdate` | -- |
| `promoline` | Lignes de promotions | `plcode`+`plline` (PK), `plitem`, `pldiscpc` | `promohead` |
| `itempack` | Conditionnements article | `ipitem`+`ippack` (PK), `ipconv` | `items`, `packings` |
| `packings` | Referentiel emballages | `pkcode` (PK), `pkname`, `pkweight`, `pkstdcost` | -- |
| `techdata` | Donnees techniques (definitions) | `Tdcode` (PK), `Tddesc`, `Tdtype`, `Tdum` | -- |
| `techlink` | Liaison article-donnees techniques | `Tiitem`+`Ticode` (PK), `Tivalue` | `items` |
| `itstat1` | Statistiques articles niveau 1 | `imcode` (PK), `imdesc` | -- |
| `itstat2` | Statistiques articles niveau 2 | `iscode`+`iscode2` (PK), `isdesc` | -- |
| `itstat3` | Statistiques articles niveau 3 | `iscode`+`iscode2`+`iscode3` (PK), `isdesc` | -- |
| `itemdesc` | Descriptions etendues article | `iditem` (PK), `idcomment`, `idtype` | -- |
| `itemlang` | Traductions article | `ilitcode`+`illgcode` (PK), `ildesc` | -- |
| `linkitad` | Liaison article-adresse (fournisseur/client) | `lktyp`+`lkitem`+`lkadcode`+`lkcode` (PK) | `items`, `currencies` |
| `linkitadtd` | Donnees techniques par lien article-adresse | `ldadcode`+`lditem` (PK), `lding`, `ldnut` | `items`, `adresses` |
| `linkitloc` | Liaison article-emplacement (min/max) | `llitem`+`llloc` (PK), `llqtymin`, `llqtymax` | `items`, `locations` |
| `bomhead` | En-tetes de nomenclatures (BOM) | `bhcode`+`bhtype` (PK), `bhcoeff`, `bhyield` | `items`, `adresses` |
| `bomline` | Lignes de nomenclature (composants) | `blcode`+`bltype`+`blline` (PK), `blramcode`, `blramqty` | `bomhead`, `items` |
| `colors` | Referentiel couleurs | `cocode` (PK), `coname`, `coval` | -- |
| `car_nut` | Caracteres nutritionnels | `cnid` (PK), `cnlibelle`, `cnactif` | -- |
| `stocks` | Stock par article/lot/emplacement | `stitem`+`stlot`+`stloc` (PK), `stqty`, `stalloc` | `items`, `locations` |
| `except_rate_itad` | Exceptions tarifaires article-adresse | `er_id` (PK), `er_fk_items_itcode`, `er_fk_adresses_adcode` | `items`, `adresses`, `ratehead` |
| `adresrate` | Tarifs par adresse (tiers) | `arcode`+`arstartdat` (PK), `arrateid` | `adresses`, `ratehead` |
| `linkaddiscount` | Liaison adresse-remise | `lddiscount`+`ldcode` (PK), `ldcust` | `dischead` |

---

## Colonnes cles de la table items

La table `items` contient plus de 180 colonnes. Voici les plus importantes regroupees par domaine fonctionnel.

### Identification et classification

| Colonne | Type | Description |
|---------|------|-------------|
| `itcode` | char(20) | Code article **(PK)** -- identifiant unique |
| `itname` | char(30) | Designation principale |
| `itdesc2` | varchar(60) | Designation complementaire |
| `itactiv` | char(1) | Statut actif (Y/N) |
| `ittyp` | char(1) | Type : F=fabrique, A=achete, P=phantom |
| `itcat` | char(1) | Categorie article |
| `itcrit1` | char(2) | Critere statistique 1 |
| `itcrit2` | char(2) | Critere statistique 2 |
| `itcrit3` | char(2) | Critere statistique 3 |
| `itstat1` | char(2) | Statistique 1 (-> itstat1) |
| `itstat2` | char(2) | Statistique 2 (-> itstat2) |
| `itstat3` | char(2) | Statistique 3 (-> itstat3) |
| `itstat4` | char(2) | Statistique 4 |
| `itean` | char(20) | Code EAN principal |
| `itean2` | varchar(20) | Code EAN 2 |
| `itean3` | varchar(20) | Code EAN 3 |
| `itplu` | varchar(6) | Code PLU (point de vente) |
| `itpn` | varchar(256) | Part Number (reference fabricant) |

### Unite de mesure

| Colonne | Type | Description |
|---------|------|-------------|
| `itum` | char(2) | Unite de mesure principale (-> measures) |
| `itumusr` | char(10) | Unite utilisateur |
| `itconvusr` | numeric(8,2) | Coefficient conversion UM utilisateur |
| `itumean2` | char(2) | Unite de mesure EAN 2 |
| `itumean3` | char(2) | Unite de mesure EAN 3 |
| `italttyp` | char(1) | Type d'unite alternative |
| `itisumtarif` | char(1) | Utilise unite tarifaire |
| `itumtarif` | char(2) | Unite tarifaire |
| `itumtarifconv` | numeric(12,8) | Conversion unite tarifaire |

### Commercial et prix

| Colonne | Type | Description |
|---------|------|-------------|
| `itsale` | char(1) | Vendable (Y/N) |
| `itstdsal` | numeric(10,4) | Prix de vente standard |
| `itstdsalold` | numeric(10,4) | Ancien prix de vente standard |
| `itstdpur` | numeric(10,4) | Prix d'achat standard |
| `itstdcost` | numeric(10,4) | Cout standard |
| `itfinalprice` | numeric(12,4) | Prix final |
| `itcommission` | numeric(5,2) | Taux de commission (%) |
| `itsalghost` | char(1) | Article fantome en vente |
| `itdirsaldesc` | varchar(20) | Description vente directe |
| `itbcdweightsal` | char(1) | Poids en code-barres vente |
| `itqtydisc` | char(1) | Remise par quantite |
| `itratemodval` | numeric(11,5) | Valeur modification tarif |

### Couts et comptabilite

| Colonne | Type | Description |
|---------|------|-------------|
| `itbascost` | numeric(12,4) | Cout de base |
| `itmfgxtrcost` | numeric(12,4) | Cout supplementaire fabrication |
| `itpurxtrcost` | numeric(12,4) | Cout supplementaire achat |
| `itumtbascost` | numeric(12,4) | Cout de base (UM tarifaire) |
| `itumtxtrcost` | numeric(12,4) | Cout extra (UM tarifaire) |
| `itupdpurcost` | numeric(12,4) | Dernier cout achat mis a jour |
| `itdateupdpurcos` | timestamp | Date MAJ dernier cout achat |
| `itval` | numeric(4) | Methode de valorisation |
| `itvalesc` | numeric(10,4) | Valeur d'escompte |
| `itcptpur` | numeric(4) | Compte comptable achat |
| `itcptsal` | numeric(4) | Compte comptable vente |
| `itcptanal` | numeric(4) | Compte analytique |
| `itcptinv` | numeric(4) | Compte inventaire |
| `ittvalvl` | char(1) | Niveau valorisation TVA |
| `ittax01..ittax10` | numeric(3) | Codes taxes (10 niveaux) |

### Stock et logistique

| Colonne | Type | Description |
|---------|------|-------------|
| `itstock` | numeric(12,3) | Stock physique |
| `italloc` | numeric(12,3) | Stock alloue |
| `itwip` | numeric(12,3) | En-cours (Work In Progress) |
| `itstkavg` | numeric(12,3) | Stock moyen |
| `itstkused` | numeric(12,3) | Stock utilise |
| `itstkused2` | numeric(12,3) | Stock utilise (2) |
| `itstkrot` | numeric(6,2) | Rotation de stock |
| `itloc` | char(8) | Emplacement par defaut |
| `itlocpic` | varchar(8) | Emplacement picking |
| `ittoalloc` | char(1) | Emplacement allocation |
| `itlot` | char(1) | Gestion par lot (Y/N) |
| `itsernum` | char(1) | Gestion par numero de serie |
| `itdefaultlot` | char(30) | Lot par defaut |
| `itcons` | char(1) | Consignation |
| `itweight` | numeric(8,3) | Poids (kg) |
| `ittare` | numeric(8,3) | Tare |
| `itvol` | numeric(8,3) | Volume |
| `itlength` | numeric(8,3) | Longueur |
| `itwidth` | numeric(8,3) | Largeur |
| `itheight` | numeric(8,3) | Hauteur |
| `itsquaremeter` | numeric(6,3) | Surface (m2) |
| `itqtypal` | numeric(6) | Quantite par palette |
| `itqtyfile` | numeric(6) | Quantite par rangee |
| `itlastissue` | timestamp | Derniere sortie de stock |

### Fabrication et planification

| Colonne | Type | Description |
|---------|------|-------------|
| `itbom` | char(1) | Possede une nomenclature (Y/N) |
| `itbomlvl` | numeric(2) | Niveau dans la nomenclature |
| `itwc` | char(8) | Poste de charge |
| `itpol` | char(1) | Politique de reapprovisionnement |
| `itpsize` | numeric(11,3) | Taille de lot planification |
| `itpinsize` | numeric(11,3) | Taille de lot minimum |
| `itpinnb` | numeric(2) | Nombre minimum |
| `itpnbdays` | numeric(4) | Nombre de jours de groupage |
| `itsecur` | numeric(10,3) | Stock de securite |
| `itleadtime` | numeric(4) | Delai d'approvisionnement (jours) |
| `itavailtime` | numeric(4) | Delai de disponibilite (jours) |
| `itfrozen` | numeric(4) | Periode gelee (jours) |
| `itplgroup` | numeric(2) | Groupe de planification |
| `itmfggroup` | numeric(2) | Groupe de fabrication |
| `itsubstpl` | char(1) | Politique de substitution |
| `itsubstit` | char(20) | Article de substitution |
| `itbackflushexp` | char(1) | Backflush des explosions |
| `itbatchmfg` | char(1) | Fabrication par lot |
| `itmfggeneric` | char(1) | Article generique fabrication |
| `ititemof` | varchar(20) | Article pour OF |
| `itpurchaseauto` | char(1) | Achat automatique |

### Qualite et controle

| Colonne | Type | Description |
|---------|------|-------------|
| `itqc` | char(1) | Controle qualite (Y/N) |
| `itctrl` | char(1) | Controle |
| `itclotctrl` | char(1) | Controle par cloture |
| `itclotref` | char(6) | Reference de cloture |
| `itisfrozen` | char(1) | Est congele |
| `itfreezable` | char(1) | Congelable |
| `itnbdayfreeze` | numeric(4) | Nombre de jours congelation |
| `itnbdaythaw` | numeric(4) | Nombre de jours decongelation |
| `itcont` | char(1) | Contenant |
| `itnbdaycont` | numeric(4) | Nombre de jours contenant |

### Codes-barres et etiquetage

| Colonne | Type | Description |
|---------|------|-------------|
| `itean` | char(20) | Code EAN principal |
| `itean2` | varchar(20) | Code EAN secondaire |
| `itean3` | varchar(20) | Code EAN tertiaire |
| `iteanref` | char(1) | Reference EAN principal |
| `itean2ref` | char(1) | Reference EAN 2 |
| `itean3ref` | char(1) | Reference EAN 3 |
| `itean2conv` | numeric(9,4) | Conversion EAN 2 |
| `itean3conv` | numeric(9,4) | Conversion EAN 3 |
| `itbcqty` | numeric(9,3) | Quantite code-barres |
| `itbcauto` | char(1) | Code-barres automatique |
| `itetiitem` | varchar(40) | Etiquette article |
| `itetigro` | varchar(40) | Etiquette groupe |
| `itetipal` | varchar(40) | Etiquette palette |
| `itetiitemof` | varchar(40) | Etiquette article OF |
| `itetigroof` | varchar(40) | Etiquette groupe OF |
| `itetipalof` | varchar(40) | Etiquette palette OF |
| `itlblproc` | char(8) | Processus etiquetage |
| `itlblproc2` | varchar(8) | Processus etiquetage 2 |

### Web et e-commerce

| Colonne | Type | Description |
|---------|------|-------------|
| `itwebtype` | numeric(3) | Type web |
| `itwebtype2` | numeric(3) | Type web 2 |
| `itwebum` | varchar(8) | Unite de mesure web |
| `itwebatcom` | char(1) | Web atelier commande |
| `itwebvisible` | char(1) | Visible sur le web |

### Divers et audit

| Colonne | Type | Description |
|---------|------|-------------|
| `itorcountry` | char(2) | Pays d'origine |
| `itintrastat` | numeric(4) | Code Intrastat |
| `itowner` | char(10) | Proprietaire |
| `itcreauser` | char(50) | Utilisateur creation |
| `itcreadat` | timestamp | Date creation |
| `itmodifuser` | char(50) | Utilisateur modification |
| `itmodifdat` | timestamp | Date modification |
| `ittransfered` | char(1) | Transfere |
| `itif2trf` | char(1) | A transferer |
| `itrcnopur` | char(1) | Pas de reception achat |
| `itmccode` | varchar(10) | Code multi-company |
| `itoption` | char(1) | Option |
| `itspare` | char(1) | Reserve |
| `itpoint` | char(1) | Point |
| `itsumqtyinsal` | char(1) | Cumul quantites en vente |

---

## Objets PB cles

### Fenetres principales

| Fenetre | Module | Ancetre | Role |
|---------|--------|---------|------|
| `w_items` | `_masters` | `w_response` | Liste des articles -- ecran principal de consultation |
| `w_item_update` | `_masters` | `w_response` | Fiche article complete -- creation et modification |
| `w_itemfan_update` | `_masters` | `w_response` | Fiche article avec nomenclature integree (fabrication) |
| `w_itemanx_update` | `_masters` | `w_response` | Fiche article annexe -- onglets supplementaires |
| `w_itemsrv_update` | `_masters` | `w_response` | Fiche article service |
| `w_items_cust` | `_masters` | `w_item_update` | Fiche article personnalisee (herite de `w_item_update`) |
| `w_item_customize` | `_masters` | `w_response` | Personnalisation des champs article |
| `w_item_mass_update` | `_masters` | `w_response` | Mise a jour en masse des articles |
| `w_item_search` | `_masters` | `w_response` | Recherche simple d'articles |
| `w_item_sqlselect` | `_masters` | `w_response` | Selection article avec SQL dynamique |
| `w_item_sqlsearch` | `_masters` | `w_response` | Recherche avancee avec multi-selection |
| `w_item_selection` | `_masters` | `w_response` | Dialogue de selection d'article |
| `w_item_linkitad_sqlselect` | `_masters` | `w_response` | Selection article avec liaison fournisseur |
| `w_item_desc` | `_masters` | `w_response` | Descriptions etendues d'article |
| `w_item_coststru` | `_masters` | `w_response` | Structure des couts article |
| `w_item_name_change` | `_masters` | `w_response` | Changement de code/nom article |
| `w_item_copymore` | `_masters` | `w_response` | Copie avancee d'article (BOM, fournisseurs, traductions) |
| `w_itemslang_update` | `_masters` | `w_response` | Gestion des traductions article |
| `w_item_impexp` | `_system` | `w_response` | Import/export d'articles |
| `w_item_import_prepare` | `_masters` | `w_response` | Preparation de l'importation d'articles |
| `w_item_import_show` | `_masters` | `w_response` | Affichage et validation de l'importation |

### Fenetres liees (tarifs, remises, promotions)

| Fenetre | Module | Role |
|---------|--------|------|
| `w_discline_update` | `_masters` | Gestion des lignes de remise |
| `w_promoline_update` | `_masters` | Gestion des lignes de promotion |
| `w_inactiv_linkitad` | `_system` | Gestion des liaisons fournisseurs inactives |

### Fenetres fabrication et methodes

| Fenetre | Module | Role |
|---------|--------|------|
| `w_items_of` | `_manufg` | Liste des articles par ordre de fabrication |
| `w_item_replace` | `_methods` | Remplacement d'article dans les nomenclatures |
| `w_bomcoitem_update` | `_methods` | Mise a jour co-produits nomenclature |
| `w_techdata_itemsuse` | `_methods` | Articles utilisant une donnee technique |

### Fenetres barcode (stkbarcod)

| Fenetre | Module | Role |
|---------|--------|------|
| `w_brf_item` | `_stkbarcod` | Fiche article (lecteur code-barres) |
| `w_brf_item_list` | `_stkbarcod` | Liste articles (lecteur code-barres) |
| `w_brf_return_item` | `_stkbarcod` | Retour article (code-barres) |
| `w_bcd_item_list` | `_stkbarcod` | Liste articles (scanner) |

### Fenetres requetes (query)

| Fenetre | Module | Role |
|---------|--------|------|
| `w_qry_items` | `_query` | Consultation articles avec filtres avances |
| `w_qry_item_rate` | `_query` | Consultation tarifs par article |
| `w_qry_item_lot_sel` | `_query` | Consultation lots par article |
| `w_qry_item_mfg_1it` | `_query` | Vue fabrication d'un article (planning, histo, stock, BOM) |
| `w_qry_item_suplot_sel` | `_query` | Consultation fournisseurs par lot |
| `w_qry_item_cuslot_sel` | `_query` | Consultation clients par lot |

### Fenetres devis

| Fenetre | Module | Role |
|---------|--------|------|
| `w_dvi_item_create` | `_devis` | Creation d'article depuis un devis |
| `w_dvi_item_select` | `_devis` | Selection d'article pour devis |
| `w_dvi_item_customize` | `_devis` | Personnalisation article devis |
| `w_dvi_itemkit_create` | `_devis` | Creation d'article kit depuis devis |
| `w_dvi_itemsav_update` | `_devis` | MAJ article sauvegarde devis |
| `w_dvi_itemln_update` | `_devis` | MAJ lignes article devis |
| `w_dvi_freeitem_add` | `_devis` | Ajout article libre dans devis |

### Fonctions globales

| Fonction | Module | Signature | Role |
|----------|--------|-----------|------|
| `gf_item_prefill` | `_masters` | `integer (ref uo_datawindow, long)` | Pre-remplissage des champs d'un nouvel article |
| `gf_item_inputok` | `_masters` | `boolean (integer, string, uo_datawindow, long, ref struct_item_error[])` | Validation complete de la saisie article |
| `gf_item_visibility` | `_masters` | `integer (string)` | Gestion de la visibilite des champs selon le contexte |
| `gf_itemaudit` | `_masters` | `boolean (string, string)` | Enregistrement de l'audit des modifications article |
| `gf_ean_create` | `_masters` | `string ()` | Generation automatique de code EAN |
| `gf_setmainsupplier` | `_masters` | `long (string, long)` | Definition du fournisseur principal d'un article |
| `gf_itum_modify_check` | `_masters` | `boolean (string)` | Verification avant changement d'unite de mesure |
| `createnewlotnb` | `_stock` | `string (string)` | Creation d'un nouveau numero de lot |
| `gf_bomaudit_save` | `_methods` | `integer (st_bomaudit)` | Sauvegarde audit de modification nomenclature |
| `gf_methodcost_normal_1` | `_methods` | -- | Calcul du cout methode normal (niveau 1) |

---

## Flux : Creation d'un article

### Etapes pas a pas

1. **Ouverture** : L'utilisateur ouvre `w_items` (liste articles) et clique sur "Nouveau" (ou raccourci)
2. **Fenetre de saisie** : Ouverture de `w_item_update` (ou variante selon le contexte : `w_itemfan_update` pour fabrication, `w_itemanx_update` pour annexes, `w_itemsrv_update` pour services)
3. **Pre-remplissage** : Appel automatique de `gf_item_prefill()` qui initialise les valeurs par defaut (unite de mesure, politique reappro, parametres systeme)
4. **Visibilite** : `gf_item_visibility()` adapte les champs visibles selon la categorie (`itcat`) et le type (`ittyp`)
5. **Saisie** : L'utilisateur remplit les champs obligatoires :
   - `itcode` -- code article unique
   - `itname` -- designation
   - `itum` -- unite de mesure
   - `ittyp` -- type (M=Fabrique, P=Achete planifie, C=Achat St Mini, U=Utilitaire, V=Virtuel, D=Achat consomme)
   - `itactiv` -- statut actif
6. **Generation EAN** : Si demande, `gf_ean_create()` genere automatiquement un code EAN
7. **Validation** : `gf_item_inputok()` verifie :
   - Unicite du code article
   - Coherence des champs obligatoires
   - Validite des references croisees (UM, stats, comptes)
   - Contraintes specifiques client (`gf_item_custconstraint`)
8. **Creation du lot** : Si `itlot = 'Y'`, `createnewlotnb()` cree un lot par defaut
9. **Sauvegarde** : INSERT dans la table `items` via DataWindow
10. **Audit** : `gf_itemaudit()` enregistre la trace de creation

### Copie d'article

La fenetre `w_item_copymore` permet de copier un article existant avec des options :
- `wf_bom_copy()` -- copier la nomenclature
- `wf_fourn_copy()` -- copier les fournisseurs
- `wf_traduct_copy()` -- copier les traductions
- `wf_comments_copy()` -- copier les commentaires
- `wf_smt_copy()` -- copier les liens SMT
- `wf_techdata_copy()` -- copier les donnees techniques
- `wf_routtest_copy()` -- copier les tests de gamme

### Import d'articles

1. `w_item_import_prepare` -- preparation du fichier (mapping colonnes)
2. `w_item_import_show` -- affichage, validation et import effectif
3. `w_item_impexp` -- import/export via DataStore

---

## Flux : Gestion des prix et tarifs

Le systeme de tarification de PMIX est a trois niveaux : listes de prix, remises et promotions.

### Listes de prix (ratehead / rateline)

**Structure** :
- `ratehead` : en-tete de liste de prix (`rhcode`, `rhdesc`, `rhcurr`, `rhtyp`)
- `rateline` : prix par article dans la liste (`rlcode` -> `rhcode`, `rlitem` -> `itcode`, `rlval`)

**Champs cles de ratehead** :
| Colonne | Description |
|---------|-------------|
| `rhcode` | Code liste de prix (PK, numeric(5)) |
| `rhdesc` | Description |
| `rhcurr` | Devise (char(3)) |
| `rhtyp` | Type de tarif |
| `rhmod` | Mode (majoration/remise) |
| `rhnet` | Prix net (Y/N) |
| `rhstroke` | Coefficient |
| `rhactiv` | Actif (Y/N) |
| `rhrpcode` | Code RP |

**Attribution aux clients** :
- Table `adresrate` lie une adresse (client/fournisseur) a une liste de prix avec des dates de validite
- Table `except_rate_itad` gere les exceptions tarifaires par couple article-adresse

**Prix standard article** :
- `itstdsal` : prix de vente standard
- `itstdpur` : prix d'achat standard
- `itstdcost` : cout standard
- `itfinalprice` : prix final calcule
- `itratemodval` : valeur de modification du tarif

### Remises (dischead / discline)

**Structure** :
- `dischead` : en-tete de grille de remise (`dhcode`, `dhname`, `dhstartdate`, `dhstopdate`)
- `discline` : paliers de remise (`dlcode`, `dlline`, `dlitem`, `dlstat1`, `dlstat2`, `dldiscpc`)

**Logique** : Les remises peuvent etre definies par article (`dlitem`), par groupe statistique (`dlstat1`, `dlstat2`) ou les deux.

**Attribution** : Table `linkaddiscount` lie une remise a un client (`ldcust`) ou un groupe de clients (`ldadresgroup`).

**Fenetre** : `w_discline_update` -- gestion des lignes de remise avec fonctions :
- `wf_inputok()` -- validation
- `wf_adapt()` -- adaptation dynamique
- `wf_refresh_itstat2()` -- cascade stat1 -> stat2
- `wf_creation_fichier_discline()` -- export

### Promotions (promohead / promoline)

**Structure** :
- `promohead` : en-tete de promotion (`phcode`, `phname`, `phstartdate`, `phstopdate`, `phrateid`)
- `promoline` : lignes de promotion (`plcode`, `plline`, `plitem`, `pltyp`, `plqty1`, `plqty2`, `pldiscpc`)

**Specificites** :
- `phrateid` : lien vers un tarif de reference
- `phminsale` : montant minimum de vente pour appliquer la promo
- `phrissale` : ristourne de vente (%)
- `pltyp` : type de promotion (par article, par quantite, etc.)
- `plqty1`, `plqty2` : paliers de quantite
- `plgetriscde`, `plsumcde` : options de calcul (bit)

**Fenetre** : `w_promoline_update` -- gestion des lignes de promotion.

---

## Flux : Gestion des lots

### Principe

La tracabilite par lot est activee au niveau article par le champ `itlot = 'Y'`. Quand active, chaque mouvement de stock doit etre affecte a un lot identifie.

### Table lots

| Colonne | Type | Description |
|---------|------|-------------|
| `locode` | char(30) | Code du lot (PK avec `loitem`) |
| `loitem` | char(20) | Code article (FK -> items) |
| `lostatus` | char(1) | Statut du lot |
| `lostock` | numeric(12,3) | Quantite en stock |
| `loalloc` | numeric(12,3) | Quantite allouee |
| `lowip` | numeric(12,3) | Quantite en-cours |
| `lorecdat` | timestamp | Date de reception |
| `loreldat` | timestamp | Date de liberation |
| `loexpdat` | timestamp | Date de peremption (DLC/DLUO) |
| `loavailabledate` | timestamp | Date de disponibilite |
| `loqcstatus` | char(1) | Statut controle qualite |
| `loctrl` | char(1) | Controle |
| `lolotctrl` | char(1) | Controle par lot |
| `locmnt` | varchar(1024) | Commentaire |
| `loorgcode` | char(20) | Code d'origine |
| `loadcode` | char(10) | Code adresse (fournisseur) |
| `losampleid` | numeric(8) | ID echantillon |
| `lolabelid` | numeric(6) | ID etiquette |
| `lofreezdate` | timestamp | Date de congelation |
| `lofreeze` | char(1) | Est congele |
| `lobascost` | numeric(12,4) | Cout de base du lot |
| `loxtrcost` | numeric(12,4) | Cout supplementaire du lot |
| `loserialcpt` | numeric(6) | Compteur numero de serie |
| `lost` | char(1) | Statut (obligatoire) |
| `loexcmrp` | char(1) | Exclu du MRP |
| `loid` | integer | Identifiant interne |
| `lodensity` | numeric(6,3) | Densite |
| `lodegree` | numeric(4,2) | Degre |

### Cycle de vie d'un lot

1. **Creation** : Automatique via `createnewlotnb()` lors de la reception ou de la fabrication
2. **Reception** : Le lot est cree avec `lostatus` en attente, `lorecdat` = date du jour
3. **Controle qualite** : Si `itqc = 'Y'`, le lot passe par un controle (`loqcstatus`)
4. **Liberation** : Le lot est libere (`loreldat`) et devient disponible
5. **Consommation** : Les mouvements de stock decrementent `lostock`
6. **Peremption** : Suivi via `loexpdat` -- alerte si la date est depassee
7. **Congelation** : Pour les articles congelables (`itfreezable = 'Y'`), suivi via `lofreeze` et `lofreezdate`

### Gestion des numeros de serie

Si `itsernum = 'Y'`, chaque piece est tracee individuellement via un compteur (`loserialcpt`).

### Fenetres associees

- `w_qry_item_lot_sel` : consultation des lots par article
- `w_qry_item_suplot_sel` : consultation des lots par fournisseur
- `w_qry_item_cuslot_sel` : consultation des lots par client

---

## Flux : Nomenclatures (BOM)

### Principe

La nomenclature definit la liste des composants et matieres premieres necessaires pour fabriquer un article. Elle est geree dans le module `_methods`.

### Structure

**En-tete (bomhead)** :
| Colonne | Description |
|---------|-------------|
| `bhcode` | Code article parent (PK, FK -> items) |
| `bhtype` | Type de nomenclature (PK) -- standard, alternative, etc. |
| `bhcoeff` | Coefficient de la nomenclature |
| `bhyield` | Rendement (%) |
| `bhactiv` | Active (Y/N) |
| `bhramval` | Valeur matieres premieres |
| `bhmacval` | Valeur machine |
| `bhlabval` | Valeur main d'oeuvre |
| `bhxtrval` | Valeur extra |
| `bhrlupramval` | Rollup valeur matieres |
| `bhrlupmacval` | Rollup valeur machine |
| `bhrluplabval` | Rollup valeur MOD |
| `bhrlupxtrval` | Rollup valeur extra |
| `bhsubc` | Sous-traitance (Y/N) |
| `bhsuppid` | Code fournisseur sous-traitant |
| `bhcomment` | Commentaire (long varchar) |
| `bhloc` | Emplacement |

**Lignes (bomline)** :
| Colonne | Description |
|---------|-------------|
| `blcode` | Code article parent (PK, FK -> bomhead) |
| `bltype` | Type nomenclature (PK, FK -> bomhead) |
| `blline` | Numero de ligne (PK) |
| `blramcode` | Code composant (FK -> items) |
| `blramqty` | Quantite |
| `blramtype` | Type de composant |
| `blscrap` | Taux de rebut (%) |
| `blstartdat` | Date debut validite |
| `blstopdat` | Date fin validite |
| `blroutline` | Ligne de gamme associee |
| `blloc` | Emplacement |

### Valorisation

Le systeme calcule les couts a plusieurs niveaux :
- **Ce niveau** : `bhrlupramthlvl`, `bhrlupmacthlvl`, `bhrluplabthlvl`
- **Niveaux inferieurs** : `bhrlupramprlvl`, `bhrlupmacprlvl`, `bhrluplabprlvl`
- **Total rollup** : somme de ce niveau + niveaux inferieurs

La fonction `gf_methodcost_normal_1()` effectue le calcul du cout methode normal.

### Lien avec la table items

- `itbom` : indique si l'article possede une nomenclature
- `itbomlvl` : niveau dans l'arbre de nomenclature (0 = produit fini, n = matiere premiere)
- `itstdcost` : cout standard calcule depuis la valorisation BOM

### Fenetres associees

- `w_item_replace` : remplacement d'un article dans les nomenclatures
- `w_bomcoitem_update` : gestion des co-produits
- `w_item_copymore` : copie de nomenclature (`wf_bom_copy()`)
- `w_itemfan_update` : fiche article avec BOM integree

---

## Flux : Conditionnements

### Principe

Le systeme de conditionnement permet de gerer les differentes unites d'emballage d'un article (carton, palette, colis, etc.) avec des facteurs de conversion.

### Tables

**Referentiel emballages (packings)** :
| Colonne | Description |
|---------|-------------|
| `pkcode` | Code emballage (char(4), PK) |
| `pkname` | Nom |
| `pkactiv` | Actif |
| `pklength` | Longueur |
| `pkwidth` | Largeur |
| `pkheight` | Hauteur |
| `pkweight` | Poids |
| `pkstdcost` | Cout standard |
| `pkdefconv` | Conversion par defaut |
| `pkitemin` | Article d'entree |
| `pkitemout` | Article de sortie |
| `pktype` | Type d'emballage |

**Liaison article-emballage (itempack)** :
| Colonne | Description |
|---------|-------------|
| `ipitem` | Code article (PK, FK -> items) |
| `ippack` | Code emballage (PK, FK -> packings) |
| `ipconv` | Facteur de conversion (numeric(16,10)) |

### Unites alternatives

**Referentiel (altmeasures)** :
| Colonne | Description |
|---------|-------------|
| `ambaseumid` | UM de base (PK) |
| `amcode` | Code UM alternative (PK) |
| `amdesc` | Description |
| `amconv` | Facteur de conversion |
| `amrealconv` | Conversion reelle |
| `amactiv` | Actif |

**Par article (italtmeas)** :
| Colonne | Description |
|---------|-------------|
| `imitcode` | Code article (PK) |
| `imaltumcode` | Code UM alternative (PK) |

### Champs article lies

- `itum` : unite de mesure principale
- `itconvusr` / `itumusr` : conversion et unite utilisateur
- `itumtarif` / `itumtarifconv` : unite et conversion tarifaire
- `itqtypal` : quantite par palette
- `itweight`, `ittare`, `itvol` : poids, tare, volume
- `itlength`, `itwidth`, `itheight` : dimensions
- `itsquaremeter` : surface en m2

### Gestion dans l'interface

Les fenetres de mise a jour article (`w_item_update`, `w_itemanx_update`, etc.) incluent :
- `wf_altmeas_update()` -- mise a jour des unites alternatives
- `wf_umborder_init()` -- initialisation des bordures d'unite

---

## Flux : Donnees techniques

### Principe

Les donnees techniques sont des proprietes parametrables associees aux articles. Elles permettent de definir des caracteristiques specifiques (composition chimique, proprietes physiques, informations nutritionnelles, etc.) sans modifier la structure de la table `items`.

### Tables

**Definitions (techdata)** :
| Colonne | Description |
|---------|-------------|
| `Tdcode` | Code donnee technique (char(50), PK) |
| `Tddesc` | Description |
| `Tdtype` | Type (numerique, texte, etc.) |
| `Tdum` | Unite de mesure (numeric(3)) |
| `Tdactiv` | Active |
| `Tdcmnt` | Commentaire (long varchar) |
| `tdshow` | Visible |
| `tdpriority` | Priorite d'affichage |
| `tdsort` | Ordre de tri |
| `tdgroupe` | Groupe |
| `td_PerDay` | Valeur par jour |
| `tdifingspec` | Specification ingrediente |

**Valeurs par article (techlink)** :
| Colonne | Description |
|---------|-------------|
| `Tiitem` | Code article (PK, FK -> items) |
| `Ticode` | Code donnee technique (PK) |
| `Tivalue` | Valeur (numeric(17,9)) |
| `tietitxt` | Texte etiquette |

**Donnees techniques par fournisseur (linkitadtd)** :
| Colonne | Description |
|---------|-------------|
| `ldadcode` | Code fournisseur (FK -> adresses) |
| `lditem` | Code article (FK -> items) |
| `lding` | Ingredients (long varchar) |
| `ldnut` | Valeurs nutritionnelles (long varchar) |
| `ldalg` | Allergenes (long varchar) |

### Informations nutritionnelles

La table `car_nut` definit les caracteres nutritionnels (secteur alimentaire) :
| Colonne | Description |
|---------|-------------|
| `cnid` | ID (PK, integer) |
| `cnlibelle` | Libelle (varchar(80)) |
| `cnactif` | Actif (bit) |
| `cnsort` | Ordre de tri |

### Champs article lies

- `ittddatemodif` : date de derniere modification des donnees techniques
- `ittdbomlvl` : niveau BOM des donnees techniques
- `ittechdatarecal` : date de recalcul des donnees techniques
- `ittdtorecalc` : doit etre recalcule (Y/N)
- `it_decompose_td` : decomposition des donnees techniques

### Fenetres associees

- `w_techdata_itemsuse` : liste des articles utilisant une donnee technique
- `w_item_copymore` : copie des donnees techniques (`wf_techdata_copy()`)

---

## Flux : Liaison article-fournisseur

### Principe

La table `linkitad` est la table de liaison entre les articles et les adresses (fournisseurs et/ou clients). Elle contient les informations commerciales specifiques a chaque couple article-fournisseur.

### Structure (linkitad)

| Colonne | Type | Description |
|---------|------|-------------|
| `lktyp` | char(1) | Type de liaison (P=Purchase/fournisseur, S=Sales/client) |
| `lkitem` | char(20) | Code article (FK -> items) |
| `lkadcode` | char(10) | Code adresse (FK -> adresses) |
| `lkcode` | numeric(8) | Code sequence |
| `lkcurr` | char(3) | Devise (FK -> currencies) |
| `lkactiv` | char(1) | Actif |
| `lkum` | char(2) | Unite de mesure |
| `lkumconv` | numeric(16,10) | Conversion unite |
| `lkadref` | char(30) | Reference fournisseur/client |
| `lkadref2` | varchar(60) | Reference complementaire |
| `lkleadtime` | numeric(4) | Delai de livraison (jours) |
| `lkmain` | char(1) | Fournisseur principal (Y/N) |
| `lkremval` | numeric(4) | Valeur remise |
| `lkcmnt` | varchar(50) | Commentaire |
| `lkfinalprice` | numeric(12,4) | Prix final |
| `lkean` | varchar(20) | Code EAN fournisseur |
| `lkean1..lkean3` | varchar(20) | Codes EAN additionnels |
| `lkwithcertif` | char(1) | Avec certificat |
| `lkdatecertif` | timestamp | Date certificat |
| `lknbdaycertif` | numeric(3) | Nombre de jours validite certificat |
| `lkcalcdluo` | char(1) | Calcul DLUO |
| `lkctrqtymin` | numeric(10,3) | Quantite minimum controle |
| `lkcreadate` | timestamp | Date de creation |
| `lkmoddate` | timestamp | Date de modification |
| `lkstdsalod` | char(1) | Standard sale order detail |

### Fournisseur principal

La fonction `gf_setmainsupplier()` permet de definir un fournisseur comme principal (`lkmain = 'Y'`). Un seul fournisseur peut etre principal par article. Le champ `ittrfsupp` dans la table `items` reference le fournisseur prefere.

### Fenetres associees

- `w_item_linkitad_sqlselect` : selection d'article avec fournisseur
- `w_item_update` / `w_itemfan_update` / `w_itemanx_update` : onglet fournisseurs integre dans la fiche article
- `w_inactiv_linkitad` : gestion des liaisons inactives

### Donnees techniques par fournisseur

La table `linkitadtd` stocke les donnees techniques specifiques par fournisseur (ingredients, valeurs nutritionnelles, allergenes) pour un meme article.

---

## Categories et statistiques

### Systeme a 3 niveaux hierarchiques

Le systeme de classification statistique des articles utilise une hierarchie a 3 niveaux :

**Niveau 1 -- itstat1** :
| Colonne | Description |
|---------|-------------|
| `imcode` | Code (char(2), PK) |
| `imdesc` | Description (char(20)) |
| `imcolor` | Couleur d'affichage |
| `im_orderby` | Ordre de tri |
| `imptshipnotice` | Avis d'expedition |

**Niveau 2 -- itstat2** (sous-categorie du niveau 1) :
| Colonne | Description |
|---------|-------------|
| `iscode` | Code niveau 1 (PK) |
| `iscode2` | Code niveau 2 (PK) |
| `isdesc` | Description |

**Niveau 3 -- itstat3** (sous-categorie du niveau 2) :
| Colonne | Description |
|---------|-------------|
| `iscode` | Code niveau 1 (PK) |
| `iscode2` | Code niveau 2 (PK) |
| `iscode3` | Code niveau 3 (PK) |
| `isdesc` | Description |

### Utilisation dans la table items

- `itcrit1`, `itcrit2`, `itcrit3` : criteres statistiques (ancienne classification)
- `itstat1`, `itstat2`, `itstat3`, `itstat4` : statistiques (nouvelle classification hierarchique)

### Cascade dans l'interface

Les fenetres de remise et promotion utilisent la cascade des statistiques :
- Quand l'utilisateur selectionne un `itstat1`, le niveau 2 se filtre automatiquement (`wf_refresh_itstat2()`, `wf_init_itsat2()`)
- Les remises et promotions peuvent cibler un article specifique, un groupe stat1, un groupe stat2, ou une combinaison

### Couleurs

La table `colors` fournit un referentiel de couleurs pour l'affichage :
| Colonne | Description |
|---------|-------------|
| `cocode` | Code couleur (numeric(2), PK) |
| `coname` | Nom (varchar(100)) |
| `coval` | Valeur RGB (numeric(8)) |

---

## Points d'attention

### Impact des modifications sur items

La table `items` est referencee par **31 tables enfants** via des cles etrangeres. Toute modification du code article (`itcode`) impacte :

| Table enfant | Impact |
|-------------|--------|
| `salline` | Lignes de commande vente |
| `purline` | Lignes de commande achat |
| `shipline` | Lignes d'expedition |
| `stocks` | Positions de stock |
| `lots` | Lots/tracabilite |
| `bomhead` | En-tetes de nomenclature |
| `bomline` | Composants de nomenclature |
| `bomcoitem` | Co-produits |
| `rateline` | Tarifs |
| `linkitad` | Liens article-fournisseur/client |
| `linkitadtd` | Donnees techniques par fournisseur |
| `linkitloc` | Liaisons article-emplacement |
| `techlink` | Donnees techniques |
| `itempack` | Conditionnements |
| `matreq` | Besoins matieres |
| `matallocs` | Allocations matieres |
| `mfghead` | Ordres de fabrication |
| `mfgcoitem` | Co-produits OF |
| `mfgcoitemsal` | Co-produits OF vente |
| `mfglallocs` | Allocations OF |
| `forecasts` | Previsions |
| `transact_with_co` | Transactions avec co-produits |
| `except_rate_itad` | Exceptions tarifaires |
| `linkactivities` | Liens activites |
| `srvcrqmat` | Matieres requises service |
| `link_lbl_logo` | Liens etiquettes-logos |
| `SUBLINE_REP` | Lignes de sous-traitance (reparation) |
| `SUBLINE_SAL` | Lignes de sous-traitance (vente) |
| `WMS_CSS` | Configuration WMS |
| `trustbox` | Trustbox |

### Renommage d'article

Le renommage (`w_item_name_change`) est une operation complexe qui doit propager le changement dans toutes les tables liees. Utiliser la fenetre dediee plutot qu'une modification directe.

### Visibilite des champs

La fonction `gf_item_visibility()` controle quels champs sont affiches selon :
- Le nom de la fenetre appelante
- Les parametres systeme
- La categorie et le type de l'article

Ceci garantit que chaque contexte (vente, achat, fabrication, service) ne montre que les champs pertinents.

### Validation de saisie

La fonction `gf_item_inputok()` est le point central de validation. Elle :
- Verifie les champs obligatoires
- Valide les contraintes d'integrite
- Appelle `gf_item_custconstraint` pour les regles specifiques au client
- Retourne les erreurs dans un tableau `struct_item_error[]`

### Unite de mesure

Le changement d'unite de mesure (`itum`) sur un article existant est soumis a verification via `gf_itum_modify_check()` car il impacte les conversions dans les stocks, commandes et nomenclatures.

### Audit

Toutes les modifications d'article sont tracees via `gf_itemaudit()`. La fiche article inclut `wf_check_audit()` pour verifier les droits d'audit.

### Liaison multi-company

Le champ `itmccode` permet de relier un article a un code multi-company pour les environnements multi-societes (liaison inter-company).

### Stock et emplacements

- `itloc` : emplacement par defaut pour les mouvements de stock
- `itlocpic` : emplacement de picking (preparation de commandes)
- `linkitloc` : quantites min/max par emplacement (pour le reapprovisionnement)
- La table `stocks` stocke le detail du stock par article + lot + emplacement

---

## Recherche rapide

### Par code ou designation

```
Table: items
WHERE itcode LIKE '%XXXX%' OR itname LIKE '%XXXX%'
```

### Articles actifs vendables

```
Table: items
WHERE itactiv = 'Y' AND itsale = 'Y'
Index: ixc_profile_6 (itsale, itactiv)
```

### Articles d'un fournisseur

```
Tables: linkitad JOIN items
WHERE lktyp = 'P' AND lkadcode = 'XXXX' AND lkactiv = 'Y'
```

### Tarif d'un article

```
Tables: rateline JOIN ratehead
WHERE rlitem = 'XXXX' AND rhactiv = 'Y'
```

### Lots d'un article

```
Table: lots
WHERE loitem = 'XXXX' AND lostatus = 'Y'
ORDER BY loexpdat
```

### Stock par emplacement

```
Table: stocks
WHERE stitem = 'XXXX'
```

### Composants d'une nomenclature

```
Tables: bomline JOIN bomhead
WHERE blcode = 'XXXX' AND bhactiv = 'Y'
```

### Articles utilisant un composant

```
Table: bomline
WHERE blramcode = 'XXXX'
```

### Fenetres PB par action

| Action | Fenetre | Module |
|--------|---------|--------|
| Consulter la liste | `w_items` | `_masters` |
| Creer/modifier un article | `w_item_update` | `_masters` |
| Creer article fabrique | `w_itemfan_update` | `_masters` |
| Modifier en masse | `w_item_mass_update` | `_masters` |
| Rechercher | `w_item_search` / `w_item_sqlsearch` | `_masters` |
| Selectionner (popup) | `w_item_sqlselect` / `w_item_selection` | `_masters` |
| Consulter tarifs | `w_qry_item_rate` | `_query` |
| Consulter lots | `w_qry_item_lot_sel` | `_query` |
| Vue fabrication | `w_qry_item_mfg_1it` | `_query` |
| Importer | `w_item_import_prepare` | `_masters` |
| Copier | `w_item_copymore` | `_masters` |
| Renommer | `w_item_name_change` | `_masters` |
| Consulter structure cout | `w_item_coststru` | `_masters` |
| Personnaliser champs | `w_item_customize` | `_masters` |

### Fonctions globales par action

| Action | Fonction | Module |
|--------|----------|--------|
| Pre-remplir | `gf_item_prefill()` | `_masters` |
| Valider saisie | `gf_item_inputok()` | `_masters` |
| Gerer visibilite | `gf_item_visibility()` | `_masters` |
| Tracer modification | `gf_itemaudit()` | `_masters` |
| Generer EAN | `gf_ean_create()` | `_masters` |
| Definir fournisseur principal | `gf_setmainsupplier()` | `_masters` |
| Verifier modif UM | `gf_itum_modify_check()` | `_masters` |
| Creer numero de lot | `createnewlotnb()` | `_stock` |
| Sauvegarder audit BOM | `gf_bomaudit_save()` | `_methods` |
| Calculer cout methode | `gf_methodcost_normal_1()` | `_methods` |
