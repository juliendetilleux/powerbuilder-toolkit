# w_disclogist_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Disclogist - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_linkaddiscount | long |
| is_cust | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_creation_fichier_disclogist() | public | Journalisation |
| wf_creation_fichier_linkaddisclogist(integer ai_row) | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_getcalendar | Evenement personnalise ue_getcalendar |
| closequery | Verification avant fermeture |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
