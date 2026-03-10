# w_purhead_quickreceipt

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purhead quickreceipt (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_filter | string |
| is_ColName | string |
| ScreenFilter | string |
| fullfilter | String |
| il_phcode_sel | long |
| is_supplier_Id | string |
| is_supplier_Name | string |
| is_reception_info | string |
| is_checkparamlotfss | string |
| is_QCParaLaunch | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
