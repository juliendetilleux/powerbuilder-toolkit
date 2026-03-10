# n_ping

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| iul_frequency | ULong |
| iul_begin | ULong |
| il_timeout | Long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| QueryPerformanceFrequency(large_integer lpFrequency) : boolean | Public | Fonction publique |
| QueryPerformanceCounter(large_integer lpPerformanceCount) : boolean | Public | Fonction publique |
| GetLastError() : ulong | Public | Fonction publique |
| FormatMessage(ulong dwFlags, ulong lpSource, ulong dwMessageId, ...) : ulong | Public | Fonction publique |
| GetComputerName(string buffer, long buflen) : boolean | Public | Fonction publique |
| WNetGetUser(string lpname, string lpusername, long buflen) : long | Public | Fonction publique |
| WSAStartup(long wVersionRequested, wsadata lpWSAData) : long | Public | Fonction publique |
| WSACleanup() : long | Public | Fonction publique |
| inet_addr(string cp) : ulong | Public | Fonction publique |
| gethostname(string name, integer namelen) : integer | Public | Fonction publique |
| gethostbyname(string name) : ulong | Public | Fonction publique |
| gethostbyaddr(ulong addr, long len, long htype) : ulong | Public | Fonction publique |
| WSAGetLastError() : integer | Public | Fonction publique |
| IcmpCreateFile() : ulong | Public | Fonction publique |
| IcmpSendEcho(ulong IcmpHandle, ulong DestinationAddress, string RequestData, ...) : long | Public | Fonction publique |
| IcmpCloseHandle(ulong IcmpHandle) : long | Public | Fonction publique |
| of_ping(string as_ipaddress, string as_echomsg) : boolean | Public | Fonction publique |
| of_formatmessage(unsignedlong aul_error) : string | Public | Fonction publique |
| of_wnetgetuser() : string | Public | Fonction publique |
| of_getlasterror() : string | Public | Fonction publique |
| of_getcomputername() : string | Public | Fonction publique |
| of_getipaddress(string as_hostname) : string | Public | Fonction publique |
| of_gethostname(string as_ipaddress) : string | Public | Fonction publique |
| of_gethostname() : string | Public | Fonction publique |
| of_performance_end() : double | Public | Fonction publique |
| of_ping(string as_ipaddress) : boolean | Public | Fonction publique |
| of_wsagetlasterror() : string | Public | Fonction publique |
| CopyMemoryIP(hostent Destination, ulong Source, long Length) : void (subroutine) | Public | Fonction publique |
| CopyMemoryIP(blob Destination, ulong Source, long Length) : void (subroutine) | Public | Fonction publique |
| CopyMemoryIP(ulong Destination, ulong Source, long Length) : void (subroutine) | Public | Fonction publique |
| of_performance_beg() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
