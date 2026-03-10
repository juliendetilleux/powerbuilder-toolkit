# w_purchase_receipt

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Achats reception

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_purord | long |
| ls_testtri | string |
| isel_purlin | long |
| screenfilter | string |
| mfgordnum | long |
| is_Sel_AdId | String |
| QCParaLaunch | String |
| RecDatPara | boolean |
| is_ProgParam | String |
| is_rcio | String |
| il_phfileref | long |
| il_phfileline | long |
| il_purhead | long |
| il_purline | long |
| shiptoName | string |
| ShipToNb | integer |
| ii_shipto | integer |
| iSel_item_id | string |
| is_It_sel_name | string |
| iSel_purtyp | string |
| iSel_supp_Id | string |
| is_ITUMTRF | string |
| is_mcfilter | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| receptpurchase() | public | Traitement receptpurchase |
| load_ddlb_shipto() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
