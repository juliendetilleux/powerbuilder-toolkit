# Domaine : Facturation (Sales Invoicing)

## Vue d'ensemble

La facturation dans PmiGest ERP (PMIX) couvre la creation, le calcul, l'impression et l'export comptable des factures clients. Le processus normal suit le flux : **commande de vente (salhead/salline) -> livraison (shiphead/shipline) -> preparation facture -> facture (invoicehead/invoiceline)**.

Le domaine facturation s'appuie principalement sur :
- **Module `_sales`** (345 objets) : fenetres de gestion des factures, fonctions de calcul, preparation
- **Module `_ifcpt`** (150 objets) : interface comptable, paiements, rappels
- **Module `_prints_std`** / `_prints_mod`** : DataWindows d'impression facture (15+ modeles)
- **Module `cust_peppol`** : facturation electronique PDF et Peppol/Babelway
- **Module `_edilink`** : export EDI des factures
- **Module `_projects`** : facturation par extraction de projets
- **Module `_devis`** : abonnements et facturation recurrente (SUBHEAD)

La table `invoicehead` stocke l'en-tete de chaque facture avec 69 colonnes. Les lignes sont dans `invoiceline` (59 colonnes). La ventilation TVA est stockee dans `invoicetva` et les ecritures comptables pre-calculees dans `invoicecpt`.

---

## Tables principales

| Table | Role | PK | FK vers |
|-------|------|----|---------|
| **invoicehead** | En-tete facture client | `ihcode` | `adresses` (ihcust), `filehead` (ihfileref) |
| **invoiceline** | Lignes de facture | `ilcode, illine` | `invoicehead`, `salhead`, `shiphead`, `items`, `filehead`, `mfghead` |
| **invoicetva** | Ventilation TVA par taux | `itcode, ittva` | `invoicehead` |
| **invoicecpt** | Ecritures comptables generees | `iccode, iccptsal, ictva` | _(aucune FK explicite)_ |
| **profohead** | En-tete facture proforma | `phcode` | `adresses` (phcust) |
| **profoline** | Lignes facture proforma | `plcode, plline` | _(implicite vers profohead)_ |
| **profotva** | Ventilation TVA proforma | `ptcode, pttva` | `profohead` |
| **SUBHEAD** | En-tete abonnement/sous-traitance | `sh_id` | `BOMSUBHEAD`, `adresses` |
| **SUBINVOICE** | Lien abonnement -> facture | `si_id` | `SUBHEAD`, `invoicehead` |
| **SUBLINE_SAL** | Lignes d'abonnement (articles) | `sl_id` | `SUBHEAD`, `items`, `salline` |
| **tvalvl** | Types/niveaux de TVA | `ttcode` | _(reference par tvalvl_country)_ |
| **tvalvl_country** | Taux TVA par pays | `tccode, tccountry` | `tvalvl`, `country` |

---

## Colonnes cles de invoicehead

### Identification

| Colonne | Type | Description |
|---------|------|-------------|
| `ihcode` | numeric(6) | **Numero facture (PK)** -- identifiant interne auto-incremente |
| `ihnuminv` | numeric(12) | Numero facture officiel (sequence legale) |
| `ihcodemc` | numeric(12) | Code multi-company (identifiant unique multi-societe) |
| `ihmccode` | varchar(10) | Code societe multi-company |
| `ihcust` | char(10) | **Code client** -- FK vers `adresses.adcode` |
| `ihdate` | timestamp | Date de facture |
| `ihexpiry` | timestamp | Date d'echeance de paiement |
| `ihrefedi` | varchar(64) | Reference EDI |
| `ihstructcom` | varchar(12) | Communication structuree (virement bancaire BE) |
| `ihchecksum` | varchar(32) | Checksum d'integrite |

### Type et statut

| Colonne | Type | Description |
|---------|------|-------------|
| `ihtypinv` | char(1) | **Type de facture** : `1` = Facture (F), `2` = Note de credit (NC/C) |
| `ihstatus` | char(1) | **Statut** (voir section Statuts ci-dessous) |
| `ihprint` | char(1) | Imprimee (`Y`/`N`) |
| `ihpaid` | char(1) | Payee (`Y`/`N`) |
| `ihexpedi` | char(1) | Expediee (`Y`/`N`) |
| `ihfactoring` | char(1) | Affacturage actif (`Y`/`N`) |

### Montants

| Colonne | Type | Description |
|---------|------|-------------|
| `ihsalval` | numeric(8,2) | **Montant vente HT** (hors taxes) |
| `ihtvaval` | numeric(8,2) | **Montant TVA** |
| `ihtotval` | numeric(8,2) | **Montant total TTC** |
| `ihristval` | numeric(8,2) | Montant ristourne |
| `ihesctval` | numeric(8,2) | Montant escompte |
| `ihpaidamount` | numeric(8,2) | Montant paye |

### Remises

| Colonne | Type | Description |
|---------|------|-------------|
| `ihrist` | numeric(4,2) | Ristourne globale (%) |
| `ihesct` | numeric(4,2) | Escompte (%) |
| `ihorderrist` | char(1) | Ristourne de commande appliquee |
| `ihristtnet1` / `2` / `3` | numeric(4,2) | Ristournes nettes 1, 2, 3 (%) |
| `ihristtnet1val` / `2val` / `3val` | numeric(8,2) | Montants ristournes nettes |
| `ihristtnet1typ` / `2typ` / `3typ` | numeric(3) | Types ristournes nettes |

