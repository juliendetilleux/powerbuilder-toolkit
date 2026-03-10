# w_purchase_return

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Achats retours

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_purord | long |
| ls_testtri | string |
| isel_purlin | long |
| mfgordnum | long |
| is_sel_purtyp | string |
| is_Sel_AdId | String |
| RecDatPara | boolean |
| is_typ | string |
| is_rcio | String |
| il_phfileref | long |
| il_phfileline | long |
| il_purhead | long |
| il_purline | long |
| shiptoName | string |
| ShipToNb | integer |
| ii_shipto | integer |
| idt_StartDate | DateTime |
| is_FullFilter | String |
| iSel_item_id | string |
| is_It_sel_name | string |
| iSel_supp_Id | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| receptpurchase() | public | Traitement receptpurchase |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
