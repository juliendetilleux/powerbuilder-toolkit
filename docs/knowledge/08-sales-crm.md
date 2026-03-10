# 08 - CRM (Customer Relationship Management)

## Vue d'ensemble

Le module CRM de PmiGest (`_sales_crm`) fournit une gestion complete de la relation client : societes, contacts, actions commerciales, agenda, mailing, publipostage, workflows automatiques et statistiques. Le CRM dispose de son propre cadre MDI (`w_crm_mdi_frame`) et peut fonctionner comme un module autonome ou integre a l'ERP principal.

### Statistiques du module `_sales_crm`

| Type | Nombre |
|------|--------|
| Fenetres | 70 |
| DataWindows | 217 |
| User Objects | 6 |
| Fonctions | 22 |
| Structures | 11 |
| Menus | 3 |
| **Total** | **329** |

### Cadre MDI CRM

Le CRM fonctionne dans son propre cadre MDI `w_crm_mdi_frame` (ancetre `w_mdi`), distinct du cadre ERP principal `w_erp_mdi_frame`. Ce cadre maintient le contexte de la societe et du contact courants via des variables d'instance :

- `is_CRM_CurrAdress` / `is_CRM_CurrAdName` : societe courante
- `il_CRM_CurrContact` : contact courant
- `is_CRM_Customer` / `is_CRM_Supplier` : flags client/fournisseur
- `is_CRM_agenda_user` : utilisateur agenda
- `is_CRM_accesslist_sales` : liste d'acces commerciaux

Fonctions cles du frame : `set_curr_company()`, `set_curr_contact()`, `wf_refresh_center()`, `wf_check_menu_access()`.

---

## Tables principales

### adrsactions (Actions CRM)

Table centrale des actions commerciales. Historique des appels, visites, relances liees aux tiers.

| Colonne | Type | Description |
|---------|------|-------------|
| **aacode** | numeric(6) | Code action **(PK)** |
| aaadrid | char(10) | Code adresse (FK -> adresses) |
| aacontactid | numeric(4) | ID contact |
| aaaction | numeric(2) | Type d'action (FK -> activities) |
| aacreator | char(50) | Createur |
| aarespons | char(50) | Responsable |
| aaactiondate | timestamp | Date de l'action |
| aalimitdate | timestamp | Date limite |
| aatiming | numeric(4) | Duree prevue |
| aarealtiming | numeric(4) | Duree reelle |
| aaextratiming | numeric(4) | Temps supplementaire |
| aaparcode | numeric(6) | Code action parente |
| aastatus | char(1) | Statut (ouvert/clos/etc.) |
| aadesc | varchar(50) | Description courte |
| aacomment | long varchar | Commentaire |
| aacomment_int | long varchar | Commentaire interne |
| aacreadate | timestamp | Date de creation |
| aamoddat | timestamp | Date modification |
| aamoduser | char(50) | Utilisateur modification |
| aaprojet | numeric(6) | Lien projet |
| aafileref | numeric(4) | Reference dossier (FK -> filehead) |
| aafileline | numeric(4) | Ligne dossier |
| aasalorder | numeric(6) | Commande vente liee |
| aasalline | numeric(4) | Ligne commande vente |
| aainvoicehead | numeric(6) | Facture liee |
| aainvoiceline | numeric(3) | Ligne facture |
| aawfhead | numeric(6) | Workflow lie |
| aawfline | numeric(3) | Ligne workflow |
| aawfsuccess | char(1) | Succes workflow |
| aawffinish | char(1) | Workflow termine |
| aagroup | numeric(6) | Groupe d'actions |
| aagrouptyp | char(1) | Type de groupe |
| aaquoteval | numeric(9,2) | Valeur devis |
| aaitem | char(20) | Article lie |
| aapriority | numeric(3) | Priorite |
| aapersuccess | numeric(5,2) | Pourcentage de succes |
| aadocref | numeric(7) | Reference document |
| aaqty | numeric(12,3) | Quantite |
| aawccost | numeric(8,4) | Cout centre de charge |
| aauscost | numeric(8,4) | Cout utilisateur |
| aarealcost | numeric(8,4) | Cout reel |
| aainvstatus | char(1) | Statut facturation |
| aatoinv | char(1) | A facturer |
| aaifoutlook | char(1) | Synchro Outlook |
| aakm | numeric(4) | Kilometres |
| aacoeff | numeric(16,10) | Coefficient |
| aafrcstdate | timestamp | Date prevision |
| aamailsend | timestamp | Date envoi mail |
| aaconfirmstatus | integer | Statut confirmation |
| aaconfirmdate | timestamp | Date confirmation |
| aaconfirmtext | long varchar | Texte confirmation |
| aaconfirmemail | varchar(255) | Email confirmation |
| aasaid | integer | SmartSales action ID |
| aaslid | integer | SmartSales line ID |
| aasltiming | numeric(4) | SmartSales timing |

**Cles et index** :
- PK : `aacode`
- FK : `aaaction` -> `activities(accode)`, `aaadrid` -> `adresses(adcode)`, `aafileref` -> `filehead(fhcode)`
- Index : `aa1_adrsactions` (aarespons, aaactiondate), `in_nu_adrsactions` (aaadrid, aastatus), `aa_idx_group` (aagroup), `ind_aa01` (aacallid), `index_docref` (aadocref), `index_filinadrsaction` (aafileref, aafileline), `id_adrsactions_farunid` (aafarunid)
- Enfants : `expenses`

