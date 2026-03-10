# 05 - Commandes de vente (Sales Orders)

## Vue d'ensemble

Le module de commandes de vente constitue le coeur du processus commercial de PmiGest ERP. Il couvre l'ensemble du cycle de vente : creation de devis, conversion en commande, allocation de stock, preparation, expedition (livraison), facturation et export comptable. Le flux traverse quatre modules principaux (`_devis`, `_sales`, `_stock`, `_ifcpt`) et implique des interactions etroites entre commandes, expeditions et factures.

### Modules impliques

| Module | Objets | Role |
|--------|--------|------|
| `_sales` | 345 (108 fenetres, 167 DW, 12 UO, 36 fonctions, 13 structures, 9 menus) | Commandes, facturation, livraisons |
| `_devis` | 97 (37 fenetres, 52 DW, 1 UO, 4 fonctions, 3 menus) | Devis et estimations |
| `_stock` | 195 | Gestion du stock, mouvements, allocations |
| `_stkbarcod` | 303 | Preparation par codes-barres, picking, expedition |
| `_sales_cash` | -- | Ventes directes (comptoir/caisse) |
| `_prints_std` | 569 | DataWindows d'impression standard |
| `_ifcpt` | 150 | Interface comptable, export factures |

---

## Tables principales

### salhead -- En-tete de commande de vente

Table centrale des commandes de vente. Chaque enregistrement represente une commande identifiee par `shcode`.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `shcode` | numeric(6) | NON | **PK** -- Numero de commande (auto-incremente) |
| `shcust` | char(10) | NON | Code client (FK vers `adresses.adcode`) |
| `shcustref` | char(40) | OUI | Reference client sur la commande |
| `shcurr` | char(3) | OUI | Devise de la commande |
| `shstatus` | char(1) | OUI | Statut de l'en-tete (voir section Statuts) |
| `shdatcrea` | timestamp | OUI | Date de creation |
| `shlastline` | numeric(4) | OUI | Dernier numero de ligne utilise |
| `shdatreq` | timestamp | OUI | Date demandee (livraison souhaitee) |
| `shautho` | char(1) | OUI | Autorisation/validation |
| `shcmnt` | varchar(1000) | OUI | Commentaire libre |
| `shdlvt` | char(1) | OUI | Mode de livraison |
| `shcustpay` | char(1) | OUI | Condition de paiement client |
| `shtype` | char(1) | OUI | Type de commande |
| `shsalesman` | char(8) | OUI | Code commercial (FK vers `salesman.smcode`) |
| `shshipcost` | char(1) | OUI | Frais de port |
| `shdlvtplace` | varchar(15) | OUI | Lieu de livraison |
| `shstdcondition` | numeric(6) | OUI | Condition standard (FK vers `condhead.chcode`) |
| `shprinted` | char(1) | OUI | Imprime (Y=oui, F=fax, C=confirme) |
| `shextracosts` | char(1) | OUI | Couts supplementaires |
| `shturnid` | numeric(3) | OUI | Identifiant de tournee |
| `shcreauser` | char(50) | OUI | Utilisateur createur |
| `shshiptocmnt` | varchar(40) | OUI | Commentaire adresse de livraison |
| `shorigin` | varchar(1) | OUI | Origine de la commande |
| `shdirectsal` | char(1) | OUI | Vente directe (N par defaut) |
| `shdirsalrate` | char(1) | OUI | Tarif vente directe |
| `shdirsalinv` | char(1) | OUI | Facturation vente directe |
| `shpriority` | numeric(3) | OUI | Priorite |
| `shpreparator` | char(50) | OUI | Preparateur assigne |
| `shcons` | char(1) | OUI | Consignation (Y/N) |
| `shadcontact` | numeric(2) | OUI | Contact adresse |
| `shmccode` | varchar(10) | OUI | Code multi-societe |
| `shediref` | varchar(35) | OUI | Reference EDI |
| `shedilink` | char(1) | OUI | Lien EDI |
| `shfileref` | numeric(4) | OUI | Reference dossier |
| `shfileline` | numeric(4) | OUI | Ligne dossier |
| `shwebidhead` | numeric(9) | OUI | ID web (e-commerce) |
| `shtransfered` | char(1) | OUI | Transfere |
| `shbeeingmod` | tinyint | OUI | En cours de modification |
| `shdateprintprep` | timestamp | OUI | Date impression preparation |
| `shsendwms` | char(1) | OUI | Envoi vers WMS |
| `sh_etiqtrsp_*` | numeric(1) | NON | Flags etiquettes transport (saturday, signed, insured, etc.) |

**FK sortantes** : `adresses` (client), `adresses` (custsalh), `filehead` (dossier).
**FK entrantes** : `salline`, `salaux`, `invoiceline`, `ETI_BPOST`, `ETI_BPS`.

### salline -- Lignes de commande de vente

