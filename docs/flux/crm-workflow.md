# Flux : CRM - Gestion de la relation client

## Description
Le module CRM de PmiGest (`_sales_crm`) fournit une gestion complete de la relation client : societes, contacts, actions commerciales, agenda, mailing, publipostage et statistiques. Le CRM dispose de son propre cadre MDI (`w_crm_mdi_frame`) et peut fonctionner comme un module autonome ou integre a l'ERP principal.

## Etapes du flux

1. **Gestion des societes** : Creation et maintenance de la fiche societe (prospect ou client). → Fenetre : `w_crm_company_create` / `w_crm_company_detail`, Tables : `adresses`, `crmcompany`
2. **Gestion des contacts** : Association de contacts aux societes avec coordonnees et roles. → Fenetre : `w_contacts_select` / `w_contacts_multi_view`, Tables : `contacts`, `adresses`
3. **Mise a jour massive** : Modification en masse des fiches societes ou contacts. → Fenetre : `w_crm_company_mass_update` / `w_crm_contact_mass_update`, Tables : `adresses`, `contacts`
4. **Creation d'actions commerciales** : Planification d'appels, visites, reunions, taches. → Fenetre : `w_crm_activities_update`, Table : `crmactions`
5. **Suivi des actions** : Liste et suivi de l'avancement des actions. → Fenetre : `w_crm_actions_list`, Table : `crmactions`
6. **Groupes d'actions** : Organisation des actions par groupe thematique. → Fenetre : `w_crm_action_group`, Table : `crmactiongroup`
7. **Agenda** : Visualisation des rendez-vous et actions dans un calendrier (jour, semaine). → Fenetre : `w_crm_agenda` / `w_crm_agenda_day` / `w_crm_agenda_week`, Table : `crmactions`
8. **Rendez-vous** : Gestion des rendez-vous avec parametrage. → Fenetre : `w_crm_appointments` / `w_crm_appointments_param`, Table : `crmappointments`
9. **Gestion des emails** : Creation, envoi et reception d'emails. Centre de messagerie integre. → Fenetre : `w_crm_mailcreate` / `w_crm_mailcenter` / `w_crm_mail_inbox`, Tables : `crmmail`, `crmmailattach`
10. **Publipostage (merge)** : Creation de documents de publipostage (lettres, etiquettes). → Fenetre : `w_crm_merge` / `w_crm_merge_master` / `w_crm_merge_label`, Tables : `crmmerge`, `crmmergefields`
11. **Import de donnees** : Import de contacts et societes depuis des fichiers externes. → Fenetre : `w_crm_import_prepare` / `w_crm_import_bind` / `w_crm_import_show`, Table : `crmimport`
12. **Export de donnees** : Export de la base CRM vers differents formats. → Fenetre : `w_crm_export`, Tables : `adresses`, `contacts`
13. **Synchronisation Outlook** : Integration avec Microsoft Outlook pour les contacts et rendez-vous. → Fenetre : `w_crm_outlook` / `w_crm_outlook_confirm`, Table : `crmoutlook`
14. **Statistiques** : Analyses et statistiques du marche et des actions commerciales. → Fenetre : `w_crm_stat_market`, Tables : `crmactions`, `adresses`
15. **Impression CRM** : Impressions specifiques au CRM (fiches, listes, rapports). → Fenetre : `w_crm_prints`, DataWindows : module `_prints_crm`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_crm_mdi_frame` | `_sales_crm` | Cadre MDI principal du CRM |
| `w_crm_company_create` | `_sales_crm` | Creation societe |
| `w_crm_company_detail` | `_sales_crm` | Detail societe |
| `w_crm_company_mass_update` | `_sales_crm` | Mise a jour massive societes |
| `w_crm_company_remark_update` | `_sales_crm` | Remarques societe |
| `w_crm_company_merge` | `_sales_crm` | Fusion de societes en double |
| `w_crm_contact_mass_update` | `_sales_crm` | Mise a jour massive contacts |
| `w_crm_activities_update` | `_sales_crm` | Creation/modification d'actions |
| `w_crm_actions_list` | `_sales_crm` | Liste des actions |
| `w_crm_action_update` | `_sales_crm` | Mise a jour action |
| `w_crm_action_group` | `_sales_crm` | Groupes d'actions |
| `w_crm_agenda` | `_sales_crm` | Agenda principal |
| `w_crm_agenda_day` | `_sales_crm` | Agenda vue journaliere |
| `w_crm_agenda_week` | `_sales_crm` | Agenda vue hebdomadaire |
| `w_crm_appointments` | `_sales_crm` | Rendez-vous |
| `w_crm_appointments_param` | `_sales_crm` | Parametres rendez-vous |
| `w_crm_appointments_chgmtgrp` | `_sales_crm` | Changement de groupe rendez-vous |
| `w_crm_mailcreate` | `_sales_crm` | Creation email |
| `w_crm_mailcenter` | `_sales_crm` | Centre de messagerie |
| `w_crm_mail_inbox` | `_sales_crm` | Boite de reception |
| `w_crm_mailshow` | `_sales_crm` | Affichage email |
| `w_crm_mailsend` | `_sales_crm` | Envoi email |
| `w_crm_mailsign_update` | `_sales_crm` | Gestion des signatures |
| `w_crm_mail_doc_update` | `_sales_crm` | Documents attaches aux mails |
| `w_crm_mailadress_sel` | `_sales_crm` | Selection adresses email |
| `w_crm_merge` | `_sales_crm` | Publipostage |
| `w_crm_merge_master` | `_sales_crm` | Modeles de publipostage |
| `w_crm_merge_label` | `_sales_crm` | Etiquettes de publipostage |
| `w_crm_merge_list_message` | `_sales_crm` | Liste messages publipostage |
| `w_crm_mail_mergefields` | `_sales_crm` | Champs de fusion |
| `w_crm_import_prepare` | `_sales_crm` | Preparation import |
| `w_crm_import_bind` | `_sales_crm` | Liaison colonnes import |
| `w_crm_import_show` | `_sales_crm` | Visualisation import |
| `w_crm_import_error_msg` | `_sales_crm` | Erreurs d'import |
| `w_crm_export` | `_sales_crm` | Export donnees |
| `w_crm_outlook` | `_sales_crm` | Synchronisation Outlook |
| `w_crm_outlook_confirm` | `_sales_crm` | Confirmation synchro Outlook |
| `w_crm_stat_market` | `_sales_crm` | Statistiques marche |
| `w_crm_choices_update` | `_sales_crm` | Choix parametrables |
| `w_crm_choiceline_replace` | `_sales_crm` | Remplacement choix |
| `w_crm_lang_update` | `_sales_crm` | Gestion langues |
| `w_crm_logo` | `_sales_crm` | Logo CRM |
| `w_crm_prints` | `_sales_crm` | Impressions CRM |
| `w_crm_pmix_fantome` | `_sales_crm` | Fenetre fantome (fond CRM) |
| `w_contact_copy` | `_masters` | Copie de contact |
| `w_contact_sqlselect` | `_masters` | Selection SQL contact |
| `w_contacts_select` | `_masters` | Selection contacts |
| `w_contacts_multi_view` | `_masters` | Vue multi-contacts |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `adresses` | Societes / Clients / Prospects (lecture/ecriture) |
| `contacts` | Contacts (ecriture) |
| `crmactions` | Actions commerciales (ecriture) |
| `crmactiongroup` | Groupes d'actions (ecriture) |
| `crmappointments` | Rendez-vous (ecriture) |
| `crmmail` | Emails (ecriture) |
| `crmmailattach` | Pieces jointes emails (ecriture) |
| `crmmerge` | Publipostage (ecriture) |
| `crmmergefields` | Champs de fusion (ecriture) |
| `crmimport` | Donnees importees (ecriture) |
| `crmoutlook` | Synchro Outlook (ecriture) |
| `crmchoices` | Choix parametrables (ecriture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_crm_company_list` | `_sales_crm` | Liste societes CRM |
| `d_crm_actions_list` | `_sales_crm` | Liste actions |
| `d_crm_agenda` | `_sales_crm` | Agenda |
| `d_crm_mail_list` | `_sales_crm` | Liste emails |
| `d_crm_merge_list` | `_sales_crm` | Liste publipostage |

## Liens avec autres flux

- **Vente** : Le CRM peut creer des devis ou commandes depuis une action commerciale.
- **Mailing** : Integration avec le module `Shared_mail` pour l'envoi d'emails.
- **Impression** : Module `_prints_crm` pour les impressions specifiques CRM.
