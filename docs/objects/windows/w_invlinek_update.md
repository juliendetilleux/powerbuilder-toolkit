# w_invlinek_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Invlinek - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| action | String |
| il_invoicehead | long |
| id_qtyreq | decimal |
| ib_validinvoiceline | boolean |
| ib_last | boolean |
| il_salhead | long |
| id_OldQty | decimal |
| il_row | long |
| is_customer | string |
| is_slcomment | string |
| is_typ | string |
| idec_ratio | decimal |
| idec_slrist | decimal |
| ii_Ret | long |
| iboo_RistGlob | Boolean |
| iw_parent | w_window |
| is_MULTICO | string |
| invo_imputcpt | nvo_imputcpt |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminvoiceok() | public | Verifie iteminvoiceok |
| wf_generatenewline() | public | Creation |
| wf_refresh_fields() | public | Rafraichit l'affichage |
| wf_confirm() | public | Verifie wf_confirm |

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
