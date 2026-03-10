# w_launchorder

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Launchorder (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| iit_sel_id | string |
| isel_duedate | datetime |
| isel_mfgorigin | string |
| opscreenfilter | string |
| is_opfilter | string |
| is_opchoixfilter | string |
| opfilterstring | string |
| ofscreenfilter | string |
| is_offilter | string |
| is_ofchoixfilter | string |
| offilterstring | string |
| isel_mfg_id | long |
| isel_mfgtype | string |
| isel_mfgprint | string |
| il_plnordno | long |
| mfggroup | string |
| QCParaLaunch | String |
| isplan_ordtri | Any |
| isof_ordtri | Any |
| il_Salord | Long |
| ii_salline | Integer |
| is_mfgtyp | String |
| is_bomtyp | string |
| is_item | String |
| is_itemname | String |
| lb_created | boolean |
| il_of | long |
| is_MFGPRINT | string |
| ib_tri | boolean |
| is_cdiff | string |
| ib_auto | boolean |
| ii_ETIPPRI | int |
| is_mfgcluster | string |
| iSel_MfgQty | decimal |
| iSel_PlnQty | decimal |
| iSel_mrprout | string |
| is_usbomright | string |
| is_ustyp | string |
| is_mcfilter | string |
| is_isalt2 | string |
| screenFilterop_tab | string |
| is_confirmstate | string |
| ii_ITEMCHOI | int |
| is_ScreenFilter | String |
| isel_item_id | string |
| ib_multilaunch | boolean |
| iboo_NumSearch | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| createplorder() | public | Creation |
| deleteplorder() | public | Suppression |
| launchplannedorder() | public | Traitement launchplannedorder |
| nullorder() | public | Traitement nullorder |
| launchmanualorder() | public | Traitement launchmanualorder |
| launchadaptedplannedorder() | public | Traitement launchadaptedplannedorder |
| refreshlin() | public | Rafraichit l'affichage |
| refresh() | public | Rafraichit l'affichage |
| loadmultitri() | public | Charge les donnees |
| offilteritem() | public | Applique un filtre |
| opfilteritem() | public | Applique un filtre |
| printlabels() | public | Impression |
| wf_launchplannedwv() | public | Traitement wf_launchplannedwv |
| wf_check_acces_2_verifof() | public | Validation |
| wf_init_itsat2(string as_itstat1) | public | Initialisation |
| printorder(boolean ab_autoprint) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
