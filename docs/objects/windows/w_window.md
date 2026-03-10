# w_window

- **Type**: Window
- **Ancetre**: w_a_pmi
- **Module**: _ancestor
- **Lignes**: 931
- **Description**: Deuxieme couche de la hierarchie d'heritage. Fournit les services de redimensionnement automatique, de sauvegarde/restauration des tailles, de design/theming, de gestion des feuilles MDI et de multilinguisme. C'est la fenetre de base dont heritent tous les sous-types (response, main, child, popup, mdi).

## Heritage
- Ancetres: w_a_pmi > window (PB built-in)
- Descendants directs: w_a_response_pmi, w_a_popup_pmi, w_a_mdi_pmi, w_a_mdihelp_pmi, w_a_main_pmi, w_a_child_pmi, w_db_move, w_crm_appointments_param, w_crm_appointments_chgmtgrp, w_crm_appointments, w_crm_agenda, w_ship_summary, w_linkitcountry, w_claims, w_adresgroup_select, w_icone, w_agendacolor (17 descendants directs)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| ib_sheet_enabled | Boolean | Indique si la fenetre fonctionne comme feuille MDI |
| iw_sheet_parent | w_window | Reference vers la fenetre parente (feuille MDI) |
| ib_save_size | Boolean | Active la sauvegarde/restauration de la taille de la fenetre |
| inv_ds_size | nv_datastore | DataStore pour la sauvegarde des tailles |
| inv_ds_resize | nv_datastore | DataStore pour les donnees de redimensionnement |
| inv_resize | n_cst_resize | Service de redimensionnement (ancien) |
| inv_dw_resize | n_cst_dwsrv_resize | Service de redimensionnement des DataWindows |
| ib_is_sheet | Boolean | Indique si la fenetre est une feuille MDI active |
| ib_border | Boolean | Flag de bordure |
| inv_resizer | nv_auto_resizer | Service de redimensionnement automatique (nouveau) |
| Is_name_Frame | string | Nom du frame MDI parent |
| ib_resize | Boolean | Active le redimensionnement automatique |
| ib_getmail | Boolean | Flag pour la reception de mails |
| ib_getfile | Boolean | Flag pour la reception de fichiers |
| inv_language | nv_language | Service de gestion multilingue |

## Fonctions
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| wf_restore_size() | public | Restaure la taille et position sauvegardees de la fenetre |
| wf_save_size() | public | Sauvegarde la taille et position actuelles de la fenetre |
| wf_save_control(windowobject[], string) | public | Sauvegarde l'etat des controles enfants |
| wf_restore_control(windowobject[], string) | public | Restaure l'etat des controles enfants |
| of_setresize(boolean) | public | Active ou desactive le service de redimensionnement |
| wf_set_resize_control(windowobject[]) | public | Configure les controles pour le redimensionnement automatique |
| wf_set_resize(boolean) | public | Initialise le redimensionnement avec option de rafraichissement |
| wf_ifexist_progparamwindow(string) | public | Verifie l'existence d'un parametre dans progparamwindow |
| wf_return_mcdo() | public | Retourne la reference McDonald (usage specifique client) |
| wf_get_logofromuser(string) | public | Recupere le logo associe a un utilisateur |
| wf_set_design() | public | Applique le theme/design de l'application a la fenetre |
| wf_set_design_control(windowobject[], string) | public | Applique le theme aux controles enfants |
| waf_refresh() | public | Fonction abstraite de rafraichissement (surchargeable par les descendants) |
| wf_hidemenu() | public | Cache le menu de la fenetre |

## Evenements surcharges
Aucun evenement surcharge directement (logique dans les fonctions).

## Controles principaux
Aucun controle specifique (fenetre de base pour l'heritage).

## Dependances
- **Utilise**: n_cst_resize, n_cst_dwsrv_resize, nv_auto_resizer, nv_datastore, nv_language, progparamwindow (table DB)
- **Utilise par**: 574+ references dans le projet -- utilise comme type de variable (w_window lw_popup) dans de nombreuses fenetres et fonctions globales (gf_get_window_parent, gf_get_window4popup, gf_check_sheet, centerwindow, centerscreen, gf_skin_set_w, etc.)