Chaque ligne represente un article commande au sein d'une commande (`slcode` + `slline`).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `slcode` | numeric(6) | NON | **PK** -- Numero de commande (FK vers `salhead.shcode`) |
| `slline` | numeric(4) | NON | **PK** -- Numero de ligne |
| `slitem` | char(20) | NON | Code article (FK vers `items.itcode`) |
| `slqtyord` | numeric(10,3) | NON | Quantite commandee (unite de commande) |
| `slqtyreq` | numeric(10,3) | OUI | Quantite requise (unite de stock) |
| `sluomord` | varchar(5) | OUI | Unite de mesure de commande |
| `sluomconv` | numeric(16,10) | OUI | Facteur de conversion UOM |
| `slcustref` | char(40) | OUI | Reference client pour la ligne |
| `sldatreq` | timestamp | OUI | Date requise |
| `sldatship` | timestamp | OUI | Date d'expedition prevue |
| `sldatplan` | timestamp | OUI | Date planifiee |
| `sldatcrea` | timestamp | OUI | Date de creation de la ligne |
| `sldatreal` | timestamp | OUI | Date de realisation effective |
| `sldatcustreq` | timestamp | OUI | Date demandee par le client |
| `slstdval` | numeric(10,4) | OUI | Valeur standard (prix de revient) |
| `slsalval` | numeric(8,2) | OUI | Valeur de vente |
| `slorval` | numeric(10,4) | OUI | Valeur d'origine |
| `slunitprice` | numeric(10,4) | OUI | Prix unitaire |
| `slbaseprice` | numeric(10,4) | OUI | Prix de base |
| `slfinalprice` | numeric(12,4) | OUI | Prix final |
| `slorigval` | numeric(10,4) | OUI | Valeur originale |
| `slrist` | numeric(5,2) | OUI | Ristourne (%) |
| `slsddisc` | numeric(11,5) | OUI | Remise supplementaire |
| `slvalsddisc` | numeric(10,4) | OUI | Valeur apres remise supplementaire |
| `slqtyalloc` | numeric(10,3) | OUI | Quantite allouee (reservee en stock) |
| `slqtyreal` | numeric(10,3) | OUI | Quantite reellement livree |
| `slqtyinv` | numeric(10,3) | OUI | Quantite facturee |
| `slqtyres` | numeric(10,3) | OUI | Quantite reservee |
| `slstatus` | char(1) | OUI | Statut de la ligne (voir section Statuts) |
| `slpallocseq` | numeric(4) | OUI | Derniere sequence d'allocation |
| `slshipto` | numeric(4) | OUI | Adresse de livraison |
| `slctrl` | char(1) | OUI | Controle |
| `slprorig` | char(1) | OUI | Origine du prix |
| `slexfrcst` | char(1) | OUI | Couts supplementaires exclus |
| `sltypord` | char(1) | OUI | Type de commande liee |
| `slordno` | numeric(6) | OUI | Numero de commande liee (fabrication, achat) |
| `slmfgship` | timestamp | OUI | Date expedition fabrication |
| `slmfgcust` | timestamp | OUI | Date client fabrication |
| `slpreinv` | char(1) | OUI | Pre-facture |
| `slcontst` | char(1) | OUI | Statut contrat |
| `slsample` | char(1) | OUI | Echantillon |
| `slcomment` | long varchar(32767) | OUI | Commentaire libre |
| `slstdcondition` | numeric(6) | OUI | Condition standard ligne |
| `slpricetype` | char(1) | OUI | Type de prix |
| `slfileref` | numeric(4) | OUI | Reference dossier |
| `slfileline` | numeric(4) | OUI | Ligne dossier |
| `sldvihead` | numeric(6) | OUI | Lien vers en-tete devis |
| `sldviline` | numeric(3) | OUI | Lien vers ligne devis |
| `slstate` | char(1) | OUI | Etat |
| `Slsalorder` | numeric(6) | OUI | Commande de vente liee (contrats) |
| `Slsalline` | numeric(4) | OUI | Ligne de vente liee |
| `slallocprinted` | char(1) | OUI | Allocation imprimee |
| `slcustalloc` | numeric(12,3) | OUI | Allocation client |
| `slcustship` | numeric(12,3) | OUI | Expedition client |
| `slsalghost` | numeric(4) | OUI | Ligne fantome (article compose) |
| `slprintghost` | char(1) | OUI | Impression fantome |
| `slsort` | numeric(4) | OUI | Ordre de tri |
| `slratehead` | numeric(5) | OUI | En-tete tarif |
| `slcurrconv2` | numeric(10,6) | OUI | Taux de conversion devise 2 |
| `slallocdate` | timestamp | OUI | Date d'allocation |
| `slreserved` | char(1) | OUI | Reserve (Y/N) |
| `slclot` | timestamp | OUI | Date de cloture |
| `slpoint` | char(1) | OUI | Point de controle |
| `slgetriscde` | numeric(1) | OUI | Ristourne sur commande |
| `slsumcde` | numeric(1) | OUI | Totaliser commande |

**FK sortantes** : `items` (article), `salhead` (en-tete).
**FK entrantes** : `colisage`, `conssale`, `mfgcoitemsal`, `salaudit`, `shipline`, `SUBLINE_SAL`.

### salaux -- Lignes auxiliaires de commande

Lignes supplementaires non-article (frais de port, emballage, services).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `sacode` | numeric(6) | NON | **PK** -- Numero de commande |
| `saline` | numeric(4) | NON | **PK** -- Numero de ligne auxiliaire |
| `sastatus` | char(1) | NON | Statut |
| `sadesc` | varchar(30) | NON | Description |
| `saqty` | numeric(10,3) | NON | Quantite |
| `saum` | char(2) | OUI | Unite de mesure |
| `sastdval` | numeric(10,4) | NON | Valeur standard |
| `sasalval` | numeric(8,2) | NON | Valeur de vente |
| `sadatcrea` | timestamp | NON | Date de creation |
| `safatype` | numeric(3) | NON | Type de frais |
| `saexp` | char(1) | OUI | Exporte |
| `sacomment` | varchar(32767) | OUI | Commentaire |
| `sasort` | numeric(4) | OUI | Ordre de tri |
| `sashipto` | numeric(3) | OUI | Adresse de livraison |

**FK sortante** : `salhead` (en-tete).

### salaudit -- Audit des modifications de lignes

Trace les modifications apportees aux lignes de commande (prix, quantite, date).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `saslcode` | numeric(6) | NON | **PK** -- Numero de commande |
| `saslline` | numeric(4) | NON | **PK** -- Numero de ligne |
| `satyp` | char(1) | NON | **PK** -- Type de modification |
| `sauser` | char(50) | NON | Utilisateur ayant effectue la modification |
| `saaudit` | varchar(80) | OUI | Detail de la modification |
| `sadate` | timestamp | NON | Date de la modification |