### Comptabilite et devises

| Colonne | Type | Description |
|---------|------|-------------|
| `ihcurr` | char(3) | Devise de la facture |
| `ihcurconv` | numeric(10,6) | Taux de change |
| `ihcptper` | char(6) | Periode comptable (format `YYYYMM`) |
| `ihcptexer` | char(4) | Exercice comptable |
| `ihtyptva` | char(1) | Type de TVA applicable |
| `ihtvaref` | char(15) | Reference TVA du client |
| `ihpaymnt` | char(1) | Condition de paiement |
| `ihpaymode` | numeric(2) | Mode de paiement |

### Paiement et rappels

| Colonne | Type | Description |
|---------|------|-------------|
| `ihpaydate` | timestamp | Date de paiement effectif |
| `ihremindnb` | numeric(3) | Nombre de rappels envoyes |
| `ihlastremind` | timestamp | Date du dernier rappel |

### Audit et divers

| Colonne | Type | Description |
|---------|------|-------------|
| `ihcreauser` | varchar(8) | Utilisateur qui a cree la facture |
| `ihcreadate` | timestamp | Date de creation |
| `ihinvattention` | varchar(40) | A l'attention de |
| `ihcomment` | long varchar | Commentaire libre |
| `ihfileref` | numeric(4) | Reference dossier/projet |
| `ihfileline` | numeric(4) | Ligne dossier/projet |
| `ihshipto` | numeric(4) | Adresse de livraison |
| `ihshowprest` | char(1) | Afficher detail prestations |

---

## Colonnes cles de invoiceline

### Identification

| Colonne | Type | Description |
|---------|------|-------------|
| `ilcode` | numeric(6) | **Numero facture (PK, FK)** -- reference `invoicehead.ihcode` |
| `illine` | numeric(4) | **Numero de ligne (PK)** |
| `iltype` | char(1) | **Type de ligne** (voir tableau ci-dessous) |
| `ilsort` | numeric(4) | Ordre de tri pour affichage/impression |

### Tracabilite commande/livraison

| Colonne | Type | Description |
|---------|------|-------------|
| `ilsalorder` | numeric(6) | Numero de commande de vente (FK `salhead`) |
| `ilsalline` | numeric(4) | Numero de ligne commande |
| `ilshiporder` | numeric(8) | Numero de bon de livraison (FK `shiphead`) |
| `ilshipline` | numeric(4) | Numero de ligne livraison |

### Article et quantites

| Colonne | Type | Description |
|---------|------|-------------|
| `ilitem` | char(20) | Code article |
| `ilitcustnam` | char(30) | Nom article chez le client |
| `ilqty` | numeric(12,3) | Quantite facturee (UOM interne) |
| `ilqtycust` | numeric(12,3) | Quantite client (UOM client) |
| `iluomord` | varchar(5) | Unite de mesure commande |
| `iluomconv` | numeric(16,10) | Facteur de conversion UOM |

### Montants

| Colonne | Type | Description |
|---------|------|-------------|
| `ilstdval` | numeric(10,4) | Prix unitaire standard |
| `ilorval` | numeric(10,4) | Prix original (avant remise) |
| `ilsalval` | numeric(8,2) | Montant vente HT de la ligne |
| `iltva` | numeric(6,4) | Taux de TVA applicable |
| `iltvaval` | numeric(8,2) | Montant TVA de la ligne |
| `iltotval` | numeric(8,2) | Montant total TTC de la ligne |
| `ilnetval` | numeric(8,2) | Valeur nette |
| `ilbastva` | numeric(8,2) | Base TVA |
| `ilrealtva` | numeric(8,2) | TVA reelle calculee |

### Remises

| Colonne | Type | Description |
|---------|------|-------------|
| `ilrist` | numeric(5,2) | Ristourne ligne (%) |
| `ilristorg` | numeric(5,2) | Ristourne originale (%) |
| `ilsddisc` | numeric(5,2) | Remise supplementaire (%) |

### Comptabilite et divers

| Colonne | Type | Description |
|---------|------|-------------|
| `ilcptsal` | char(12) | Compte comptable vente |
| `ilcptanal` | char(12) | Compte analytique 1 |
| `ilcptanal2` | char(12) | Compte analytique 2 |
| `ildlvt` | char(1) | Condition de livraison |
| `ildlvtplace` | varchar(15) | Lieu de livraison |
| `ilfatype` | numeric(3) | Type de facturation |
| `iltransfered` | char(1) | Transfere en comptabilite |
| `ilcomment` | long varchar | Commentaire de ligne |

### Types de ligne (iltype)

| Code | Description | Utilisation |
|------|-------------|-------------|
| `A` | Article standard | Ligne avec article, issue d'une commande/livraison |
| `C` | Complement | Ligne de complement (ex: frais de port, emballage) |
| `D` | Direct | Vente directe (sans commande prealable) |
| `I` | Article inventaire | Article standard facture |
| `R` | Retour | Ligne de retour/avoir |
| `N` | Note/Auxiliaire | Ligne auxiliaire (frais divers) |
| `P` | Pack/Consigne | Ligne consigne/emballage |
| `S` | Service | Ligne de prestation/service |
| `E` | Ecotaxe | Ligne de taxe ecologique |

---

## Objets PowerBuilder cles

### Fenetres principales (module `_sales`)

