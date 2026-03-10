# w_qcspecline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcspecline - Mise a jour (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| is_testtyp | string |
| ii_version | int |
| idwc_qctest | DataWindowChild |
| is_RsltRange | String |
| ii_LineChoice | Int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Verifie wf_inputok |
| wf_dddwc_qctest() | public | Test |
| wf_affiche_num(string as_testid) | public | Traitement wf_affiche_num |
| wf_num_line() | public | Traitement wf_num_line |
| wf_savechoices() | public | Sauvegarde les donnees |
| wf_numline_choice() | public | Traitement wf_numline_choice |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
