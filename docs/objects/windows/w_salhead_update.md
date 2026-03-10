# w_salhead_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salhead - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_OldDate | DateTime |
| is_Sel_AdId | String |
| ii_Ret | Integer |
| iSel_salord | long |
| ib_flash | boolean |
| ii_flash | integer |
| invo_conditionmanager | nvo_conditionmanager |
| il_condhead | long |
| saved | boolean |
| il_condchoose | long |
| iw_parent | w_window |
| is_BLKSALMAN | string |
| iboo_ShConsMod | Boolean |
| is_ShCons | String |
| is_MULTICO | string |
| is_turntruck | string |
| is_QUICKTRUC | string |
| ib_create | boolean |
| idt_dateship | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_changelinedate(long al_order, string as_cust, datetime adt_date) | public | Modification |
| wf_consignation() | public | Calcule/retourne wf_consignation |
| wf_choosetrucs(datetime ad_allocdate) | public | Calcule/retourne wf_choosetrucs |
| allocate_truck(long al_sel_order, long al_truck) | public | Calcule/retourne allocate_truck |
| wf_truckitems(long al_salcode, datetime ad_allocdate, long al_truck) | public | Calcule/retourne wf_truckitems |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| ue_itemchanged | Evenement personnalise ue_itemchanged |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
