# w_cmdpur_sqlsearch

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Cmdpur sqlsearch (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |
| is_Action | String |
| ib_Maintallowed | Boolean |
| ib_canceled | boolean |
| WithAltMenu | boolean |
| AltMenu | string |
| Altmenuitem | string |
| is_fkey | string |
| ib_canfilter | boolean |
| is_BDBADRS | string |
| is_basicSqlSelect | string |
| is_mccode | String |
| is_mcfilter | String |
| ib_withMultiCo | Boolean |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
| doubleclicked | Double-clic sur la fenetre |
