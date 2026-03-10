# nv_auto_resizer

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _design
- **Description**: Objet de design/theme - gestion du redimensionnement

## Variables d'instance

| Variable | Type |
|----------|------|
| ipo_object | powerobject |
| ir_registered_controls | nv_auto_resizer[] |
| inv_parent_resizer | nv_auto_resizer |
| ib_anchor_left | boolean |
| ib_anchor_right | boolean |
| ib_anchor_top | boolean |
| ib_anchor_bottom | boolean |
| il_anchored_left | long |
| il_anchored_right | long |
| il_anchored_top | long |
| il_anchored_bottom | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_register_object(powerobject apo_obj) : boolean | Public | Fonction publique |
| of_isvisual(powerobject apo_object) : boolean | Public | Fonction publique |
| of_get_y(powerobject apo_obj) : long | Public | Fonction publique |
| of_get_width(powerobject apo_obj) : long | Public | Fonction publique |
| of_get_height(powerobject apo_obj) : long | Public | Fonction publique |
| initialize(powerobject apo_obj, powerobject apo_parent) : integer | Public | Fonction publique |
| of_datatypeofcontainer(powerobject apo_object) : string | Public | Fonction publique |
| of_findobject(powerobject ado_obj) : powerobject | Public | Fonction publique |
| of_scanobject(powerobject apo_obj) : integer | Public | Fonction publique |
| of_get_x(powerobject apo_obj) : long | Public | Fonction publique |
| of_datatypeof(powerobject apo_object) : string | Public | Fonction publique |
| of_get_tag(powerobject apo_obj) : string | Public | Fonction publique |
| of_set_tag(powerobject apo_obj, string as_newtag) : void (subroutine) | Public | Fonction publique |
| of_set_y(powerobject apo_obj, long al_y) : void (subroutine) | Public | Fonction publique |
| of_set_x(powerobject apo_obj, long al_x) : void (subroutine) | Public | Fonction publique |
| of_set_width(powerobject apo_obj, long al_w) : void (subroutine) | Public | Fonction publique |
| of_set_height(powerobject apo_obj, long al_h) : void (subroutine) | Public | Fonction publique |
| of_width_changed(long al_newwidth) : void (subroutine) | Public | Fonction publique |
| of_x_changed(long al_newx, long al_newwidth, boolean ab_toleft) : void (subroutine) | Public | Fonction publique |
| of_y_changed(long al_newy, long al_newheight, boolean ab_totop) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
