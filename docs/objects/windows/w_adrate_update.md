# w_adrate_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Adrate - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_adresse_id | String |
| isel_ratedat | datetime |
| iw_parent | w_window |
| isel_rate | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| showratedesc(long selected_rate) | public | Affichage |
| input_ok() | public | Verifie input_ok |
| wf_creation_fichier_adrate() | public | Traitement wf_creation_fichier_adrate |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_getcalendar | Evenement personnalise ue_getcalendar |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
