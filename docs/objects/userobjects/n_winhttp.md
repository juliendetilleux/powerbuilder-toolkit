# n_winhttp

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _system
- **Description**: Objet systeme - communication HTTP/Web

## Variables d'instance

| Variable | Type |
|----------|------|
| CRLF | String (Constant) |
| WINHTTP_ACCESS_TYPE_DEFAULT_PROXY | ulong (Constant) |
| WINHTTP_ACCESS_TYPE_NO_PROXY | ulong (Constant) |
| WINHTTP_ACCESS_TYPE_NAMED_PROXY | ulong (Constant) |
| WINHTTP_NO_PROXY_NAME | ulong (Constant) |
| WINHTTP_NO_PROXY_BYPASS | ulong (Constant) |
| INTERNET_DEFAULT_PORT | uint (Constant) |
| INTERNET_DEFAULT_HTTP_PORT | uint (Constant) |
| INTERNET_DEFAULT_HTTPS_PORT | uint (Constant) |
| WINHTTP_NO_REFERER | ulong (Constant) |
| WINHTTP_DEFAULT_ACCEPT_TYPES | ulong (Constant) |
| WINHTTP_FLAG_BYPASS_PROXY_CACHE | ulong (Constant) |
| WINHTTP_FLAG_SECURE | ulong (Constant) |
| WINHTTP_NO_ADDITIONAL_HEADERS | ulong (Constant) |
| WINHTTP_NO_REQUEST_DATA | ulong (Constant) |
| WINHTTP_ADDREQ_FLAG_ADD | ulong (Constant) |
| WINHTTP_ADDREQ_FLAG_REPLACE | ulong (Constant) |
| WINHTTP_QUERY_RAW_HEADERS_CRLF | ulong (Constant) |
| il_ResolveTimeout | Long |
| il_ConnectTimeout | Long |
| il_SendTimeout | Long |
| il_ReceiveTimeout | Long |
| iul_session | ULong |
| iul_frequency | ULong |
| il_write_handle | Long |
| is_method | String |
| LastErrorNum | ULong |
| LastErrorText | String |
| ResponseText | String |
| Elapsed | Double |
| Headers | String[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| FormatMessage(ulong dwFlags, ulong lpSource, ulong dwMessageId, ...) : ulong | Public | Fonction publique |
| QueryPerformanceFrequency(large_integer lpFrequency) : boolean | Public | Fonction publique |
| QueryPerformanceCounter(large_integer lpPerformanceCount) : boolean | Public | Fonction publique |
| FindMimeFromData(ulong pBC, string pwzUrl, blob pBuffer, ...) : ulong | Public | Fonction publique |
| WinHttpCloseHandle(ulong hInternet) : boolean | Public | Fonction publique |
| WinHttpOpen(string pwszUserAgent, ulong dwAccessType, ulong pwszProxyName, ...) : ulong | Public | Fonction publique |
| WinHttpConnect(ulong hSession, string pswzServerName, uint nServerPort, ulong dwReserved) : ulong | Public | Fonction publique |
| WinHttpOpenRequest(ulong hConnect, string pwszVerb, string pwszObjectName, ...) : ulong | Public | Fonction publique |
| WinHttpSendRequest(ulong hRequest, ulong pwszHeaders, ulong dwHeadersLength, ...) : boolean | Public | Fonction publique |
| WinHttpSendRequest(ulong hRequest, ulong pwszHeaders, ulong dwHeadersLength, ...) : boolean | Public | Fonction publique |
| WinHttpReceiveResponse(ulong hRequest, ulong lpReserved) : boolean | Public | Fonction publique |
| WinHttpQueryDataAvailable(ulong hRequest, ulong lpdwNumberOfBytesAvailable) : boolean | Public | Fonction publique |
| WinHttpQueryHeaders(ulong hRequest, ulong dwInfoLevel, ulong pwszName, ...) : boolean | Public | Fonction publique |
| WinHttpQueryHeaders(ulong hRequest, ulong dwInfoLevel, ulong pwszName, ...) : boolean | Public | Fonction publique |
| WinHttpReadData(ulong hRequest, blob lpBuffer, ulong dwNumberOfBytesToRead, ulong lpdwNumberOfBytesRead) : boolean | Public | Fonction publique |
| WinHttpWriteData(ulong hRequest, blob lpBuffer, ulong dwNumberOfBytesToWrite, ulong lpdwNumberOfBytesWritten) : boolean | Public | Fonction publique |
| WinHttpSetOption(ulong hInternet, ulong dwOption, ulong lpBuffer, ulong dwBufferLength) : boolean | Public | Fonction publique |
| WinHttpSetTimeouts(ulong hInternet, ulong dwResolveTimeout, ulong dwConnectTimeout, ...) : boolean | Public | Fonction publique |
| WinHttpAddRequestHeaders(ulong hRequest, string pwszHeaders, ulong dwHeadersLength, ulong dwModifiers) : boolean | Public | Fonction publique |
| open(string as_method, string as_url) : boolean | Public | Fonction publique |
| perfend() : double | Public | Fonction publique |
| send(string as_data) : unsignedlong | Public | Fonction publique |
| send(blob ablob_data) : unsignedlong | Public | Fonction publique |
| geturl(string as_urlname, blob ablob_response) : unsignedlong | Public | Fonction publique |
| send() : unsignedlong | Public | Fonction publique |
| posturl(string as_urlname, blob ablob_data, string as_mimetype, blob ablob_response) : unsignedlong | Public | Fonction publique |
| getmimetype(string as_filename, blob ablob_filedata) : string | Public | Fonction publique |
| getmimetype(string as_filename, string as_filedata) : string | Public | Fonction publique |
| hex(unsignedlong aul_number, integer ai_digit) : string | Public | Fonction publique |
| urlencode(string as_string) : string | Public | Fonction publique |
| parse(string as_string, string as_separator, string as_outarray[]) : long | Public | Fonction publique |
| setrequestoption(unsignedlong aul_option, unsignedlong aul_value) : boolean | Public | Fonction publique |
| get(blob ablob_response) : unsignedlong | Public | Fonction publique |
| setrequestheader(string as_name, string as_value) : boolean | Public | Fonction publique |
| settimeouts(long al_resolvetimeout, long al_connecttimeout, long al_sendtimeout, long al_receivetimeout) : void (subroutine) | Public | Fonction publique |
| setwriteprogress(long al_handle, long al_event) : void (subroutine) | Public | Fonction publique |
| perfbegin() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
