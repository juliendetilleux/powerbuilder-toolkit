# n_smtp

- **Type**: User Object (Non-visuel)
- **Ancetre**: n_winsock
- **Module**: _system
- **Description**: Objet systeme - communication email

## Variables d'instance

| Variable | Type |
|----------|------|
| is_mail | string |
| CRLF | String (Constant) |
| CRYPT_OK | Long (Constant) |
| CRYPT_UNUSED | Long (Constant) |
| CRYPT_SESSION_SSL | Long (Constant) |
| CRYPT_SESSINFO_ACTIVE | Long (Constant) |
| CRYPT_SESSINFO_SERVER_NAME | Long (Constant) |
| CRYPT_SESSINFO_SERVER_PORT | Long (Constant) |
| CRYPT_SESSINFO_NETWORKSOCKET | Long (Constant) |
| CRYPT_OPTION_CERT_COMPLIANCELEVEL | Long (Constant) |
| CRYPT_OPTION_NET_READTIMEOUT | Long (Constant) |
| CRYPT_COMPLIANCELEVEL_PKIX_FULL | Long (Constant) |
| CRYPT_COMPLIANCELEVEL_PKIX_PARTIAL | Long (Constant) |
| CRYPT_COMPLIANCELEVEL_STANDARD | Long (Constant) |
| CRYPT_COMPLIANCELEVEL_REDUCED | Long (Constant) |
| CRYPT_COMPLIANCELEVEL_OBLIVIOUS | Long (Constant) |
| iul_socket | ULong |
| il_Session | Long |
| idbl_frequency | Double |
| iui_port | UInt |
| ii_priority | Integer |
| ii_Timeout | Integer |
| ib_html | Boolean |
| ib_receipt | Boolean |
| ib_authenticate | Boolean |
| ib_eventlog | Boolean |
| ib_jaguarlog | Boolean |
| ib_messagebox | Boolean |
| ib_logfile | Boolean |
| is_userid | String |
| is_passwd | String |
| is_server | String |
| is_subject | String |
| is_body | String |
| is_customhdr | String[] |
| is_replyto | String[] |
| is_logfile | String |
| istr_From | Address |
| istr_Address | Address[] |
| istr_CC | Address[] |
| istr_Bcc | Address[] |
| istr_Attach | Attachment[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| QueryPerformanceFrequency(Double lpFrequency) : boolean | Public | Fonction publique |
| QueryPerformanceCounter(Double lpPerformanceCount) : boolean | Public | Fonction publique |
| CreateFile(string lpFileName, ulong dwDesiredAccess, ulong dwShareMode, ...) : long | Public | Fonction publique |
| CloseHandle(long hObject) : boolean | Public | Fonction publique |
| ReadFile(long hFile, blob lpBuffer, ulong nNumberOfBytesToRead, ...) : boolean | Public | Fonction publique |
| UuidCreate(UUID pId) : long | Public | Fonction publique |
| UuidToString(UUID Uuid, ulong StringUuid) : long | Public | Fonction publique |
| RpcStringFree(ulong pString) : long | Public | Fonction publique |
| FindMimeFromData(ulong pBC, string pwzUrl, blob pBuffer, ...) : ulong | Public | Fonction publique |
| GetTimeZoneInformation(TIME_ZONE_INFORMATION lpTimeZoneInformation) : Long | Public | Fonction publique |
| cryptInit() : long | Public | Fonction publique |
| cryptEnd() : long | Public | Fonction publique |
| cryptCreateSession(long pSession, long cryptUser, long SessionType) : long | Public | Fonction publique |
| cryptDestroySession(long session) : long | Public | Fonction publique |
| cryptSetAttributeString(long hCrypt, long CryptAttType, string pBuff, long StrLen) : long | Public | Fonction publique |
| cryptSetAttribute(long hCrypt, long CryptAttType, long value) : long | Public | Fonction publique |
| cryptPopData(long envelope, string pBuff, long StrLen, long pBytesCopied) : long | Public | Fonction publique |
| cryptPushData(long envelope, string pBuff, long StrLen, long pBytesCopied) : long | Public | Fonction publique |
| cryptFlushData(long envelope) : long | Public | Fonction publique |
| cryptGetAttributeString(long hCrypt, long CryptAttType, string pBuff, integer StrLen) : long | Public | Fonction publique |
| of_addaddress(string as_email) : integer | Public | Fonction publique |
| of_sendmail() : boolean | Public | Fonction publique |
| of_addaddress(string as_email, string as_name) : integer | Public | Fonction publique |
| of_addcc(string as_email, string as_name) : integer | Public | Fonction publique |
| of_addbcc(string as_email) : integer | Public | Fonction publique |
| of_addbcc(string as_email, string as_name) : integer | Public | Fonction publique |
| of_addattachment(string as_filename, blob ablob_filedata, boolean ab_inline) : integer | Public | Fonction publique |
| of_addattachment(string as_filename, boolean ab_inline) : integer | Public | Fonction publique |
| of_addattachment(string as_filename, blob ablob_filedata) : integer | Public | Fonction publique |
| of_addattachment(string as_filename) : integer | Public | Fonction publique |
| of_addreplyto(string as_email) : integer | Public | Fonction publique |
| of_addcustomheader(string as_header) : integer | Public | Fonction publique |
| of_send(unsignedlong aul_socket, string as_data) : boolean | Public | Fonction publique |
| of_recv(unsignedlong aul_socket, string as_data) : boolean | Public | Fonction publique |
| of_sendmail_stop() : boolean | Public | Fonction publique |
| of_sendmail_start() : boolean | Public | Fonction publique |
| of_sendmail_msg() : boolean | Public | Fonction publique |
| of_data() : string | Public | Fonction publique |
| of_crypterror(long al_retval) : string | Public | Fonction publique |
| of_sendmail_crypt_msg() : boolean | Public | Fonction publique |
| of_sendmail_crypt_stop() : boolean | Public | Fonction publique |
| of_addto(string as_email) : integer | Public | Fonction publique |
| of_addto(string as_email, string as_name) : integer | Public | Fonction publique |
| of_addfile(string as_filename) : integer | Public | Fonction publique |
| of_sendmail_crypt_starttls() : boolean | Public | Fonction publique |
| of_sendmail_crypt_startssl() : boolean | Public | Fonction publique |
| of_sendtlsmail() : boolean | Public | Fonction publique |
| of_sendsslmail() : boolean | Public | Fonction publique |
| of_validemail(string as_email, string as_errormsg) : boolean | Public | Fonction publique |
| of_performance_start() : double | Public | Fonction publique |
| of_performance_stop(double adbl_start) : decimal | Public | Fonction publique |
| of_addcc(string as_email) : integer | Public | Fonction publique |
| DebugMsg(String lpOutputString) : void (subroutine) | Public | Fonction publique |
| CopyMemory(string Destination, ulong Source, long Length) : void (subroutine) | Public | Fonction publique |
| SleepMS(ulong dwMilliseconds) : void (subroutine) | Public | Fonction publique |
| of_setserver(string as_server) : void (subroutine) | Public | Fonction publique |
| of_setsubject(string as_subject) : void (subroutine) | Public | Fonction publique |
| of_setfrom(string as_email, string as_name) : void (subroutine) | Public | Fonction publique |
| of_reset() : void (subroutine) | Public | Fonction publique |
| of_setlogin(string as_userid, string as_passwd) : void (subroutine) | Public | Fonction publique |
| of_setbody(string as_body, boolean ab_html) : void (subroutine) | Public | Fonction publique |
| of_setreceipt(boolean ab_receipt) : void (subroutine) | Public | Fonction publique |
| of_setfrom(string as_email) : void (subroutine) | Public | Fonction publique |
| of_logerror(integer ai_msglevel, string as_msgtext) : void (subroutine) | Public | Fonction publique |
| of_setlogerror(boolean ab_eventlog, boolean ab_jaguarlog, boolean ab_messagebox) : void (subroutine) | Public | Fonction publique |
| of_setpriority(string as_priority) : void (subroutine) | Public | Fonction publique |
| of_resetall() : void (subroutine) | Public | Fonction publique |
| of_setport(unsignedinteger aui_port) : void (subroutine) | Public | Fonction publique |
| of_setlogfile(boolean ab_flag, string as_logfile) : void (subroutine) | Public | Fonction publique |
| of_settimeout(integer ai_timeout) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