| Objet | Ancetre | Description |
|-------|---------|-------------|
| **w_invoices** | w_response | **Liste principale des factures** -- affichage, filtrage, tri, suppression de lignes, impression |
| **w_invhead_update** | w_response | Edition en-tete facture -- modification client, dates, devise, TVA, periodes |
| **w_invlines_update** | w_response | Edition ligne facture -- article, quantite, prix, TVA, remise |
| **w_invoice_prep** | w_response | **Preparation des factures** -- selection des livraisons a facturer, regroupement, creation automatique/manuelle |
| **w_inv_directsal** | w_response | Facture de vente directe (sans commande/livraison prealable) |
| **w_invoice_tvamodify** | w_response | Modification TVA d'une facture existante |
| **w_invrist** | w_response | Gestion des ristournes sur facture |
| **w_invoices_qry** | w_response | Consultation/requete factures -- filtrage avance, changement de statut, impression PDF, envoi par mail |
| **w_invoices_print** | w_response | Impression des factures -- selection modele, PDF, copie de controle |
| **w_invoice_billing** | w_response | Facturation globale (billing) |
| **w_invoices_extraction** | w_response | Facturation par extraction de projets -- creation factures depuis dossiers |

### Fenetres de lignes par type

| Objet | Type de ligne | Description |
|-------|--------------|-------------|
| **w_invlinea_update** | A (Article) | Edition ligne article standard (issue de commande) |
| **w_invlineb_update** | B | Edition ligne avec valeur/pourcentage |
| **w_invlinec_update** | C (Complement) | Edition ligne complement avec gestion taxes |
| **w_invlinei_update** | I (Inventaire) | Edition ligne article inventaire |
| **w_invlinep_update** | P (Pack) | Edition ligne consigne/emballage |
| **w_invlinen_update** | N (Auxiliaire) | Edition ligne auxiliaire |
| **w_invliner_update** | R (Retour) | Edition ligne retour/avoir |
| **w_invlines2_update** | -- | Variante edition lignes |
| **w_invlineas_update** | -- | Variante edition lignes avec service |

### Fenetres complementaires

| Objet | Module | Description |
|-------|--------|-------------|
| **w_inv_paid** | _ifcpt | Suivi paiements factures -- import auto, gestion solde |
| **w_inv_paid_update** | _ifcpt | Mise a jour paiement individuel |
| **w_inv_remind** | _ifcpt | Gestion des rappels de paiement |
| **w_invoice_cash** | _sales_cash | Factures en especes (caisse) |
| **w_invoices_pdf** | cust_peppol | Generation et envoi factures PDF par email |
| **w_invoices_peppol** | cust_peppol | Envoi factures electroniques Peppol via Babelway |
| **w_invoicesproforma_pdf** | _edilink | Generation PDF proformas |
| **w_invedi_exp** | _edilink | Export EDI des factures |
| **w_invoice_sqlsearch** | _masters | Recherche avancee SQL dans les factures |
| **w_invh_file_update** | _sales | Liaison facture <-> dossier/projet |
| **w_invl_file_update** | _sales | Liaison ligne facture <-> dossier/projet |

### Fenetres abonnement/sous-traitance

| Objet | Module | Description |
|-------|--------|-------------|
| **w_subhead_list** | _devis | Liste des abonnements/contrats de sous-traitance |
| **w_sub_update** | _devis | Edition d'un abonnement |
| **w_subscritpion_billing** | _devis | Facturation des abonnements -- generation automatique des factures periodiques |

### Fonctions globales

| Fonction | Module | Description |
|----------|--------|-------------|
| **invoicesalecalc(long salinvoice)** | _sales | **Fonction maitre de calcul facture** -- dispatche vers `_m1` ou `_m` selon le parametre SINVESCT1 |
| **invoicesalecalc_m1(long salinvoice)** | _sales | Calcul facture methode 1 : **escompte n'affecte PAS la TVA** (~700 lignes) |
| **invoicesalecalc_m(long salinvoice)** | _sales | Calcul facture methode 2 : **escompte affecte la TVA** (~960 lignes) |
| **invoice_expiry(datetime, string)** | _sales | Calcul de la date d'echeance selon la condition de paiement |
| **gf_invhdinfo_load()** | _ifcpt | Chargement des infos en-tete facture pour l'interface comptable |
| **gf_geteinvoicefilename(long, long)** | _edilink | Generation du nom de fichier pour facture electronique |

### DataWindows cles

