# n_cst_resize

- **Type**: User Object (Non-visuel)
- **Ancetre**: n_base
- **Module**: _design
- **Description**: Objet de design/theme - gestion du redimensionnement

## Variables d'instance

| Variable | Type |
|----------|------|
| FIXEDRIGHT | String (Constant) |
| FIXEDBOTTOM | String (Constant) |
| FIXEDRIGHTBOTTOM | String (Constant) |
| SCALE | String (Constant) |
| SCALERIGHT | String (Constant) |
| SCALEBOTTOM | String (Constant) |
| SCALERIGHTBOTTOM | String (Constant) |
| FIXEDRIGHT_SCALEBOTTOM | String (Constant) |
| FIXEDBOTTOM_SCALERIGHT | String (Constant) |
| inv_registered | n_cst_resizeattrib[] |
| istr_registered | n_cst_resizeattrib[] |
| DRAGOBJECT | string (Constant) |
| LINE | string (Constant) |
| OVAL | string (Constant) |
| RECTANGLE | string (Constant) |
| ROUNDRECTANGLE | string (Constant) |
| MDICLIENT | string (Constant) |
| ics_dragobject | string (Constant) |
| ics_line | string (Constant) |
| ics_oval | string (Constant) |
| ics_rectangle | string (Constant) |
| ics_roundrectangle | string (Constant) |
| ics_mdiclient | string (Constant) |
| il_parentminimumwidth | long |
| il_parentminimumheight | long |
| il_parentprevwidth | long |
| il_parentprevheight | long |
| ii_rounding | integer |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_SetOrigSize(integer ai_width, integer ai_height) : integer | Public | Fonction publique |
| of_register(windowobject awo_control, integer ai_movex, integer ai_movey, ...) : integer | Public | Fonction publique |
| of_getminmaxpoints(windowobject awo_control[], integer ai_min_x, integer ai_min_y, ...) : integer | Public | Fonction publique |
| of_clear_register() : integer | Public | Fonction publique |
| of_unregister(windowobject awo_control) : integer | Public | Fonction publique |
| of_register(windowobject awo_control, string as_method) : integer | Public | Fonction publique |
| of_setminsize(integer ai_minwidth, integer ai_minheight) : integer | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
