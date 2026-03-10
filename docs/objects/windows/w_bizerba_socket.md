# w_bizerba_socket

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Bizerba socket (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| gn_ws | n_winsock |
| iul_socket_start | ULong |
| iul_socket | ULong |
| iul_listen | ULong |
| is_callfunct | string |
| is_hostipaddress | string |
| is_ip | string |
| ii_port | UInt |
| ii_portpclocal | UInt |
| id_weight | decimal |
| il_nbweight | long |
| ib_canstop | boolean |
| it_alive | time |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setportcom(string as_portcom) | public | Definit portcom |
| wf_listen() | public | Verifie wf_listen |
| wf_send(string as_message) | public | Envoi |
| wf_connect() | public | Connexion |
| wf_setip(string as_ip) | public | Definit ip |
| wf_setport(string as_port) | public | Definit port |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_listen | Evenement personnalise ue_listen |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