### adrsactionspoint (Points de controle actions)

Points de controle et validations lies aux actions CRM.

| Colonne | Type | Description |
|---------|------|-------------|
| **apcode** | numeric(6) | Code point **(PK)** |
| **apaacode** | numeric(6) | Code action (lien adrsactions) |
| apctadcode | char(10) | Code adresse contact |
| apctline | numeric(4) | Ligne contact |
| apstatut | numeric(1) | Statut du point |
| aptiming | numeric(4) | Duree |
| apusedpoint | numeric(6) | Point utilise |
| apdatepoint | timestamp | Date du point |
| apfactpoint | numeric(6) | Point facturation |
| apslcode | numeric(6) | Code ligne vente |
| apslline | numeric(4) | Ligne vente |
| apdatevalid | timestamp | Date validation |
| aptypevalid | numeric(1) | Type validation |
| apsignvalid | long binary | Signature validation |
| apshippoint | numeric(6) | Point expedition |

### activities (Types d'activites)

Table de reference des types d'actions/activites.

| Colonne | Type | Description |
|---------|------|-------------|
| **accode** | numeric(2) | Code activite **(PK)** |
| acdesc | char(20) | Description |
| acsort | numeric(2) | Ordre de tri |
| acworkcenter | char(8) | Centre de charge (FK -> workcenters) |
| acfacturability | char(1) | Facturabilite |
| acactiv | char(1) | Actif |
| accmnt | varchar(240) | Commentaire |
| acsendmail | char(1) | Envoi email automatique |
| actimesheet | char(1) | Visible feuille de temps |
| acagenda | char(1) | Visible agenda |
| accoeff | decimal(16,10) | Coefficient |
| acval | numeric(12,4) | Valeur |
| acum | char(3) | Unite de mesure |
| acactionout | numeric(1) | Action sortie |
| acmccdo | char(10) | Code MCC |
| acdesc_nl | varchar(20) | Description (NL) |
| acdesc_en | varchar(20) | Description (EN) |

Enfants FK : `adrsactions`, `workflowline`

### workflowhead (En-tetes workflows)

Definition des workflows automatiques CRM.

| Colonne | Type | Description |
|---------|------|-------------|
| **whid** | numeric(6) | ID workflow **(PK)** |
| whname | char(50) | Nom du workflow |
| whcmnt | long varchar | Commentaire |
| whactive | char(1) | Actif (O/N) |
| whcreadate | timestamp | Date creation |
| whcreator | char(50) | Createur |
| whmoddate | timestamp | Date modification |
| whmoduser | char(50) | Utilisateur modification |

Enfants FK : `workflowline` (4 FK differentes)

### workflowline (Lignes/etapes workflows)

Etapes individuelles d'un workflow. Chaque ligne definit une action a creer automatiquement.

| Colonne | Type | Description |
|---------|------|-------------|
| **wlhead** | numeric(6) | ID workflow parent |
| **wlline** | numeric(3) | Numero de ligne |
| wlseq | numeric(4) | Sequence d'execution |
| wlname | char(50) | Nom de l'etape |
| wloperationtype | char(1) | Type d'operation |
| wllinkclose | numeric(6) | Lien fermeture (FK -> workflowhead) |
| wllinkmodif | numeric(6) | Lien modification (FK -> workflowhead) |
| wllinkcreate | numeric(6) | Lien creation (FK -> workflowhead) |
| wllinkfail | numeric(6) | Lien echec |
| wlactiontype | numeric(2) | Type d'action (FK -> activities) |
| wlusertype | char(1) | Type utilisateur |
| wluser | char(50) | Utilisateur assigne |
| wldesc | varchar(30) | Description |
| wloffsetdays | numeric(3) | Decalage en jours |
| wltiming | numeric(4) | Duree prevue |
| wltable | char(60) | Table de condition |
| wlfield | char(60) | Champ de condition |
| wlvalue | numeric(3) | Valeur condition |
| wlsql | varchar(200) | Requete SQL condition |
| wlchoicedate | char(1) | Choix de date |
| wlexecuteimmediate | char(1) | Execution immediate |
| wlitem | char(20) | Article lie |
| wlquoteval | numeric(9,2) | Valeur devis |

FK sortantes : `activities(accode)`, `workflowhead` (x4)

### sendmail (File d'envoi emails)

File d'attente pour l'envoi d'emails.

| Colonne | Type | Description |
|---------|------|-------------|
| **smidcode** | integer | ID email **(PK)** |
| smsender | varchar(100) | Expediteur |
| smsender_name | varchar(1000) | Nom expediteur |
| smserver | varchar(1000) | Serveur SMTP |
| smport | integer | Port SMTP |
| smtimeout | integer | Timeout |
| smrecipient | varchar(2000) | Destinataire(s) |
| smcc | varchar(2000) | Copie carbone |
| smbcc | varchar(200) | Copie cachee |
| smsubject | varchar(2000) | Sujet |
| smmessage | long varchar | Corps texte |
| smmessage_html | long varchar | Corps HTML |
| smmessage_send | long binary | Message encode |
| smfile | long varchar | Pieces jointes |
| smstatut | integer | Statut envoi |
| smdatesend | timestamp | Date envoi |
| smxperror | integer | Erreur XP |
| smerrorcode | integer | Code erreur |
| smerrortext | long varchar | Texte erreur |

### mailaccount (Comptes email)

Configuration des comptes de messagerie.