| DataWindow | Module | Style | Description |
|------------|--------|-------|-------------|
| **d_invhead_sel** | _sales | Freeform | Selection/liste des en-tetes facture -- jointure `invoicehead` + `adresses` |
| **d_invhead_update** | _sales | Freeform | Formulaire mise a jour en-tete facture -- toutes les colonnes `invoicehead` |
| **d_invline_sel** | _sales | Freeform | Selection/liste des lignes facture -- jointure `invoiceline` + `invoicehead` + `items` + `adresses` |
| **d_invlines_update** | _sales | Freeform | Formulaire mise a jour ligne facture |
| **d_invoice_prepsel** | _sales | Freeform | Selection clients a facturer -- jointure `salhead` + `shipline` + `adresses` |
| **d_invoice_prepdet** | _sales | Freeform | Detail des livraisons a facturer -- `shipline` + `shiphead` + `items` |
| **d_invoice_print** | _prints_std | Freeform | Impression facture standard -- toutes les donnees client + societe + lignes |
| **d_invoice_mod*_print** | _prints_mod | -- | 15 modeles d'impression facture personnalisables (mod1 a mod15, mod99) |
| **d_invoice_reactivate** | _sales | Freeform | Reactivation de lignes livrees non facturees |
| **d_invrist** | _sales | Freeform | Ristournes sur ligne (ristourne originale + remise supplementaire) |
| **d_inv_directsal** | _sales | Freeform | Articles pour vente directe (tarifs, stock disponible) |
| **d_invpaid_update** | _ifcpt | -- | Mise a jour paiement facture |
| **d_invremind_custlist** | _ifcpt | -- | Liste clients avec factures impayees (rappels) |
| **d_invremind_invlist** | _ifcpt | -- | Liste factures impayees par client |
| **d_invoices_pdf** | cust_peppol | -- | Liste factures pour generation PDF |
| **d_invhead_sel_peppol** | cust_peppol | -- | Liste factures pour envoi Peppol |
| **d_qry_invcpt_print** | _prints_qry | -- | Impression ecritures comptables factures |

---

## Flux de creation d'une facture

### Flux standard (depuis livraisons)

```
1. Livraisons effectuees (shipline.slinv = 'N' = non facturee)
       |
2. w_invoice_prep : Preparation facture
   - d_invoice_prepsel : selection client + devise + multi-company
   - d_invoice_prepdet : detail des livraisons non facturees
   - Choix de regroupement (par commande, livraison, expedition)
       |
3. wf_createinvoice("MANUAL" ou "AUTOMATIC")
   - Mode MANUAL : creation facture pour le client selectionne
   - Mode AUTOMATIC : boucle sur tous les clients a facturer
   - Fonctions de regroupement :
     * wf_not_regroup()       -> une facture par livraison
     * wf_regroup_cmde()      -> regroupement par commande
     * wf_regroup_deliver()   -> regroupement par livraison
     * wf_regroup_ship()      -> regroupement par expedition
       |
4. INSERT invoicehead (en-tete) + INSERT invoiceline (lignes)
   - shipline.slinv passe a 'Y' (facturee)
   - shipline.slinvno = ihcode (reference facture)
       |
5. invoicesalecalc(ihcode) : calcul des montants
   - Calcul TVA par ligne et ventilation (invoicetva)
   - Calcul ristournes, escompte
   - Generation ecritures comptables (invoicecpt)
       |
6. w_invoices : la facture apparait en statut "Creee" (ihstatus = '1')
```

### Validation de la periode comptable

Avant toute creation de facture, la fonction `wf_check_dateperiod()` verifie que la date de facture correspond a une periode comptable valide. Le parametre `INVDYMAX` limite le nombre de jours d'ecart autorise.

### Flux vente directe

```
1. w_inv_directsal : Selection articles sans commande prealable
   - d_inv_directsal : liste articles avec tarifs et stock
   - addinvoicerow() : ajout direct de lignes
       |
2. INSERT invoicehead + invoiceline (iltype = 'D')
       |
3. invoicesalecalc(ihcode)
```

---

## Flux note de credit / avoir

Une note de credit est une facture avec `ihtypinv = '2'`. Elle fonctionne comme une facture inversee :

```
1. Creation via w_invoices ou w_invhead_update
   - ihtypinv = '2' (type Note de Credit)
   - Les montants sont negatifs
       |
2. Lignes avec iltype = 'R' (retour) ou type classique avec quantites negatives
       |
3. invoicesalecalc(ihcode) : meme logique de calcul
   - Les montants TVA et totaux sont negatifs
       |
4. d_invremind_invlist : affichage "Nc" au lieu de "F"
   - Expression : if(ihtypinv = '1', 'F', 'Nc')
```

Le code dans `nvo_factoring` distingue egalement :
- `ihtypinv = '1'` -> Type Document = `'F'` (Facture)
- `ihtypinv = '2'` -> Type Document = `'N'` ou `'C'` (Note de credit)

---

## Flux proforma

Les factures proforma sont des documents pre-facture non comptabilises :

```
1. Tables separees : profohead / profoline / profotva
   - Structure similaire a invoicehead/invoiceline/invoicetva
   - Pas de lien vers invoicecpt (pas d'ecriture comptable)
       |
2. profohead colonnes cles :
   - phcode (PK), phcust, phdate, phcurr, phtvaref
   - phsalval, phtvaval, phtotval (montants)
   - phrist, phesct (remises)
   - phactiv (actif Y/N)
   - phstatus (statut)
   - phmccode (multi-company)
       |
3. profoline colonnes cles :
   - plcode, plline (PK)
   - plitem, plqty, plstdval, plsalval, pltva, pltotval
   - pltype (type de ligne), plrist (ristourne)
   - plsalorder, plsalline (lien vers commande, optionnel)
       |
4. w_invoicesproforma_pdf / w_proformas_histo : gestion et impression
       |
5. w_invoices_extraction : wf_createproforma() pour creer une proforma depuis un projet
```

---

## Flux sous-traitance / abonnement

Le systeme d'abonnement permet la facturation recurrente :

