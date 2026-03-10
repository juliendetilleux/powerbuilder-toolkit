# w_sallacks_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Sallacks - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| dw_salline_lacks | uo_extendeddw |
| dw_salhead | uo_datawindow |
| idt_OldDate | DateTime |
| is_Sel_AdId | String |
| ii_Ret | Integer |
| iSel_salord | long |
| il_row_sallack | long |
| invo_conditionmanager | nvo_conditionmanager |
| idt_dateship | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_changelinedate(long al_order, string as_cust, datetime adt_date) | public | Modification |
| allocate(long al_sel_order, long al_truck) | public | Calcule/retourne allocate |
| wf_truckitems(long al_salcode) | public | Calcule/retourne wf_truckitems |
| get_idt_dateship() | public | Fonction get_idt_dateship |
| wf_sal2print_treat(long al_order) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
