# w_call_contract

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Call contrats (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_contract | long |
| il_contline | string |
| is_suppid | string |
| Is_ordtri | any |
| is_headerstatus | string |
| is_ScreenFilter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh_contract() | public | Rafraichit l'affichage |
| refresh_contline() | public | Rafraichit l'affichage |
| loadmultitri() | public | Charge les donnees |
| wf_setnewstate(long al_purcntheadcode, string as_newstate) | public | Definit newstate |
| wf_contract_close(long al_purcntheadcode) | public | Fermeture |
| wf_contract_null(long al_purcntheadcode) | public | Traitement wf_contract_null |
| wf_filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
