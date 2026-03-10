# uo_toolbar_top

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _design
- **Description**: Objet de design/theme

## Variables d'instance

| Variable | Type |
|----------|------|
| xpos | long |
| ypos | long |
| iw_parent | w_intro_new |
| iuo_toolbar_menu | uo_toolbar_menu[] |
| iuo_toolbar_submenu | uo_toolbar_submenu[] |
| iuo_toolbar_submenu_separate | uo_toolbar_submenu_separate[] |
| iuo_current_menu | uo_toolbar_menu |
| iuo_flyon_menu | uo_toolbar_menu |
| iuo_toolbar_submenu_drag | uo_toolbar_submenu |
| inv_tooltip | nv_flxapi_tooltip |
| iuo_current_submenu | uo_toolbar_submenu |
| env_tmp | Environment |
| ib_submenu_visible | Boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| fu_create_menu(menu a_menu) : void (subroutine) | Public | Fonction publique |
| fu_menu_enter(uo_toolbar_menu auo_current) : void (subroutine) | Public | Fonction publique |
| fu_menu_leave(uo_toolbar_menu auo_current) : void (subroutine) | Public | Fonction publique |
| fu_submenu_enter(uo_toolbar_submenu auo_current) : void (subroutine) | Public | Fonction publique |
| fu_submenu_leave(uo_toolbar_submenu auo_current) : void (subroutine) | Public | Fonction publique |
| fu_click_submenu(uo_toolbar_submenu auo_current) : void (subroutine) | Public | Fonction publique |
| fu_hidemenu() : void (subroutine) | Public | Fonction publique |
| fu_click_menu(uo_toolbar_menu auo_current, boolean ab_submenu_visible) : void (subroutine) | Public | Fonction publique |
| fu_refresh_mdi() : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_set_design | Evenement personnalise |
