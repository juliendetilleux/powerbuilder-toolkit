# uo_fedex

- **Type**: User Object (Visuel)
- **Ancetre**: uo_a_pmi
- **Module**: _fedex
- **Description**: Objet d'integration FedEx

## Variables d'instance

| Variable | Type |
|----------|------|
| ids_salhead | nv_datastore |
| il_errornumber | Long[] |
| is_errormessage | String[] |
| is_errorfunction | String[] |
| il_curreterror | Long |
| il_packagecount | Long |
| il_salhead_rowcount | Long |
| soap_connect | soapconnection |
| idec_totalweight | double |
| iws_trackingid_master | ws_trackingid |
| iws_request | ws_processshipmentrequest[] |
| iws_reply | ws_processshipmentreply[] |
| iw_parent | Window |
| is_current_adcode | String |
| NotificationSeverityType_Error | int (Constant) |
| NotificationSeverityType_Failure | int (Constant) |
| NotificationSeverityType_Note | int (Constant) |
| NotificationSeverityType_Success | int (Constant) |
| NotificationSeverityType_Warning | int (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ShellExecute(uint  ihwnd, string  lpszOp, string lpszFile, ...) : long | Public | Fonction publique |
| TerminateProcess(Long hProcess, Long uExitCode) : Long | Public | Fonction publique |
| of_getparameter(string as_name, long al_return) : integer | Public | Fonction publique |
| of_getconstant(string as_constant, long al_return) : integer | Public | Fonction publique |
| of_getparameter(string as_name, any a_return) : integer | Public | Fonction publique |
| settransactiondetail(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| createshipmentrequest(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setclientdetail(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setwebauthenticationdetail(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setversion(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setshipmentdetails(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setsender(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setrecipient(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setpayment(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setlabeldetails(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setcustomsclearancedetails(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setcommoditydetails(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| setpackagelineitems(ws_processshipmentrequest request) : integer | Public | Fonction publique |
| of_adderror(long al_errornumber, string as_errormessage, string as_errorfunction) : integer | Public | Fonction publique |
| of_geterror() : string | Public | Fonction publique |
| of_printpdf(long al_reply) : integer | Public | Fonction publique |
| of_printpdf(string as_mastertrackingid, string as_trackingnumber) : integer | Public | Fonction publique |
| of_gettrackingnumber(long al_reply, string as_mastertrackingid, string as_trackingnumber) : integer | Public | Fonction publique |
| of_showpdf(long al_reply) : integer | Public | Fonction publique |
| of_showpdf(string as_mastertrackingid, string as_trackingnumber) : integer | Public | Fonction publique |
| of_getpdf(long al_reply, string as_filename) : integer | Public | Fonction publique |
| of_getpdf(string as_mastertrackingid, string as_trackingnumber, string as_filename) : integer | Public | Fonction publique |
| wait(integer ai_seconds) : integer | Public | Fonction publique |
| of_read_pdf(string as_filename, string as_return) : integer | Public | Fonction publique |
| of_getfedex(long al_sgshiphead, string as_mastertrackingid) : integer | Public | Fonction publique |
| of_checkvalues() : integer | Public | Fonction publique |
| of_initconstant() : integer | Public | Fonction publique |
| of_initparameter() : integer | Public | Fonction publique |
| of_getparameter(string as_name, string as_return) : integer | Public | Fonction publique |
| Sleep(ulong milli) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
