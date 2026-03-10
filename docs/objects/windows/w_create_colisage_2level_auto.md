# w_create_colisage_2level_auto

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Create colisage 2level auto (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| iw_parent | w_window |
| il_salhead | long |
| report2use | string |
| ReportDW | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_initialise() | public | Initialisation |
| wf_print(string as_report2use, ref s_print printparam, boolean ab_withsetup, boolean ab_automatic, ref s_print_return print_return) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