```
1. SUBHEAD : contrat d'abonnement
   - sh_id (PK), sh_cust_fk_adresses (client)
   - sh_periodicity (periodicite en mois)
   - sh_datestart, sh_datestop (periode de validite)
   - sh_status : 0 = inactif, 1 = actif
   - sh_monthdec (mois de decalage)
   - sh_year_indexation (annee d'indexation)
       |
2. SUBLINE_SAL : articles de l'abonnement
   - sl_id (PK), sl_sh_id_fk_SUBHEAD
   - sl_itcode_fk_items (article)
   - sl_qty (quantite par periode)
   - sl_createcmd : 0/1 (creer commande automatiquement)
   - sl_activ : 'Y'/'N' (actif)
       |
3. w_subscritpion_billing : facturation des abonnements
   - Selection de la date de facturation
   - Generation automatique des factures pour les abonnements actifs
       |
4. SUBINVOICE : lien abonnement -> facture generee
   - si_subscribe_fk_SUBHEAD -> SUBHEAD
   - si_invoice_fk_invoicehead -> invoicehead
   - si_date_start, si_date_end (periode facturee)
```

---

## TVA et calculs

### Architecture du calcul TVA

La fonction `invoicesalecalc(long salinvoice)` est le point d'entree principal. Elle choisit la methode de calcul selon le parametre `SINVESCT1` dans `progparam` :

| Parametre SINVESCT1 | Fonction appelee | Comportement escompte |
|---------------------|------------------|-----------------------|
| `'1'` | `invoicesalecalc_m1()` | Escompte **n'affecte pas** la base TVA |
| autre | `invoicesalecalc_m()` | Escompte **affecte** la base TVA |

### Algorithme de calcul (invoicesalecalc_m1 / _m)

```
1. Suppression des anciennes donnees TVA :
   DELETE FROM invoicetva WHERE itcode = :SalInvoice

2. Suppression des anciennes ecritures comptables :
   DELETE FROM invoicecpt WHERE iccode = :SalInvoice

3. Parcours des lignes facture par taux TVA distinct :
   DECLARE cur_tva CURSOR FOR
     SELECT DISTINCT invoiceline.iltva
     FROM invoiceline WHERE ilcode = :SalInvoice

4. Pour chaque taux TVA :
   a. Calcul de la base TVA (somme des lignes au meme taux)
   b. Application ristournes et escompte
   c. Calcul montant TVA = base * taux
   d. INSERT INTO invoicetva (itcode, ittva, ittvaval, itbasetva)

5. Mise a jour des totaux invoicehead :
   UPDATE invoicehead SET ihsalval, ihtvaval, ihtotval, ihristval, ihesctval

6. Generation ecritures comptables (invoicecpt) :
   - Verification du parametre ifcpt.icvalc (interface comptable active)
   - Parametre TRFVAL0 : gerer ou non les lignes a 0
   - Pour chaque combinaison (compte vente + taux TVA) :
     INSERT INTO invoicecpt (iccode, iccptsal, ictva, icbasval, iccurbasval, ictvaval, iccurtvaval)
   - Gestion des ecarts d'arrondi sur la derniere ligne

7. Commit ou Rollback selon le resultat
```

### Hook de personnalisation

Avant le recalcul, un evenement `ue_InvSalCalc_BeforeReCalc` est declenche via `nvo_Xtra_Specific`, permettant des modifications avant calcul (module `_sysxtra`).

### Table tvalvl et tvalvl_country

La table `tvalvl` definit les types de TVA :

| Colonne | Type | Description |
|---------|------|-------------|
| `ttcode` | char(1) | Code type TVA (cle) |
| `ttdesc` | char(10) | Description du type |
| `ttpos` | numeric(2) | Position d'affichage |
| `ttdefault` | char(1) | Type par defaut |

La table `tvalvl_country` associe un taux reel par pays :

| Colonne | Type | Description |
|---------|------|-------------|
| `tccode` | char(1) | Code type TVA (FK `tvalvl`) |
| `tccountry` | char(2) | Code pays (FK `country`) |
| `tclvl` | numeric(4,2) | **Taux TVA effectif** (ex: 21.00 pour 21%) |
| `tclinkcomptapratic` | varchar(5) | Lien compte comptable pratique |
| `tcprestalvl` | char(1) | Niveau TVA prestation |

### Types de TVA (ihtyptva)

La colonne `ihtyptva` de `invoicehead` determine le regime TVA applicable. Les valeurs courantes :

| Code | Description | Effet |
|------|-------------|-------|
| `1` | TVA nationale normale | Taux du pays de la societe |
| `3` | Intra-communautaire | TVA a 0% (autoliquidation) |
| `4` | Export hors UE | TVA a 0% |
| `6` | Cocontractant | TVA inversee |

---

## Export comptable (invoicecpt -> ifcpt)

### Table invoicecpt

La table `invoicecpt` pre-calcule les ecritures comptables lors du calcul facture :

| Colonne | Type | Description |
|---------|------|-------------|
| `iccode` | numeric(6) | Numero facture (PK partielle) |
| `iccptsal` | varchar(12) | **Compte comptable de vente** (PK partielle) |
| `ictva` | numeric(6,4) | **Taux de TVA** (PK partielle) |
| `icbasval` | numeric(8,2) | Montant base HT (devise societe) |
| `iccurbasval` | numeric(8,2) | Montant base HT (devise facture) |
| `ictvaval` | numeric(8,2) | Montant TVA (devise societe) |
| `iccurtvaval` | numeric(8,2) | Montant TVA (devise facture) |

### Processus d'export

