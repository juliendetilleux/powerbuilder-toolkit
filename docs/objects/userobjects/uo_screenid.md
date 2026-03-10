# uo_screenid

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _system
- **Description**: Controle visuel d'identification d'ecran (gestion des etats, couleurs, taille, traduction)

## Variables d'instance

| Variable | Type |
|----------|------|
| have_focus | boolean |
| MinWidth | integer |
| MinHeight | integer |
| starttime | time |
| escape_desabled | boolean |
| ib_orig_visible | boolean |
| iw_parent_window | w_window |
| iw_set_resize | w_set_resize |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| get_info() : void | Public | Recupere les informations de l'ecran |
| wf_statesave() : void | Public | Sauvegarde l'etat de l'ecran |
| wf_staterestore() : void | Public | Restaure l'etat de l'ecran |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_color | Gestion des couleurs de l'ecran |
| ue_posttranslate | Post-traduction des libelles |