**FK sortante** : `salline`.

### quotes -- Tarifs/cotations

Table simplifiee des cotations de prix par quantite minimale.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qocode` | numeric(8) | NON | **PK** -- Code du tarif |
| `qominqty` | numeric(14,4) | NON | **PK** -- Quantite minimale |
| `qoprice` | numeric(10,4) | NON | Prix |

### salpline -- Lignes de prix/production commande

Lignes detaillees pour les commandes avec production (calcul de couts main-d'oeuvre, matieres, autres).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `slcode` | numeric(6) | NON | **PK** -- Numero de commande |
| `slline` | numeric(4) | NON | **PK** -- Numero de ligne |
| `sltyp` | char(1) | OUI | Type |
| `slitem` | char(20) | OUI | Article |
| `slqty` | numeric(12,3) | OUI | Quantite |
| `slmethod` | char(1) | OUI | Methode de production |
| `slwcid` | char(8) | OUI | Poste de travail |
| `slplncostlab` | numeric(8,2) | OUI | Cout planifie main-d'oeuvre |
| `slplncostmat` | numeric(8,2) | OUI | Cout planifie matieres |
| `slplncostoth` | numeric(8,2) | OUI | Cout planifie autres |
| `slactcostlab` | numeric(8,2) | OUI | Cout reel main-d'oeuvre |
| `slactcostmat` | numeric(8,2) | OUI | Cout reel matieres |
| `slactcostoth` | numeric(8,2) | OUI | Cout reel autres |
| `slsalcost` | numeric(8,2) | OUI | Cout de vente |
| `slprojid` | numeric(6) | OUI | ID projet lie |
| `slversid` | numeric(3) | OUI | Version projet |

### salpmat -- Matieres de production commande

Detail des matieres necessaires pour une ligne de production.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `smphid` | numeric(6) | NON | **PK** -- ID en-tete production |
| `smplid` | numeric(4) | NON | **PK** -- ID ligne production |
| `smcode` | numeric(4) | NON | **PK** -- Sequence matiere |
| `smitem` | char(20) | OUI | Code article matiere |
| `smreqqty` | numeric(12,3) | OUI | Quantite requise |
| `smcost` | numeric(8,2) | OUI | Cout |

### salplab -- Main-d'oeuvre de production commande

Detail des operations de main-d'oeuvre pour une ligne de production.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `sbphid` | numeric(6) | NON | **PK** |
| `sbplid` | numeric(4) | NON | **PK** |
| `sbcode` | numeric(4) | NON | **PK** |
| `sbwc` | char(8) | OUI | Poste de travail |
| `sbsetup` | numeric(6,2) | OUI | Temps de reglage |
| `sbreqmac` | numeric(6,2) | OUI | Temps machine requis |
| `sbreqlab` | numeric(6,2) | OUI | Temps main-d'oeuvre requis |
| `sbcost` | numeric(8,2) | OUI | Cout |

### matallocs -- Allocations de matieres (stock)

Table d'allocation du stock aux commandes de vente et ordres de fabrication.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `matyp` | char(1) | NON | **PK** -- Type (`X` = vente, `M` = fabrication) |
| `macode` | numeric(6) | NON | **PK** -- Numero de commande/OF |
| `maitemseq` | numeric(5) | NON | **PK** -- Sequence article |
| `maallocseq` | numeric(4) | NON | **PK** -- Sequence d'allocation |
| `maitem` | char(20) | NON | Code article |
| `malot` | char(30) | NON | Numero de lot |
| `maloc` | char(8) | NON | Emplacement de stockage |
| `maallocqty` | numeric(12,3) | NON | Quantite allouee |
| `maissuedqty` | numeric(12,3) | OUI | Quantite emise/sortie |
| `macustalloc` | numeric(12,3) | OUI | Allocation client |
| `malotorgcode` | varchar(20) | OUI | Code lot d'origine |
| `malotdlc` | timestamp | OUI | Date limite de consommation |
| `mauser` | char(50) | OUI | Utilisateur |
| `maallocdat` | timestamp | OUI | Date d'allocation |

**FK sortantes** : `items`, `locations`.

### conssale -- Ventes en consignation

Suivi des ventes de stock en depot/consignation.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `ccpkcode` | char(4) | NON | Code emballage |
| `ccslcode` | numeric(6) | NON | Code commande |
| `ccslline` | numeric(4) | NON | Numero de ligne |
| `ccqty` | numeric(5) | NON | Quantite |
| `ccweight` | numeric(8,3) | OUI | Poids |
| `cpcode` | integer | NON | **PK** |

**FK sortantes** : `packings` (emballages), `salline`.
**FK entrante** : `salegroup`.

### consstock -- Stock en consignation

Etat du stock depose chez les clients.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `csowner` | char(10) | NON | **PK** -- Proprietaire (client) |
| `csloc` | char(10) | NON | **PK** -- Emplacement |
| `cspack` | char(4) | NON | **PK** -- Code emballage |
| `csqty` | numeric(6) | OUI | Quantite |

### comsalhead -- En-tete commissions commerciales

Calcul et suivi des commissions sur les ventes.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `cshcomid` | numeric(9) | NON | **PK** -- ID commission |
| `cshsalesman` | varchar(8) | NON | **PK** -- Code commercial |
| `cshcust` | varchar(10) | OUI | Client |
| `cshstatus` | varchar(1) | OUI | Statut |
| `cshcode` | numeric(6) | OUI | Code commande |
| `cshcustref` | varchar(40) | OUI | Reference client |
| `cshcurr` | varchar(3) | OUI | Devise |
| `cshdatcrea` | timestamp | OUI | Date de creation |
| `cshcmnt` | varchar(240) | OUI | Commentaire |
| `cshautho` | varchar(1) | OUI | Autorisation |
| `cshcreauser` | varchar(8) | OUI | Utilisateur createur |
| `cshorigin` | varchar(1) | OUI | Origine |

### comsalline -- Lignes commissions commerciales

Detail des commissions par ligne de vente.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `cslcomidhead` | numeric(9) | NON | **PK** -- ID commission en-tete |
| `cslsalesman` | varchar(8) | NON | **PK** -- Code commercial |
| `cslcomidline` | numeric(9) | NON | **PK** -- ID commission ligne |
| `cslstatus` | varchar(1) | OUI | Statut |
| `cslcode` | numeric(6) | OUI | Code commande |
| `cslline` | numeric(4) | OUI | Numero de ligne |
| `cslitem` | varchar(20) | OUI | Article |
| `cslqtyord` | numeric(10,3) | OUI | Quantite commandee |
| `cslstdval` | numeric(10,4) | OUI | Valeur standard |
| `cslorval` | numeric(10,4) | OUI | Valeur originale |
| `cslunitprice` | numeric(10,4) | OUI | Prix unitaire |
| `cslbaseprice` | numeric(10,4) | OUI | Prix de base |
| `cslfinalprice` | numeric(12,4) | OUI | Prix final |
| `cslrist` | numeric(4,2) | OUI | Ristourne |
| `cslsample` | varchar(1) | OUI | Echantillon |

### salesman -- Commerciaux

Table de reference des commerciaux/representants.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `smcode` | char(8) | NON | **PK** -- Code commercial |
| `smname` | varchar(30) | OUI | Nom |
| `smactiv` | char(1) | OUI | Actif (Y/N) |
| `smcmnt` | varchar(120) | OUI | Commentaire |
| `smcommission` | numeric(5,2) | OUI | Taux de commission (%) |
| `sm_mail` | varchar(120) | OUI | Email |
| `smext` | char(20) | OUI | Extension |

**FK entrante** : `linksaus`, `users`.

### salediscount -- Remises de vente

Table des remises conditionnelles par statut et quantite.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `sdcode` | numeric(4) | NON | **PK** -- Code remise |
| `sdstat1` | char(2) | OUI | Statistique 1 |
| `sdstat2` | char(2) | OUI | Statistique 2 |
| `sddisc` | numeric(11,5) | OUI | Taux de remise |
| `sdqty` | numeric(8) | OUI | Quantite seuil |
| `sddatestart` | timestamp | OUI | Date debut validite |
| `sddatestop` | timestamp | OUI | Date fin validite |

### salegroup -- Groupement de ventes

Groupement hierarchique des lignes de vente (pour consignation, colisage).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `sgcode` | numeric(8) | NON | **PK** |
| `sgsalhead` | numeric(8) | OUI | En-tete commande |
| `sgsalline` | numeric(4) | OUI | Ligne commande |
| `sgkey1` | varchar(50) | OUI | Cle de regroupement 1 |
| `sgqty` | numeric(10,3) | OUI | Quantite |
| `sglevel` | numeric(3) | OUI | Niveau hierarchique |
| `sgconssale` | integer | OUI | FK vers `conssale` |

### salpsize -- Dimensions de production commande

Dimensions physiques associees aux lignes de production commande.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `ssphid` | numeric(6) | NON | **PK** |
| `ssplid` | numeric(4) | NON | **PK** |
| `ssduid` | numeric(4) | NON | **PK** |
| `ssdudesc` | char(20) | OUI | Description dimension |
| `ssduuom` | char(2) | OUI | Unite de mesure |
| `ssduval` | numeric(9,3) | OUI | Valeur |

---

## Objets PowerBuilder cles

### Fenetres principales

| Fenetre | Module | Ancetre | Role |
|---------|--------|---------|------|
| `w_sales` | `_sales` | `w_response` | Fenetre principale de gestion des commandes de vente -- en-tete + lignes, avec filtres, tri, drag-and-drop |
| `w_sales_list` | `_sales` | `w_response` | Liste des commandes de vente avec filtres et recherche |
| `w_salhead_update` | `_sales` | `w_response` | Mise a jour de l'en-tete de commande (client, dates, conditions, commercial) |
| `w_salline_update` | `_sales` | `w_response` | Mise a jour d'une ligne de commande (article, quantite, prix, remises, credit) |
| `w_sales_allocate` | `_sales` | `w_response` | Allocation du stock aux lignes de commande -- manuelle, automatique par client/commande/total |
| `w_salhead_prepare` | `_sales` | `w_response` | Preparation des commandes avec gestion de tournees et allocations automatiques |
| `w_salhead_prep` | `_sales` | `w_response` | Selection simplifiee de commandes pour preparation |
| `w_salline_prepare` | `_sales` | `w_response` | Preparation detaillee des lignes -- allocation lot/emplacement, verification, expedition |
| `w_salline_reserve` | `_sales` | `w_response` | Reservation de stock sur une ligne de commande |
| `w_salline_feasability` | `_sales` | `w_response` | Analyse de faisabilite d'une ligne (stock disponible, dates, type P/M/C) |
| `w_salline_available` | `_sales` | `w_response_dw` | Consultation des lignes disponibles pour expedition |
| `w_salline_mp_notavailable` | `_sales` | `w_response_dw` | Lignes dont les matieres premieres ne sont pas disponibles |
| `w_salline_audit` | `_sales` | `w_response` | Consultation de l'audit des modifications de lignes |
| `w_sales_shipnotice2` | `_sales` | `w_response` | Bons de livraison / avis d'expedition -- creation, impression, cloture, EDI DESADV |
| `w_sales_ship` | `_sales` | `w_response` | Expedition avec declenchement OF fabrication, filtres, impression auto |
| `w_invoices` | `_sales` | `w_response` | Gestion des factures de vente -- creation, modification, impression, envoi |
| `w_sales_histo` | `_sales` | `w_response` | Historique des commandes cloturees avec possibilite de reouverture |
| `w_sales_contract` | `_sales` | `w_response` | Gestion des contrats de vente (commandes blanket/periodiques) |
| `w_sales_price` | `_sales` | `w_response` | Modification des prix de vente sur commandes |
| `w_sales_mass_update` | `_sales` | `w_response` | Mise a jour en masse de commandes |
| `w_sales_autoclot` | `_sales` | `w_response` | Cloture automatique des commandes (seuil en %) |
| `w_sales_dirsal` | `_sales_cash` | `w_response` | Ventes directes (comptoir) -- cycle complet avec allocation/expedition/facturation immediate |
| `w_sales_return_update` | `_sales` | `w_response` | Retours de marchandises -- remise en stock, mise a jour SSCC, notes de credit |
| `w_sales_fup` | `_sales` | `w_response` | Suivi de commande (follow-up) |
| `w_salesman_update` | `_masters` | `w_response` | Mise a jour fiche commercial |
| `w_salesman_replace` | `_masters` | `w_response` | Remplacement d'un commercial |

### Fenetres devis

| Fenetre | Module | Ancetre | Role |
|---------|--------|---------|------|
| `w_devis` | `_devis` | `w_response` | Fenetre principale des devis -- projets, versions, lignes, conversion en commande |
| `w_devis_update` | `_devis` | `w_response` | Creation/modification d'un en-tete de devis |
| `w_devis_archived` | `_devis` | `w_response` | Consultation des devis archives avec reactivation possible |
| `w_devisoffer_update` | `_devis` | `w_response` | Mise a jour des offres de devis |

### DataWindows principaux

| DataWindow | Module | Type | Role |
|------------|--------|------|------|
| `d_salhead_update` | `_sales` | freeform | Mise a jour en-tete commande (table `salhead`, cle `shcode`) |
| `d_salline_update` | `_sales` | freeform | Mise a jour ligne commande (tables `salline` + `items`, cles `slcode` + `slline`) |
| `d_salhead_sel` | `_sales` | freeform | Selection/liste des commandes avec jointure `salhead` + `adresses` + `choices` |
| `d_salhead_print` | `_prints_std` | -- | Impression confirmation de commande |
| `d_shiphead_update` | `_sales` | -- | Mise a jour en-tete livraison |
| `d_shipline_update` | `_sales` | -- | Mise a jour lignes livraison |
| `d_invhead_update` | `_sales` | -- | Mise a jour en-tete facture |
| `d_invline_update` | `_sales` | -- | Mise a jour lignes facture |
| `d_shiphead_print` | `_prints_std` | -- | Impression bon de livraison |
| `d_invhead_print` | `_prints_std` | -- | Impression facture |
| `d_devishead_update` | `_devis` | -- | Mise a jour en-tete devis |
| `d_devisline_update` | `_devis` | -- | Mise a jour lignes devis |

### Fonctions globales cles

| Fonction | Module | Description |
|----------|--------|-------------|
| `gf_autoallocate_withoutstock` | `_stock` | Allocation automatique sans verification stock (vente directe) |
| `gf_alloc_delete` | `_stock` | Suppression d'une allocation avec gestion recursive des lignes fantomes |
| `gf_salepromo` | `_sales` | Application des promotions sur une commande |
| `gf_sale_reserved_in_purch` | `_purch` | Verification des reservations vente lors d'une reception achat |
| `gf_get_itemfromean13` | `_stkbarcod` | Recherche article a partir d'un code EAN-13 (pour scan barcode) |
| `proformasalecalc` | `_sales` | Calcul de facture proforma |

---

## Flux : Creation d'une commande de vente

### Etape 1 -- Ouverture de la fenetre

L'utilisateur ouvre `w_sales` depuis le menu principal. La fenetre affiche la liste des commandes (`d_salhead_sel`) filtree par statut (parametres `Sel_Status_Min` / `Sel_Status_Max`). La requete joint `salhead`, `adresses` et `choices` pour afficher le nom du client et le libelle du statut.

### Etape 2 -- Creation de l'en-tete

Clic sur le bouton "Nouveau" : ouverture de `w_salhead_update` en mode creation (`ib_create = true`). L'utilisateur renseigne :
- **Client** (`shcust`) : selection via dropdown lie a `adresses`
- **Reference client** (`shcustref`)
- **Date demandee** (`shdatreq`)
- **Commercial** (`shsalesman`)
- **Devise** (`shcurr`)
- **Condition de paiement** (`shcustpay`)
- **Mode de livraison** (`shdlvt`) et lieu (`shdlvtplace`)
- **Condition standard** (`shstdcondition`) : lie a `condhead` pour tarifs
- **Commentaire** (`shcmnt`)

La sauvegarde genere un `shcode` auto-incremente et cree l'enregistrement `salhead`.

### Etape 3 -- Ajout des lignes

Ouverture de `w_salline_update` pour chaque ligne. Fonctions cles :
- `checkitem()` : valide l'article selectionne, charge les informations produit
- `changeitem()` : met a jour les champs dependants (prix, UOM, type)
- `linefortarifok()` / `applyrate()` : applique le tarif client/article
- `wf_salerate()` : calcul du tarif de vente specifique
- `salelineinputok()` : validation finale avant sauvegarde
- `wf_crdtctrl()` : controle de credit client
- `canchangeqty()` / `changeorder()` : recalcul lors de changement de quantite

Le DataWindow `d_salline_update` lit depuis `salline` JOIN `items` (pour `ittyp`).

### Etape 4 -- Sauvegarde

L'enregistrement `salline` est cree avec :
- `slstatus = '1'` (Nouvelle)
- `sldatcrea` = date/heure courante
- Prix calcules selon les tarifs, remises et conditions

---

## Flux : Devis vers commande

### Processus dans w_devis

1. L'utilisateur selectionne un devis dans `w_devis` (tables `devishead` / `devisline`)
2. Clic droit > menu `m_pop_devis` > option "Convertir en commande" (ou "Commande" dans le menu version)
3. Appel de la fonction `wf_convert2order()` sur `w_devis`
4. La fonction :
   - Verifie que le devis a des lignes (`NbLines > 0`)
   - Cree un en-tete `salhead` a partir des donnees du devis (`devishead`)
   - Copie les lignes `devisline` vers `salline` avec statut initial `'1'`
   - Met a jour les references croisees (`sldvihead`, `sldviline`)
   - Le devis peut etre archive apres conversion

### Gestion des versions

`w_devis` gere des projets avec plusieurs versions de devis :
- `wf_get_deviid()` : recupere l'ID du devis courant
- `wf_get_version()` / `wf_set_version()` : gestion des versions
- `wf_get_dvitype()` : type de devis
- `wf_convert2item()` : conversion en article (nomenclature)
- `wf_archive()` : archivage du devis
- `wf_projreactivate()` : reactivation d'un devis archive (`w_devis_archived`)

---

## Flux : Confirmation / Validation

### Autorisation de commande

Le champ `shautho` sur `salhead` controle l'autorisation :
- Accessible dans `d_salhead_update` et `d_salhead_sel`
- Peut etre modifie selon les droits de l'utilisateur (gestion d'acces via `w_a_pmi`)

### Impression de confirmation

Le champ `shprinted` indique l'etat d'impression :
- Vide : non imprime
- `'Y'` : imprime (affiche `*` dans la liste)
- `'F'` : envoye par fax (affiche `%`)
- `'C'` : confirme (affiche `$`)

L'impression utilise le DataWindow `d_salhead_print` via la structure `s_print` (PrintParam) et la fenetre generique `w_print`.

### Indicateurs visuels dans la liste

Le champ calcule `compute_1` dans `d_salhead_sel` affiche :
- `*` si imprime, `%` si faxe, `$` si confirme
- ` `(espace + symbole) si commentaire present
- ` #` si consignation active

