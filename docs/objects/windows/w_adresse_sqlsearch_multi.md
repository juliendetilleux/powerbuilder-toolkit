# w_adresse_sqlsearch_multi

- **Type**: Window
- **Ancetre**: w_response
- **Module**: Shared_peppol
- **Description**: Adresses sqlsearch - Multi-selection (Peppol)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_return | s_sqlsearch_return_multi |
| istr_empty | s_sqlsearch_return_multi |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |
| is_Action | String |
| ib_Maintallowed | Boolean |
| ib_canceled | boolean |
| WithAltMenu | boolean |
| AltMenu | string |
| Altmenuitem | string |
| is_fkey | string |
| iSel_adresse_id | string |
| ib_canfilter | boolean |
| is_BDBADRS | string |
| is_basicSqlSelect | string |
| is_mccode | String |
| is_mcfilter | String |
| ib_withMultiCo | Boolean |
| SqlSelect | String |
| SqlSelect_shipto | String |
| is_MULTICO | string |
| is_sqlselect | s_sqlselect |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteradresse() | public | Applique un filtre |
| arrange(string as_diffretrieve) | public | Reorganisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
