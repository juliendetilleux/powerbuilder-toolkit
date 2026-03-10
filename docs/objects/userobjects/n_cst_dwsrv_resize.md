# n_cst_dwsrv_resize

- **Type**: User Object (Non-visuel)
- **Ancetre**: n_cst_dwsrv
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
| LINE | string (Constant) |
| EMPTY | string (Constant) |
| ii_rounding | integer |
| il_parentminimumwidth | long |
| il_parentminimumheight | long |
| il_parentprevwidth | long |
| il_parentprevheight | long |
| inv_registered | n_cst_dwsrv_resizeattrib[] |
| istr_registered | n_cst_dwsrv_resizeattrib[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_register(string as_control, integer ai_movex, integer ai_movey, ...) : integer | Public | Fonction publique |
| of_register(string as_control, string as_method) : integer | Public | Fonction publique |
| of_setrequestor(uo_datawindow adw_requestor) : integer | Public | Fonction publique |
| of_register(dwobject adwo_control, integer ai_movex, integer ai_movey, ...) : integer | Public | Fonction publique |
| of_register(dwobject adwo_control, string as_method) : integer | Public | Fonction publique |
| of_unregister(string as_control) : integer | Public | Fonction publique |
| of_unregister(dwobject adwo_control) : integer | Public | Fonction publique |
| of_getinfo(n_cst_infoattrib anv_infoattrib) : integer | Public | Fonction publique |
| of_getregisterable(string as_objects[]) : integer | Public | Fonction publique |
| of_isregistered(string as_control) : boolean | Public | Fonction publique |
| of_isregistered(dwobject adwo_control) : boolean | Public | Fonction publique |
| of_getregistered(dwobject adwo_control, boolean ab_scale, integer ai_movex, ...) : integer | Public | Fonction publique |
| of_getregistered(string as_control, boolean ab_scale, integer ai_movex, ...) : integer | Public | Fonction publique |
| of_getregistered(string as_control[], boolean ab_scale[], integer ai_movex[], ...) : integer | Public | Fonction publique |
| of_getpropertyinfo(n_cst_propertyattrib anv_attrib) : integer | Public | Fonction publique |
| of_setminsize(integer ai_minwidth, integer ai_minheight) : integer | Public | Fonction publique |
| of_setorigsize(integer ai_width, integer ai_height) : integer | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