| Colonne | Type | Description |
|---------|------|-------------|
| **maadress** | varchar(50) | Adresse email **(PK)** |
| malogin | varchar(50) | Login |
| mapassword | varchar(50) | Mot de passe |
| mapop3 | varchar(50) | Serveur POP3 |

### crmerpmenu (Menu CRM/ERP)

Configuration des liens entre menus CRM et ERP.

| Colonne | Type | Description |
|---------|------|-------------|
| **cecode** | varchar(20) | Code menu **(PK)** |
| cename | varchar(30) | Nom du menu |
| ceactiv | char(1) | Actif (O/N) |

### Crmfilter (Filtres CRM sauvegardes)

Filtres de recherche personnalises sauvegardes par utilisateur.

| Colonne | Type | Description |
|---------|------|-------------|
| **fiid** | numeric(4) | ID filtre **(PK)** |
| finame | varchar(60) | Nom du filtre |
| fiquerry | long varchar | Requete SQL du filtre |
| fiuscode | char(50) | Code utilisateur proprietaire |
| fiactiv | char(1) | Actif |
| fitable | char(1) | Type de table ciblee |

Enfants FK : `crmfilterformat`

### crmfilterformat / crmfilterfor (Lignes de filtre)

Detail des conditions d'un filtre CRM. Structure identique pour les deux tables.

| Colonne | Type | Description |
|---------|------|-------------|
| fffilterid | numeric(4) | ID filtre parent |
| ffline | numeric(3) | Numero de ligne |
| ffopenbracket | varchar(5) | Parenthese ouvrante |
| fffield | varchar(20) | Champ filtre |
| ffcondition | varchar(5) | Condition (=, <>, >, <, like...) |
| ffresult | varchar(30) | Valeur de comparaison |
| ffclosebracket | varchar(5) | Parenthese fermante |
| ffoperator | varchar(10) | Operateur logique (AND/OR) |

`crmfilterformat` possede une FK vers `Crmfilter`.

### smt_category (Categories SmartCode)

| Colonne | Type | Description |
|---------|------|-------------|
| **sct_id** | integer | ID categorie **(PK)** |
| sct_name | char(30) | Nom de la categorie |
| sct_active | char(1) | Active |

Enfants FK : `smtcode`

### smtcode (Codes SmartCode)

Codes de classification pour articles, utilises dans le CRM pour la segmentation.

| Colonne | Type | Description |
|---------|------|-------------|
| **sccode** | char(4) | Code **(PK)** |
| scactiv | char(1) | Actif |
| scdesc | char(20) | Description |
| scum | char(2) | Unite de mesure |
| sctype | char(1) | Type |
| scitem | char(20) | Article lie |
| sc_cat | integer | Categorie (FK -> smt_category) |

### smtlink (Liaisons SmartCode-Article)

| Colonne | Type | Description |
|---------|------|-------------|
| **slitemid** | char(20) | Code article |
| **slsmtid** | char(4) | Code SmartCode |
| slcontent | numeric(10,5) | Contenu/valeur |

### smartsales_action (Actions SmartSales)

Table d'import/export des actions depuis la plateforme SmartSales (prospection terrain).

| Colonne | Type | Description |
|---------|------|-------------|
| idfile | integer | ID fichier import |
| datefile | timestamp | Date du fichier |
| survey_id | varchar(254) | ID enquete |
| survey_title | varchar(254) | Titre enquete |
| surveyresponse_id | varchar(254) | ID reponse |
| location | varchar(254) | Code emplacement |
| location_name | varchar(254) | Nom emplacement |
| surveyresponse_submition_date | varchar(254) | Date soumission |
| surveyresponse_submitter | varchar(254) | Auteur |
| surveyquestion_id | varchar(254) | ID question |
| surveyquestion_text | varchar(254) | Texte question |
| comment | varchar(254) | Commentaire |
| result | long varchar | Resultat |

### smartsales_client (Clients SmartSales)

Table d'import des donnees clients depuis SmartSales.

| Colonne | Type | Description |
|---------|------|-------------|
| idfile | integer | ID fichier import |
| datefile | timestamp | Date du fichier |
| adcode | varchar(254) | Code adresse PMIX |
| code_smartsales | varchar(254) | Code SmartSales |
| adurl | varchar(254) | URL |
| adcmnt | varchar(254) | Commentaire |
| adcrmuf01..28 | varchar(254) | Champs utilisateurs CRM |

### smartsales_contact (Contacts SmartSales)

Table d'import des contacts depuis SmartSales.

| Colonne | Type | Description |
|---------|------|-------------|
| idfile | integer | ID fichier import |
| datefile | timestamp | Date du fichier |
| tech_externalid | varchar(254) | ID externe |
| id | varchar(254) | ID contact |
| location_code | varchar(254) | Code emplacement |
| lastname | varchar(254) | Nom |
| firstname | varchar(254) | Prenom |
| language | varchar(254) | Langue |
| phone / mobile / email | varchar(254) | Coordonnees |
| attribute_function | varchar(254) | Fonction |
| attribute_ctservice | varchar(254) | Service |

### contacts (Contacts)

Table des personnes de contact associees aux tiers.

