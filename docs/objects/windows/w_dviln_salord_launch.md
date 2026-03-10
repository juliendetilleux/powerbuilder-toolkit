# w_dviln_salord_launch

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dviln salord launch (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_LineId | Integer |
| il_ProjId | Long |
| is_Origin | String |
| invo_conditionmanager | nvo_conditionmanager |
| idec_Rist | Decimal |
| ii_NotSelNbr | Integer |
| il_FlwOffer | Long |
| is_turntruck | string |
| is_QUICKTRUC | string |
| is_TURNSAL | string |
| ib_create | boolean |
| is_type_WMS | string |
| invo_of_launch | nvo_of_launch |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_dviln_salline_create() | public | Creation |
| wf_ghost(string as_itsalghost, integer ai_salline, datetime adt_shreqdate, long al_filehead, integer ai_fileline, integer ai_shipto, decimal adec_rist, decimal adec_currconv, integer ai_shipdays, string as_adcode, string as_shcurr, integer ai_row) | public | Calcule/retourne wf_ghost |
| wf_offerclose() | public | Fermeture |
| wf_choosetrucs(datetime ad_allocdate, long al_turnid) | public | Calcule/retourne wf_choosetrucs |
| allocate_truck(long al_sel_order, long al_truck, string as_adid, long al_shturnid) | public | Calcule/retourne allocate_truck |
| wf_truckitems(long al_salcode, datetime ad_allocdate, long al_truck, long al_turnid, string as_cust) | public | Calcule/retourne wf_truckitems |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
