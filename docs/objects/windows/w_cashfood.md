# w_cashfood

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_food
- **Description**: Cashfood

## Variables d'instance

| Variable | Type |
|----------|------|
| il_SalCode | long |
| il_idle | long |
| ids_salhead | nv_datastore |
| idec_tot | decimal |
| Is_pay | decimal |
| idec_rendu | decimal |
| idec_recu | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refreshtime() | public | Rafraichit l'affichage |
| wf_opencash(string as_type) | public | Ouverture |
| wf_init_salehead_and_tickethead() | public | Initialisation |
| wf_create_salline_and_ticketline(long al_sale_order, long al_sale_line, long al_rownum) | public | Creation |
| wf_create_salhead_and_tickethead() | public | Creation |
| wf_makepayments() | public | Calcule/retourne wf_makepayments |
| wf_histocash() | public | Calcule/retourne wf_histocash |
| wf_histostock(string as_item, decimal adec_qty, long al_row) | public | Calcule/retourne wf_histostock |
| wf_check_dbversion() | public | Validation |
| wf_stock(string as_item, decimal adec_qty, long al_row) | public | Calcule/retourne wf_stock |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| mousemove | Deplacement de la souris |
| clicked | Clic sur la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
