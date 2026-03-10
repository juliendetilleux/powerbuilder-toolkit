# w_mailadress_sel

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Mailadress sel (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_code_firme | string |
| is_origin_select_merge | string |
| idwc1 | datawindowchild |
| il_cpt | long |
| ScreenFilter | string |
| fullfilter | String |
| its_adcode | string |
| iti_ctline | integer |
| its_ctmail | string |
| its_adname | string |
| its_ctname | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_selectadress() | public | Selection |
| wf_setselection(long al_row, string as_type) | public | Definit selection |
| wf_insertfilteredrows() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
