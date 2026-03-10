# w_consigns

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Consigns (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_sOwner | string |
| iSel_sLoc | string |
| iSel_spack_id | string |
| isel_cOwner | string |
| iSel_cLoc | string |
| iSel_cpack_id | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_call_rtpk(string trtype, string reason) | public | Traitement wf_call_rtpk |
| wf_call_dadj() | public | Traitement wf_call_dadj |
| wf_call_radj() | public | Traitement wf_call_radj |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
