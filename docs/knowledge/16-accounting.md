# 16 - Comptabilite et interface comptable

## Vue d'ensemble

Le domaine comptable dans PmiGest ERP couvre l'interface entre l'ERP et les logiciels de comptabilite externes. PmiGest n'est **pas** un logiciel comptable : il genere des ecritures comptables a partir des factures de vente et d'achat, puis les exporte vers le logiciel comptable du client. Le module `_ifcpt` (150 objets) centralise la configuration et l'export, tandis que le module `_monthclot` (33 objets) gere les clotures periodiques avec valorisation des stocks et statistiques de vente.

**Modules principaux** :
- `_ifcpt` : Interface comptable -- 56 fenetres, 28 DataWindows, 9 user objects, 48 fonctions globales, 8 structures, 1 menu
- `_monthclot` : Clotures mensuelles -- 15 fenetres, 15 DataWindows, 2 user objects, 1 menu

**Logiciels comptables supportes** (15 connecteurs) :
- WinBooks (WB2, WB5), Wings, BOB/BOB2, Popsy, Exact Online, Pratic, ASC, Venice, Cegid, Apollo, HAI, EurCpt, Expert/M (EXPM), ProAcc, Vero
- Chaque connecteur a ses propres fenetres de parametrage (`w_xxx_param`), d'export vente (`w_xxx_invexp`) et d'export achat (`w_xxx_purinvexp`)

---

## Tables principales

### ifcpt -- Configuration interface comptable

Table de parametrage du lien avec le logiciel de comptabilite. Stocke les parametres par type et par societe.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ictyp | char(10) | Non | Type de parametre **(PK)** |
| icpara | char(10) | Non | Cle du parametre **(PK)** |
| icdesc | varchar(30) | Oui | Description |
| icvalc | char(120) | Oui | Valeur caractere |
| icvali | numeric(6) | Oui | Valeur numerique |
| icsort | numeric(2) | Oui | Ordre de tri |
| icauthtyp | char(1) | Oui | Type d'autorisation |
| icmccocode | char(10) | Non | Code multi-societe **(PK)** |

- **PK** : `ictyp, icpara, icmccocode`
- **Index** : `ixc_Profile_27` (ictyp, icpara) [non-unique]
- **Utilisation** : Les parametres sont charges par `gf_cptparam_load()` dans la structure `gst_cptparam`. Le champ `ictyp` identifie le logiciel comptable (WINGS, WB2, BOB2, etc.)

### imputcpt -- Imputations comptables

Affectation comptable des operations (comptes generaux, centres de cout). Definit le plan d'imputation utilise lors de l'export.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iccode | numeric(4) | Non | Code imputation **(PK)** |
| icactiv | char(1) | Oui | Actif (O/N) |
| ictyp | char(1) | Oui | Type d'imputation |
| icref | varchar(12) | Oui | Reference compte general |
| icdesc | varchar(20) | Oui | Description |
| icesct | char(1) | Oui | Escompte |
| Icfrais | char(1) | Oui | Frais |
| ictvadec | char(1) | Oui | TVA deductible |
| icconsdef | char(1) | Oui | Consommation par defaut |

- **PK** : `iccode`
- **Index** : `ixc_Profile_5` (ictyp, icactiv) [non-unique]
- **Utilisation** : Lie aux lignes de facture pour determiner le compte comptable d'imputation

### invoicecpt -- Ecritures comptables factures vente

Ecritures comptables generees a partir des factures de vente, regroupees par compte d'imputation et taux de TVA.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iccode | numeric(6) | Non | Code facture **(PK)** |
| iccptsal | varchar(12) | Non | Compte comptable vente **(PK)** |
| ictva | numeric(6,4) | Non | Taux TVA **(PK)** |
| icbasval | numeric(8,2) | Oui | Montant base HT |
| iccurbasval | numeric(8,2) | Oui | Montant base HT en devise |
| ictvaval | numeric(8,2) | Oui | Montant TVA |
| iccurtvaval | numeric(8,2) | Oui | Montant TVA en devise |

- **PK** : `iccode, iccptsal, ictva`
- **Logique** : Chaque ligne represente la ventilation comptable d'une facture par compte de vente et taux de TVA

### purinvcpt -- Ecritures comptables factures achat

Ecritures comptables generees a partir des factures d'achat fournisseur. Structure parallele a `invoicecpt`.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| pccode | numeric(6) | Non | Code facture achat |
| pccptpur | varchar(12) | Non | Compte comptable achat |
| pctva | numeric(4,2) | Non | Taux TVA |
| pcbasval | numeric(8,2) | Oui | Montant base HT |
| pccurbasval | numeric(8,2) | Oui | Montant base HT en devise |
| pctvaval | numeric(8,2) | Oui | Montant TVA |
| pccurtvaval | numeric(8,2) | Oui | Montant TVA en devise |

### clotperiod -- Periodes de cloture

Definition des periodes comptables pour la cloture. Chaque periode couvre un intervalle de dates et suit l'avancement de la cloture par domaine (stock, ventes, achats, transport).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cpid | numeric(4) | Non | Identifiant periode **(PK)** |
| cpdesc | char(20) | Oui | Description (ex: "Janvier 2025") |
| cpdatstart | timestamp | Oui | Date debut de la periode |
| cpdatend | timestamp | Oui | Date fin de la periode |
| cphistseq | numeric(12) | Oui | Sequence historique |
| cpstock | char(1) | Oui | Statut cloture stock |
| cpstockdat | timestamp | Oui | Date cloture stock |
| cpsales | char(1) | Oui | Statut cloture ventes |
| cpsalesdat | timestamp | Oui | Date cloture ventes |
| cppur | char(1) | Oui | Statut cloture achats |
| cppurdat | timestamp | Oui | Date cloture achats |
| cpcptper | char(6) | Oui | Periode comptable (format YYYYMM) |
| cptruck | char(1) | Oui | Statut cloture transport |
| cptruckdat | timestamp | Oui | Date cloture transport |
| cplaunchdat | timestamp | Oui | Date de lancement |

