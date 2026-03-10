# n_wininet

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _ftp
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| iul_internet | ulong |
| iul_session | ulong |
| iul_request | ulong |
| LastErrorMsg | string |
| LastErrorNbr | ulong |
| INVALID_HANDLE_VALUE | ULong (Constant) |
| GENERIC_READ | ULong (Constant) |
| GENERIC_WRITE | ULong (Constant) |
| FILE_SHARE_READ | ULong (Constant) |
| FILE_SHARE_WRITE | ULong (Constant) |
| CREATE_NEW | ULong (Constant) |
| CREATE_ALWAYS | ULong (Constant) |
| OPEN_EXISTING | ULong (Constant) |
| OPEN_ALWAYS | ULong (Constant) |
| TRUNCATE_EXISTING | ULong (Constant) |
| INTERNET_ERROR_BASE | ulong (Constant) |
| ERROR_INTERNET_EXTENDED_ERROR | ulong (Constant) |
| FTP_TRANSFER_TYPE_ASCII | uint (Constant) |
| FTP_TRANSFER_TYPE_BINARY | uint (Constant) |
| INTERNET_FLAG_RELOAD | ulong (Constant) |
| INTERNET_FLAG_NO_CACHE_WRITE | ulong (Constant) |
| INTERNET_FLAG_RAW_DATA | ulong (Constant) |
| INTERNET_FLAG_PASSIVE | ulong (Constant) |
| INTERNET_FLAG_SECURE | ulong (Constant) |
| INTERNET_OPEN_TYPE_DIRECT | ulong (Constant) |
| INTERNET_OPEN_TYPE_PRECONFIG | ulong (Constant) |
| INTERNET_OPEN_TYPE_PRECONFIG_WITH_NO_AUTOPROXY | ulong (Constant) |
| INTERNET_OPEN_TYPE_PROXY | ulong (Constant) |
| INTERNET_FLAG_ASYNC | ulong (Constant) |
| INTERNET_FLAG_FROM_CACHE | ulong (Constant) |
| INTERNET_FLAG_OFFLINE | ulong (Constant) |
| INTERNET_DEFAULT_FTP_PORT | uint (Constant) |
| INTERNET_DEFAULT_GOPHER_PORT | uint (Constant) |
| INTERNET_DEFAULT_HTTP_PORT | uint (Constant) |
| INTERNET_DEFAULT_HTTPS_PORT | uint (Constant) |
| INTERNET_DEFAULT_SOCKS_PORT | uint (Constant) |
| INTERNET_INVALID_PORT_NUMBER | uint (Constant) |
| INTERNET_SERVICE_FTP | ulong (Constant) |
| INTERNET_SERVICE_GOPHER | ulong (Constant) |
| INTERNET_SERVICE_HTTP | ulong (Constant) |
| INTERNET_FLAG_IGNORE_REDIRECT_TO_HTTP | ulong (Constant) |
| INTERNET_FLAG_IGNORE_REDIRECT_TO_HTTPS | ulong (Constant) |
| INTERNET_FLAG_IGNORE_CERT_DATE_INVALID | ulong (Constant) |
| INTERNET_FLAG_IGNORE_CERT_CN_INVALID | ulong (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| GetLastError() : ulong | Public | Fonction publique |
| FormatMessage(ulong dwFlags, ulong lpSource, ulong dwMessageId, ...) : ulong | Public | Fonction publique |
| FileTimeToSystemTime(FILETIME lpFileTime, SYSTEMTIME lpSystemTime) : boolean | Public | Fonction publique |
| CreateFile(string lpFileName, ulong dwDesiredAccess, ulong dwShareMode, ...) : ulong | Public | Fonction publique |
| CloseHandle(ulong hObject) : boolean | Public | Fonction publique |
| ReadFile(ulong hFile, Blob lpBuffer, ulong nNumberOfBytesToRead, ...) : boolean | Public | Fonction publique |
| WriteFile(ulong hFile, blob lpBuffer, ulong nNumberOfBytesToWrite, ...) : boolean | Public | Fonction publique |
| InternetOpen(string lpszAgent, ulong dwAccessType, string lpszProxyName, ...) : ulong | Public | Fonction publique |
| InternetCloseHandle(ulong hInternet) : boolean | Public | Fonction publique |
| InternetConnect(ulong hInternet, string lpszServerName, uint nServerPort, ...) : ulong | Public | Fonction publique |
| InternetGetLastResponseInfo(ulong lpdwError, string lpszBuffer, ulong lpdwBufferLength) : boolean | Public | Fonction publique |
| InternetFindNextFile(ulong hFind, WIN32_FIND_DATA lpvFindData) : boolean | Public | Fonction publique |
| InternetReadFile(ulong hFile, blob lpBuffer, ulong dwNumberOfBytesToRead, ulong lpdwNumberOfBytesRead) : boolean | Public | Fonction publique |
| InternetWriteFile(ulong hFile, blob lpBuffer, ulong dwNumberOfBytesToWrite, ulong lpdwNumberOfBytesWritten) : boolean | Public | Fonction publique |
| InternetSetOption(ulong hInternet, ulong dwOption, string lpBuffer, ulong dwBufferLength) : boolean | Public | Fonction publique |
| HttpOpenRequest(ulong hConnect, string lpszVerb, string lpszObjectName, ...) : ulong | Public | Fonction publique |
| HttpSendRequest(ulong hRequest, string lpszHeaders, ulong dwHeadersLength, ...) : boolean | Public | Fonction publique |
| HttpQueryInfo(ulong hRequest, ulong dwInfoLevel, string lpvBuffer, ...) : boolean | Public | Fonction publique |
| FtpCommand(ulong hConnect, boolean fExpectResponse, ulong dwFlags, ...) : boolean | Public | Fonction publique |
| FtpCreateDirectory(ulong hConnect, string lpszDirectory) : boolean | Public | Fonction publique |
| FtpDeleteFile(ulong hConnect, string lpszFileName) : boolean | Public | Fonction publique |
| FtpFindFirstFile(ulong hConnect, string lpszSearchFile, WIN32_FIND_DATA lpFindFileData, ...) : ulong | Public | Fonction publique |
| FtpGetCurrentDirectory(ulong hConnect, string lpszCurrentDirectory, ulong lpdwCurrentDirectory) : boolean | Public | Fonction publique |
| FtpGetFile(ulong hConnect, string lpszRemoteFile, string lpszNewFile, ...) : boolean | Public | Fonction publique |
| FtpGetFileSize(ulong hFile, ulong lpdwFileSizeHigh) : ulong | Public | Fonction publique |
| FtpOpenFile(ulong hConnect, string lpszFileName, ulong dwAccess, ...) : ulong | Public | Fonction publique |
| FtpPutFile(ulong hConnect, string lpszLocalFile, string lpszNewRemoteFile, ...) : boolean | Public | Fonction publique |
| FtpRemoveDirectory(ulong hConnect, string lpszDirectory) : boolean | Public | Fonction publique |
| FtpRenameFile(ulong hConnect, string lpszExisting, string lpszNew) : boolean | Public | Fonction publique |
| FtpSetCurrentDirectory(ulong hConnect, string lpszDirectory) : boolean | Public | Fonction publique |
| of_writefile(string as_filename, blob ablob_filedata) : boolean | Public | Fonction publique |
| of_readfile(string as_filename, blob ablob_filedata) : unsignedlong | Public | Fonction publique |
| of_http_internetconnect(string as_servername, unsignedinteger aui_port) : boolean | Public | Fonction publique |
| of_filedatetimetopb(filetime astr_filetime) : datetime | Public | Fonction publique |
| of_http_openrequest(string as_verb, string as_object, boolean ab_secure) : boolean | Public | Fonction publique |
| of_http_sendrequestget(blob ablob_buffer) : boolean | Public | Fonction publique |
| of_httpget(string as_server, string as_file, blob ablob_buffer, boolean ab_secure) : boolean | Public | Fonction publique |
| of_ftp_command(string as_command, string as_response) : boolean | Public | Fonction publique |
| of_ftp_createdirectory(string as_directory) : boolean | Public | Fonction publique |
| of_ftp_deletefile(string as_filename) : boolean | Public | Fonction publique |
| of_ftp_internetconnect(string as_servername, string as_userid, string as_password) : boolean | Public | Fonction publique |
| of_ftp_internetconnect(string as_servername) : boolean | Public | Fonction publique |
| of_ftp_internetconnect(string as_servername, string as_userid, string as_password, ...) : boolean | Public | Fonction publique |
| of_ftp_directory(s_ftpdirlist astr_dirlist[]) : integer | Public | Fonction publique |
| of_ftp_directoryexists(string as_dirname) : boolean | Public | Fonction publique |
| of_ftp_fileexists(string as_filename) : boolean | Public | Fonction publique |
| of_ftp_getcurrentdirectory(string as_directory) : boolean | Public | Fonction publique |
| of_ftp_getfile(string as_source, string as_target, boolean ab_ascii) : boolean | Public | Fonction publique |
| of_ftp_putfile(string as_source, string as_target, boolean ab_ascii) : boolean | Public | Fonction publique |
| of_ftp_removedirectory(string as_directory) : boolean | Public | Fonction publique |
| of_ftp_renamefile(string as_filename, string as_newname) : boolean | Public | Fonction publique |
| of_ftp_setcurrentdirectory(string as_directory) : boolean | Public | Fonction publique |
| of_ftp_readfile(string as_source, string as_target, long al_window, long al_event) : boolean | Public | Fonction publique |
| of_ftp_readfile(string as_source, string as_target) : boolean | Public | Fonction publique |
| of_ftp_readstring(string as_filename, string as_content) : boolean | Public | Fonction publique |
| of_ftp_writefile(string as_source, string as_target, long al_window, long al_event) : boolean | Public | Fonction publique |
| of_ftp_writefile(string as_source, string as_target) : boolean | Public | Fonction publique |
| of_ftp_writestring(string as_filename, string as_content) : boolean | Public | Fonction publique |
| of_internetsetoption(unsignedlong aul_option, string as_value) : boolean | Public | Fonction publique |
| of_getlasterror() : boolean | Public | Fonction publique |
| of_ftp_internetconnect(string as_servername, unsignedinteger aui_port, boolean ab_passive) : boolean | Public | Fonction publique |
| of_checkbit(long al_number, unsignedinteger ai_bit) : boolean | Public | Fonction publique |
| of_internetclosehandle(unsignedlong aul_handle) : boolean | Public | Fonction publique |
| of_internetopen() : boolean | Public | Fonction publique |
| of_sessionclose() : void (subroutine) | Public | Fonction publique |
| of_internetclose() : void (subroutine) | Public | Fonction publique |
| of_requestclose() : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_internetopen | Evenement personnalise |
