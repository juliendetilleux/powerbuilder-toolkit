# w_profcommande

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Profcommande (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_adresse_id2 | string |
| iSel_shipdays2 | integer |
| iSel_salord2 | long |
| iSel_ordr_Status2 | string |
| iSel_ordr_Curr2 | string |
| iSel_sallstlin2 | int |
| iSel_custref2 | string |
| iSel_datreq2 | datetime |
| il_oldrow | long |
| iSel_lastsalord | long |
| iSel_custpay | string |
| iSel_mcdo | string |
| is_MULTICO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_getdata() | public | Retourne data |
| wf_verifdata() | public | Calcule/retourne wf_verifdata |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