- **PK** : `cpid`

### clotfinhead -- En-tete cloture financiere

Bilan financier par periode comptable. Resume les totaux ventes, achats et stock pour une societe donnee.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chperiod | char(6) | Non | Periode comptable (YYYYMM) **(PK)** |
| chdatstart | timestamp | Oui | Date debut |
| chdatend | timestamp | Oui | Date fin |
| chsal | numeric(10,2) | Oui | Total ventes |
| chpur | numeric(10,2) | Oui | Total achats |
| chStkIni | numeric(10,2) | Oui | Valeur stock initial |
| chStkEnd | numeric(10,2) | Oui | Valeur stock final |
| chclotid | numeric(4) | Oui | Lien vers clotperiod.cpid |
| chmccode | varchar(10) | Non | Code multi-societe **(PK)** |

- **PK** : `chperiod, chmccode`

### clotfinit -- Initialisation cloture financiere

Donnees initiales par article pour le processus de cloture. Contient les quantites et valorisations de stock au debut de la periode.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ciperiod | char(6) | Non | Periode **(PK)** |
| cityp | char(1) | Non | Type (stock, achat, etc.) **(PK)** |
| ciitem | char(20) | Non | Code article **(PK)** |
| ciqty | numeric(12,3) | Oui | Quantite |
| cival | numeric(10,2) | Oui | Valeur |
| cistdprop | numeric(10,4) | Oui | Cout standard proportionnel |
| cistdconf | numeric(10,4) | Oui | Cout standard confection |
| cistdm | numeric(10,4) | Oui | Cout standard matiere |
| cistdl | numeric(10,4) | Oui | Cout standard main-d'oeuvre |
| cicmnt | varchar(30) | Oui | Commentaire |
| ciqtywip | numeric(12,3) | Oui | Quantite en-cours (WIP) |
| cimccode | varchar(10) | Non | Code multi-societe **(PK)** |

- **PK** : `ciperiod, cityp, ciitem, cimccode`

### clotfinitad -- Initialisation cloture par tiers

Donnees de cloture ventilees par adresse (client ou fournisseur). Permet le detail par tiers des quantites et valeurs de cloture.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cdperiod | char(6) | Non | Periode **(PK)** |
| cdtyp | char(1) | Non | Type **(PK)** |
| cditem | char(20) | Non | Code article **(PK)** |
| cdadid | char(10) | Non | Code adresse (client/fournisseur) **(PK)** |
| cdqty | numeric(12,3) | Oui | Quantite |
| cdval | numeric(10,2) | Oui | Valeur |
| cdstdprop | numeric(10,4) | Oui | Cout standard proportionnel |
| cdstdconf | numeric(10,4) | Oui | Cout standard confection |
| cdmccode | varchar(10) | Non | Code multi-societe **(PK)** |

- **PK** : `cdperiod, cdtyp, cditem, cdadid, cdmccode`
- **FK** : `cdadid` -> `adresses(adcode)`

### clotstocks -- Cloture stocks

Valorisation du stock physique lors de la cloture de periode. Compare les quantites originales et corrigees par article, lot et emplacement.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| CsItem | char(20) | Non | Code article **(PK)** |
| CsLot | char(30) | Non | Numero de lot **(PK)** |
| CsLoc | char(8) | Non | Emplacement stock **(PK)** |
| CsQtyOrig | numeric(12,3) | Oui | Quantite originale |
| CsQtyCorr | numeric(12,3) | Oui | Quantite corrigee |
| csqtyorig_trf | numeric(12,3) | Oui | Quantite originale transferee |
| csqtycorr_trf | numeric(12,3) | Oui | Quantite corrigee transferee |

- **PK** : `CsItem, CsLot, CsLoc`

### clotstocklot -- Cloture lots de stock

Valorisation des lots lors de la cloture. Detail par lot et par periode.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clid | integer | Non | Identifiant **(PK)** |
| clperiod | char(6) | Oui | Periode comptable |
| clitem | varchar(20) | Oui | Code article |
| cllot | char(30) | Oui | Numero de lot |
| clqty | numeric(10,3) | Oui | Quantite |

- **PK** : `clid`
- **Index** : `idx_clostolo_refc` (clitem), `idx_clostolo_refn` (cllot), `idx_clostolo_typ` (clperiod)

### clotwip -- Cloture encours (WIP)

Valorisation des travaux en cours (Work In Progress) lors de la cloture. Les en-cours de fabrication representent la matiere et la main-d'oeuvre engagees dans les ordres de fabrication non termines.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cwtyp | char(1) | Non | Type d'en-cours **(PK)** |
| cwmhcode | numeric(6) | Non | Code OF (ordre de fabrication) **(PK)** |
| cwitem | char(20) | Non | Code article **(PK)** |
| cwqtyorig | numeric(12,3) | Oui | Quantite originale |
| cwqtycorr | numeric(12,3) | Oui | Quantite corrigee |

- **PK** : `cwtyp, cwmhcode, cwitem`

### currencies -- Devises

Referentiel des devises avec taux de conversion. Utilise pour la gestion multi-devises dans les factures et l'export comptable.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cucode | char(3) | Non | Code devise ISO (EUR, USD, GBP...) **(PK)** |
| cuname | char(20) | Non | Nom de la devise |
| cuconv | numeric(10,6) | Oui | Taux de conversion |
| cuactiv | char(1) | Oui | Active (O/N) |

- **PK** : `cucode`
- **Enfants** : `linkitad` (liens articles-adresses avec devise)
- **Utilisation** : La devise est stockee dans `invoicehead.ihcurr` et le taux dans `invoicehead.ihcurconv`

