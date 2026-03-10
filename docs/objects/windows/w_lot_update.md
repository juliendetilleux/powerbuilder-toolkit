# w_lot_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Lots - Mise a jour (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_Ret | Integer |
| il_LotRow | Long |
| is_ItemId | String |
| is_ScreenFilter_lot | String |
| is_QCCHCKPSW | string |
| is_LOTSTATP | string |
| ii_lot_status | int |
| is_LOTEXCMRP | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_filter() | public | Applique un filtre |
| wf_filter_lot() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