```
1. invoicesalecalc() genere les lignes invoicecpt
   - Ventilation par compte de vente (ilcptsal) et taux TVA (iltva)
   - Gestion des devises (montants devise societe + devise facture)
   - Correction des ecarts d'arrondi (ldec_Diff, ldec_CurDiff)

2. Module _ifcpt : interface comptable
   - gf_invhdinfo_load() : charge les infos facture pour transfert
   - Parametre TRFVAL0 (progparam) : inclure ou non les lignes a montant 0

3. Types TVA speciaux (3, 4, 6) avec devise etrangere :
   - L'ecart d'arrondi est impute sur icbasval/iccurbasval
   - Pour les autres types : ecart impute sur ictvaval/iccurtvaval

4. d_qry_invcpt_print : impression du journal comptable des factures
```

### Affacturage (factoring)

Le module `nvo_factoring` dans `_ifcpt` gere l'affacturage :
- Identifie les factures (`ihtypinv = '1'` -> `'F'`) et notes de credit (`'C'`)
- Exporte les donnees vers le systeme d'affacturage avec les montants TTC, devises, echeances

---

## Statuts de facture (ihstatus)

| Code | Libelle | Description |
|------|---------|-------------|
| `1` | Creee | Facture creee, en edition |
| `3` | Editee | Facture editee/validee |
| `5` | A comptabiliser | Prete pour le transfert comptable |
| `7` | En compta | Transferee dans le systeme comptable |
| `8` | _(archive)_ | Statut final / cloturee |

La progression des statuts est lineaire : 1 -> 3 -> 5 -> 7 -> 8. La fenetre `w_invoices_qry` permet de modifier le statut via `wf_modifstatus(string as_status)`.

### Statuts Peppol (ihstatusbabelway)

Pour les factures electroniques Peppol, un statut supplementaire est gere :

| Statut | Description |
|--------|-------------|
| _(vide)_ | Non envoyee |
| `IN_DELIVERY` | En cours d'envoi |
| `IN_PROGRESS` | En cours de traitement |
| `SUCCESS` | Envoyee avec succes |
| `ERROR` | Erreur d'envoi |
| `ERROR_CLOSED` | Erreur cloturee |

---

## Impression facture

### Modeles d'impression

PMIX propose de nombreux modeles de facture via des DataWindows d'impression :

| DataWindow | Description |
|------------|-------------|
| `d_invoice_print` | Modele standard |
| `d_invoice2_print` | Variante standard 2 |
| `d_invoice_m1_print` | Modele special M1 |
| `d_invoice_mod1_print` a `d_invoice_mod15_print` | 15 modeles personnalisables |
| `d_invoice_mod99_print` | Modele personnalise 99 |
| `d_invoice_prep_print` | Impression preparation facture |
| `d_invoice_prep_mod1_print` / `_mod2_print` | Variantes impression preparation |
| `d_invoice_ctrl_print` | Impression de controle |
| `d_invoice_af_fc_print` | Impression affacturage |
| `d_invremind_print` / `_mod1_print` | Impression rappels de paiement |
| `d_inv_followup_print` | Impression suivi factures |
| `d_inv_paid_print` | Impression paiements |

### Fonctions d'impression

La fenetre `w_invoices_print` contient :
- `wf_invoiceprint()` : impression papier standard
- `wf_invoiceprint_auto()` : impression automatique (lot)
- `wf_invoicepdf()` : generation PDF
- `wf_invoicepdf_auto()` : generation PDF automatique (lot)
- `wf_print_pdf()` : envoi du PDF genere
- `select_report()` : selection du modele d'impression

Lors de l'impression, le statut `ihprint` passe a `'Y'`.

### Facturation electronique

- **PDF par email** (`w_invoices_pdf`) : generation PDF + envoi par email via `nvo_mail`
- **Peppol** (`w_invoices_peppol`) : generation XML UBL + envoi via Babelway
  - `wf_check_babelway()` : validation parametres Babelway
  - `wf_check_tva_xml()` : validation TVA du XML
  - Statut suivi via `ihstatusbabelway`, `ihkeybabelway`, `iherrorbabelway`

---

## Points d'attention

### Regles metier critiques

1. **Parametre SINVESCT1** : determine si l'escompte affecte ou non la TVA -- impact direct sur les montants. Verification dans `progparam` a chaque calcul.

2. **Periode comptable** : la date de facture doit correspondre a une periode comptable ouverte. La fonction `wf_check_dateperiod()` est presente dans toutes les fenetres de creation.

3. **Multi-company** : les colonnes `ihcodemc` et `ihmccode` gerent la multi-societe. L'index unique `idx_multico (ihcodemc, ihmccode, ihtypinv)` empeche les doublons.

4. **Communication structuree** (`ihstructcom`) : numero de paiement structure pour les virements bancaires belges.

5. **Recalcul systematique** : toute modification de ligne doit etre suivie d'un appel a `invoicesalecalc()` pour recalculer TVA, totaux et ecritures comptables.

6. **Tracabilite commande/livraison** : chaque ligne facture conserve les references `ilsalorder/ilsalline` (commande) et `ilshiporder/ilshipline` (livraison). Le flag `shipline.slinv` passe de `'N'` a `'Y'` a la facturation.

7. **Hook personnalisation** : le `nvo_Xtra_Specific.ue_InvSalCalc_BeforeReCalc` permet d'injecter une logique metier avant chaque recalcul.

### Erreurs courantes

