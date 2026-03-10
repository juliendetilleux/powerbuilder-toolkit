# w_proflinei_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Proflinei - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_codeprof | long |
| ii_ligne | int |
| idwc_AltMeas | datawindowchild |
| is_WithAm | string |
| OrderCurr | string |
| idec_OrVal | Decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok(uo_datawindow a_dwcourant) | public | Verifie wf_inputok |
| wf_totcalc() | public | Calcul |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
