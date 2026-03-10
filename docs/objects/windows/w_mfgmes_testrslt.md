# w_mfgmes_testrslt

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgmes testrslt (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_specific | gstr_specific |
| il_wtcode | long |
| ib_modif | Boolean |
| idddw_wtrsltchoice | DataWindowChild |
| ii_update | integer |
| is_finish | string |
| idddw_wtdesc | DataWindowChild |
| ib_choice | Boolean |
| is_worker | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_validate_result() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