- **Lignes a 0** : par defaut, les lignes a montant 0 ne sont PAS generees dans `invoicecpt`. Le parametre `TRFVAL0` dans `progparam` permet de forcer leur inclusion.
- **Ecarts d'arrondi en devise** : le code gere explicitement les differences d'arrondi (`ldec_Diff`, `ldec_CurDiff`) en les reportant sur la derniere ecriture comptable.
- **Reactivation de livraisons** : `d_invoice_reactivate` permet de trouver les livraisons marquees facturees (`slinv = 'Y'`) mais sans numero de facture (`slinvno = 0`).

### Parametres progparam lies a la facturation

| Code | Description |
|------|-------------|
| `SINVESCT1` | Methode de calcul escompte/TVA (1 = escompte hors TVA) |
| `TRFVAL0` | Inclure les lignes a 0 dans invoicecpt |
| `NUMINNC` | Numerotation interne notes de credit |
| `MULTICO` | Mode multi-company actif (1 = oui) |
| `ADINVTO` | Adresse de facturation alternative |
| `INVDYMAX` | Nombre max de jours d'ecart pour la date facture |
| `ITUMTRF` | Tarification en unite de mesure alternative |

---

## Fenetres depreciees

### w_inv_directsal — Vente directe sur stock

**Statut** : **DEPRECIE** — sera supprime dans la version 8.

**Probleme** : La fenetre `w_inv_directsal` (facture de vente directe sans commande prealable) **ne fonctionne pas correctement** et est programmee pour suppression prochaine.

**Symptomes** :
- Le DDDW (DropDown DataWindow) pour la selection client a `dddw.allowedit=no`
- La colonne `displaycolumn` "desc" n'existe **pas** dans le SELECT du DDDW, causant un affichage vide
- Impossible de selectionner un client ou un article via l'interface

**Recommandation** : Utiliser le flux standard **Commande -> Expedition -> Facture** (w_invoice_prep) a la place.

### Proprietes DDDW non-editables

Les DataWindows contenant un **DropDown DataWindow (DDDW) avec `dddw.allowedit=no`** ne permettent **pas** la saisie libre dans le champ Edit interne. L'utilisateur est force de selectionner une valeur dans la liste deroulante. Si la liste est vide ou le filtre trop restrictif, aucune selection n'est possible et les evenements PB (`itemchanged`) ne se declenchent pas.

---

## Prerequis de donnees

### Donnees necessaires par flux

#### Flux standard (Commande → Expedition → Facture)

- **Client actif** : `adresses.adactiv = 'Y'`, code client valide
- **Article vendable** : `items.itsale = 'Y'` (peut etre vendu)
- **Commande de vente** : `salhead` avec `salline` contenant l'article
- **Expedition** : `shiphead` + `shipline` marquee comme expedited (`slinv = 'N'` = non encore facturee)
- **Lot** (si gestion par lot) : `lots.ltcode` + `stock` avec quantite disponible

#### Fenetre Maintenance facturation (w_invoices)

- **Filtre statut** : `ihstatus BETWEEN '1' AND '5'` — seuls les statuts 1, 2, 3, 4, 5 sont visibles
- **Periode comptable** : la fenetre filtre par periode ouverte. Sur base demo : `'202202'`
- Les factures avec `ihstatus = 'M'` ou autres valeurs hors plage **n'apparaissent pas**

#### Fenetre Vente directe (w_inv_directsal) — DEPRECIE

- **Article** : `items.itsale = 'Y'` (vendable) ET `items.itactiv = 'Y'` (actif) ET `items.itcode NOT LIKE '###########%'`
- Si aucun article ne satisfait ces 3 conditions, la liste est **vide** et aucune vente n'est possible

### Valeurs par defaut recommandees

Lors de la creation manuelle d'une facture via SQL ou API, utiliser les **valeurs par defaut** suivantes pour assurer la visibilite dans l'UI :

| Colonne | Valeur par defaut | Explication |
|---------|:---:|---|
| `ihstatus` | `'1'` | Statut "Creee" — facture visible dans w_invoices |
| `ihcptper` | `'202202'` | Periode comptable ouverte (base demo) |
| `ihcurr` | `'EUR'` | Devise euros (voir parametres application) |
| `ihtypinv` | `'I'` | Type facture standard (I=Inventaire, voir valeurs valides) |
| `ihprint` | `'N'` | Non imprimee |
| `ihpaid` | `'N'` | Non payee |

### Determination de la periode par defaut

La fenetre `w_invoices` determine la periode par defaut en cherchant **la derniere periode comptable ouverte** au moment de l'ouverture. Sur la base de demo (PMIX 9.1) :

- Periode par defaut : `'202202'` (fevrier 2022)
- Peut varier selon la configuration de gestion comptable
- Se verifier via SQL : `SELECT * FROM jourComptable ORDER BY jcper DESC LIMIT 1;` (ou table equivalente)

Lors de la creation de donnees de test, toujours utiliser la periode **ouverte courante** pour `ihcptper`.

---

## Statuts de facture (ihstatus)

| Valeur | Libelle | Description | Visible dans w_invoices |
|:---:|---|---|:---:|
| `1` | Creee | Facture creee, en edition, pas encore validee | **OUI** |
| `2` | Imprimee | Facture imprimee | **OUI** |
| `3` | Officielle | Facture validee/officialisee | **OUI** |
| `4` | Exportee compta | Transferee vers la comptabilite | **OUI** |
| `5` | Payee | Facture payee | **OUI** |
| `M` | Modifiee (?) | Statut intermediaire (raison inconnue) | **NON** |
| _(autres)_ | -- | -- | **NON** |