---

## Flux : Allocation de stock

L'allocation reserve du stock physique pour satisfaire une ligne de commande.

### Fenetre w_sales_allocate

Fenetre principale d'allocation avec de nombreux modes :

**Fonctions d'allocation :**
- `alloc_auto()` : allocation automatique d'une ligne selectionnee
- `wf_custautoalloc()` : allocation automatique de toutes les lignes d'un client
- `wf_orderautoalloc()` : allocation automatique de toutes les lignes d'une commande
- `wf_allautoalloc()` : allocation automatique de toutes les commandes visibles
- `alloc_delete()` : suppression d'une allocation existante

**Gestion de tournees :**
- `truck_alloc_line()` / `truck_alloc_order()` : allocation a une tournee de livraison
- `truck_refresh()` : rafraichissement de la vue tournee
- `wf_truckline_del()` / `wf_truckline_delcmd()` : suppression de lignes tournee
- `wf_reordertruck()` : reordonnancement de la tournee

**Impression :**
- `wf_salord_alloc_print()` : impression du bon d'allocation pour une commande
- `wf_salline_alloc_print()` : impression par ligne
- `wf_bon_enlevement_print()` : impression du bon d'enlevement
- `wf_fiche_daa_print()` : impression de la fiche DAA

### Fenetre w_salline_prepare

