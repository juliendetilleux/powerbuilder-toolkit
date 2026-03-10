# w_inv_directsal

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Factures directsal (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| sel_loc | string |
| sel_date | datetime |
| cptexer | string |
| otherrate | boolean |
| ratecode | long |
| sel_rhcode | long |
| ib_facture | Boolean |
| is_msgtxt | string |
| is_ordcurr | string |
| id_curconv | double |
| is_adcode | string |
| is_Lang | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| loadsalerate(string customer, datetime saledate) | public | Charge les donnees |
| addinvoicerow(long invoicenum, long invoiceline, string item, string itname, string itum, double shipqty, double saleprice, double originprice, double tvapccsut, string tvatyp) | public | Ajout |
| loadratenames() | public | Charge les donnees |
| loadtarif(long rhcode) | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
