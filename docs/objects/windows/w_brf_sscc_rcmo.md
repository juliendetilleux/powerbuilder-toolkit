# w_brf_sscc_rcmo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Sscc rcmo (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_Error | Boolean |
| idwc_loc | DataWindowChild |
| ii_ReadEtap | Integer |
| LotCarton | String |
| invo_mfgreport | nvo_mfgreport |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_initwindow() | public | Initialisation |
| wf_errmess(string as_mess) | public | Traitement wf_errmess |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