| Colonne | Type | Description |
|---------|------|-------------|
| **ctadcode** | char(10) | Code adresse **(PK)** |
| **ctline** | numeric(4) | Numero de ligne **(PK)** |
| ctname | char(30) | Nom |
| ctfirstname | varchar(30) | Prenom |
| ctfunction | char(35) | Fonction |
| cttel | char(20) | Telephone |
| ct_tel2 | char(20) | Telephone 2 |
| ctfax | char(20) | Fax |
| ctgsm | varchar(20) | GSM |
| ctmail | varchar(100) | Email |
| ctservice | varchar(30) | Service |
| ctlangue | char(2) | Langue |
| ctciv1 | char(1) | Civilite |
| ctinteret | varchar(20) | Centre d'interet |
| ctcmnt | varchar(50) | Commentaire |
| ctactiv | char(1) | Actif |
| ctmain | char(1) | Contact principal |
| ctsort | numeric(4) | Ordre de tri |
| ctlogin | varchar(50) | Login (portail) |
| ctpassword | varchar(50) | Mot de passe (portail) |
| ctfunc | numeric(3) | Code fonction |
| ctmulti | char(1) | Multi-societe |
| ctmadcode | char(10) | Code adresse maitre (multi) |
| ctmline | numeric(4) | Ligne maitre (multi) |
| ctpoint | numeric(1) | Point de controle |
| ctmailtocpt | char(1) | Mail vers comptabilite |
| ctwebcallview | char(1) | Visible WebCall |
| ctid | numeric(10) | ID unique |
| ctidsmartsales | varchar(20) | ID SmartSales |
| ctcrmuf01..15 | numeric(3) | Champs utilisateur CRM (x15) |

### expenses (Frais/depenses)

Depenses liees aux actions CRM.

| Colonne | Type | Description |
|---------|------|-------------|
| **excode** | numeric(6) | Code action **(PK, FK -> adrsactions)** |
| **exline** | numeric(6) | Numero de ligne **(PK)** |
| exdesc | char(50) | Description |
| extotval | numeric(8,2) | Montant |
| excreadate | timestamp | Date creation |
| excreauser | char(50) | Utilisateur |
| excomment | long varchar | Commentaire |

### Autres tables CRM (non documentees en detail)

| Table | Usage |
|-------|-------|
| crmactions | Actions commerciales (table alternative/vue) |
| crmactiongroup | Groupes d'actions thematiques |
| crmappointments | Rendez-vous CRM |
| crmmail | Emails CRM (stockage interne) |
| crmmailattach | Pieces jointes emails |
| crmmerge | Modeles de publipostage |
| crmmergefields | Champs de fusion publipostage |
| crmimport | Donnees importees |
| crmoutlook | Synchronisation Outlook |
| crmchoices | Choix parametrables CRM |
| crmcompany | Donnees complementaires societe CRM |

---

## Objets PowerBuilder cles

### Fenetres principales

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_crm_mdi_frame` | `w_mdi` | Cadre MDI principal du CRM |
| `w_crm_company_detail` | `w_main` | Detail societe (fiche complete) |
| `w_crm_company_create` | `w_main` | Creation societe |
| `w_crm_company_list` | `w_response` | Liste/recherche societes |
| `w_crm_company_mass_update` | `w_main` | Mise a jour massive societes |
| `w_crm_company_merge` | `w_response` | Fusion societes en double |
| `w_crm_company_remark_update` | `_sales_crm` | Remarques societe |
| `w_crm_company_local_detail` | `_sales_crm` | Detail local societe |
| `w_crm_contact_mass_update` | `_sales_crm` | Mise a jour massive contacts |

### Fenetres actions

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_crm_action_update` | `w_response` | Creation/modification d'une action |
| `w_crm_actions_list` | `w_main` | Liste des actions en cours |
| `w_crm_actions_done` | `w_main` | Liste des actions terminees |
| `w_crm_action_group` | `w_response` | Groupes d'actions (recurrence, multi-utilisateurs) |
| `w_crm_activities_update` | `w_response` | Gestion des types d'activites |
| `w_crm_activities_show` | `_sales_crm` | Affichage activites |
| `w_crm_action_invreport_update` | `_sales_crm` | Rapport facturation actions |

### Fenetres agenda

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_crm_agenda` | `w_window` | Agenda principal (conteneur) |
| `w_crm_agenda_day` | `w_main` | Vue journaliere de l'agenda |
| `w_crm_agenda_week` | `w_main` | Vue hebdomadaire |
| `w_crm_agenda_month` | `w_main` | Vue mensuelle |
| `w_crm_appointments` | `w_window` | Gestion des rendez-vous |
| `w_crm_appointments_param` | `_sales_crm` | Parametres rendez-vous |
| `w_crm_appointments_chgmtgrp` | `_sales_crm` | Changement groupe rendez-vous |

### Fenetres email/mailing

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_crm_mailcenter` | `w_main` | Centre de messagerie (POP3/SMTP integre) |
| `w_crm_mailcreate` | `w_email` | Creation d'un email |
| `w_crm_mail_inbox` | `w_main` | Boite de reception (Outlook/MAPI) |
| `w_crm_mailsend` | `w_main` | Processus d'envoi SMTP |
| `w_crm_mailshow` | `_sales_crm` | Affichage email |
| `w_crm_mailsign_update` | `_sales_crm` | Gestion des signatures |
| `w_crm_mail_doc_update` | `_sales_crm` | Documents attaches aux mails |
| `w_crm_mailadress_sel` | `_sales_crm` | Selection adresses email |
| `w_crm_mailaccount_update` | `_sales_crm` | Configuration comptes email |
| `w_crm_mail_mergefields` | `_sales_crm` | Champs de fusion email |

