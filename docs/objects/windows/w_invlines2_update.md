# w_invlines2_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Invlines2 - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_invoicehead | long |
| id_qtyreq | decimal |
| ib_validinvoiceline | boolean |
| il_runid | long |
| ii_Ret | int |
| iboo_RistGlob | Boolean |
| ii_ihshipto | int |
| iSel_adresse_id | string |
| is_MULTICO | string |
| invo_imputcpt | nvo_imputcpt |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminvoiceok() | public | Verifie iteminvoiceok |
| wf_refresh_fields() | public | Rafraichit l'affichage |
| wf_save() | public | Sauvegarde les donnees |
| wf_generatenewline(string as_customer, long al_saleorder, long al_salline) | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_opened | Evenement personnalise ue_opened |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
