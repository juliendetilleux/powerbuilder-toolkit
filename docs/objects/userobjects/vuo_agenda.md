# vuo_agenda

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _agenda
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| is_mode | string |
| il_error | long |
| is_error | string |
| idt_date | datetime |
| idt_caldate | datetime |
| is_curruser | string |
| il_actioncode | long |
| is_dataobject | string |
| ib_drag | boolean |
| il_row | long |
| il_daywidth | long |
| il_availablespace | long |
| il_cgid | long |
| is_cgname | string |
| istr_ua | struct_useraction[] |
| idwo | dwobject |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_init_design_dwheight(long al_headerheight, long al_rowheight, long al_availablespace) : long | Public | Fonction publique |
| uf_setdate(datetime adt_date) : void (subroutine) | Public | Fonction utilitaire |
| uf_init_design(string as_mode) : void (subroutine) | Public | Fonction utilitaire |
| of_init_design_appointments() : void (subroutine) | Public | Fonction publique |
| of_init_design_day() : void (subroutine) | Public | Fonction publique |
| uf_cal_rbuttondown(string as_state) : void (subroutine) | Public | Fonction utilitaire |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_retrieveend | Evenement personnalise |
| ue_resize | Evenement personnalise |
| ue_updated | Evenement personnalise |
| ue_lbuttonup | Evenement personnalise |
