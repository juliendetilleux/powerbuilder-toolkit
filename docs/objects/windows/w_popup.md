# w_popup

- **Type**: Window
- **Ancetre**: w_a_popup_pmi
- **Module**: _ancestor
- **Lignes**: 18
- **Description**: Ancetre pour les fenetres popup/flottantes. Utilisees pour les ecrans de mise a jour inline, les historiques, les dialogues de progression et les formulaires flottants qui restent au-dessus de la fenetre parente.

## Heritage
- Ancetres: w_a_popup_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: ws_wait, ws_wait_1db, ws_wait_ndb, w_workflowline_update, w_workflowhead_update, w_crm_mailshow, w_crm_choicehead_update, w_qc_update, w_qcrelease, w_purhead_update, w_purheadlimite_update, w_purcontract_histo, w_purchase_histo, w_purchaselimite_histo, w_bomcoitem_update, w_jobprogression (16 descendants)

## Variables d'instance
Aucune variable d'instance propre.

## Fonctions
Aucune fonction propre.

## Evenements surcharges
Aucun evenement surcharge.

## Controles principaux
Aucun controle specifique.

## Dependances
- **Utilise**: w_a_popup_pmi (heritage)
- **Utilise par**: 16 fenetres descendants dans _system, _sales_crm, _quality, _purch, _methods, _general + utilise comme type dans uo_toolbar_right
