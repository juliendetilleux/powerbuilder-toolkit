# w_devis

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Devis

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
| Ids_select_multipl_supp | DataStore |
| ll_docid | long |
| is_mccode | string |
| il_oldrow | long |
| il_currow | long |
| is_AdId | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_projdelete() | public | Suppression |
| wf_versdelete() | public | Suppression |
| wf_head_reposition(long projectnum) | public | Traitement wf_head_reposition |
| wf_head_refresh() | public | Rafraichit l'affichage |
| wf_tech_print() | public | Impression |
| wf_comm_print() | public | Impression |
| wf_convert2order() | public | Conversion |
| wf_convert2item() | public | Conversion |
| filteritem() | public | Applique un filtre |
| wf_detail_ret(string as_phtyp) | public | Traitement wf_detail_ret |
| wf_vers_refresh(string as_dvityp) | public | Rafraichit l'affichage |
| wf_vers_reposition(long versionnum, string as_dvityp) | public | Traitement wf_vers_reposition |
| wf_dviln_modify() | public | Traitement wf_dviln_modify |
| wf_actual() | public | Traitement wf_actual |
| wf_offer_launch() | public | Traitement wf_offer_launch |
| wf_dviln_lndelete() | public | Suppression |
| wf_dviln_lncopy() | public | Copie |
| wf_loadtri() | public | Charge les donnees |
| wf_dviln_tech_print() | public | Impression |
| wf_dviln_word_print() | public | Impression |
| wf_notitemctrl(ref string as_notitemlist) | public | Calcule/retourne wf_notitemctrl |
| wf_word_reprint() | public | Impression |
| wf_projreactivate() | public | Traitement wf_projreactivate |
| wf_archive() | public | Traitement wf_archive |
| wf_actual_offer() | public | Traitement wf_actual_offer |
| wf_description() | public | Traitement wf_description |
| wf_get_deviid() | public | Retourne deviid |
| wf_set_version(long al_versid) | public | Definit version |
| wf_get_version() | public | Retourne version |
| wf_get_dvitype() | public | Retourne dvitype |
| wf_change_doctopdf(long al_docid) | public | Modification |
| wf_offerctrl() | public | Calcule/retourne wf_offerctrl |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
