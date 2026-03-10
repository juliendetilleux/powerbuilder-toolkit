# w_qcstatus

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcstatus (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| Sel_Doc_Mod | String |
| ii_Ret | Integer |
| lot | string |
| iw_parent | w_window |
| is_QCCHCKPSW | string |
| is_LOTSTATP | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_retrieve_tests(ref string as_ordtyp, ref long al_ordno) | public | Recupere les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
