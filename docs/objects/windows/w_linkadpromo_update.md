# w_linkadpromo_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkadpromo - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| idw_cust | datawindowchild |
| ib_unsavedpromo | boolean |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| wf_adapt() | public | Traitement wf_adapt |
| wf_creation_fichier_linkadpromo() | public | Traitement wf_creation_fichier_linkadpromo |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| closequery | Verification avant fermeture |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
