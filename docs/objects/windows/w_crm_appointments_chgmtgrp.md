# w_crm_appointments_chgmtgrp

- **Type**: Window
- **Ancetre**: w_window
- **Module**: _sales_crm
- **Description**: Appointments chgmtgrp (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_ahid | long |
| is_ustyp | string |
| is_usentry | string |
| is_salemans | string |
| is_salemanlist | string |
| is_filter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_check_salesman_access() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| ue_updated | Evenement personnalise ue_updated |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