### tvalvl -- Niveaux de TVA

Table des niveaux (taux) de TVA. Definit les categories de TVA (standard, reduit, exonere, etc.).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ttcode | char(1) | Non | Code niveau TVA (1, 2, 3, etc.) |
| ttdesc | char(10) | Non | Description (ex: "21%", "6%", "0%") |
| ttpos | numeric(2) | Non | Position/ordre d'affichage |
| ttdefault | char(1) | Oui | Niveau par defaut (O/N) |

- **Enfant** : `tvalvl_country` (taux par pays)

### tvalvl_country -- Taux TVA par pays

Taux de TVA effectifs par pays. Permet de gerer les taux differents selon le pays du client.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tccode | char(1) | Non | Code niveau TVA (lien vers tvalvl) |
| tccountry | char(2) | Non | Code pays ISO |
| tclvl | numeric(4,2) | Non | Taux TVA effectif (ex: 21.00) |
| tclinkcomptapratic | varchar(5) | Oui | Code liaison comptabilite Pratic |
| tcprestalvl | char(1) | Oui | Niveau prestation |

- **FK** : `tccode` -> `tvalvl`, `tccountry` -> `country`

### paymode -- Modes de paiement

Referentiel des modes de paiement (virement, cheque, carte, especes, etc.).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| pmcode | numeric(2) | Non | Code mode de paiement |
| pmdescint | varchar(20) | Oui | Description interne |
| pmdescext | varchar(30) | Oui | Description externe (sur documents) |
| pmdetail | long varchar(32767) | Oui | Detail complementaire |

### CASHPARAM -- Parametres caisse

Configuration des caisses enregistreuses et terminaux de paiement pour le module point de vente.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cpid | integer | Non | Identifiant **(PK)** |
| cpcash | varchar(2) | Non | Code caisse (unique) |
| cpthcode | numeric(12) | Oui | Code ticket en-tete |

- **PK** : `cpid`
- **Index unique** : `cpcash`

### tickethead -- En-tete tickets de caisse

En-tete des tickets de caisse generes par le module point de vente (POS/CashFood).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| thcode | numeric(9) | Non | Numero de ticket |
| thcash | char(2) | Non | Code caisse |
| thdate | timestamp | Oui | Date du ticket |
| thuser | varchar(8) | Oui | Utilisateur |
| thcust | varchar(10) | Oui | Code client |

### ticketline -- Lignes tickets de caisse

Lignes de detail des tickets de caisse avec articles, quantites, prix et TVA.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tlcode | numeric(9) | Non | Numero de ticket |
| tlcash | char(2) | Non | Code caisse |
| tlline | numeric(4) | Non | Numero de ligne |
| tlitem | varchar(20) | Oui | Code article |
| tlqty | numeric(10,3) | Oui | Quantite |
| tlstdval | numeric(10,4) | Oui | Valeur standard |
| tlsalval | numeric(8,2) | Oui | Valeur de vente |
| tltva | numeric(6,4) | Oui | Taux TVA |
| tltvaval | numeric(8,2) | Oui | Montant TVA |
| tltotval | numeric(8,2) | Oui | Montant total TTC |
| tltype | char(1) | Oui | Type de ligne |
| tlbascost | numeric(12,4) | Oui | Cout de base |
| tlxtrcost | numeric(12,4) | Oui | Cout supplementaire |
| tlqtypc | numeric(7) | Oui | Quantite par piece |
| tlcurrconv2 | numeric(10,6) | Oui | Taux conversion devise 2 |

- **Enfant** : `ticketline_invoiceline` (lien ticket vers facture)

### ticketline_invoiceline -- Lien tickets/factures

Table de liaison entre les lignes de tickets de caisse et les lignes de facture. Permet de tracer la conversion ticket -> facture.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tiid | integer | Non | Identifiant |
| titlcode | numeric(9) | Non | Numero de ticket |
| tithcash | char(2) | Non | Code caisse |
| titlline | numeric(4) | Non | Ligne ticket |
| tiilcode | numeric(6) | Non | Numero facture |
| tiilline | numeric(4) | Non | Ligne facture |

- **FK** : `ticketline`, `invoiceline`

---

## Objets PB cles

### Fenetres du module _ifcpt

