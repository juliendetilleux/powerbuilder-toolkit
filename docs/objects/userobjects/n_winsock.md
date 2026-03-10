# n_winsock

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_wsadata | WSADATA |
| ib_autoadd_strtandendtext | Boolean |
| ib_initialized | Boolean |
| ib_send_unicode | Boolean |
| ib_recv_unicode | Boolean |
| is_lasterror | String |
| INVALID_SOCKET | ULong (Constant) |
| INADDR_ANY | ULong (Constant) |
| CRYPT_STRING_BASE64 | ULong (Constant) |
| SOCKET_ERROR | Long (Constant) |
| MAXGETSOCKADDRSTRUCT | Long (Constant) |
| AF_INET | Long (Constant) |
| SOMAXCONN | Long (Constant) |
| SOCK_STREAM | Long (Constant) |
| SOCK_DGRAM | Long (Constant) |
| IPPROTO_TCP | Long (Constant) |
| IPPROTO_UDP | Long (Constant) |
| FD_READ | Long (Constant) |
| FD_WRITE | Long (Constant) |
| FD_OOB | Long (Constant) |
| FD_ACCEPT | Long (Constant) |
| FD_CONNECT | Long (Constant) |
| FD_CLOSE | Long (Constant) |
| iERROR | Integer (Constant) |
| iWARN | Integer (Constant) |
| iINFO | Integer (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| CryptBinaryToString(Blob pbBinary, ulong cbBinary, ulong dwFlags, ...) : boolean | Public | Fonction publique |
| CryptBinaryToString(Blob pbBinary, ulong cbBinary, ulong dwFlags, ...) : boolean | Public | Fonction publique |
| CryptStringToBinary(string pszString, ulong cchString, ulong dwFlags, ...) : boolean | Public | Fonction publique |
| FormatMessage(ulong dwFlags, ulong lpSource, ulong dwMessageId, ...) : ulong | Public | Fonction publique |
| RegisterEventSource(ulong lpUNCServerName, string lpSourceName) : ulong | Public | Fonction publique |
| ReportEvent(ulong hEventLog, uint wType, uint wCategory, ...) : boolean | Public | Fonction publique |
| DeregisterEventSource(ulong hEventLog) : boolean | Public | Fonction publique |
| WNetGetUser(string lpname, string lpusername, ulong buflen) : ulong | Public | Fonction publique |
| accept(ulong socket, sockaddr addr, long addrlen) : ulong | Public | Fonction publique |
| bind(ulong socket, sockaddr name, long namelen) : long | Public | Fonction publique |
| closesocket(ulong socket) : long | Public | Fonction publique |
| connect_ws(ulong socket, sockaddr name, long namelen) : long | Public | Fonction publique |
| gethostbyaddr(ulong addr, long len, long htype) : ulong | Public | Fonction publique |
| gethostname(string name, long namelen) : long | Public | Fonction publique |
| gethostbyname(string name) : ulong | Public | Fonction publique |
| getpeername(ulong socket, sockaddr name, long namelen) : long | Public | Fonction publique |
| getsockopt(ulong socket, long level, long optname, ...) : long | Public | Fonction publique |
| htonl(ulong hostulong) : ulong | Public | Fonction publique |
| htons(uint hostshort) : uint | Public | Fonction publique |
| inet_addr(string cp) : ulong | Public | Fonction publique |
| inet_ntoa(ulong sin_addr) : string | Public | Fonction publique |
| ioctlsocket(ulong socket, ulong cmd, ulong argp) : long | Public | Fonction publique |
| ntohl(ulong netlong) : ulong | Public | Fonction publique |
| listen(ulong socket, long backlog) : long | Public | Fonction publique |
| recv(ulong socket, blob buf, long len, long flags) : long | Public | Fonction publique |
| recvfrom(ulong socket, blob buf, long len, ...) : long | Public | Fonction publique |
| select_ws(long socket, fd_set readfds, fd_set writefds, ...) : long | Public | Fonction publique |
| send(ulong socket, blob buf, long len, long flags) : long | Public | Fonction publique |
| sendto(ulong socket, blob buf, long len, ...) : long | Public | Fonction publique |
| setsockopt(ulong socket, long level, long optname, ...) : long | Public | Fonction publique |
| socket(long af, long ttype, long protocol) : ulong | Public | Fonction publique |
| WSACleanup() : long | Public | Fonction publique |
| WSAGetLastError() : long | Public | Fonction publique |
| WSAStartup(ulong wVersionRequested, WSADATA lpWSAData) : long | Public | Fonction publique |
| WSAAsyncSelect(ulong socket, long hWnd, ulong wMsg, long lEvent) : long | Public | Fonction publique |
| WSAAddressToString(sockaddr lpsaAddress, long dwAddressLength, ulong lpProtocolInfo, ...) : long | Public | Fonction publique |
| of_connect(string as_hostname, unsignedinteger aui_port, unsignedlong aul_seconds) : unsignedlong | Public | Fonction publique |
| of_getdescription() : string | Public | Fonction publique |
| of_gethostname() : string | Public | Fonction publique |
| of_gethostname(string as_ipaddress) : string | Public | Fonction publique |
| of_getipaddress(string as_hostname) : string | Public | Fonction publique |
| of_getlasterror() : string | Public | Fonction publique |
| of_getpeername(unsignedlong aul_socket) : string | Public | Fonction publique |
| of_getsockopt(unsignedlong aul_socket, string as_optname) : long | Public | Fonction publique |
| of_getuserid() : string | Public | Fonction publique |
| of_ioctlsocket(unsignedlong aul_socket, string as_cmdname, unsignedlong aul_argp) : boolean | Public | Fonction publique |
| of_listen(unsignedinteger aui_port) : unsignedlong | Public | Fonction publique |
| of_listen(unsignedinteger aui_port, long al_handle, integer ai_event) : unsignedlong | Public | Fonction publique |
| of_recv(unsignedlong aul_socket, blob ablob_data) : boolean | Public | Fonction publique |
| of_recv(unsignedlong aul_socket, string as_data) : boolean | Public | Fonction publique |
| of_recvfrom(unsignedinteger aui_port, blob ablob_data, string as_ipaddress) : boolean | Public | Fonction publique |
| of_recvfrom(unsignedinteger aui_port, string as_data, string as_ipaddress) : boolean | Public | Fonction publique |
| of_send(unsignedlong aul_socket, blob ablob_data) : boolean | Public | Fonction publique |
| of_send(unsignedlong aul_socket, string as_data) : boolean | Public | Fonction publique |
| of_sendto(string as_ipaddress, unsignedinteger aui_port, blob ablob_data) : boolean | Public | Fonction publique |
| of_sendto(string as_ipaddress, unsignedinteger aui_port, string as_data) : boolean | Public | Fonction publique |
| of_setblockingmode(unsignedlong aul_socket, boolean ab_blocking) : boolean | Public | Fonction publique |
| of_setsockopt(unsignedlong aul_socket, string as_optname, boolean ab_optvalue) : boolean | Public | Fonction publique |
| of_startup() : boolean | Public | Fonction publique |
| of_decode64(string as_encoded) : blob | Public | Fonction publique |
| of_encode64(blob ablob_data) : string | Public | Fonction publique |
| of_encode64(string as_data) : string | Public | Fonction publique |
| of_parse(string as_string, string as_separator, string as_outarray[]) : long | Public | Fonction publique |
| of_accept(unsignedlong aul_socket) : unsignedlong | Public | Fonction publique |
| of_cleanup() : boolean | Public | Fonction publique |
| of_close(unsignedlong aul_socket) : boolean | Public | Fonction publique |
| of_connect(string as_hostname, unsignedinteger aui_port) : unsignedlong | Public | Fonction publique |
| CopyMemoryIP(structure Destination, ulong Source, long Length) : void (subroutine) | Public | Fonction publique |
| CopyMemoryIP(blob Destination, ulong Source, long Length) : void (subroutine) | Public | Fonction publique |
| CopyMemoryIP(ulong Destination, ulong Source, long Length) : void (subroutine) | Public | Fonction publique |
| WSASetLastError(long iErrorNum) : void (subroutine) | Public | Fonction publique |
| of_eventlog(integer ai_msglevel, string as_msgtext) : void (subroutine) | Public | Fonction publique |
| of_jaguarlog(integer ai_msglevel, string as_msgtext) : void (subroutine) | Public | Fonction publique |
| of_messagebox(integer ai_msglevel, string as_msgtext) : void (subroutine) | Public | Fonction publique |
| of_setlasterror(string as_lasterror) : void (subroutine) | Public | Fonction publique |
| of_setunicode(boolean ab_send, boolean ab_recv) : void (subroutine) | Public | Fonction publique |
| of_autoadd_startendtext(boolean ab_strtandendtext) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
