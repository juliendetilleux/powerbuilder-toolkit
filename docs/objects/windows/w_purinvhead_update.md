# w_purinvhead_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purinvhead - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| exppaymnt | string |
| iboo_Problem | Boolean |
| is_OrgInvTyp | String |
| iboo_Modify | Boolean |
| iboo_ComOk | Boolean |
| is_MULTICO | string |
| is_NUMINNC | string |
| ii_choosepincode | integer |
| il_picodemc | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| input_ok() | public | Verifie input_ok |
| wf_invline_update() | public | Mise a jour |
| wf_check_dateperiod() | public | Validation |
| wf_getnextpicodemc() | public | Retourne nextpicodemc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
