# w_workflowline_update

- **Type**: Window
- **Ancetre**: w_popup
- **Module**: _sales_crm
- **Description**: Workflowline - Mise a jour (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_Ret | Integer |
| li_isaction | int |
| dwc_field | datawindowchild |
| isel_wfheadid | long |
| isel_wflineid | long |
| ib_positif | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| updatefield(string newval) | public | Mise a jour |
| updatevalue(string newval) | public | Mise a jour |
| wf_inputok() | public | Verifie wf_inputok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
