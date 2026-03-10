# w_wtspecline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Wtspecline - Mise a jour (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_wtcode | long |
| is_testtyp | string |
| ii_version | int |
| ii_LineChoice | Int |
| istr_specific | gstr_specific |
| ib_change | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Verifie wf_inputok |
| wf_savechoices() | public | Sauvegarde les donnees |
| wf_choices() | public | Traitement wf_choices |
| wf_visible(integer ai_choice) | public | Traitement wf_visible |
| wf_seq(long al_seq) | public | Verifie wf_seq |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
