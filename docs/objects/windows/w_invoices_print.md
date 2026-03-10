# w_invoices_print

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Factures - Impression (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_type | integer |
| il_oldrow | long |
| is_OrdTri | string |
| is_McCoCode | string |
| ibool_reinit | boolean |
| is_PRINT1JOB | string |
| printparam | s_print |
| print_return | s_print_return |
| WithCopyCtrl | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_where_clause() | public | Retourne wf_where_clause |
| wf_invoiceprint(long sel_invoice, long invoicenum, boolean autoprint) | public | Impression |
| wf_invoiceprint_auto(long sel_invoice, long invoicenum, boolean automatic, string sel_dataobject, boolean withprinter, string printername) | public | Impression |
| wf_invoicepdf_auto(long sel_invoice, long invoicenum, boolean automatic, string sel_dataobject, boolean withprinter, string printername) | public | Fonction wf_invoicepdf_auto |
| select_report() | public | Selection |
| wf_invoicepdf(long sel_invoice, long invoicenum, boolean autoprint) | public | Fonction wf_invoicepdf |
| wf_print_pdf(string docfile, string directory) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| destructor | Destructeur |