#### Parametrage

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_cpt_param` | w_response | Parametrage general interface comptable. Variable `is_McCoCode` pour multi-societe. |
| `w_wings_param` | w_response | Parametres specifiques Wings. Charge via `dw_Cpt_Param.Retrieve("WINGS")`. |
| `w_wb2_param` | w_response | Parametres WinBooks 2. Charge via `dw_cpt_param.retrieve("WB2")`. |
| `w_vero_param` | w_response | Parametres Vero. Charge via `dw_cpt_param.retrieve("VERO")`. |
| `w_apollo_param` | w_response | Parametres Apollo. |
| `w_asc_param` | w_response | Parametres ASC. |
| `w_cub6_param` | w_response | Parametres Cubic 6. |
| `w_eurcpt_param` | w_response | Parametres EurCpt. |
| `w_expm_param` | w_response | Parametres Expert/M. |
| `w_hai_param` | w_response | Parametres HAI. |
| `w_nocpt_param` | w_response | Configuration sans comptabilite externe. |
| `w_orb2_param` | w_response | Parametres Orbis 2. |
| `w_popsy_param` | w_response | Parametres Popsy. |
| `w_proacc_param` | w_response | Parametres ProAcc. |

#### Export factures de vente

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_cpt_invexp` | w_response | Export generique factures vente. Fonctions : `wf_invexp()`, `wf_invexp_ctrl()`, `wf_invhdinfo_load()`, `wf_invlninfo_load()`. Appels Win32 API (CreateProcessA, WaitForSingleObject). |
| `w_wings_invexp` | w_response | Export vente vers Wings. DataWindow `dw_invhead_sel`, boutons verification (`pb_check`), impression (`pb_print`), marquage (`cb_trfdone`). |
| `w_wb2_invexp` | w_response | Export vente vers WinBooks 2. |
| `w_wb5_invexp` | w_response | Export vente vers WinBooks 5. |
| `w_apollo_invexp` | w_response | Export vente vers Apollo. |
| `w_asc_invexp` | w_response | Export vente vers ASC. |
| `w_bob2_purinvexp` | w_response | Export vente vers BOB 2. |
| `w_cegid_invexp` | w_response | Export vente vers Cegid. |
| `w_cub6_invexp` | w_response | Export vente vers Cubic 6. |
| `w_eurcpt_invexp` | w_response | Export vente vers EurCpt. |
| `w_exact_invexp` | w_response | Export vente vers Exact Online. |
| `w_expm_invexp` | w_response | Export vente vers Expert/M. |
| `w_hai_invexp` | w_response | Export vente vers HAI. |
| `w_orb2_invexp` | w_response | Export vente vers Orbis 2. |
| `w_popsy_invexp` | w_response | Export vente vers Popsy. |
| `w_proacc_invexp` | w_response | Export vente vers ProAcc. |
| `w_venicecpt_invexp` | w_response | Export vente vers Venice. |
| `w_vero_invexp` | w_response | Export vente vers Vero. |

#### Export factures d'achat

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_cpt_purinvexp` | w_response | Export generique factures achat. Fonctions : `wf_invexp()`, `wf_purinvhdinfo_load()`, `wf_invexp_ctrl()`. |
| `w_wings_purinvexp` | w_response | Export achat vers Wings. |
| `w_wb2_purinvexp` | w_response | Export achat vers WinBooks 2. |
| `w_wb5_purinvexp` | w_response | Export achat vers WinBooks 5. |
| `w_apollo_purinvexp` | w_response | Export achat vers Apollo. |
| `w_asc_purinvexp` | w_response | Export achat vers ASC. |
| `w_cegid_purinvexp` | w_response | Export achat vers Cegid. |
| `w_cub6_purinvexp` | w_response | Export achat vers Cubic 6. |
| `w_eurcpt_purinvexp` | w_response | Export achat vers EurCpt. |
| `w_exact_purinvexp` | w_response | Export achat vers Exact Online. |
| `w_expm_purinvexp` | w_response | Export achat vers Expert/M. |
| `w_orb2_purinvexp` | w_response | Export achat vers Orbis 2. |
| `w_popsy_purinvexp` | w_response | Export achat vers Popsy. |
| `w_proacc_purinvexp` | w_response | Export achat vers ProAcc. |
| `w_venicecpt_purinvexp` | w_response | Export achat vers Venice. |
| `w_vero_purinvexp` | w_response | Export achat vers Vero. |

#### Gestion paiements et relances

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_inv_paid` | w_response | Suivi des factures payees. Import paiements depuis la comptabilite (`wf_autodataimp()`), adaptation avec balance (`wf_adaptpaidwithbalance()`), blocage vente (`wf_adsalesauthblock()`). |
| `w_inv_paid_update` | w_response | Mise a jour detail facture payee. |
| `w_inv_remind` | w_response | Rappels de paiement. Selection par client et date de relance. |
| `w_creditbal` | w_response | Balance crediteurs. Initialisation et filtrage multi-societe. |
| `w_factoring_invoice_list` | w_response | Liste factures pour affacturage. |
| `w_errormes` | w_response | Affichage messages d'erreur export. |
| `w_recup_codetva_wb` | w_response | Recuperation codes TVA WinBooks. |
| `w_wb5_addfields_update` | w_response | Champs supplementaires WinBooks 5. |

