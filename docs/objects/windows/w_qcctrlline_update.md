# w_qcctrlline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcctrlline - Mise a jour (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_cmnt | string |
| id_resultval | double |
| idwc_test | DataWindowChild |
| is_Action | String |
| is_TypTest | String |
| is_RsltRange | String |
| ib_Conforme | Boolean |
| idwc_ChoiceID | DataWindowChild |
| iw_parent | w_window |
| il_ctrlid | long |
| is_QCNUMDESC | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_qcaudit() | public | Verifie wf_qcaudit |
| wf_conforme() | public | Traitement wf_conforme |
| wf_itemsvisible(integer ai_visible) | public | Traitement wf_itemsvisible |
| wf_inputok() | public | Verifie wf_inputok |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_doc_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
