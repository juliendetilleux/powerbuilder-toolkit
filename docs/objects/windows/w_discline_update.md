# w_discline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Discline - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| idw_items | datawindowchild |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| wf_adapt() | public | Traitement wf_adapt |
| wf_refresh_itstat2(string as_itstat1) | public | Rafraichit l'affichage |
| wf_creation_fichier_discline() | public | Traitement wf_creation_fichier_discline |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| closequery | Verification avant fermeture |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
