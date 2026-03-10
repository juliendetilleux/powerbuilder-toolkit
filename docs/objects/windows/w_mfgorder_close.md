# w_mfgorder_close

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgorder close (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_mfgtyp | string |
| il_salhead | long |
| dwc | Datawindowchild |
| is_smtcode | string |
| QCNum | long |
| is_mfgtypbom | string |
| bomvaluecum | Decimal |
| routlabvaluecum | Decimal |
| routmacvaluecum | Decimal |
| Sel_doc_mod | string |
| il_sel_mfg | long |
| is_ofcloseparam | string |
| is_ofcloseprint | string |
| nvo_bf | nvo_mfgreport |
| is_AUTOCLPREST | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| checkapproval() | public | Validation |
| arrangescreen() | public | Reorganisation |
| doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_postopen() | public | Ouverture |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