### Fenetres publipostage

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_crm_merge` | `w_main` | Publipostage (execution) |
| `w_crm_merge_master` | `w_main` | Gestion des modeles .dot (Word) |
| `w_crm_merge_label` | `_sales_crm` | Etiquettes de publipostage |
| `w_crm_merge_list` | `_sales_crm` | Liste messages publipostage |
| `w_crm_merge_list_message` | `_sales_crm` | Messages de publipostage |
| `w_crm_merge_fromfile` | `_sales_crm` | Publipostage depuis fichier |
| `w_crm_merge_dot_create` | `_sales_crm` | Creation modele .dot |

### Fenetres import/export

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_crm_import_prepare` | `w_main` | Preparation import (chargement fichier) |
| `w_crm_import_bind` | `_sales_crm` | Liaison colonnes fichier/champs |
| `w_crm_import_show` | `_sales_crm` | Visualisation avant import |
| `w_crm_import_error_msg` | `_sales_crm` | Messages d'erreur import |
| `w_crm_export` | `w_response` | Export donnees CRM |

### Fenetres statistiques et parametres

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_crm_stat_market` | `w_response` | Statistiques marche (actions par commercial) |
| `w_crm_stat_sales` | `w_response` | Statistiques ventes (evolution CA, mix produits) |
| `w_crm_outlook` | `w_response` | Synchronisation Outlook |
| `w_crm_outlook_confirm` | `_sales_crm` | Confirmation synchro Outlook |
| `w_crm_filter_update` | `w_response` | Gestion des filtres CRM |
| `w_crm_choices_update` | `_sales_crm` | Choix parametrables |
| `w_crm_choicehead_update` | `_sales_crm` | En-tetes de choix |
| `w_crm_choiceline_update` | `_sales_crm` | Lignes de choix |
| `w_crm_choiceline_replace` | `_sales_crm` | Remplacement de choix |
| `w_crm_param` | `_sales_crm` | Parametres CRM |
| `w_crm_lang_update` | `_sales_crm` | Gestion langues CRM |
| `w_crm_country_update` | `_sales_crm` | Gestion pays CRM |
| `w_crm_logo` | `_sales_crm` | Logo CRM |
| `w_crm_prints` | `_sales_crm` | Impressions CRM |
| `w_crm_list_dir` | `_sales_crm` | Liste repertoires |
| `w_crm_pmix_fantome` | `_sales_crm` | Fenetre fantome (fond CRM) |
| `w_crm_cleanoutlooktemp` | `_sales_crm` | Nettoyage fichiers temp Outlook |

### DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_crm_company_list` | `_sales_crm` | Liste societes CRM |
| `d_crm_actions_list` | `_sales_crm` | Liste actions |
| `d_crm_agenda` | `_sales_crm` | Agenda |
| `d_crm_mail_list` | `_sales_crm` | Liste emails |
| `d_crm_merge_list` | `_sales_crm` | Liste publipostage |

### Objets NVO cles

| Objet | Utilisation |
|-------|-------------|
| `nvo_mail` | Gestion email (utilise dans w_crm_mailcenter, w_crm_action_update, w_crm_agenda_day/week, w_crm_action_group, w_crm_outlook) |
| `nv_datastore` | DataStore operations (utilise intensivement pour le stockage temporaire) |
| `nv_mailsession` | Session MAPI pour integration Outlook Express |

---

## Flux : Gestion des societes et contacts

### Creation d'une societe

1. L'utilisateur ouvre `w_crm_company_create` depuis le menu CRM
2. Saisie des champs obligatoires : nom (`adname`), code (`adcode`)
3. La fonction `adresseinputok()` valide les donnees
4. Insertion dans la table `adresses` avec les champs CRM (`adcrmuf01..29`)
5. La societe apparait dans `w_crm_company_list`

### Detail d'une societe

`w_crm_company_detail` (ancetre `w_main`) est la fenetre la plus riche du CRM. Elle affiche :
- Informations generales de la societe (onglet principal)
- Liste des contacts avec insertion/suppression (`wf_insert_contact()`, `wf_delete_contact()`)
- Historique des actions (`wf_act_refresh()`, `wf_act_prec()`, `wf_act_suiv()`)
- Emails recus/envoyes (`wf_loadmail()`, `wf_email_refresh()`)
- Documents attaches (`wf_doc_refresh()`, `wf_modify_doc()`)
- Navigation entre societes (`wf_act_prec()`, `wf_act_suiv()`)
- Lien avec l'ERP (`wf_aderplink()`) pour ouvrir la fiche ERP

Variables cles : `is_adcode` (societe courante), `ii_ctadcode` (contact courant), `uo_mail` (objet NVO mail)

### Mise a jour massive

`w_crm_company_mass_update` permet de modifier en masse les champs CRM utilisateur (`adcrmuf01..29`) sur une selection de societes. `w_crm_contact_mass_update` fait de meme pour les contacts (`ctcrmuf01..15`).

### Fusion de societes

`w_crm_company_merge` detecte et fusionne les doublons. Fonctions : `wf_control()` (verification pre-fusion), `wf_merge()` (execution de la fusion).

### Recherche et filtres

`w_crm_company_list` supporte :
- Recherche par nom avec filtre (`AdressNameFilter`, `filteradresse()`)
- Filtres SQL sauvegardes (`wf_retrieve_sqlfilters()` via `Crmfilter`)
- Export (`wf_export()`)
- Impression (`wf_print()`)
- Multi-societes (`ib_withMultiCo`)

