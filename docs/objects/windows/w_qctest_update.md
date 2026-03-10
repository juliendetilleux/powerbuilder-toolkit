# w_qctest_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qctest - Mise a jour (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| ii_ok | int |
| ib_modified | boolean |
| ii_LineChoice | Int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_qctest_inputok() | public | Test |
| wf_inputok_choice() | public | Verifie wf_inputok_choice |
| wf_numline() | public | Traitement wf_numline |
| wf_save_choice() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