### Fenetres du module _monthclot

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_cloture` | w_response | Fenetre principale de cloture. Orchestration complete : stock (`wf_copy_stock()`), WIP (`wf_majstock_wip()`), transport (`wf_majtruckcost()`), fabrication (`wf_eval_mfg_with_mfg()`), couts lies (`wf_eval_linkedcost_p/r()`). Variables : `is_period`, `is_WIPParam`, `is_splitmethod`, `is_MFGEVAL`. |
| `w_clot_desc` | w_response | Description/creation d'une nouvelle periode de cloture. Variables : `is_period`, `is_NewPeriod`. |
| `w_clot_reports` | w_response | Rapports de cloture. Statistiques ventes multiples : par article (`salstat1_prep`), par client (`salstat3_prep`), evolution mensuelle (`wf_sale_stat_glob_bymonth`). Utilise `nvo_clot_print`. |
| `w_clotrprt` | w_response | Impression rapports de cloture via `nvo_clot_print`. |
| `w_clot_trans_update` | w_response | Mise a jour transactions de cloture. |
| `w_clot_pur_update` | w_response | Mise a jour cloture achats. |
| `w_clot_mfg_update` | w_response | Mise a jour cloture fabrication. Variable `varfiltered` pour filtrage. |
| `w_clot_stock_balance` | w_response | Balance des stocks. Comparaison entre periodes (`Start_period`, `End_period`). |
| `w_clot_stock_graph` | w_response | Graphique evolution stock. Evenement personnalise `ue_graph_create`. |
| `w_clot_invent_modif` | w_response | Modifications inventaire cloture. Fonctions `update_modif()`, `load_multitri()`. |
| `w_clot_invent_save` | w_response | Sauvegarde inventaire de cloture. |
| `w_clot_invent_balance` | w_response | Balance inventaire de cloture. |
| `w_clot_qtywip` | w_response | Quantites en-cours (WIP) de cloture. |
| `w_clot_finditem` | w_response | Recherche article dans la cloture. Fonction `filteritem()`. |
| `w_clot_save_modif` | w_main | Sauvegarde modifications cloture (fenetre autonome). |

### Objets non-visuels (NVO)

| Objet | Module | Ancetre | Lignes | Description |
|-------|--------|---------|--------|-------------|
| `nvo_factoring` | _ifcpt | nv_nonvisualobject | 1040 | Affacturage (Dexia, ING, Eurofactor, CBC). Fonctions : `facto_dexia()`, `facto_ing()`, `facto_eurofactor()`, `facto_cbc()`. Gestion bordereau (`get_factbord()`, `save_factbord()`). |
| `nvo_getpayment` | _ifcpt | nv_nonvisualobject | 89 | Import paiements depuis comptabilite. Fonctions : `uof_get_bobexectyp()`, `uof_import_limitcredit()`, `uof_import_limitcredit_allmcdo()`. Controle credit client (`is_CustCrdt`, `ii_SalesAuthoBlock`). |
| `nvo_clot_print` | _monthclot | nv_nonvisualobject | 3694 | Impressions et statistiques de cloture. 17 fonctions publiques de statistiques ventes : par article (`uof_sale_stat_it_bymonth`), par client (`uof_sale_stat_ad_bymonth`), par article/client (`uof_sale_stat_itad_bymonth`), par groupe shop (`uof_sale_stat_shopgroup_bymonth`), par type client (`uof_sale_stat_typcust_bymonth`), etc. Supporte le multi-societe. |
| `uo_clot_reports` | _monthclot | uo_userobject | 46 | Composant visuel pour ecran rapports de cloture. |
| `uo_creditbal_bloc` | _ifcpt | -- | -- | Bloc visuel pour l'ecran balance crediteurs. |

### Structures

| Structure | Module | Lignes | Description |
|-----------|--------|--------|-------------|
| `gst_cptparam` | _ifcpt | 71 | Parametres pour transfert vers la comptabilite. Contient : `dossier`, `jourven` (journal vente), `journcv` (journal NC vente), `jourach` (journal achat), `journca` (journal NC achat), `exercice`, `periode`, `fileexe`, `filedata`, `version`, `exectype`, `err`, `errmess`, et de nombreux parametres prives (`prv1..6`, `pra1..5`, `prac1..4`, etc.). |
| `gst_invhdinfo` | _ifcpt | 27 | Informations en-tete facture pour export. Champs : `code`, `invtype`, `adid`, `adcptid`, `periode`, `docdate`, `expdate`, `comment`, `tvatype`, `curr`, `currate`, `totval`, `totcurval`, `tvaval`, `tvacurval`, `esct` (escompte), `blockedpay`, `communication`, `codemc`, `ihlastremind`, `ihremindnb`. |
| `gst_invlninfo` | _ifcpt | 15 | Informations ligne facture regroupees par compte d'imputation et taux TVA. Champs : `code`, `genaccount`, `tva`, `basval`, `curbasval`, `tvaval`, `curtvaval`, `cpthd`, `cptln`, `lastline`. |
| `gst_genaccount` | _ifcpt | 8 | Donnees lignes factures regroupees par compte d'imputation. Champs : `GenAccount`, `basval`, `curbasval`. |
| `gst_tva` | _ifcpt | 10 | Donnees lignes factures regroupees par taux TVA. Champs : `tva`, `basval`, `curbasval`, `tvaval`, `curtvaval`. |
| `str_startupinfo` | _ifcpt | -- | Structure Win32 STARTUPINFO pour lancement processus externe. |
| `str_processinformation` | _ifcpt | -- | Structure Win32 PROCESS_INFORMATION pour suivi processus externe. |
| `wst_cust` | _ifcpt | -- | Structure information client. |

### Fonctions globales cles

| Fonction | Description |
|----------|-------------|
| `gf_cptparam_load()` | Charge les parametres comptables depuis la table `ifcpt` dans la structure `gst_cptparam`. Utilisee par toutes les fenetres d'export. 471 lignes. |
| `gf_get_cptparam()` | Recupere un parametre comptable specifique. |
| `gf_get_cptname()` | Recupere le nom du compte comptable. |
| `gf_invhdinfo_load()` | Charge les informations en-tete facture dans `gst_invhdinfo`. |
| `gf_invlninfo_load()` | Charge les informations ligne facture dans `gst_invlninfo`. |
| `gf_purinvhdinfo_load()` | Charge les informations en-tete facture achat. |
| `gf_purinvlninfo_load()` | Charge les informations ligne facture achat. |
| `gf_cpt_numbercomplete()` | Complete un numero comptable (padding). |
| `gf_cpt_nbrcomplete_blank()` | Complete un numero comptable avec blancs. |
| `gf_cpt_stringcomplete()` | Complete une chaine comptable. |
| `gf_adaptpaidwithbalance()` | Adaptation des paiements avec balance comptable. |
| `gf_adsalesauthblock()` | Blocage autorisation vente (credit depasse). |
| `gf_autodataimp()` | Import automatique des donnees comptables. |
| `gf_strcomm_check()` | Verification communication structuree (VCS belge). |
| `gf_dec_pttocm()` | Conversion de points en centimes. |
| `gf_run()` | Lancement processus externe. |

#### Fonctions d'export par logiciel comptable

Chaque connecteur a ses fonctions specifiques d'export :

| Pattern | Exemples | Description |
|---------|----------|-------------|
| `gf_xxx_expadrcpt()` | `gf_wings_balimp()`, `gf_bob2_expadrcpt()`, `gf_asc_expadrcpt()`, `gf_exact_expadrcpt()`, `gf_popsy_expadrcpt()`, `gf_vero_expadrcpt()`, `gf_wb2_expadrcpt()`, `gf_wb5_expadrcpt()`, `gf_eurcpt_expadrcpt()`, `gf_cegid_expadrcpt()`, `gf_proacc_expadrcpt()`, `gf_expm_expadrcpt()`, `gf_pratic_expadrcpt()`, `gf_venicecpt_expadrcpt()` | Export adresses comptables vers le logiciel cible |
| `gf_xxx_tvanum_ctrl()` | `gf_eurcpt_tvanum_ctrl()`, `gf_expm_tvanum_ctrl()`, `gf_proacc_tvanum_ctrl()`, `gf_venice_tvanum_ctrl()`, `gf_wb2_tvanum_ctrl()` | Controle numero TVA format specifique |
| `gf_xxxdataimp()` | `gf_ascdataimp()`, `gf_bobdataimp()`, `gf_dexiadataimp()`, `gf_wbdataimp()`, `gf_pratic_balimp()` | Import donnees depuis le logiciel comptable |
| `gf_format_tva_vero()` | | Formatage TVA specifique Vero |
| `gf_num_isopays_vero()` | | Numero ISO pays pour Vero |
| `gf_get_wbvatcode()` | | Code TVA WinBooks |

### DataWindows cles

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_cpt_para` | _ifcpt | Parametres comptables (mise a jour) |
| `d_cpt_invhead` | _ifcpt | En-tete factures pour export |
| `d_wings_para` | _ifcpt | Parametres Wings |
| `d_wb2_para` | _ifcpt | Parametres WinBooks 2 |
| `d_bob2_para` | _ifcpt | Parametres BOB 2 |
| `d_popsy_para` | _ifcpt | Parametres Popsy |
| `d_vero_para` | _ifcpt | Parametres Vero |
| `d_eurcpt_para` | _ifcpt | Parametres EurCpt |
| `d_apollo_para` | _ifcpt | Parametres Apollo |
| `d_asc_para` | _ifcpt | Parametres ASC |
| `d_hai_para` | _ifcpt | Parametres HAI |
| `d_cub6_para` | _ifcpt | Parametres Cubic 6 |
| `d_orb2_param` | _ifcpt | Parametres Orbis 2 |
| `d_nocpt_para` | _ifcpt | Parametres sans comptabilite |
| `d_inv_paid` | _ifcpt | Factures payees |
| `d_invpaid_update` | _ifcpt | Mise a jour factures payees |
| `d_invremind_custlist` | _ifcpt | Liste clients pour relances |
| `d_invremind_invlist` | _ifcpt | Liste factures pour relances |
| `d_creditbal` | _ifcpt | Balance crediteurs |
| `d_creditbal_det` | _ifcpt | Detail balance crediteurs |
| `d_export_factoring` | _ifcpt | Export affacturage |
| `d_bobdataimp` | _ifcpt | Import donnees BOB |
| `d_wb5addfields` | _ifcpt | Champs supplementaires WB5 |
| `dd_cpt_list` | _ifcpt | Liste deroulante parametres comptables |
| `d_clot_trans_update` | _monthclot | Mise a jour transactions cloture |
| `d_clot_pur_update` | _monthclot | Mise a jour cloture achats |
| `d_clot_mfg_update` | _monthclot | Mise a jour cloture fabrication |
| `d_clot_qtywip_closing` | _monthclot | Quantites WIP cloture |
| `d_clot_qtywip_stock` | _monthclot | Quantites WIP stock |
| `d_clot_stockevol_graph` | _monthclot | Graphique evolution stock |
| `d_clotwip_modif` | _monthclot | Modification WIP cloture |
| `d_invent_balance` | _monthclot | Balance inventaire |
| `d_invent_modif` | _monthclot | Modification inventaire |
| `d_stock_modif` | _monthclot | Modification stock |
| `d_period_choice` | _monthclot | Choix de periode |
| `dd_clot_period` | _monthclot | Liste deroulante periodes cloture |
| `d_finditem` | _monthclot | Recherche article |
| `d_finditem_reconst` | _monthclot | Reconstitution recherche article |
| `d_crosstab_stock_plan_report_by_item` | _monthclot | Tableau croise stock planifie par article |

