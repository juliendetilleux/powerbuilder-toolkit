# w_bizerba

- **Type**: Window
- **Ancetre**: window
- **Module**: _stkbarcod
- **Description**: Bizerba (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_qty_req | s_qty_req |
| is_callfunct | string |
| is_identifier | string |
| is_handle | string |
| ii_sleep | int |
| is_BIZERBOW | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setcallfunct(string as_callfunct) | public | Definit callfunct |
| wf_getcallfunct() | public | Retourne callfunct |
| wf_setinfo(string as_info) | public | Definit info |
| wf_getinfo() | public | Retourne info |
| wf_receive(string as_handle) | public | Reception |
| wf_total2(string ls_item, string ls_adcust) | public | Calcule/retourne wf_total2 |
| wf_price(string ls_item, string ls_adcust) | public | Fonction wf_price |
| wf_getingredient(string as_item, string as_langue) | public | Retourne ingredient |
| wf_getitname(string as_item, string as_langue) | public | Retourne itname |
| wf_verif() | public | Traitement wf_verif |
| wf_nbpieces(long al_salcode, long al_salline, string as_lot) | public | Calcule/retourne wf_nbpieces |
| wf_custum(long al_salcode, long al_salline, ref decimal adec_total1weight, ref datetime adat_req) | public | Retourne wf_custum |
| wf_shipto(long al_salhead, long al_salline, ref string as_shipdesc, ref string as_shipadrs) | public | Verifie wf_shipto |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| timer | Evenement timer |