`w_crm_filter_update` permet de construire visuellement des filtres complexes avec conditions imbriquees (parentheses), operateurs logiques, et de les sauvegarder dans `Crmfilter` / `crmfilterformat`.

---

## Flux : Actions et suivi commercial

### Creation d'une action

1. L'utilisateur ouvre `w_crm_action_update` (ancetre `w_response`)
2. Saisie des champs :
   - Type d'action (`aaaction` -> table `activities`)
   - Responsable (`aarespons`)
   - Date (`aaactiondate`), date limite (`aalimitdate`)
   - Societe (`aaadrid`), contact (`aacontactid`)
   - Description (`aadesc`), commentaire (`aacomment`)
   - Duree prevue (`aatiming`), priorite (`aapriority`)
   - Valeur devis (`aaquoteval`), pourcentage succes (`aapersuccess`)
3. `wf_inputok()` valide les donnees
4. `wf_save()` insere dans `adrsactions`
5. Si action liee a un workflow, les champs `aawfhead`/`aawfline` sont renseignes

### Fonctions avancees de w_crm_action_update

- `wf_setcost()` : calcul des couts (centre de charge, utilisateur, reel)
- `wf_invoicing()` : gestion de la facturation de l'action
- `wf_projheadupdate()` : mise a jour du projet lie
- `wf_refresh_groupmulti()` : rafraichissement des actions de groupe
- `wf_modify_groupmulti()` : modification en groupe
- `wf_contacts_retrieve()` : chargement des contacts de la societe
- `wf_doc_refresh()` / `wf_modify_doc()` : gestion des documents attaches
- `wf_filter_activities()` : filtrage par code MCC
- `wf_ctformation()` : formatage contact

### Liste des actions

`w_crm_actions_list` (ancetre `w_main`) affiche la liste des actions en cours avec :
- Filtrage par utilisateur (`User2show`, `is_AllowedUsers`)
- Filtrage par statut, type, priorite (`is_filter_action`, `is_filter_priority`)
- Filtre bleu (selection rapide : `is_bleufilter`)
- Timer automatique pour rafraichissement (`timer` event)
- Suppression (`wf_delete_action()`)
- Impression (`wf_print()`)

`w_crm_actions_done` affiche les actions terminees avec un fonctionnement similaire.

### Groupes d'actions

`w_crm_action_group` (ancetre `w_response`) permet de creer des actions recurrentes :
- **Quotidiennes** : `wf_create_action_daily()` avec nombre d'occurrences
- **Hebdomadaires** : `wf_create_action_weekly()` avec jours de decalage
- **Mensuelles** : `wf_create_action_monthly()`
- **Annuelles** : `wf_create_action_yearly()`

Le groupe inclut la selection des destinataires, la gestion de l'agenda (`wf_dwday_availabilities()`, `wf_dwday_fill()`), et le filtre de societes.

### Depenses liees aux actions

La table `expenses` permet d'associer des notes de frais a une action CRM via `excode` -> `adrsactions.aacode`. Chaque depense a une description, un montant et un commentaire.

---

## Flux : Agenda et rendez-vous

### Agenda

L'agenda CRM offre trois vues :

1. **Vue journaliere** (`w_crm_agenda_day`) : affichage des creneaux horaires avec les actions planifiees. Fonctions : `wf_fillhour()` (remplissage grille horaire), `wf_fillarray()` (chargement actions du jour), `wf_filldw()` (affichage dans le DataWindow), `wf_getposition()` (calcul position horaire), `wf_getnbcase()` (nombre de cases occupees).

2. **Vue hebdomadaire** (`w_crm_agenda_week`) : vue sur 5/7 jours. Fonctions : `wf_refresh()`, `wf_agenda_day()` (basculer vers vue jour), `wf_rightbutton()` (menu contextuel par jour).

3. **Vue mensuelle** (`w_crm_agenda_month`) : calendrier mensuel.

Toutes les vues permettent la creation/modification/suppression d'actions via `wf_createmodifyaction()` et `wf_deleteaction()`, et l'affichage du detail via `wf_showdetail()`.

### Rendez-vous

`w_crm_appointments` (ancetre `w_window`) gere les rendez-vous avec :
- Controle d'acces commercial (`wf_check_salesman_access()`)
- Filtrage (`wf_filter()`)
- Rafraichissement (`waf_refresh()`)
- Parametrage via `w_crm_appointments_param`

---

## Flux : Workflows automatiques

### Principe

Un workflow est une sequence d'actions automatiques declenchees par des evenements CRM (creation, modification, fermeture d'action). Il est defini dans `workflowhead` (en-tete) et `workflowline` (etapes).

### Structure d'un workflow

- **En-tete** (`workflowhead`) : nom, actif, createur
- **Etapes** (`workflowline`) : chaque etape definit :
  - Le type d'operation (`wloperationtype`)
  - Le type d'action a creer (`wlactiontype` -> `activities`)
  - L'utilisateur assigne (`wluser`, `wlusertype`)
  - Le decalage en jours (`wloffsetdays`)
  - La duree (`wltiming`)
  - Les conditions SQL (`wltable`, `wlfield`, `wlvalue`, `wlsql`)
  - L'execution immediate ou differee (`wlexecuteimmediate`)

### Enchainement

Les etapes sont liees par des references croisees :
- `wllinkcreate` : workflow a declencher a la creation
- `wllinkmodif` : workflow a declencher a la modification
- `wllinkclose` : workflow a declencher a la fermeture
- `wllinkfail` : workflow a declencher en cas d'echec