---

## Flux : Export ecritures comptables

### Flux vente (factures clients)

```
1. Configuration (une fois)
   w_cpt_param → table ifcpt
   w_xxx_param → table ifcpt (parametres specifiques au logiciel)

2. Selection des factures
   w_cpt_invexp (ou w_xxx_invexp) → ouvre le DataWindow de selection
   L'utilisateur selectionne la periode, le journal, les factures a exporter

3. Chargement des donnees
   gf_cptparam_load() → charge gst_cptparam depuis ifcpt
   gf_invhdinfo_load() → charge gst_invhdinfo depuis invoicehead
   gf_invlninfo_load() → charge gst_invlninfo depuis invoiceline + invoicecpt

4. Controle pre-export
   wf_invexp_ctrl() → verification coherence (comptes, TVA, totaux)
   wf_invnum_tabcomplete_4_check() → verification numerotation
   wf_transfile_check() → verification fichier de transfert

5. Generation fichier d'export
   wf_invexp() → export generique
   wf_xxx_invexp() → export specifique (wf_bob2_invexp, wf_wb5_invexp,
                       wf_popsy_invexp, wf_exact_invexp, wf_pratic_invexp,
                       wf_asc_invexp)

6. Marquage des factures exportees
   invoice_sendlog() → marque les factures comme transferees
   Les factures exportees ne seront plus selectionnees lors du prochain export
```

### Flux achat (factures fournisseurs)

