# w_devis_archived

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Devis archived

## Variables d'instance

| Variable | Type |
|----------|------|
| il_ProjId | Long |
| il_VersId | Long |
| is_typ | String |
| is_vstatus | string |
| ScreenFilter | string |
| is_DviLvl | String |
| is_DviType | String |
| isTab_OrdTri | Any |
| is_ConvMode | String |
| is_itemfan | String |
| is_phdlvt | string |
| is_phdlvtplace | string |
| is_phcustpay | string |
| is_mode | string |
| is_rbfilter | string |
| is_activ | string |
| is_phactiv | string |
| isTab_OrdTri2 | any |
| ib_archived_mod | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_projdelete() | public | Suppression |
| wf_head_reposition(long projectnum) | public | Traitement wf_head_reposition |
| wf_head_refresh() | public | Rafraichit l'affichage |
| wf_tech_print() | public | Impression |
| wf_comm_print() | public | Impression |
| filteritem() | public | Applique un filtre |
| wf_detail_ret(string as_phtyp) | public | Traitement wf_detail_ret |
| wf_vers_refresh(string as_dvityp) | public | Rafraichit l'affichage |
| wf_vers_reposition(long versionnum, string as_dvityp) | public | Traitement wf_vers_reposition |
| wf_loadtri() | public | Charge les donnees |
| wf_dviln_tech_print() | public | Impression |
| wf_dviln_word_print() | public | Impression |
| wf_word_reprint() | public | Impression |
| wf_projreactivate() | public | Traitement wf_projreactivate |
| wf_get_deviid() | public | Retourne deviid |
| wf_set_version(long al_versid) | public | Definit version |
| wf_get_version() | public | Retourne version |
| wf_get_dvitype() | public | Retourne dvitype |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
