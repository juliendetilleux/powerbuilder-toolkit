# w_shipgroup_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Shipgroup - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_selshipid | long |
| leveltype | string |
| levelpos | long |
| levelseq | long |
| levelprevseq | long |
| leveldesc | string |
| levelshipline | long |
| levelshipqty | dec |
| TVI | TreeViewItem |
| ib_down | boolean |
| ship_row | long |
| grp_handle | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| create_tv() | public | Creation |
| fill_tv_level(integer tree_level, integer previouslevelseq, long level_handle) | public | Traitement fill_tv_level |
| fill_dw_shipline() | public | Traitement fill_dw_shipline |
| wf_groupcreate() | public | Creation |
| wf_groupdelete() | public | Suppression |
| wf_itemdelete() | public | Suppression |
| wf_labelprint() | public | Impression |
| wf_refresh_notice() | public | Rafraichit l'affichage |
| wf_listprint() | public | Impression |
| wf_groupmodify() | public | Traitement wf_groupmodify |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| ue_buttondown | Evenement personnalise ue_buttondown |
| ue_buttonup | Evenement personnalise ue_buttonup |
| ue_mousemove | Evenement personnalise ue_mousemove |
| dragdrop | Depot de glisser-deposer |
| rightclicked | Clic droit sur la fenetre |
