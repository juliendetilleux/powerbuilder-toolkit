# w_invlinec_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Invlinec - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| action | String |
| is_AdCode | string |
| il_invoicehead | long |
| is_tvatyp | string |
| il_runid | long |
| ii_ret | int |
| iboo_RistGlob | Boolean |
| iw_parent | w_window |
| iSel_ordr_Curr | string |
| il_tab_tax | long |
| is_taxe | string |
| is_type_taxe | string |
| idec_InvCurrConv | Decimal |
| is_MULTICO | string |
| invo_imputcpt | nvo_imputcpt |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminvoiceok() | public | Verifie iteminvoiceok |
| f_gettax_fromcust(string as_cust) | public | Verifie f_gettax_fromcust |
| f_createtax() | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
