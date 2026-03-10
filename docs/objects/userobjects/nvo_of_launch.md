# nvo_of_launch

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _manufg
- **Description**: Objet du module Fabrication

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_withlot | boolean |
| ii_itval | int |
| is_LotOrigin | string |
| is_itum | string |
| is_itname | string |
| is_itlot | string |
| is_item | string |
| bhsuppid | string |
| bhsubc | string |
| is_decla | string |
| il_itleadtime | long |
| il_itavailtime | long |
| il_file | long |
| il_fileline | long |
| bhcoeff | decimal |
| bhyield | decimal |
| id_reqqty | decimal |
| ib_showmessage | boolean |
| is_error | string |
| ib_fantom | boolean |
| il_routline | long |
| launchpara | launchmfg |
| dts_stock | nv_datastore |
| iw_launchorder_group | w_launchorder_group |
| is_FREEZART | string |
| iSel_MfgQty | decimal |
| is_SHOWNOST | string |
| is_MESSOF | string |
| is_mhstatus | string |
| Is_FIFO | STRING |
| lnvo_rebilling | nvo_rebilling |
| invo_imputcpt | nvo_imputcpt |
| is_type_WMS | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_mfgmes(string as_item, string as_routtyp, long al_of) : integer | Public | Fonction privee de fenetre |
| handlecoitems(long al_orderno, string itcode, string bomtype, boolean lb_lotcoitem) : boolean | Public | Fonction publique |
| launchwithcheck(decimal reqqty, datetime reqdat, uo_datawindow dw_mfgordr_update, boolean ab_lotcoitem) : long | Public | Fonction publique |
| launchfromproj(uo_datawindow dw_mfgordr_update) : long | Public | Fonction publique |
| launchfromsale(uo_datawindow dw_mfgordr_update) : long | Public | Fonction publique |
| uof_launch_of(uo_datawindow dw_mfgordr_update, launchmfg ast_launchpara, uo_userfields uo_usrfield, ...) : integer | Public | Fonction utilisateur publique |
| uof_freezdate(string as_lot) : boolean | Public | Fonction utilisateur publique |
| allocateram(long sordno, string item, decimal bomcoeff, ...) : long | Public | Fonction publique |
| uof_check_subwc(long al_of) : boolean | Public | Fonction utilisateur publique |
| uof_createsuborder_wc(long mfgnum, long al_wcline, string item, ...) : long | Public | Fonction utilisateur publique |
| uof_xtracost_formcdo(long al_mfghead) : boolean | Public | Fonction utilisateur publique |
| uof_available_qty(string as_item) : decimal | Public | Fonction utilisateur publique |
| uof_create_batch(long al_of) : boolean | Public | Fonction utilisateur publique |
| uof_launch_ofgrp(uo_datawindow adw_mfgordr_update, launchmfg ast_launchpara, uo_userfields uo_usrfield, ...) : integer | Public | Fonction utilisateur publique |
| uof_allocateram(integer ai_mhcode) : integer | Public | Fonction utilisateur publique |
| uof_allocateresource(integer ai_mhcode) : integer | Public | Fonction utilisateur publique |
| uof_allocatecoitem(integer ai_mhcode) : integer | Public | Fonction utilisateur publique |
| wf_autoallocate(string ordrtyp, long ordrno, long ordrlin, ...) : boolean | Public | Fonction privee de fenetre |
| check_requirements(string as_bomcode, string as_bomtype, datetime as_reqdat, ...) : void (subroutine) | Public | Fonction publique |
| allocateresourcefromsale(long sordno, string item, decimal bomcoeff, ...) : void (subroutine) | Public | Fonction publique |
| allocatextracost(long sordno, string item, decimal bomcoef) : void (subroutine) | Public | Fonction publique |
| createsuborder(long mfgnum, string item, string suppid, ...) : void (subroutine) | Public | Fonction publique |
| allocateramfromsale(long sordno, string item, decimal bomcoeff, ...) : void (subroutine) | Public | Fonction publique |
| allocateresource(long sordno, string item, decimal bomcoeff, ...) : void (subroutine) | Public | Fonction publique |
| updateplanorder(string item, datetime datim, decimal orgnqty, ...) : void (subroutine) | Public | Fonction publique |
| updateplanorder2(string item, datetime datim, decimal orgnqty, ...) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