```
1. Meme configuration que vente (ifcpt)

2. Selection des factures achat
   w_cpt_purinvexp (ou w_xxx_purinvexp) → DataWindow selection factures achat

3. Chargement des donnees
   gf_cptparam_load() → charge gst_cptparam
   gf_purinvhdinfo_load() → charge en-tete facture achat
   gf_purinvlninfo_load() → charge lignes avec purinvcpt

4. Controle et export
   wf_invexp_ctrl() → controle
   wf_invexp() → generation fichier (ou wf_asc_purinvexp pour ASC)
   invoice_sendlog() → marquage
```

### Mecanisme d'ouverture

L'acces aux fenetres d'export se fait depuis :
- **Menu ERP principal** (`m_erp_mdi`) : `opensheet(w_Cpt_InvExp)` ou `opensheet(w_Cpt_PurInvExp)` -- avec redirection CASE selon le logiciel comptable configure (WINGS, WB2, EXPM, PROACC, VERO, POPSY, ASC, APOLLO, EURCPT, VENICE, CEGID, EXACT, etc.)
- **Ecran d'accueil** (`w_intro`) : `Open(w_Cpt_Param)` pour le parametrage
- **Menu action** (`m_action`) : `gn_open.fn_open(w_Cpt_InvExp, true, parentwindow)`

---

## Flux : Cloture mensuelle

```
1. Creation/selection de la periode
   w_clot_desc → definit une nouvelle periode (is_period, is_NewPeriod)
   Stocke dans clotperiod

2. Cloture principale (w_cloture)
   Le processus suit un ordre precis, controle par wf_majbouton() et wf_majstatut() :

   a) Copie du stock → wf_copy_stock()
      Sauvegarde des quantites stock actuelles dans clotstocks

   b) Insertion lots stock → wf_insert_clotstocklot()
      Sauvegarde detaillee par lot dans clotstocklot

   c) Ajout articles co-produits → wf_clotfinit_addcoitem()
      Ajout dans clotfinit

   d) Valorisation en-cours (WIP)
      wf_checkparam_wip() → verification parametres
      wf_majstock_wip() → mise a jour stock WIP dans clotwip

   e) Couts de transport → wf_majtruckcost()
      wf_truck_load_update() → chargement couts transport
      wf_truck_cost_update() → mise a jour

   f) Evaluation couts lies
      wf_eval_linkedcost_p() → couts lies proportionnels
      wf_eval_linkedcost_r() → couts lies reels
      wf_eval_subc_linkedcost_p/r() → couts lies sous-traitance

   g) Evaluation fabrication
      wf_eval_mfg_with_mfg() → evaluation produits fabriques
      wf_mfg_subc_xcost_update() → mise a jour couts sous-traitance fabrication

3. Mise a jour par domaine
   w_clot_trans_update → transactions ventes
   w_clot_pur_update → achats
   w_clot_mfg_update → fabrication
   w_clot_qtywip → quantites WIP

4. Inventaire et ajustements
   w_clot_invent_modif → modifications inventaire (update_modif, load_multitri)
   w_clot_invent_save → sauvegarde inventaire
   w_clot_invent_balance → balance inventaire

5. Resultats et rapports
   w_clot_stock_balance → balance stock (Start_period vs End_period)
   w_clot_stock_graph → graphique evolution (ue_graph_create)
   w_clot_reports → rapports statistiques complets
   w_clotrprt → impression rapports
   w_clot_save_modif → sauvegarde modifications (w_main, fenetre autonome)

6. Consultation
   w_clot_finditem → recherche article dans la cloture (filteritem())
```

### Tables impliquees dans la cloture

```
clotperiod ──────► Definition de la periode (dates, statuts)
     │
     ├── clotfinhead ──► Bilan financier (ventes, achats, stock ini/fin)
     │
     ├── clotfinit ────► Initialisation par article (qty, val, couts std)
     │   └── clotfinitad ──► Detail par tiers (client/fournisseur)
     │
     ├── clotstocks ───► Snapshot quantites stock (orig vs corr)
     │
     ├── clotstocklot ─► Detail par lot de stock
     │
     └── clotwip ──────► Encours fabrication (WIP)
```

---

## Devises et taux de change

La gestion multi-devises est transversale a l'ERP :

- **Table `currencies`** : Referentiel des devises actives (code ISO 3 caracteres, nom, taux de conversion)
- **Factures** : Chaque facture porte sa devise (`invoicehead.ihcurr`) et son taux (`invoicehead.ihcurconv`). Les montants sont stockes en devise locale ET en devise etrangere
- **Export comptable** : Les structures `gst_invhdinfo` et `gst_invlninfo` transportent les montants dans les deux devises (`basval`/`curbasval`, `tvaval`/`curtvaval`)
- **Tables comptables** : `invoicecpt` et `purinvcpt` stockent les montants HT et TVA dans les deux devises
- **Tickets de caisse** : `ticketline.tlcurrconv2` pour la conversion devise secondaire

---

## TVA

La gestion de la TVA repose sur deux tables liees :

- **`tvalvl`** : Definition des niveaux de TVA (codes 1, 2, 3...) avec description et position d'affichage. Le champ `ttdefault` indique le taux par defaut
- **`tvalvl_country`** : Taux effectifs par pays. Permet de gerer les taux differents selon le pays du client (ex: TVA belge 21%, TVA francaise 20%). Le champ `tclinkcomptapratic` assure le lien avec le logiciel Pratic

L'export comptable regroupe les lignes par taux de TVA via la structure `gst_tva` (base HT, TVA, montants en devise). Chaque connecteur a ses propres fonctions de controle TVA (`gf_xxx_tvanum_ctrl()`).

---

## Modes de paiement

La table `paymode` definit les modes de paiement avec :
- `pmcode` : code numerique (2 chiffres)
- `pmdescint` : libelle interne (20 car.)
- `pmdescext` : libelle externe imprime sur les documents (30 car.)
- `pmdetail` : texte detaille (conditions, coordonnees bancaires, etc.)

Les modes de paiement sont utilises dans les factures, les relances et l'export comptable.

