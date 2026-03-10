# w_shipto_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Shipto - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_Ret | Integer |
| is_AdId | String |
| is_turntruck | string |
| is_SHIPDELIV | string |
| idwc_shipseq | datawindowchild |
| isel_shipto_id | integer |
| iw_parent | w_window |
| ii_defturnhead | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| shiptoinputok() | public | Verifie shiptoinputok |
| wf_creation_fichier_shipto() | public | Traitement wf_creation_fichier_shipto |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
