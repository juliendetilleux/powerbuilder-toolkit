# w_espera

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Espera (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| gn_ws | n_winsock |
| iul_socket_start | ULong |
| iul_socket | ULong |
| iul_listen | ULong |
| is_callfunct | string |
| is_hostipaddress | string |
| is_ipespera | string |
| ii_portespera | UInt |
| ii_portpclocal | UInt |
| id_weight | decimal |
| il_nbweight | long |
| ib_canstop | boolean |
| it_alive | time |
| is_qty_req | s_qty_req |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setcallfunct(string as_callfunct) | public | Definit callfunct |
| wf_setipespera(string as_ipespera) | public | Definit ipespera |
| wf_setportespera(string as_portespera) | public | Definit portespera |
| wf_setportcom(string as_portcom) | public | Definit portcom |
| wf_listen() | public | Verifie wf_listen |
| wf_send(string as_message) | public | Envoi |
| wf_connect() | public | Connexion |
| wf_total2(string ls_item, string ls_adcust) | public | Calcule/retourne wf_total2 |
| wf_price(string ls_item, string ls_adcust) | public | Fonction wf_price |
| wf_custum(long al_salcode, long al_salline, ref decimal adec_total1weight, ref datetime adat_req) | public | Retourne wf_custum |
| wf_getitname(string as_item, string as_langue) | public | Retourne itname |
| wf_getingredient(string as_item, string as_langue) | public | Retourne ingredient |
| wf_shipto(long al_salhead, long al_salline, ref string as_shipdesc, ref string as_shipadrs) | public | Verifie wf_shipto |
| wf_initialize() | public | Initialisation |
| wf_nbpieces(long al_salcode, long al_salline, string as_lot) | public | Calcule/retourne wf_nbpieces |
| wf_weight(string as_message) | public | Verifie wf_weight |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_listen | Evenement personnalise ue_listen |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| timer | Evenement timer |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