---

## Caisse et tickets (POS)

Le module point de vente est gere principalement par la fenetre `w_cashfood` (module `_sales_food`) :

- **`CASHPARAM`** : Configuration des caisses (code caisse unique, lien ticket en-tete)
- **`tickethead`** : En-tete ticket (numero, caisse, date, utilisateur, client)
- **`ticketline`** : Lignes du ticket (article, quantite, valeur vente, TVA, total TTC, couts)
- **`ticketline_invoiceline`** : Table de liaison qui trace la conversion des tickets en factures

La fenetre `w_cashfood` :
- Herite de `w_main` (fenetre autonome)
- Gere la creation simultanee du ticket et de la commande de vente (`wf_create_salhead_and_tickethead()`, `wf_create_salline_and_ticketline()`)
- Prend en charge les paiements (`wf_makepayments()`)
- Mouvements de stock automatiques (`wf_stock()`, `wf_histostock()`)
- Historique caisse (`wf_histocash()`)
- Ouverture tiroir-caisse (`wf_opencash()`)

Fenetres associees :
- `w_ticketfood_pay_update` (module `_sales_food`) : mise a jour paiement ticket avec impression ticket
- `w_brf_cash_ticket_pay_update` (module `_stkbarcod`) : variante avec lecteur code-barres

---

## Points d'attention

### Architecture multi-connecteur
- Chaque logiciel comptable a un triplet de fenetres (param, invexp, purinvexp) et des fonctions globales dediees
- Le choix du logiciel est fait via `ifcpt.ictyp` et le menu ERP redirige automatiquement vers la bonne fenetre (CASE dans `m_erp_mdi`)
- Ajouter un nouveau connecteur implique : 1 fenetre param, 1 fenetre export vente, 1 fenetre export achat, 1 DataWindow param, 1+ fonctions globales d'export

### Multi-societe
- Presque toutes les tables comptables ont un champ `mccocode` dans leur PK
- Les fenetres portent une variable `is_McCoCode`
- Le filtrage multi-societe est systematique dans les requetes

### Cloture mensuelle
- Le processus de cloture est sequentiel et chaque etape doit etre completee avant la suivante (`wf_majbouton()` controle les boutons actifs)
- La cloture est irreversible sur les periodes verrouillees (plus de modification possible sur les documents de la periode)
- La cloture stock est le prerequis pour la cloture ventes et achats

### Import paiements
- `nvo_getpayment` : import des paiements et limites de credit depuis la comptabilite
- L'import peut bloquer automatiquement les ventes si le credit est depasse (`ii_SalesAuthoBlock`)
- Formats d'import specifiques par logiciel (`gf_ascdataimp`, `gf_bobdataimp`, `gf_dexiadataimp`, `gf_wbdataimp`, `gf_pratic_balimp`)

### Affacturage
- `nvo_factoring` (1040 lignes) gere l'export vers les societes d'affacturage
- 4 formats supportes : Dexia, ING, Eurofactor, CBC
- Gestion des bordereaux de factoring (`get_factbord()`, `save_factbord()`)

### Communication structuree
- `gf_strcomm_check()` : verification de la communication structuree (VCS) pour les virements belges
- Format specifique requis pour les exports bancaires et comptables belges

---

## Recherche rapide

| Je cherche... | Ou chercher |
|---------------|-------------|
| Parametres comptables | `ifcpt` (table), `gst_cptparam` (structure), `gf_cptparam_load()` (fonction), `w_cpt_param` / `w_xxx_param` (fenetres) |
| Export factures vente | `w_cpt_invexp` / `w_xxx_invexp`, `gf_invhdinfo_load()`, `gf_invlninfo_load()`, `invoicecpt` |
| Export factures achat | `w_cpt_purinvexp` / `w_xxx_purinvexp`, `gf_purinvhdinfo_load()`, `purinvcpt` |
| Import paiements | `w_inv_paid`, `nvo_getpayment`, `gf_autodataimp()`, `gf_xxxdataimp()` |
| Relances | `w_inv_remind`, `d_invremind_custlist`, `d_invremind_invlist` |
| Balance crediteurs | `w_creditbal`, `d_creditbal`, `uo_creditbal_bloc` |
| Affacturage | `nvo_factoring`, `w_factoring_invoice_list`, `d_export_factoring` |
| Cloture mensuelle | `w_cloture`, `clotperiod`, `clotfinhead`, `clotfinit` |
| Stock cloture | `clotstocks`, `clotstocklot`, `w_clot_stock_balance`, `w_clot_invent_modif` |
| Encours fabrication (WIP) | `clotwip`, `w_clot_qtywip`, `d_clot_qtywip_closing` |
| Rapports cloture | `w_clot_reports`, `w_clotrprt`, `nvo_clot_print` (3694 lignes, 17 fonctions stats) |
| Graphique stock | `w_clot_stock_graph`, `d_clot_stockevol_graph` |
| Devises | `currencies`, `gst_invhdinfo.curr/currate`, `invoicecpt.iccurbasval/iccurtvaval` |
| TVA | `tvalvl`, `tvalvl_country`, `gst_tva`, `gf_xxx_tvanum_ctrl()` |
| Modes de paiement | `paymode` |
| Caisse / POS | `CASHPARAM`, `tickethead`, `ticketline`, `w_cashfood`, `ticketline_invoiceline` |
| Imputations comptables | `imputcpt`, `gst_genaccount` |
| Logiciel comptable specifique | `w_xxx_param` + `w_xxx_invexp` + `w_xxx_purinvexp` (ou xxx = wings, wb2, bob2, vero, etc.) |
| Menu comptabilite | `m_erp_mdi` (lignes ~7548-7630), `m_popifcpt` |
| Erreur export | `w_errormes`, `wf_errormessage()` |
