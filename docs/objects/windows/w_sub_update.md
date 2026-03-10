# w_sub_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Sub - Mise a jour (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_objectparm | struct_objectparm |
| is_ScreenFilter_sal | string |
| is_ScreenFilter_rep | string |
| id_index | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_save(ref string as_error) | public | Sauvegarde les donnees |
| wf_inputok(ref string as_error) | public | Verifie wf_inputok |
| wf_filter_sal() | public | Applique un filtre |
| wf_filter_rep() | public | Applique un filtre |
| wf_filter_activities(string as_mcdo) | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| ue_dwnkey | Evenement personnalise ue_dwnkey |
