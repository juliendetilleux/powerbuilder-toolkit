# w_item_import_show

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Articles importation show (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| itab_fieldBinded | struct_prepare_import |
| ii_currentPos | integer |
| ib_previous | boolean |
| ids | nv_datastore |
| tab_itcode | string |
| tab_itname | string |
| tab_itum | string |
| tab_ittyp | string |
| tab_itcons | string |
| tab_itsale | string |
| tab_itlot | string |
| tab_itqc | string |
| tab_itval | string |
| tab_itloc | string |
| tab_itpol | string |
| tab_itpsize | string |
| tab_itpinsize | string |
| tab_itpinnb | string |
| tab_itpnbdays | string |
| tab_itsecur | string |
| tab_itleadtime | string |
| tab_itavailtime | string |
| tab_itbomlvl | string |
| tab_itbom | string |
| tab_itstdsal | string |
| tab_itstdpur | string |
| tab_itstock | string |
| tab_italloc | string |
| tab_itwip | string |
| tab_itfrozen | string |
| tab_itdefaultlot | string |
| tab_itctrl | string |
| tab_itsernum | string |
| tab_itlastissue | string |
| tab_itweight | string |
| tab_ittvalvl | string |
| tab_itintrastat | string |
| tab_itcptpur | string |
| tab_itcptsal | string |
| tab_itstat1 | string |
| tab_itstat2 | string |
| tab_itconvusr | string |
| tab_itumusr | string |
| tab_itplgroup | string |
| tab_itean | string |
| tab_itcptanal | string |
| tab_itqtypal | string |
| tab_itdesc2 | string |
| tab_itwistat | string |
| tab_itsubstpl | string |
| tab_itsubstit | string |
| tab_itorcountry | string |
| tab_itmfggroup | string |
| tab_itcat | string |
| tab_itowner | string |
| tab_itvol | string |
| tab_itcreauser | string |
| tab_itcreadat | string |
| tab_itmodifuser | string |
| tab_itmodifdat | string |
| tab_itbcqty | string |
| tab_itbcauto | string |
| tab_itetigro | string |
| tab_iteetipal | string |
| tab_itstkavg | string |
| tab_itstkused | string |
| tab_itstkrot | string |
| tab_itean2 | string |
| tab_itean2conv | string |
| tab_itean3 | string |
| tab_itean3conv | string |
| tab_iteanref | string |
| tab_itean2ref | string |
| tab_itean3ref | string |
| tab_itetiitem | string |
| tab_itcptinv | string |
| tab_itbascost | string |
| tab_itmfgxtrcost | string |
| tab_itwc | string |
| tab_itclotctrl | string |
| tab_itclotref | string |
| tab_itsalghost | string |
| tab_ittransfered | string |
| tab_itif2trf | string |
| tab_itrcnopur | string |
| tab_itpurxtrcost | string |
| tab_itfinalprice | string |
| tab_italttyp | string |
| tab_itlblproc | string |
| tab_ittare | string |
| tab_itcommission | string |
| tab_itbackflushexp | string |
| tab_itwebtype | string |
| tab_itwebum | string |
| tab_itwebatcom | string |
| tab_itwebvisible | string |
| tab_itumean2 | string |
| tab_itumean3 | string |
| tab_itplu | string |
| tab_itdirsaldesc | string |
| tab_itbatchmfg | string |
| tab_itwebtype2 | string |
| tab_itisfrozen | string |
| tab_itbcdweightsal | string |
| tab_itpurchaseauto | string |
| tab_itfreezable | string |
| tab_itnbdayfreeze | string |
| tab_itnbdaythaw | string |
| tab_lkadcode | string |
| tab_lkadref | string |
| tab_lkadref2 | string |
| is_errors | string |
| defloc | string |
| deftva | string |
| idw_stat2 | datawindowchild |
| ids_temp_linkitad | uo_datastore |
| il_selectedrow | long |
| ib_subgrps | Boolean |
| idddw_itwebtype2 | DataWindowChild |
| ib_Connected_2_trans_source | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_loadright(ref string tab[], string ls_line, integer li_separatorpos) | public | Charge les donnees |
| wf_linkitadok(long row, ref struct_item_error errormsg[]) | public | Verifie wf_linkitadok |
| wf_init_item_line(long row) | public | Initialisation |
| wf_erase_invisible_data(long row) | public | Calcule/retourne wf_erase_invisible_data |
| wf_general_inputok() | public | Verifie wf_general_inputok |
| wf_dddw_importok(long row, ref struct_item_error errormsg[]) | public | Importation |
| wf_refresh_tax() | public | Rafraichit l'affichage |
| wf_automatch(datawindowchild dwc, ref string tab_tmp_file[], string colname, string coltype, string matchname, string matchtype) | public | Traitement wf_automatch |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
