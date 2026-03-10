# w_deposit_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Deposit - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| istruct_objectparm | struct_objectparm |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_update_line() | public | Mise a jour |
| wf_inputok() | public | Verifie wf_inputok |
| wf_newline() | public | Creation |
| wf_discard_ligne() | public | Traitement wf_discard_ligne |
| dg() | public | Traitement dg |
| wf_acceptline() | public | Traitement wf_acceptline |
| wf_reject_line() | public | Traitement wf_reject_line |
| wf_createlot() | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
