# w_mfgmes_wc

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgmes wc (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_specific | gstr_specific |
| idddw_workcenter | DataWindowChild |
| is_worker | string |
| is_rlwccode | string |
| il_line_dw_mfgwc | long |
| is_return | string |
| is_filter | string |
| is_ColName | string |
| ScreenFilter | string |
| fullfilter | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem(string as_dwname) | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
