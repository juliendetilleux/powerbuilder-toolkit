# w_sales_return_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes retours - Mise a jour

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_updatesscc | int |
| ii_putonprecNE | int |
| id_return_qty | dec |
| is_updatestock | string |
| is_reopenorder | string |
| ls_statuscommand | string |
| ib_newlot | boolean |
| lb_first | boolean |
| iboo_Truck | Boolean |
| iboo_UpdateTruck | Boolean |
| il_TruckId | Long |
| il_TruckLine | Long |
| Shipchoice | integer |
| ii_SpecRtrn | Integer |
| is_ittyp | String |
| il_LASTXORD | long |
| is_WithCharge | string |
| iw_parent | w_window |
| is_ITUMTRF | string |
| is_itisumtarif | string |
| id_return_qtytarif | decimal |
| id_qtyshippedtarif | decimal |
| isel_shiphead | long |
| isel_shipline | long |
| idt_exp | datetime |
| is_qc | string |
| is_item | string |
| il_commande | long |
| il_lignecommande | long |
| id_shippedqty | dec |
| is_originallot | string |
| is_salrtrns | string |
| is_salrtrnt | string |
| is_parlot | string |
| is_empl | string |
| is_itemnom | string |
| is_um | string |
| is_facture | string |
| il_nfacture | long |
| is_salrtrno | string |
| is_devis | string |
| is_typpay | string |
| is_client | string |
| is_tva | string |
| is_tvatyp | string |
| id_prix | dec |
| is_shcons | string |
| is_BLOCAGE | string |
| ii_indexbloc | int |
| is_NUMINNC | string |
| is_MULTICO | string |
| is_SHIPRETCRED1 | string |
| is_SHIPRETCRED2 | string |
| is_SHIPRETCRED3 | string |
| invo_imputcpt | nvo_imputcpt |
| nvo_open | nvo_open_return_update |
| il_ihcodemc | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| input_ok() | public | Verifie input_ok |
| wf_print(long histseq) | public | Impression |
| wf_update_sscc_bak(string as_lot, string as_loc, decimal ad_qty) | public | Mise a jour |
| wf_update_shipcost_bak(long al_shiphead, long al_shipline, decimal adec_qtytoreturn) | public | Mise a jour |
| wf_returnghost_bak() | public | Verifie wf_returnghost_bak |
| wf_print_sscc_bak(string as_lot, string as_sscc, decimal ad_qty) | public | Impression |
| wf_do_update_sscc_bak(string as_sscc, string as_lot, decimal ad_qty, string as_loc) | public | Mise a jour |
| wf_addreturn_shipcost_bak(long al_shiphead, long al_shipline, long al_shipheadnew, long al_shiplinenew, decimal adec_qtytoreturn) | public | Ajout |
| wf_addinvlinefromshipcost_bak(long al_shiphead, long al_shipline, long al_invoiceheadnew) | public | Ajout |
| addinvoicerow_bak(long invoicenr, integer invoiceline, long shipnum, integer shipline, long ordernum, integer orderlin, string item, string itemdesc, double qty, double tvalvl, string tvatyp) | public | Ajout |
| createnewlot_bak(string newlot) | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