Preparation detaillee au niveau de la ligne :
- `wf_alloc_auto()` : allocation automatique
- `wf_alloc_delete()` : suppression d'allocation avec parametres detailles (lot, emplacement, quantite)
- `wf_allocdelete()` : suppression simplifiee
- `save_tr()` : sauvegarde des allocations
- `wf_verify()` : verification de coherence
- `wf_expedition()` : declenchement de l'expedition
- `wf_get_shipto()` : recuperation de l'adresse de livraison
- `wf_printlabel()` : impression des etiquettes
- `wf_duplicate()` : duplication d'allocation

### Table matallocs

Lors de l'allocation, un enregistrement est cree dans `matallocs` :
- `matyp = 'X'` : allocation pour vente (vs `'M'` pour fabrication)
- `macode` = numero de commande (`slcode`)
- `maitemseq` = sequence d'article (= `slline`)
- `malot`, `maloc` : lot et emplacement source
- `maallocqty` : quantite allouee

L'allocation met a jour `salline.slqtyalloc` et peut changer `slstatus` de `'1'` (Nouvelle) a `'3'` (Allouee).

### Fonction gf_alloc_delete

Suppression d'une allocation avec gestion avancee :
- Supprime l'enregistrement `matallocs`
- Remet a jour `salline.slqtyalloc`
- Gere recursivement les articles fantomes (composes) via `gf_prepare_ghost`
- Ne fait pas de commit (seulement rollback si erreur) -- le commit est de la responsabilite de l'appelant

