# w_sales_shipnotice

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes shipnotice

## Variables d'instance

| Variable | Type |
|----------|------|
| header_modified | boolean |
| WithPack | boolean |
| printed | string |
| ls_testtri | string |
| isel_shiphead | long |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| isel_shipline | long |
| il_Sel_ShipCost | Long |
| ii_Sel_ShipCost_Line | Integer |
| is_SelAdNeVal | String |
| iw_histo | w_sales_shipnotice |
| is_Action | String |
| idt_OldStart | DateTime |
| ii_nbcopy | integer |
| il_ShipPack_SelRow | Long |
| il_Sel_ShipPack_Line | Long |
| idwc_QCChoices | Datawindowchild |
| ib_qcretrieve | boolean |
| ib_QCModified | boolean |
| is_adlang | string |
| is_cust | string |
| QCNum | long |
| QCNumIP | long |
| ii_Weight2Use4EAN | integer |
| il_rowreselect | long |
| is_stseq | long |
| ii_shipto_id | integer |
| is_SpInv | String |
| is_ETQDETQT | string |
| is_OrdTri | any |
| il_qcctrlid | long |
| ii_QURCPACK | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| checkmodif() | public | Validation |
| filteritem() | public | Applique un filtre |
| wf_delete_shipcost() | public | Suppression |
| wf_shippack_create() | public | Creation |
| wf_shippack_modify() | public | Traitement wf_shippack_modify |
| wf_shippack_delete() | public | Suppression |
| wf_dsadv_191() | public | Traitement wf_dsadv_191 |
| wf_spec_qcc(long QCC) | public | Calcule/retourne wf_spec_qcc |
| wf_dsadv_sscc() | public | Traitement wf_dsadv_sscc |
| wf_desadv() | public | Traitement wf_desadv |
| wf_detect_lotptr() | public | Verifie wf_detect_lotptr |
| load_multitri() | public | Charge les donnees |
| wf_create_annex_file(long al_shipcode) | public | Creation |
| wf_generic_qc() | public | Verifie wf_generic_qc |
| wf_clotship(long al_shcode, string as_clot) | public | Traitement wf_clotship |
| wf_fedex_truckrefmodify() | public | Traitement wf_fedex_truckrefmodify |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
