# w_invlines_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Invlines - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_invoicehead | long |
| id_qtyreq | decimal |
| ib_validinvoiceline | boolean |
| il_salord | long |
| il_salline | long |
| il_row | long |
| is_customer | string |
| is_slcomment | string |
| idec_ratio | decimal |
| idec_slrist | decimal |
| ii_Ret | int |
| iboo_RistGlob | Boolean |
| il_condhead | long |
| il_condline | long |
| ib_last | boolean |
| iw_parent | w_window |
| is_MULTICO | string |
| invo_imputcpt | nvo_imputcpt |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminvoiceok() | public | Verifie iteminvoiceok |
| wf_generatenewline(string as_customer, long al_saleorder, long al_salline) | public | Creation |
| wf_refresh_fields() | public | Rafraichit l'affichage |
| wf_save() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_opened | Evenement personnalise ue_opened |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| rbuttondown | Evenement rbuttondown |
