# w_purinvlins_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purinvlins - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| qtymodified | boolean |
| action | string |
| ii_InvLine | Integer |
| il_InvHead | Long |
| iw_parent | w_window |
| id_picurconv | decimal |
| is_LBCPUR | string |
| iSel_adresse_id | string |
| iSel_ordr_Curr | string |
| invo_imputcpt | nvo_imputcpt |
| is_ErrMess | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| input_ok() | public | Verifie input_ok |
| changeitem(string selected_item) | public | Modification |
| changeorder(double orderqty, double uomconv, double stdval, string ordercurr) | public | Modification |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
