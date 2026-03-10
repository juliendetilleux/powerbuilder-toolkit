# 18 - Integrations externes

## Vue d'ensemble

PmiGest ERP dispose de plusieurs modules d'integration avec des systemes externes : echanges EDI avec les partenaires commerciaux, facturation electronique Peppol via Babelway, expedition FedEx, transferts FTP, envoi d'emails SMTP, API REST PmiEngine, validation TVA VIES, interface WMS (gestion d'entrepot), et import de commandes web.

### Modules d'integration

| Module | Bibliotheque | Objets | Role |
|--------|-------------|--------|------|
| EDI | `_edilink` | 85 (13 fenetres, 59 DW, 10 UO, 2 fonctions, 1 menu) | Echanges electroniques de donnees |
| Peppol | `Shared_peppol` | 31 (6 fenetres, 9 DW, 13 UO, 2 structures, 1 menu) | Facturation electronique |
| Peppol (client) | `cust_peppol` | ~10 (fenetres + DW) | Implementation client Peppol/Babelway |
| FedEx | `_fedex` | 205 (3 fenetres, 8 DW, 194 UO) | Integration expedition FedEx |
| FTP | `_ftp` | 28 (8 fenetres, 1 DW, 15 UO, 2 structures, 2 menus) | Client FTP integre |
| Email | `Shared_mail` | 5 (2 fenetres, 1 DW, 2 UO) | Envoi d'emails |
| API PmiEngine | `Shared_PmiEngineAPI` | 4 (2 fenetres, 2 UO) | API REST PmiEngine |
| Validation TVA | `_webservicevat` | 6 (2 fonctions, 4 structures) | Validation numero TVA VIES |
| WMS | `_system` | ~6 (1 fenetre, 2 DW, 2 NVO) | Interface entrepot WMS |

---

## EDI - Echanges Electroniques de Donnees

### Description

Le module `_edilink` gere les echanges EDI classiques avec les partenaires commerciaux. Il supporte l'import de commandes clients (ORDERS), l'export de factures (INVOIC), l'import/export d'avis d'expedition (DESADV), et l'envoi de commandes d'achat aux fournisseurs.

### Objet principal : nvo_edi_transfert

L'objet `nvo_edi_transfert` (27 342 lignes, module `_edilink`) est le moteur central des echanges EDI. Il herite de `nv_nonvisualobject` et gere toute la logique de transfert.

**Fonctions principales :**

| Fonction | Role |
|----------|------|
| `uof_edifileimport(as_path, as_filename, ab_interactiv)` | Import d'un fichier EDI |
| `uof_ediimportfiles(ab_interactiv)` | Import de tous les fichiers EDI en attente |
| `uof_createedi_sale(ab_interactiv)` | Creation commande vente depuis EDI |
| `uof_create_edisalhead(...)` | Creation en-tete commande EDI (16 parametres) |
| `uof_create_edisalline(...)` | Creation ligne commande EDI (15 parametres) |
| `uof_send_cmdpur(al_purhead, as_message)` | Envoi commande achat EDI |
| `uof_extimportfiles(ab_interactiv)` | Import fichiers externes |
| `uof_extfilesales(ab_interactiv)` | Export fichiers vente |
| `uof_clotedihead(as_envsend, as_headref)` | Cloture en-tete EDI |
| `uof_datacontrol()` | Controle des donnees |
| `uof_search_path_edilink(al_seq, as_path, as_error)` | Recherche chemin EDI |

**Events de messages EDI :**

| Event | Type de message |
|-------|----------------|
| `invoice_01` a `invoice_12` | Generation factures EDI (INVOIC) |
| `desadv_01` a `desadv_04` | Avis d'expedition (DESADV) |
| `purchase_01` | Commande achat EDI |

**Variables d'instance cles :**
- `istr_variables` (gstr_specific) -- structure de passage de parametres
- `is_ErrMess`, `is_InfoLess` -- messages d'erreur/info
- `is_CustCode`, `is_Curr` -- code client et devise
- `is_path`, `is_path_ext_import`, `is_path_ext_export` -- chemins de fichiers

### Surcharge client : nvo_xtra_edi_transfert

L'objet `nvo_xtra_edi_transfert` (module `_sysxtra`) herite de `nvo_edi_transfert` et permet des surcharges specifiques au client. C'est cette classe qui est instanciee dans le code metier :

```powerscript
nvo_xtra_edi_transfert lnvo_edi_transfert
lnvo_edi_transfert = Create nvo_xtra_edi_transfert
li_ret = lnvo_edi_transfert.uof_send_cmdpur(ll_phcode, ls_message)
destroy lnvo_edi_transfert
```

Utilise dans : `w_purchase_unif`, `w_purchaselimite`, `w_purchase`, `w_sales_shipnotice`.

### Import DESADV : nvo_edi_import_desadv

L'objet `nvo_edi_import_desadv` (1 913 lignes, module `_edilink`) gere l'import des avis d'expedition fournisseur.

**Fonctions principales :**

| Fonction | Role |
|----------|------|
| `uof_import_files()` | Import de tous les fichiers DESADV |
| `uof_import_file(as_pathfile, ai_type)` | Import d'un fichier DESADV |
| `uof_import_line(as_tabline[], al_line, as_pathfile, al_ed_id)` | Import d'une ligne |
| `uof_import_line_tabsep(...)` | Import ligne avec separateur tabulation |
| `uof_check_file(as_filename, adt_lastintegration, as_ref)` | Verification fichier |
| `uof_check_gln(as_gln, ai_typ_socity, as_adcode)` | Verification code GLN |
| `uof_check_ref(as_ref, al_purhead, as_file_ref, as_phcntref)` | Verification reference |
| `uof_check_gtin_in_itemsonly(as_gtin, as_itcode, ad_coef)` | Verification GTIN article |
| `uof_check_desadv_imported(al_ed_id, as_anomaly)` | Verification import DESADV |
| `uof_recept_prepare_desadv_imported(al_ed_id)` | Preparation reception DESADV |
| `uof_cancel_pur_edihead(al_ed_id)` | Annulation en-tete EDI achat |
| `uof_print_anomaly()` | Impression des anomalies |

### Fenetres EDI

| Fenetre | Module | Ancestor | Role |
|---------|--------|----------|------|
| `w_edi_order` | `_edilink` | -- | Import commandes EDI clients |
| `w_edi_purchase` | `_edilink` | -- | Import commandes achat EDI fournisseurs |
| `w_edi_transactions` | `_edilink` | `w_response` | Historique/suivi des transactions EDI |

**Acces menu** : `w_edi_order` est accessible depuis le menu vente (`m_popordr`) et depuis `w_sales`. `w_edi_purchase` est accessible depuis le menu achat.

### Taches planifiees EDI

L'objet `nvo_planifiedtask` (module `_system`) peut executer des imports EDI automatiques. En cas d'erreur, un email est envoye a `support@pmigest.be` via `nvo_mail`.

---

## Peppol - Facturation Electronique

### Description

PmiGest supporte la facturation electronique au format Peppol/UBL via la plateforme Babelway. La configuration se fait dans `Shared_peppol` et l'implementation metier dans `cust_peppol`.

### Flux Peppol

1. **Configuration** : Parametrage Babelway dans `w_peppol`, endpoints Peppol dans `adresses`
2. **Selection factures** : `w_invoices_peppol` avec `d_invhead_sel_peppol`
3. **Generation XML** : Fonction `wf_expfactelect` genere le fichier UBL/XML via `d_invoicexml_print`
4. **Envoi Babelway** : Transmission via API REST Babelway (HttpClient)
5. **Suivi statut** : Verification periodique via `wf_check_babelway()`
6. **Marquage** : `wf_sended()` marque les factures envoyees

### Fenetre principale : w_invoices_peppol

La fenetre `w_invoices_peppol` (module `cust_peppol`, herite de `w_response`, ~1600 lignes) est le point central de l'envoi Peppol.

**Variables d'instance cles :**
- `invo_mail` (nvo_mail) -- objet d'envoi email
- `ds_param_babelway` (DataStore) -- parametres Babelway (DataObject: `d_param_babelway`)

**Fonctions cles :**

| Fonction | Role |
|----------|------|
| `wf_expfactelect()` | Generation fichier XML UBL |
| `wf_check_babelway()` | Verification statut sur Babelway |
| `wf_get_param_babelway(as_type, as_key)` | Lecture parametre Babelway |
| `wf_sended()` | Marquage factures comme envoyees |

**Parametres Babelway** (table `babelway`, lus via `d_param_babelway`) :

| Cle | Usage |
|-----|-------|
| `GET_USERNAME` | Identifiant API Babelway |
| `GET_PASSWORD` | Mot de passe API Babelway |
| `GET_URL` | URL de base API REST |
| `GET_HUB` | Identifiant hub Babelway |

### Statuts Peppol

Les statuts sont stockes dans `invoicehead.ihstatusbabelway` :

| Statut | Description |
|--------|-------------|
| `IN_PROGRESS` | En cours de traitement par Babelway |
| `IN_DELIVERY` | En cours de livraison au destinataire |
| `DELIVERED` | Facture livree avec succes |
| `ERROR` | Erreur de transmission |

Champs complementaires sur `invoicehead` :
- `ihkeybabelway` -- cle unique Babelway pour suivi
- `iherrorbabelway` -- message d'erreur Babelway
- `ihtypinv` -- type de facture
- `adptinvoice` -- modele d'impression (sur table `adresses`)

### Envoi PDF par email : w_invoices_pdf

Alternative a Peppol : la fenetre `w_invoices_pdf` (module `cust_peppol`) permet l'envoi de factures au format PDF par email. Utilise `nvo_mail.uf_sendmail()` et le meme DataWindow de selection `d_invhead_sel_peppol`.

### Fenetres Peppol

| Fenetre | Module | Role |
|---------|--------|------|
| `w_peppol` | `cust_peppol` | Configuration Peppol / gestion endpoints |
| `w_invoices_peppol` | `cust_peppol` | Envoi factures Peppol (~1600 lignes) |
| `w_invoices_pdf` | `cust_peppol` | Envoi factures PDF par email |
| `w_print` | `cust_peppol` | Impression / generation PDF |
| `w_adresse_sqlsearch` | `Shared_peppol` | Recherche adresse Peppol |
| `w_adresse_sqlsearch_multi` | `Shared_peppol` | Recherche adresse multiple (~1700 lignes) |

### DataWindows Peppol

| DataWindow | Module | Role |
|------------|--------|------|
| `d_invhead_sel_peppol` | `cust_peppol` | Selection factures pour envoi |
| `d_invhead_sel_peppol_success` | `cust_peppol` | Liste factures envoyees avec succes |
| `d_invoicexml_print` | `cust_peppol` | Generation XML facture UBL |
| `d_param_babelway` | `cust_peppol` | Parametres connexion Babelway |

---

## FedEx - Integration Expedition

### Description

Le module `_fedex` (205 objets) fournit l'integration avec le service d'expedition FedEx via SOAP Web Services. Il permet de creer des expeditions, generer des etiquettes ZPL/PDF, et suivre les couts.

### Objet principal : uo_fedex

L'objet `uo_fedex` (1 739 lignes, module `_fedex`) herite de `uo_a_pmi` et gere toute la communication avec l'API FedEx.

**Fonctions principales :**

| Fonction | Role |
|----------|------|
| `createshipmentrequest(request)` | Creation requete d'expedition |
| `setclientdetail(request)` | Configuration details client |
| `setwebauthenticationdetail(request)` | Authentification web FedEx |
| `setsender(request)` | Configuration expediteur |
| `setrecipient(request)` | Configuration destinataire |
| `setshipmentdetails(request)` | Details de l'expedition |
| `setpayment(request)` | Configuration paiement |
| `setlabeldetails(request)` | Configuration etiquettes |
| `setcustomsclearancedetails(request)` | Details douane |
| `setcommoditydetails(request)` | Details marchandises |
| `setpackagelineitems(request)` | Lignes de colis |
| `settransactiondetail(request)` | Details transaction |
| `of_getfedex(al_sgshiphead, as_mastertrackingid)` | Recuperation infos FedEx |
| `of_printpdf(al_reply)` | Impression etiquette PDF |
| `of_showpdf(al_reply)` | Affichage etiquette PDF |
| `of_getpdf(al_reply, as_filename)` | Export etiquette PDF |
| `of_gettrackingnumber(al_reply, as_master, as_tracking)` | Recuperation numero suivi |
| `of_initconstant()` | Initialisation constantes FedEx |
| `of_initparameter()` | Initialisation parametres FedEx |
| `of_getparameter(as_name, as_return)` | Lecture parametre |
| `of_adderror(al_errornumber, as_errormessage, as_errorfunction)` | Gestion erreurs |

**Variables d'instance :**
- `soap_connect` (soapconnection) -- connexion SOAP FedEx
- `iws_trackingid_master` (ws_trackingid) -- tracking ID master
- `is_current_adcode` (String) -- code adresse courante

**Structure de requete** : `ws_processshipmentrequest` -- structure passee a toutes les fonctions de configuration.

### Integration avec les expeditions

Le module FedEx est appele depuis `nvo_ship` (module `_sales`) :
- `uof_ctrl_fedex_shipval(al_shiphead)` -- controle valeur expedition
- `uof_fedex_ship_val_0_init(al_shiphead)` -- initialisation valeur a 0
- Ouvre `w_Fedex_ShipManVal_Input` pour saisie manuelle des valeurs

### Fenetre FedEx

| Fenetre | Module | Ancestor | Role |
|---------|--------|----------|------|
| `w_fedex_shipmanval_input` | `_fedex` | `w_response_dw` | Saisie manuelle valeur expedition |

### Tables FedEx

| Table | Colonnes cles | Role |
|-------|--------------|------|
| `fedex_parameter` | `id_parameter`, `name`, `value`, `isconstant` | Parametres de configuration FedEx |
| `fedex_pdf` | `mastertrackingid` (PK), `trackingnumber` (PK), `stringbarcodes` | Stockage etiquettes PDF/ZPL |
| `fedex_payment` | `mastertrackingid` (PK), `totalbillingweight`, `totalbasecharge`, `totalnetfreight`, `totalsurcharges`, `totalnetfedexcharge`, `totaltaxes`, `totalnetcharge`, `totaldutiesandtaxes`, etc. | Couts et paiements FedEx |
| `fedex_constant` | -- | Constantes FedEx |

### DataWindows FedEx

| DataWindow | Table source | Role |
|------------|-------------|------|
| `d_fedex_parameter` | `fedex_parameter` | Parametres FedEx |
| `d_fedex_constant` | `fedex_constant` | Constantes FedEx |
| `d_fedex_pdf` | `fedex_pdf` | Etiquettes PDF |
| `d_fedex_payment` | `fedex_payment` | Paiements FedEx |
| `d_fedex_select_salhead` | `salhead` | Selection commandes pour expedition |

### Structures FedEx (194 user objects)

Le module `_fedex` contient 194 user objects, principalement des structures de donnees mappant l'API SOAP FedEx : `ws_processshipmentrequest`, `ws_trackingid`, `ws_completedshipmentdetail`, etc.

---

## FTP - Transferts de Fichiers

### Description

Le module `_ftp` (28 objets) fournit un client FTP integre avec interface graphique permettant le transfert de fichiers entre PmiGest et des serveurs distants. Utilise pour les echanges EDI, WMS, et autres transferts de donnees.

### Architecture

- **Fenetre principale** : `w_ftp_main` (herite de `w_mdihelp`) -- interface FTP complete avec panneaux local/distant
- **Profils** : `w_profiles` -- gestion des profils de connexion FTP
- **Objet application** : `n_ftpapp` -- gestion de l'application FTP (variable globale `gn_ftpapp`)
- **Variable globale** : `gw_ftpframe` -- reference a la fenetre principale FTP

### Fenetres FTP

| Fenetre | Ancestor | Role |
|---------|----------|------|
| `w_ftp_main` | `w_mdihelp` | Fenetre principale FTP (panneaux local + distant) |
| `w_profiles` | -- | Gestion des profils de connexion |
| `w_createdir` | -- | Creation de repertoire distant |
| `w_command` | -- | Envoi de commandes FTP brutes |

**Composants de w_ftp_main :**
- `uo_local` (u_panel_local) -- panneau fichiers locaux
- `uo_remote` (u_panel_remote) -- panneau fichiers distants
- `lb_msgbox` -- journal des messages
- `st_vertical`, `st_horizontal` -- barres de separation

**Acces menu** : `m_action` → `gn_open.fn_open(w_ftp_main, true, parentwindow)`

### Table ftphead

Configuration des connexions FTP :

| Colonne | Type | Description |
|---------|------|-------------|
| `fhpk` | numeric(3) | Cle primaire |
| `fhprofile` | char(15) | Nom du profil **(PK)** |
| `fhserv` | char(15) | Serveur FTP |
| `fhusrid` | char(10) | Identifiant utilisateur |
| `fhpassw` | char(10) | Mot de passe |
| `fhinitdir` | char(20) | Repertoire initial |
| `fhport` | numeric(5) | Port |
| `fhanonym` | char(1) | Connexion anonyme |
| `fhpassiv` | char(1) | Mode passif |

---

## Email - Envoi SMTP

### Description

Le systeme d'email de PmiGest repose sur deux couches : `nvo_mail` (couche metier, module `Shared_mail`) et `n_smtp` (couche transport, module `_system`).

### Objet metier : nvo_mail

L'objet `nvo_mail` (1 614 lignes, module `Shared_mail`) herite de `nv_nonvisualobject` et fournit l'API d'envoi d'emails utilisee dans tout PmiGest.

**Fonctions principales :**

| Fonction | Parametres | Role |
|----------|-----------|------|
| `uf_sendmail` | `as_errormsg, as_subject, as_content_type, as_content, as_recipient, as_sender` | Envoi simple |
| `uf_sendmail` | `+ as_attachment, as_cc, as_bcc, as_mccode` | Envoi avec pieces jointes, CC, BCC |
| `uf_sendmail` | `+ ab_withquestion_lenattachment` | Envoi avec confirmation taille PJ |
| `uf_new_sendmail` | `+ as_contenttext` | Nouvelle version envoi (contenu texte + HTML) |
| `uf_sendmail_fromaction` | `as_status, al_aacode, ab_showmsg` | Envoi depuis une action CRM |
| `uf_regroup_attachment` | `as_tabfiles[], as_attachment[]` | Regroupement pieces jointes |
| `uf_get_last_eml` | -- | Recuperation dernier fichier .eml |

**Variables d'instance :**
- `gn_smtp` (n_smtp) -- objet SMTP sous-jacent
- `PBObject_SMTP` (OLEObject) -- objet OLE SMTP alternatif
- `is_SMTPTYPE` -- type de SMTP (natif ou OLE)
- `is_AUTOMAIL` -- mode envoi automatique
- `is_curr_usermail` -- email de l'utilisateur courant
- `ib_aknowledge` -- accuse de reception

**Utilisations principales :**
- `w_invoices_peppol` / `w_invoices_pdf` -- envoi factures par email
- `w_crm_outlook`, `w_crm_company_detail`, `w_crm_agenda_week/day` -- CRM
- `nvo_planifiedtask` -- envoi automatique (erreurs EDI, alertes lots)

### Couche transport : n_smtp

L'objet `n_smtp` (2 808 lignes, module `_system`) herite de `n_winsock` et implemente le protocole SMTP complet avec support TLS/SSL.

**Fonctions cles :**

| Fonction | Role |
|----------|------|
| `of_sendmail()` | Envoi email (non chiffre) |
| `of_sendtlsmail()` | Envoi email via STARTTLS |
| `of_sendsslmail()` | Envoi email via SSL |
| `of_setserver(as_server)` | Configuration serveur SMTP |
| `of_setport(aui_port)` | Configuration port |
| `of_setlogin(as_userid, as_passwd)` | Authentification |
| `of_setfrom(as_email, as_name)` | Expediteur |
| `of_addaddress(as_email)` | Ajout destinataire |
| `of_addcc(as_email)` | Ajout copie |
| `of_addbcc(as_email)` | Ajout copie cachee |
| `of_addattachment(as_filename)` | Ajout piece jointe |
| `of_setsubject(as_subject)` | Objet du message |
| `of_setbody(as_body, ab_html)` | Corps du message (texte ou HTML) |
| `of_validemail(as_email, as_errormsg)` | Validation format email |

### Table mailaccount

La table `mailaccount` stocke les comptes email :

| Colonne | Type | Description |
|---------|------|-------------|
| `maadress` | char(50) | Adresse email **(PK)** |
| `malogin` | char(50) | Login SMTP |
| `mapassword` | char(50) | Mot de passe SMTP |
| `mapop3` | char(50) | Serveur POP3 |
| `mamain` | char(1) | Compte principal |

Liaison utilisateurs via table `linkmaus` (lie `liuscode` utilisateur a `limacode` adresse email).

### DataWindows email

| DataWindow | Module | Role |
|------------|--------|------|
| `d_crm_mailaccount_update` | `_sales_crm` | Edition compte email |
| `d_crm_mailaccounts` | `_sales_crm` | Liste comptes email |
| `d_crm_mail_adress` | `_sales_crm` | Adresses email CRM |
| `ds_crm_mailaccount` | `_sales_crm` | DataStore compte email utilisateur |

---

## API PmiEngine

### Description

Le module `Shared_PmiEngineAPI` (4 objets) fournit une interface REST vers l'API PmiEngine pour l'authentification et les operations metier.

### Objet principal : nvo_pmiengineapi

L'objet `nvo_pmiengineapi` (332 lignes, module `Shared_PmiEngineAPI`) herite de `nv_nonvisualobject`.

**Fonctions :**

| Fonction | Role |
|----------|------|
| `sendrequest(as_method, as_endpoint, as_data)` | Envoi requete REST generique |
| `of_post_loginpmi(as_user, as_password, as_erreur)` | Authentification utilisateur PmiGest |
| `of_post_login(as_erreur)` | Login avec token courant |
| `of_convert_pw()` | Conversion mot de passe |

**Variables d'instance :**
- `Inv_HttpClient` (HttpClient) -- client HTTP PB natif
- `Is_base_url` (string) -- URL de base de l'API
- `Is_token_user` (string) -- token utilisateur
- `Is_token_password` (string) -- token mot de passe

**Utilisation** : Principalement dans `ws_password_newdesign` pour la validation d'authentification :

```powerscript
nvo_pmiengineapi lnvo_pmiengineapi
lnvo_pmiengineapi = create nvo_pmiengineapi
lb_login = lnvo_pmiengineapi.of_post_LoginPMI(Curr_User, Accessword, ls_erreur)
```

---

## Validation TVA VIES

### Description

Le module `_webservicevat` (6 objets : 2 fonctions, 4 structures) permet de valider les numeros de TVA intra-communautaires via le service web VIES de la Commission Europeenne.

### Fonction principale : f_checkvat

La fonction globale `f_checkvat` (91 lignes, module `_webservicevat`) appelle le service SOAP VIES.

**Signatures :**

| Signature | Role |
|-----------|------|
| `f_checkvat()` | Validation sans parametres (utilise variables globales) |
| `f_checkvat(as_countrycode, as_adtva, ad_now, ab_valid, as_message)` | Validation avec code pays et numero TVA |

**URL du service** : `http://ec.europa.eu/taxation_customs/vies/services/checkVatService`

**Protocole** : SOAP avec enveloppe XML (`soapenv:Envelope`, namespace `urn:ec.europa.eu:taxud:vies:services:checkVat:types`).

**Utilisation dans l'application :**
- `w_adresse_update` (module `_masters`) -- validation TVA lors de la saisie d'une fiche adresse
- `w_quick_directsales` (module `_sales_cash`) -- validation TVA en vente directe
- Message d'erreur : "Ce numero de tva n'est pas reference sur le site http://ec.europa.eu/taxation_customs/vies/"

---

## WMS - Warehouse Management System

### Description

PmiGest s'interface avec des systemes WMS externes (notamment EasyWMS) pour l'echange de donnees d'entrepot. Le systeme gere l'import de mouvements de stock et l'export de donnees maitres et de commandes.

### Objets WMS

| Objet | Module | Lignes | Role |
|-------|--------|--------|------|
| `nvo_import_wms` | `_system` | 3 335 | Import de donnees depuis le WMS |
| `nvo_export_wms` | `_system` | 2 768 | Export de donnees vers le WMS |
| `w_wms` | `_system` | -- | Fenetre de gestion WMS (herite de `w_response`) |

### Import WMS : nvo_import_wms

**Fonctions principales :**

| Fonction | Role |
|----------|------|
| `uof_import_files()` | Import de tous les fichiers WMS en attente |
| `uof_execute_wms()` | Execution des imports WMS |
| `uof_execute_ccs06_easywms(as_content, as_filename, al_fileline, as_message)` | Execution message CCS06 EasyWMS |
| `uof_execute_sto04_easywms(al_iw_id, as_content, ...)` | Execution message STO04 EasyWMS |
| `uof_finilize_sto(al_iw_id_sto)` | Finalisation mouvement stock |
| `uof_redesign(as_item, as_lot, as_status, ad_qty, as_newlot, as_error)` | Redesignation de lot |
| `uof_read_file_intotab(as_filename, as_lines[])` | Lecture fichier en tableau |

**Variables d'instance :**
- `is_type_WMS` -- type de WMS (ex: EasyWMS)
- `is_path_import`, `is_path_export` -- chemins import/export
- `is_location_wms` -- localisation WMS

### Export WMS : nvo_export_wms

**Fonctions principales :**

| Fonction | Role |
|----------|------|
| `uof_export_items()` / `uof_export_item(ai_file, as_item)` | Export articles |
| `uof_export_suppliers()` / `uof_export_supplier(ai_file, as_adcode)` | Export fournisseurs |
| `uof_export_custs()` / `uof_export_cust(ai_file, as_adcode)` | Export clients |
| `uof_export_sales()` / `uof_export_sale(ai_file, al_salhead)` | Export commandes vente |
| `uof_export_purs()` / `uof_export_pur(ai_file, al_purhead)` | Export commandes achat |
| `uof_export_ean_allitems()` / `uof_export_ean(ai_file, as_item)` | Export codes EAN |
| `uof_export_askstock_all(ai_file)` | Demande stock WMS |
| `uof_export_askstock_lot(ai_file, as_lot)` | Demande stock par lot |
| `uof_export_lotstatus(ai_file, as_lot, as_old_status)` | Export statut lot |
| `uof_export_sale_return(al_shiphead)` | Export retour expedition |
| `uof_export_lotsfrompurline(ai_file, al_purhead)` | Export lots depuis commande achat |

### Fenetre WMS : w_wms

La fenetre `w_wms` (module `_system`, herite de `w_response`) comprend :
- `tab_wms` -- onglets : erreurs, details, export EasyWMS
- `tabpage_error` -- affichage erreurs import (`dw_import_wms_errors` → `d_import_wms_error`)
- `tabpage_detail` -- details import (`dw_import_wms_details` → `d_import_wms_details`)
- `tabpage_export_easywms` -- boutons d'export EasyWMS (articles, fournisseurs, clients, commandes, EAN, stock, lots)
- `cb_import` -- bouton import
- `cb_execute` -- bouton execution
- `cb_delstock` -- suppression stock
- `uo_daterange` -- filtre par plage de dates

### Table import_wms

| Colonne | Type | Description |
|---------|------|-------------|
| `iw_id` | integer | Identifiant **(PK)** |
| `iw_filename` | varchar(1024) | Nom du fichier importe |
| `iw_fileline` | integer | Numero de ligne dans le fichier |
| `iw_date` | timestamp | Date d'import |
| `iw_status` | numeric(1) | Statut (0=en attente, 1=traite, 2=erreur) |
| `iw_content` | long varchar | Contenu de la ligne |
| `iw_message` | long varchar | Message de traitement/erreur |

**Relations** : `import_wms` est parent de `WMS_STO` (mouvements stock WMS).

### Types de messages WMS

| Code | Direction | Description |
|------|-----------|-------------|
| CCS06 | Import | Confirmation reception/mouvement stock |
| STO04 | Import | Mouvement stock entrepot |

### Acces menu WMS

Export WMS accessible depuis le menu achat (`m_xtra_popordr` dans `_sysxtra`) :
- `m_exportwms` -- export WMS commande achat
- `m_exportwms_purunifhead` -- export WMS commande unifiee
- `m_exporterverswms` -- export vers WMS

---

## Commandes Web (websalhead / websalline)

### Description

PmiGest peut importer des commandes provenant de plateformes web externes. Les commandes sont stockees dans les tables `websalhead` (en-tete) et `websalline` (lignes) avant d'etre integrees dans le cycle de vente standard.

### Fenetre de gestion : w_sales_ext_manage

La fenetre `w_sales_ext_manage` (3 712 lignes, module `_sales`, herite de `w_response`) gere l'import et le traitement des commandes web/externes.

**Fonctions principales :**

| Fonction | Role |
|----------|------|
| `wf_import(ls_genmess, ls_path)` | Import de commandes |
| `wf_import_exki(ls_genmess, ls_path)` | Import commandes Exki (specifique) |
| `wf_createlineorder()` | Creation lignes commande PmiGest |
| `wf_clotureorder(al_wslwebidhead)` | Cloture commande web |
| `wf_deletecmd()` | Suppression commande |
| `wf_checkmanualfile(al_row)` | Verification fichier manuel |
| `wf_allocate(al_sale)` | Allocation stock |
| `wf_adaptsalauth()` | Adaptation autorisation vente |
| `allocate(al_sel_order, al_truck)` | Allocation commande/camion |
| `wf_truckitems(al_salcode, ad_allocdate, al_truck, al_turn)` | Affectation articles au camion |

**Cycle de traitement :**
1. Import fichier externe → tables `websalhead` / `websalline`
2. Verification et validation dans `w_sales_ext_manage`
3. Creation commande vente PmiGest (`salhead` / `salline`)
4. Mise a jour statut `websalhead.wshstatus` = '3' (traite)

### Table websalhead

| Colonne | Type | Description |
|---------|------|-------------|
| `wshwebid` | numeric(9) | Identifiant web **(PK)** |
| `wshcust` | char(10) | Code client |
| `wshstatus` | char(1) | Statut (1=nouveau, 3=traite) |
| `wshcode` | numeric(6) | Code commande PmiGest liee |
| `wshcustref` | char(40) | Reference client |
| `wshcurr` | char(3) | Devise |
| `wshdatcrea` | timestamp | Date de creation |
| `wshdatreq` | timestamp | Date demandee |
| `wshcmnt` | char(1000) | Commentaire |
| `wshautho` | char(1) | Autorisation |
| `wshshipto` | numeric(4) | Adresse de livraison |

### Table websalline (colonnes principales)

| Colonne | Description |
|---------|-------------|
| `wslwebidhead` | Lien vers websalhead |
| `wslwebidline` | Identifiant ligne web |
| `wslcode` | Code commande PmiGest |
| `wslline` | Numero de ligne |
| `wslitem` | Code article |
| `wslqtyord` | Quantite commandee |
| `wslqtyreq` | Quantite demandee |
| `wslcustref` | Reference client |
| `wsldatreq` | Date demandee |
| `wslstdval` | Valeur standard |
| `wslstatus` | Statut ligne |
| `wslshipto` | Adresse livraison |
| `wslorigin` | Origine |
| `wsluomord` | Unite de mesure commande |
| `wsluomconv` | Coefficient conversion unite |
| `wslsalval` | Valeur vente |
| `wslunitprice` | Prix unitaire |
| `wslbaseprice` | Prix de base |
| `wslpricetype` | Type de prix |
| `wslcomment` | Commentaire |

---

## Tables XML

### Table xmlfile

Table generique pour les imports/exports XML :

| Colonne | Type | Description |
|---------|------|-------------|
| `xfid` | integer | Identifiant noeud |
| `xfparent` | integer | Identifiant noeud parent |
| `xfname` | varchar(256) | Nom du noeud XML |
| `xftext` | varchar(256) | Contenu texte du noeud |

Structure arborescente permettant de representer un document XML en base de donnees.

---

## Tables EDI

### Table edilink

Configuration des connexions EDI :

| Colonne | Type | Description |
|---------|------|-------------|
| `elseq` | numeric(2) | Sequence **(PK)** |
| `elactiv` | char(1) | Actif (O/N) |
| `eltype` | char(1) | Type de lien |
| `eldesc` | varchar(10) | Description |
| `elfct` | varchar(30) | Fonction/evenement a declencher |
| `elfilepath` | varchar(50) | Chemin des fichiers EDI |

Configuration accessible dans `w_param_sys` (onglet `tabpage_edilink`), DataWindow `d_edilink`.

### Table edisalhead

En-tetes des commandes EDI recues :

| Colonne | Type | Description |
|---------|------|-------------|
| `ehenvsend` | char(13) | Envoyeur **(PK)** |
| `ehheadref` | char(35) | Reference en-tete **(PK)** |
| `ehenvrec` | varchar(13) | Recepteur **(PK)** |
| `ehsalorder` | numeric(6) | Commande vente PmiGest **(PK)** |
| `ehenvid` | char(14) | Identifiant envoyeur |
| `ehcustean` | char(13) | Code EAN client |
| `ehcustid` | char(10) | Code client PmiGest |
| `ehdocdate` | timestamp | Date du document |
| `ehreqdate` | timestamp | Date demandee |
| `ehcurr` | char(3) | Devise |
| `ehstatus` | char(1) | Statut |
| `ehcmnt` | varchar(240) | Commentaire |
| `ehtype` | char(1) | Type |
| `ehprinted` | char(1) | Imprime |
| `ehpickupdate` | timestamp | Date enlevement |
| `ehsaledate` | timestamp | Date vente |
| `ehmgnl` | char(13) | Magazine/localisation |

### Table edisalline (colonnes principales)

| Colonne | Description |
|---------|-------------|
| `esline` | Numero de ligne |
| `esitemean` | Code EAN article |
| `escuitemean` | Code EAN client article |
| `esitemid` | Code article PmiGest |
| `escustdesc` | Description client |
| `esqty` | Quantite commandee |
| `esreqdate` | Date demandee |
| `esshiptoean` | Code EAN adresse livraison |
| `esshiptoseq` | Sequence adresse livraison |
| `escmnt` | Commentaire ligne |
| `esqtyorig` | Quantite originale |
| `esuomord` | Unite de mesure |
| `essuppcode` | Code fournisseur |

### Table editransactions

Historique des transactions EDI pour le suivi et l'audit.

---

## Objets PB cles par integration

### Vue synthetique

| Integration | NVO principal | Lignes | Fenetre(s) principale(s) |
|-------------|--------------|--------|--------------------------|
| EDI transfert | `nvo_edi_transfert` | 27 342 | `w_edi_transactions`, `w_edi_order` |
| EDI DESADV | `nvo_edi_import_desadv` | 1 913 | `w_edi_purchase` |
| EDI surcharge | `nvo_xtra_edi_transfert` | -- | (utilise via `_purch`, `_sales`) |
| Peppol | -- (logique dans fenetre) | -- | `w_invoices_peppol` (~1600) |
| FedEx | `uo_fedex` | 1 739 | `w_fedex_shipmanval_input` |
| FTP | `n_ftpapp` + controles | -- | `w_ftp_main` |
| Email | `nvo_mail` + `n_smtp` | 1 614 + 2 808 | (utilise partout) |
| API PmiEngine | `nvo_pmiengineapi` | 332 | `ws_password_newdesign` |
| TVA VIES | `f_checkvat` (fonction) | 91 | (utilise dans `_masters`, `_sales_cash`) |
| WMS import | `nvo_import_wms` | 3 335 | `w_wms` |
| WMS export | `nvo_export_wms` | 2 768 | `w_wms` |
| Commandes web | `nvo_edi_transfert` | -- | `w_sales_ext_manage` (3 712) |

---

## Points d'attention

### EDI
- `nvo_xtra_edi_transfert` (dans `_sysxtra`) surcharge `nvo_edi_transfert` -- toujours instancier la surcharge, jamais la classe de base directement
- Les events `invoice_01` a `invoice_12` et `desadv_01` a `desadv_04` sont declenches dynamiquement via `TriggerEvent(ls_Function)` -- le nom de l'event est une variable
- Les variables de passage utilisent la structure `gstr_specific` via `istr_Variables` (StringVar[], LongVar[], BooleanVar[])
- Import EDI automatique possible via `nvo_planifiedtask` -- erreurs notifiees par email

### Peppol
- La fenetre `w_invoices_peppol` (~1600 lignes) contient toute la logique Babelway (pas dans un NVO separe)
- Parametres Babelway stockes dans une table dediee, lus via `d_param_babelway`
- Les statuts Babelway sont mis a jour directement sur `invoicehead` (`ihstatusbabelway`, `ihkeybabelway`, `iherrorbabelway`)
- `w_invoices_pdf` est l'alternative non-Peppol (envoi PDF par email)

### FedEx
- 194 des 205 objets du module `_fedex` sont des structures de donnees pour l'API SOAP
- L'objet `uo_fedex` utilise `soapconnection` pour la communication
- Les etiquettes sont stockees en base (table `fedex_pdf`) au format ZPL et PDF
- Integration avec `nvo_ship` dans `_sales` pour le controle des valeurs d'expedition

### Email
- Deux modes SMTP : natif (`n_smtp` via Winsock) et OLE (`PBObject_SMTP`)
- Support TLS (`of_sendtlsmail`), SSL (`of_sendsslmail`), et non chiffre (`of_sendmail`)
- Les comptes email sont lies aux utilisateurs via la table `linkmaus`
- `nvo_mail` est utilise massivement dans CRM, Peppol, et les taches planifiees

### WMS
- EasyWMS est le WMS supporte (fonctions `*_easywms`)
- Messages bidirectionnels : CCS06 et STO04 en import, multiples exports
- Export possible depuis le menu achat (`m_xtra_popordr` dans `_sysxtra`)
- La fenetre `w_wms` centralise import, execution, et export

### Commandes web
- Les tables `websalhead`/`websalline` sont des tables tampon avant integration dans `salhead`/`salline`
- Le statut `wshstatus` suit le cycle : '1' (nouveau) → '3' (traite/integre)
- `nvo_edi_transfert` contient aussi la logique des commandes web (`uof_createlineorder`, `uof_clotureorder`, `uof_extimportfiles`)

---

## Recherche rapide

| Pour trouver... | Rechercher... |
|----------------|---------------|
| Configuration EDI | `pb_search_code pattern="edilink"` ou table `edilink` |
| Import commandes EDI | `pb_read_object file_path="w_edi_order"` ou `nvo_edi_transfert` |
| Export factures EDI | Events `invoice_01` a `invoice_12` dans `nvo_edi_transfert` |
| Import DESADV | `pb_read_object file_path="nvo_edi_import_desadv"` |
| Envoi commande achat EDI | `uof_send_cmdpur` dans `nvo_edi_transfert` |
| Envoi Peppol | `pb_read_object file_path="w_invoices_peppol"` |
| Parametres Babelway | `pb_search_code pattern="babelway"` ou `d_param_babelway` |
| Statut Peppol | `ihstatusbabelway` sur `invoicehead` |
| Expedition FedEx | `pb_read_object file_path="uo_fedex"` |
| Etiquettes FedEx | Table `fedex_pdf`, fonction `of_printpdf` |
| Couts FedEx | Table `fedex_payment`, DataWindow `d_fedex_payment` |
| Client FTP | `pb_read_object file_path="w_ftp_main"` |
| Profils FTP | Table `ftphead`, fenetre `w_profiles` |
| Envoi email | `pb_read_object file_path="nvo_mail"` |
| SMTP bas niveau | `pb_read_object file_path="n_smtp"` |
| Comptes email | Table `mailaccount`, DW `d_crm_mailaccount_update` |
| API PmiEngine | `pb_read_object file_path="nvo_pmiengineapi"` |
| Validation TVA | `pb_search_code pattern="f_checkvat"` |
| Import WMS | `pb_read_object file_path="nvo_import_wms"` |
| Export WMS | `pb_read_object file_path="nvo_export_wms"` |
| Fenetre WMS | `pb_read_object file_path="w_wms"` |
| Commandes web | `pb_search_code pattern="websalhead"` ou `w_sales_ext_manage` |
| Surcharge EDI client | `pb_read_object file_path="nvo_xtra_edi_transfert"` |
