# uo_extendeddw

- **Type**: User Object (Visuel)
- **Ancetre**: uo_datawindow
- **Module**: _system
- **Description**: Objet systeme - gestion DataWindow

## Variables d'instance

| Variable | Type |
|----------|------|
| il_clickedrow | long |
| ib_gorowfocuschanged | boolean |
| il_firstselectedrow | long |
| ib_showcurrent | boolean |
| ib_ctrla | boolean |
| ib_mousemove | boolean |
| ib_keepselect | boolean |
| ib_goclicked | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| sort() : integer | Public | Fonction publique |
| filter() : integer | Public | Fonction publique |
| uof_setmultiselect(boolean ab_value) : integer | Public | Fonction utilisateur publique |
| selectrow(long row, boolean boolean) : integer | Public | Fonction publique |
| uof_selectedcount() : long | Public | Fonction utilisateur publique |
| uof_getselectedrows(long al_selectedrows[]) : integer | Public | Fonction utilisateur publique |
| uof_selectall() : integer | Public | Fonction utilisateur publique |
| uof_setselectall(boolean ab_value) : integer | Public | Fonction utilisateur publique |
| uof_removeselect(long al_row, boolean ab_atomic) : integer | Public | Fonction utilisateur publique |
| uof_getorderedselectedrows(long al_selectedrows[]) : integer | Public | Fonction utilisateur publique |
| uof_resetselect(boolean ab_atomic) : integer | Public | Fonction utilisateur publique |
| uof_showcurrent(boolean ab_value) : integer | Public | Fonction utilisateur publique |
| debug(string eventname) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_selectionchanged | Evenement personnalise |
| ue_keypressed | Evenement personnalise |
| ue_lbuttondown | Evenement personnalise |
| ue_lbuttonup | Evenement personnalise |
| ue_selectionchanging | Evenement personnalise |