**Regles de filtrage** :
- La fenetre `w_invoices` appelle `dw_invhead_sel.retrieve('1','5')` qui genere le filtre SQL : `ihstatus BETWEEN '1' AND '5'`
- Les factures avec `ihstatus = 'M'` sont **exclues** car `'M'` > `'5'` en comparaison ASCII
- Les factures avec tout autre statut sont egalement **exclues** de la liste d'affichage
- Cette plage ('1' a '5') est **fixe** dans le code et ne peut pas etre modifiee depuis l'UI

**Consequence** : Lors de la creation de factures de test via SQL, utiliser **obligatoirement** l'une des valeurs `'1'`, `'2'`, `'3'`, `'4'` ou `'5'` pour `ihstatus`.

---

## Noms exacts des fenetres

### Fenetres de facturation — Noms corrects

| Objet | Module | Description |
|-------|--------|-------------|
| `w_invoices` | `Shared_peppol` | Liste/maintenance factures |
| `w_invhead_update` | `_sales` | Detail/modification en-tete facture |
| `w_invoice_prep` | `_sales` | Preparation factures depuis livraisons |
| `w_inv_paid` | `_sales` | Situation paiements clients |
| `w_inv_directsal` | `_sales` | **DEPRECIE** — Vente directe |
| `w_invoices_create` | `_sales` | Creation factures (interface creation) |

**Attention** : Le nom correct est **`w_invhead_update`**, pas `w_invoices_update` (ce dernier n'existe pas).

---

## Recherche rapide

### Par besoin fonctionnel

| Besoin | Ou chercher |
|--------|-------------|
| Creer une facture depuis livraisons | `w_invoice_prep`, `wf_createinvoice()` |
| Creer une facture directe | `w_inv_directsal`, `addinvoicerow()` |
| Modifier un en-tete facture | `w_invhead_update`, `d_invhead_update` |
| Modifier une ligne facture | `w_invlines_update`, `w_invline*_update` |
| Calculer/recalculer une facture | `invoicesalecalc()`, `invoicesalecalc_m1()`, `invoicesalecalc_m()` |
| Imprimer une facture | `w_invoices_print`, `d_invoice_print`, `d_invoice_mod*_print` |
| Generer un PDF facture | `w_invoices_pdf`, `wf_create_pfd()` |
| Envoyer par Peppol | `w_invoices_peppol`, `wf_expfactelect()` |
| Gerer les paiements | `w_inv_paid`, `d_invpaid_update` |
| Envoyer des rappels | `w_inv_remind`, `d_invremind_custlist` |
| Facturer les abonnements | `w_subscritpion_billing`, `SUBHEAD`, `SUBINVOICE` |
| Voir les ecritures comptables | `d_qry_invcpt_print`, `invoicecpt` |
| Facturer un projet | `w_invoices_extraction`, `wf_createinvoice()` |
| Creer une proforma | `w_invoices_extraction.wf_createproforma()`, `profohead` |
| Export EDI factures | `w_invedi_exp`, `gf_geteinvoicefilename()` |
| Rechercher une facture | `w_invoice_sqlsearch`, `d_invhead_sqlsearch` |
| Gerer les ristournes | `w_invrist`, `d_invrist` |
| Modifier la TVA | `w_invoice_tvamodify` |

### Par table

| Table | Fenetres principales | DataWindows principales |
|-------|---------------------|------------------------|
| `invoicehead` | `w_invoices`, `w_invhead_update`, `w_invoice_prep` | `d_invhead_sel`, `d_invhead_update`, `d_invhead_qrysel` |
| `invoiceline` | `w_invlines_update`, `w_invline*_update` | `d_invline_sel`, `d_invlines_update`, `d_invlinea_update` |
| `invoicetva` | _(gere par invoicesalecalc)_ | `d_invoice_tva_subprint` |
| `invoicecpt` | _(gere par invoicesalecalc)_ | `d_qry_invcpt_print` |
| `profohead` | `w_proformas_histo` | `d_invoicesproforma_pdf` |
| `SUBHEAD` | `w_subhead_list`, `w_sub_update` | _(dans _devis)_ |
| `SUBINVOICE` | `w_subscritpion_billing` | _(dans _devis)_ |

### Par module

| Module | Objets facturation |
|--------|--------------------|
| `_sales` | Fenetres facture (w_inv*), fonctions calcul, DataWindows update/selection |
| `_ifcpt` | Paiements (w_inv_paid*), rappels (w_inv_remind), interface comptable |
| `_prints_std` | DataWindow impression standard (d_invoice_print, d_invoice2_print) |
| `_prints_mod` | 15+ modeles impression personnalises (d_invoice_mod*_print) |
| `_prints_qry` | Impressions requetes comptables (d_qry_invcpt_print) |
| `cust_peppol` | PDF + Peppol (w_invoices_pdf, w_invoices_peppol) |
| `_edilink` | Export EDI (w_invedi_exp, w_invoicesproforma_pdf) |
| `_projects` | Facturation projets (w_invoices_extraction) |
| `_devis` | Abonnements (w_subhead_list, w_subscritpion_billing) |
| `_sales_cash` | Caisse (w_invoice_cash) |
| `_sales_crm` | Statistiques ventes CRM (w_crm_stat_sales) |
| `_query` | Intrastat ventes, requetes factures |
