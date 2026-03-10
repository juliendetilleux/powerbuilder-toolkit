# w_set_resize

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _design
- **Description**: Set resize (Design)

## Variables d'instance

| Variable | Type |
|----------|------|
| iw_parent_size | w_window |
| iuo_size | uo_st_resize |
| il_tv_current | Long |
| idw_control | Datawindow |
| iuo_size_dw | uo_st_resize |
| ib_visible_size | Boolean |
| ib_visible_size_dw | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_get_picture(object ao_typeof) | public | Retourne picture |
| wf_init(windowobject a_control[], long al_handle, string as_parent) | public | Initialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| deactivate | Desactivation de la fenetre |
| activate | Activation de la fenetre |
| resize | Redimensionnement de la fenetre |
| clicked | Clic sur la fenetre |
