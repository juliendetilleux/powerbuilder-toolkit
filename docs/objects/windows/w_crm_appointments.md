# w_crm_appointments

- **Type**: Window
- **Ancetre**: w_window
- **Module**: _sales_crm
- **Description**: Appointments (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_ahid | long |
| is_ustyp | string |
| is_usentry | string |
| is_salemans | string |
| is_salemanlist | string |
| is_adcode | string |
| is_filter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| waf_refresh() | public | Rafraichit l'affichage |
| wf_check_salesman_access() | public | Validation |
| wf_filter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| ue_retrieveend | Evenement personnalise ue_retrieveend |
| mousemove | Deplacement de la souris |