### Fonction gf_autoallocate_withoutstock

Deux surcharges : avec et sans parametre `ad_qtytarif`.
Utilisee pour les ventes directes (comptoir) ou l'allocation ne verifie pas la disponibilite reelle.

---

## Statuts et transitions

### Statuts de l'en-tete (salhead.shstatus)

Les statuts de l'en-tete correspondent generalement a la table `choices` avec `chtype = 'CUSS'`.

| Valeur | Signification | Description |
|--------|---------------|-------------|
| `1` | Nouvelle | Commande vient d'etre creee |
| `2` | En cours | Commande en traitement |
| `3` | Allouee | Stock alloue (au moins partiellement) |
| `4` | Partiellement livree | Certaines lignes livrees |
| `5` | Livree | Toutes les lignes livrees |
| `6` | Cloturee | Commande terminee (cloturee manuellement ou automatiquement) |
| `9` | Annulee | Commande annulee |

### Statuts de la ligne (salline.slstatus)

| Valeur | Signification | Description |
|--------|---------------|-------------|
| `1` | Nouvelle | Ligne vient d'etre creee, pas encore allouee |
| `2` | En cours | En traitement |
| `3` | Allouee | Stock reserve pour cette ligne |
| `4` | Partiellement livree | Quantite partiellement expediee (`slqtyreal < slqtyreq`) |
| `5` | Livree | Quantite entierement expediee |
| `6` | Cloturee | Ligne terminee |
| `9` | Annulee | Ligne annulee |

