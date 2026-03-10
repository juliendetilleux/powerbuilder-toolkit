# w_linkaddisclogist_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkaddisclogist - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| idw_cust | datawindowchild |
| ib_unsaveddiscount | boolean |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| wf_adapt() | public | Traitement wf_adapt |
| wf_creation_fichier_linkaddisclogist() | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| closequery | Verification avant fermeture |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