Dans `adrsactions`, les champs `aawfhead`, `aawfline`, `aawfsuccess`, `aawffinish` tracent l'execution du workflow.

---

## Flux : Mailing et emailing

### Centre de messagerie

`w_crm_mailcenter` (ancetre `w_main`) est le client email integre. Il supporte :

- **Protocoles** : POP3 (reception via `PBObject_pop3`), SMTP (envoi via `PBObject_SMTP_send`)
- **Stockage** : MailStore local (`PBObject_mailStore`) avec dossiers (inbox, outbox, sent)
- **Fonctions** :
  - `wf_getmail()` : reception des emails
  - `wf_send_mail()` : envoi via SMTP
  - `wf_newmail()` : creation nouveau message
  - `wf_answermail()` : reponse
  - `wf_deletemail()` / `wf_deleteallmail_outbox()` : suppression
  - `wf_exportmail()` : export
  - `wf_linkmail()` / `wf_createlink()` : association email-societe
  - `wf_reindex_mailbox()` : reindexation
  - `wf_move_mailstore2eml()` / `wf_move_eml2eml()` : deplacement emails
  - `wf_search_pmixid()` : recherche ID PMIX dans un email

- **Drag & drop** : support du glisser-deposer pour associer emails aux societes
- **Multi-adresses** : gestion de plusieurs comptes (`mailaccount`)

### Boite de reception Outlook

`w_crm_mail_inbox` (ancetre `w_main`) offre une integration directe avec Microsoft Outlook via OLE/COM :
- `wf_open_msoutlook()` : connexion a Outlook
- `get_mails_msoutlook()` : lecture des emails Outlook
- `wf_show_mail_msoutlook()` : affichage d'un email
- `wf_drop_mail_msoutlook()` : association a une societe PMIX
- `wf_save_eml_msoutlook()` : sauvegarde en format .eml
- Support MAPI alternatif (`wf_open_outlookxprs()`, `get_mails_outlookxprs()`)

### Envoi d'emails

`w_crm_mailsend` gere le processus d'envoi SMTP en batch :
- `wf_sendmail()` : envoi des messages en attente
- `wf_store_sent_mail()` : archivage dans le dossier "envoyes"
- `wf_createlink()` : creation lien email-societe

La table `sendmail` sert de file d'attente avec suivi du statut, des erreurs et des dates d'envoi.

### Creation d'email

`w_crm_mailcreate` (ancetre `w_email`) fournit un editeur d'email avec support HTML.

---

## Flux : Publipostage (Merge)

### Processus

1. **Gestion des modeles** (`w_crm_merge_master`) : creation et edition de modeles Word (.dot/.dotx) via OLE Word (`iole_word`). Fonctions : `wf_edit_dot()`, `wf_transfertmacro()`, `wf_delete_dot()`.

2. **Execution du publipostage** (`w_crm_merge`) : fusion des donnees avec un modele. La fonction `wf_merge_field()` insere les champs de fusion dans le document Word.

3. **Etiquettes** (`w_crm_merge_label`) : generation d'etiquettes de publipostage.

4. **Champs de fusion** (`w_crm_mail_mergefields`) : configuration des champs disponibles (stockes dans `crmmergefields`).

### Integration Word

Le publipostage utilise l'automation OLE avec Microsoft Word :
- Variable `iole_word` : reference OLEObject vers Word
- Variable `is_fichierDot` : chemin du modele .dot
- Variable `templatedir` : repertoire des modeles

---

## Flux : Relances

Les relances sont gerees via les actions CRM avec suivi automatique :

1. **Planification** : creation d'actions avec date limite (`aalimitdate`) et statut ouvert (`aastatus`)
2. **Suivi** : la liste des actions (`w_crm_actions_list`) affiche les relances en retard (actions dont la date limite est depassee)
3. **Cloture** : mise a jour du statut et enregistrement du temps reel (`aarealtiming`)
4. **Enchainement** : via les workflows, une relance close peut automatiquement generer la suivante

La variable `is_filter_action` et le filtre par statut permettent de visualiser uniquement les relances ouvertes.

---

## SmartSales

SmartSales est une plateforme externe de prospection terrain integree au CRM PMIX.

### Tables d'echange

| Table | Direction | Contenu |
|-------|-----------|---------|
| `smartsales_client` | Import | Donnees clients avec mapping vers `adresses` (via `adcode`) et champs CRM |
| `smartsales_contact` | Import | Contacts avec nom, prenom, telephone, email, fonction |
| `smartsales_action` | Import | Resultats d'enquetes terrain (surveys) |

### Liaison avec PMIX

- `contacts.ctidsmartsales` : identifiant SmartSales dans la table contacts
- `adrsactions.aasaid` / `aaslid` / `aasltiming` : references SmartSales dans les actions
- Les champs `adcrmuf01..28` et `ctcrmuf01..15` sont utilises pour stocker des donnees SmartSales supplementaires

---

## Flux : Synchronisation Outlook

`w_crm_outlook` gere la synchronisation bidirectionnelle avec Microsoft Outlook :

### Contacts

`wf_update_outlook_contacts()` synchronise les contacts PMIX avec les contacts Outlook.

### Rendez-vous/Agenda