### Transitions principales

```
Creation:     -> 1 (Nouvelle)
Allocation:   1 -> 3 (Allouee) quand slqtyalloc > 0
Expedition:   3 -> 4 (Part. livree) quand slqtyreal > 0 mais < slqtyreq
              3 -> 5 (Livree) quand slqtyreal >= slqtyreq
              4 -> 5 (Livree) quand expedition complete
Cloture:      5 -> 6 (Cloturee) manuellement ou via w_sales_autoclot
              1/2/3/4 -> 6 (Cloturee) cloture forcee
Annulation:   1/2/3 -> 9 (Annulee) avec suppression des allocations
Reouverture:  6 -> statut precedent (via w_sales_histo.reopen_line)
```

### Cloture automatique (w_sales_autoclot)

La fenetre `w_sales_autoclot` permet de cloturer automatiquement les commandes dont le taux de livraison depasse un seuil configurable (`MaxPercent`). Cela evite que des lignes avec un ecart minime restent ouvertes indefiniment.

### Annulation (w_sales_dirsal / w_brf_cash)

L'annulation met `shstatus = '9'` et `slstatus = '9'` sur toutes les lignes, puis supprime les allocations correspondantes dans `matallocs` (`matyp = 'X'`).

---

## Expedition et livraison

### Tables d'expedition

**shiphead** -- En-tete du bon de livraison :

| Colonne | Type | Description |
|---------|------|-------------|
| `shcode` | numeric(8) | **PK** -- Numero BL |
| `shcust` | char(10) | Code client |
| `shshipto` | numeric(4) | Adresse de livraison |
| `shdate` | timestamp | Date d'expedition |
| `shprint` | char(1) | Imprime |
| `shcomment` | long varchar | Commentaire |
| `shgroweight` | numeric(8,3) | Poids brut |
| `shexpedi` | char(1) | Expedie |
| `shclot` | char(1) | Cloture |

**shipline** -- Lignes du bon de livraison :

| Colonne | Type | Description |
|---------|------|-------------|
| `slcode` | numeric(8) | **PK** -- Numero BL |
| `slline` | numeric(4) | **PK** -- Numero de ligne |
| `slsalorder` | numeric(6) | Commande de vente source |
| `slsalline` | numeric(4) | Ligne de commande source |
| `slitem` | char(20) | Code article |
| `slqty` | numeric(12,3) | Quantite expediee |
| `sllot` | char(30) | Numero de lot |
| `slinv` | char(1) | Facture |
| `slinvno` | numeric(6) | Numero de facture |

### Fenetre w_sales_shipnotice2

Fenetre principale de gestion des bons de livraison :
- `checkmodif()` : verification avant sauvegarde
- `wf_shippack_create()` / `wf_shippack_modify()` / `wf_shippack_delete()` : gestion des colis (colisage)
- `wf_desadv()` : generation du message EDI DESADV
- `wf_dsadv_sscc()` : generation des codes SSCC pour l'EDI
- `wf_detect_lotptr()` : detection des lots avec tracabilite
- `wf_clotship()` : cloture d'un bon de livraison
- `wf_generic_qc()` : controle qualite generique
- `wf_create_annex_file()` : creation de fichiers annexes

### Fenetre w_sales_ship

Expedition avec integration fabrication :
- `uof_launchof()` : lancement d'un ordre de fabrication depuis l'expedition
- `uof_treat_of()` : traitement d'un OF
- `uof_make_complete_of()` : completion d'un OF
- `uof_merge_com_lines()` : fusion de lignes de commande
- `wf_check_dateperiod()` : verification de la periode

---

## Commissions commerciales

### Table salesman

La table `salesman` stocke les fiches commerciaux avec un taux de commission par defaut (`smcommission`, numeric 5,2 en %).

### Tables comsalhead / comsalline

Les commissions sont calculees par commande et par ligne :
- `comsalhead` : lie un commercial (`cshsalesman`) a une commande (`cshcode`)
- `comsalline` : detail par ligne avec prix base, prix final, ristourne

Le lien entre commande et commercial se fait via `salhead.shsalesman`.

### Fenetre w_salesman_update

Gestion des fiches commerciaux dans le module `_masters`. Fonction `inputok()` pour validation avant sauvegarde.

---

## Vente directe (comptoir)

### Fenetre w_sales_dirsal

La vente directe (module `_sales_cash`) realise le cycle complet en une seule fenetre :

1. **Creation** de l'en-tete et des lignes
2. **Allocation automatique** via `wf_autoallocateline()` / `wf_autoallocateline_withstock()` / `wf_autoallocateline_withoutstock()`
3. **Expedition** immediate
4. **Facturation** dans la foulee (`wf_createtickets()`)
5. **Desallocation** si annulation (`wf_desallocate_order()`)

Variables specifiques : `is_TICKECUST`, `is_EMPCASH`, `is_CASHSALV`, `is_CASHSTOCK` pour la configuration caisse.

---

## Retours de marchandises

### Fenetre w_sales_return_update

Gestion complete des retours avec :
- Remise en stock (choix du lot et emplacement)
- Mise a jour des SSCC (`wf_update_sscc_bak()`)
- Mise a jour des couts de transport (`wf_update_shipcost_bak()`)
- Gestion des articles fantomes (`wf_returnghost_bak()`)
- Creation automatique de notes de credit (`addinvoicerow_bak()`)
- Reouverture optionnelle de la commande (`is_reopenorder`)
- Creation de nouveaux lots si necessaire (`createnewlot_bak()`)

Variables de configuration : `is_SHIPRETCRED1/2/3`, `is_BLOCAGE`, `is_NUMINNC`.

