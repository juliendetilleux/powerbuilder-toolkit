# w_intro_new

- **Type**: Window
- **Ancetre**: w_mdi
- **Module**: _design
- **Description**: Introduction new (Design)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_design | str_design |
| ib_before_show | Boolean |
| uo_top | uo_toolbar_top |
| uo_left | uo_toolbar_left |
| uo_right | uo_toolbar_right |
| uo_bottom | uo_toolbar_bottom |
| ii_wbkg_w | Integer |
| ii_wbkg_h | Integer |
| ib_multi_screen | Boolean |
| env_tmp | Environment |
| ib_first | boolean |
| il_width | Long |
| ib_start | Boolean |
| inv_wallpaper | n_cst_wallpaper |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| fw_init_design() | public | Initialisation |
| fw_init_design_default() | public | Initialisation |
| fw_refresh_design() | public | Rafraichit l'affichage |
| fw_save_design() | public | Sauvegarde les donnees |
| fw_save_favoris() | public | Sauvegarde les donnees |
| fw_restore_favoris() | public | Traitement fw_restore_favoris |
| fw_find_menu(menu am_menu, string as_classname) | public | Recherche |
| fw_save_default_design() | public | Sauvegarde les donnees |
| wf_read_actions() | public | Traitement wf_read_actions |
| checkcustprg() | public | Validation |
| wf_checkvisible() | public | Validation |
| wf_ticket_balloontip() | public | Traitement wf_ticket_balloontip |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_set_design | Evenement personnalise ue_set_design |
| ue_mdi_move | Evenement personnalise ue_mdi_move |
| ue_post_open | Evenement personnalise ue_post_open |
| ue_paint | Evenement personnalise ue_paint |
| open | Ouverture de la fenetre |
| resize | Redimensionnement de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| timer | Evenement timer |
| activate | Activation de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