`wf_update_outlook_meetings()` synchronise les actions CRM (type agenda) avec le calendrier Outlook :
- `wf_mso2pmix()` : Outlook -> PMIX
- `wf_pmix2mso()` : PMIX -> Outlook
- `wf_mso2pmix_create()` : creation dans PMIX depuis Outlook
- `wf_isallday()` : detection evenement journee entiere

Le champ `adrsactions.aaifoutlook` marque les actions synchronisees.

---

## Flux : Import de donnees

### Processus d'import

1. **Preparation** (`w_crm_import_prepare`) :
   - Chargement du fichier source (CSV, TSV)
   - Detection du separateur (`is_separator`)
   - Fonctions : `wf_loadtabseparated()`, `wf_load_dw_lb()`

2. **Liaison** (`w_crm_import_bind`) :
   - Mapping colonnes fichier -> champs PMIX
   - Structure `struct_prepare_import` pour stocker les liaisons
   - `wf_showbinded()` : affichage des champs lies

3. **Visualisation** (`w_crm_import_show`) :
   - Apercu des donnees avant import

4. **Erreurs** (`w_crm_import_error_msg`) :
   - Affichage des erreurs d'import

---

## Flux : Statistiques

### Statistiques marche

`w_crm_stat_market` analyse l'activite commerciale :
- Par commercial (`is_salesman`, `wf_check_salesman_access()`)
- Par periode (`adt_from`, `adt_to`)
- Par type d'action
- Construction dynamique de requetes (`wf_buildselect()`)
- Impression (`wf_print()`)

### Statistiques ventes

`w_crm_stat_sales` analyse l'evolution des ventes :
- Evolution CA sur plusieurs periodes (`sql_evol1..5`)
- Segmentation par article (`is_itcode`, `is_ittyp`, `is_itcat`)
- Par commercial (`is_salemans`, `is_salemanlist`)
- Par client (`is_adcode`)
- Graphiques (`ue_graph_create`)

---

## Points d'attention

### Champs utilisateur CRM

Les tables `adresses` et `contacts` contiennent de nombreux champs utilisateur CRM parametrables :
- `adresses` : `adcrmuf00` a `adcrmuf29` (30 champs numeric(3))
- `contacts` : `ctcrmuf01` a `ctcrmuf15` (15 champs numeric(3))

Ces champs sont configures via `w_crm_choices_update` (table `crmchoices`) et permettent de personnaliser les fiches sans modifier la base de donnees.

### Integration OLE

Le CRM utilise intensivement l'automation OLE :
- **Microsoft Word** : publipostage (OLEObject `iole_word`)
- **Microsoft Outlook** : synchronisation contacts/agenda (OLEObject via COM)
- **SMTP/POP3** : envoi/reception emails (OLEObjects dedies)

Attention : ces integrations necessitent les applications Microsoft installees localement.

### Controle d'acces

- `w_crm_mdi_frame.wf_check_menu_access()` : controle acces aux menus CRM
- `w_crm_company_list.wf_checkacess()` : acces aux societes
- `w_crm_stat_market.wf_check_salesman_access()` : acces par commercial
- `is_CRM_accesslist_sales` : liste des commerciaux autorises

### Table `adresses` partagee

La table `adresses` est partagee entre le CRM et l'ERP. Les champs `adcust` (client) et `adsupp` (fournisseur) determinent le type de tiers. Le CRM utilise principalement les prospects et clients. Les modifications dans le CRM impactent l'ERP et inversement.

### Liens avec d'autres modules

| Module | Lien |
|--------|------|
| **Vente** (`_sales`) | Actions liees aux commandes (`aasalorder`/`aasalline`) et factures (`aainvoicehead`/`aainvoiceline`) |
| **Projets** (`_projects`) | Actions liees a un projet (`aaprojet`) |
| **Dossiers** (`_services`) | Actions liees a un dossier (`aafileref`/`aafileline`) |
| **Mailing** (`Shared_mail`) | Module partage pour l'envoi d'emails |
| **Impressions** (`_prints_crm`) | DataWindows d'impression CRM |
| **Devis** (`_devis`) | Creation de devis depuis le CRM (`aaquoteval`) |
| **SmartSales** | Integration plateforme terrain (tables `smartsales_*`) |

---

## Recherche rapide

| Pour trouver... | Chercher dans... |
|-----------------|-----------------|
| Toutes les fenetres CRM | `pb_search_code "w_crm_"` dans `_sales_crm` |
| Actions d'une societe | `adrsactions WHERE aaadrid = '<code>'` |
| Actions d'un responsable | `adrsactions WHERE aarespons = '<user>'` |
| Workflow actif | `workflowhead WHERE whactive = 'O'` |
| Etapes d'un workflow | `workflowline WHERE wlhead = <id>` |
| Emails en attente | `sendmail WHERE smstatut IS NULL OR smstatut = 0` |
| Filtres d'un utilisateur | `Crmfilter WHERE fiuscode = '<user>'` |
| Contacts d'une societe | `contacts WHERE ctadcode = '<code>'` |
| Depenses d'une action | `expenses WHERE excode = <aacode>` |
| Actions liees a un workflow | `adrsactions WHERE aawfhead = <id>` |
| Types d'activites actifs | `activities WHERE acactiv = 'O'` |
| Societes CRM (prospects) | `adresses WHERE adcust IS NULL OR adcust <> 'O'` |
| Donnees SmartSales importees | `smartsales_client`, `smartsales_contact`, `smartsales_action` |
| Configuration menu CRM/ERP | `crmerpmenu WHERE ceactiv = 'O'` |
| Comptes email | `mailaccount` |