---

## Points d'attention

### Controle de credit
- `w_salline_update.wf_crdtctrl()` : controle du credit client avant validation de ligne
- `w_salline_update.wf_creditbal_adjust()` : ajustement du solde credit
- `w_sales.wf_creditbal()` : verification du solde credit dans la fenetre principale
- Le champ `adresses.adcreditctrl` active/desactive le controle par client

### Articles fantomes (composes)
- `slsalghost` dans `salline` : reference vers la ligne parente pour les composants
- `slprintghost` : controle l'impression des composants
- `items.itsalghost` : configuration fantome au niveau article
- `gf_alloc_delete` gere recursivement les allocations des composants via `gf_prepare_ghost`

### Multi-societe
- Le champ `shmccode` dans `salhead` identifie la societe
- Le DataWindow `d_salhead_sel` calcule le code multi-societe via `linkmcad` ou directement depuis `shmccode`
- Le parametre `MULTICO` dans `progparam` active/desactive la fonctionnalite

### Conditions de vente
- `shstdcondition` (en-tete) et `slstdcondition` (ligne) referencent `condhead.chcode`
- Le DataWindow `d_salhead_update` charge la condition globale via sous-requete sur `condhead`
- `nvo_conditionmanager` : objet non-visuel de gestion des conditions (present dans `w_salhead_update` et `w_salline_update`)

### Consignation
- `shcons = 'Y'` sur `salhead` active le mode consignation
- Tables dediees : `conssale` (ventes consignation), `consstock` (stock en depot)
- `w_salhead_update.wf_consignation()` et `w_salline_update.wf_consignation()` : logique specifique

### Audit
- `salaudit` trace toutes les modifications de prix, quantite et date sur les lignes
- Variables d'audit dans `w_salline_update` : `idec_audit_slstdval`, `idec_audit_slqtyreq`, `idt_audit_sldatship`
- Le parametre `AUDITSALE` (dans `progparam`) active/desactive l'audit

### EDI (Echange de Donnees Informatise)
- `shediref` : reference EDI de la commande
- `shedilink` : indicateur de lien EDI
- `shedisender` : emetteur EDI
- `slediref` / `slediean` : references EDI par ligne
- `w_sales_shipnotice2.wf_desadv()` : generation du message DESADV (avis d'expedition)

### Verrouillage concurrent
- `shbeeingmod` sur `salhead` : indicateur de modification en cours (verrouillage optimiste)
- Empeche deux utilisateurs de modifier simultanement la meme commande

### Integration WMS
- `shsendwms` : flag d'envoi vers le WMS (Warehouse Management System)
- `nvo_import_wms` : objet d'import des retours WMS (met a jour `slstatus` et `shstatus`)
- `w_sales.wf_export_wms()` : export vers WMS

---

## Recherche rapide

### Par numero de commande
```sql
SELECT * FROM salhead WHERE shcode = :numero
```

### Par client
```sql
SELECT sh.shcode, sh.shstatus, sh.shdatcrea, sh.shcustref, ad.adname
FROM salhead sh
JOIN adresses ad ON ad.adcode = sh.shcust
WHERE sh.shcust = :code_client
ORDER BY sh.shcode DESC
```

### Commandes ouvertes (non cloturees, non annulees)
```sql
SELECT sh.shcode, sh.shcust, ad.adname, sh.shstatus, sh.shdatreq
FROM salhead sh
JOIN adresses ad ON ad.adcode = sh.shcust
WHERE sh.shstatus BETWEEN '1' AND '5'
ORDER BY sh.shcode DESC
```

### Lignes a allouer
```sql
SELECT sl.slcode, sl.slline, sl.slitem, sl.slqtyreq, sl.slqtyalloc,
       sl.slqtyreq - isnull(sl.slqtyalloc, 0) AS qty_a_allouer
FROM salline sl
WHERE sl.slstatus IN ('1', '2')
  AND sl.slqtyreq > isnull(sl.slqtyalloc, 0)
ORDER BY sl.slcode, sl.slline
```

### Lignes a expedier (allouees mais non livrees)
```sql
SELECT sl.slcode, sl.slline, sl.slitem, sl.slqtyalloc,
       sl.slqtyalloc - isnull(sl.slqtyreal, 0) AS qty_a_expedier
FROM salline sl
WHERE sl.slstatus = '3'
  AND sl.slqtyalloc > isnull(sl.slqtyreal, 0)
ORDER BY sl.slcode, sl.slline
```

### Allocations d'une commande
```sql
SELECT ma.maitemseq, ma.maallocseq, ma.maitem, ma.malot, ma.maloc,
       ma.maallocqty, ma.maissuedqty
FROM matallocs ma
WHERE ma.matyp = 'X' AND ma.macode = :numero_commande
ORDER BY ma.maitemseq, ma.maallocseq
```

### Commissions d'un commercial
```sql
SELECT csh.cshcode, csh.cshcust, csl.cslitem,
       csl.cslqtyord, csl.cslfinalprice, csl.cslrist
FROM comsalhead csh
JOIN comsalline csl ON csl.cslcomidhead = csh.cshcomid
                   AND csl.cslsalesman = csh.cshsalesman
WHERE csh.cshsalesman = :code_commercial
ORDER BY csh.cshcode DESC
```

### Historique d'audit d'une ligne
```sql
SELECT satyp, sauser, saaudit, sadate
FROM salaudit
WHERE saslcode = :numero_commande AND saslline = :numero_ligne
ORDER BY sadate DESC
```

### Recherche par reference client
```sql
SELECT sh.shcode, sh.shcust, ad.adname, sh.shcustref, sh.shstatus
FROM salhead sh
JOIN adresses ad ON ad.adcode = sh.shcust
WHERE sh.shcustref LIKE :reference + '%'
ORDER BY sh.shcode DESC
```
