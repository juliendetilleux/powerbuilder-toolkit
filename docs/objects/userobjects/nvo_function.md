# nvo_function

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_variables | gstr_specific |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_espera_checkerror(n_winsock luo_winsock, unsignedlong al_socket, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_findlblproc(string as_lot, string as_item, string as_adcode, ...) : boolean | Public | Fonction utilisateur publique |
| nvo_get_calc_exp(long al_shiporder, integer ai_shipline, string as_customer, ...) : date | Public | Fonction publique |
| nvo_get_calc_cmd(long al_salhead, integer al_salline, string as_customer, ...) : date | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_std_bizerba | Evenement personnalise |
| ue_std_espera | Evenement personnalise |
| ue_std_bizerva_weight | Evenement personnalise |
| ue_rcsc | Evenement personnalise |
| ue_rcmo | Evenement personnalise |
