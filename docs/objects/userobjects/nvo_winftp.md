# nvo_winftp

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme - transfert de fichiers FTP

## Variables d'instance

| Variable | Type |
|----------|------|
| iul_internet | ulong |
| iul_session | ulong |
| INTERNET_OPEN_TYPE_PRECONFIG | uint (Constant) |
| INTERNET_OPEN_TYPE_DIRECT | uint (Constant) |
| INTERNET_OPEN_TYPE_PROXY | uint (Constant) |
| INTERNET_OPEN_TYPE_PRECONFIG_WITH_NO_AUTOPROXY | uint (Constant) |
| INTERNET_SERVICE_URL | uint (Constant) |
| INTERNET_SERVICE_FTP | uint (Constant) |
| INTERNET_SERVICE_GOPHER | uint (Constant) |
| INTERNET_SERVICE_HTTP | uint (Constant) |
| INTERNET_INVALID_PORT_NUMBER | uint (Constant) |
| INTERNET_DEFAULT_FTP_PORT | uint (Constant) |
| INTERNET_DEFAULT_GOPHER_PORT | uint (Constant) |
| INTERNET_DEFAULT_HTTP_PORT | uint (Constant) |
| INTERNET_DEFAULT_HTTPS_PORT | uint (Constant) |
| INTERNET_DEFAULT_SOCKS_PORT | uint (Constant) |
| FTP_TRANSFER_TYPE_ASCII | uint (Constant) |
| FTP_TRANSFER_TYPE_BINARY | uint (Constant) |
| INTERNET_FLAG_RELOAD | ulong (Constant) |
| INTERNET_FLAG_NO_CACHE_WRITE | ulong (Constant) |
| INTERNET_FLAG_RAW_DATA | ulong (Constant) |
| INTERNET_FLAG_PASSIVE | ulong (Constant) |
| INTERNET_ERROR_BASE | uint (Constant) |
| ERROR_INTERNET_OUT_OF_HANDLES | uint (Constant) |
| ERROR_INTERNET_TIMEOUT | uint (Constant) |
| ERROR_INTERNET_EXTENDED_ERROR | uint (Constant) |
| ERROR_INTERNET_INTERNAL_ERROR | uint (Constant) |
| ERROR_INTERNET_INVALID_URL | uint (Constant) |
| ERROR_INTERNET_UNRECOGNIZED_SCHEME | uint (Constant) |
| ERROR_INTERNET_NAME_NOT_RESOLVED | uint (Constant) |
| ERROR_INTERNET_PROTOCOL_NOT_FOUND | uint (Constant) |
| ERROR_INTERNET_INVALID_OPTION | uint (Constant) |
| ERROR_INTERNET_BAD_OPTION_LENGTH | uint (Constant) |
| ERROR_INTERNET_OPTION_NOT_SETTABLE | uint (Constant) |
| ERROR_INTERNET_SHUTDOWN | uint (Constant) |
| ERROR_INTERNET_INCORRECT_USER_NAME | uint (Constant) |
| ERROR_INTERNET_INCORRECT_PASSWORD | uint (Constant) |
| ERROR_INTERNET_LOGIN_FAILURE | uint (Constant) |
| ERROR_INTERNET_INVALID_OPERATION | uint (Constant) |
| ERROR_INTERNET_OPERATION_CANCELLED | uint (Constant) |
| ERROR_INTERNET_INCORRECT_HANDLE_TYPE | uint (Constant) |
| ERROR_INTERNET_INCORRECT_HANDLE_STATE | uint (Constant) |
| ERROR_INTERNET_NOT_PROXY_REQUEST | uint (Constant) |
| ERROR_INTERNET_REGISTRY_VALUE_NOT_FOUND | uint (Constant) |
| ERROR_INTERNET_BAD_REGISTRY_PARAMETER | uint (Constant) |
| ERROR_INTERNET_NO_DIRECT_ACCESS | uint (Constant) |
| ERROR_INTERNET_NO_CONTEXT | uint (Constant) |
| ERROR_INTERNET_NO_CALLBACK | uint (Constant) |
| ERROR_INTERNET_REQUEST_PENDING | uint (Constant) |
| ERROR_INTERNET_INCORRECT_FORMAT | uint (Constant) |
| ERROR_INTERNET_ITEM_NOT_FOUND | uint (Constant) |
| ERROR_INTERNET_CANNOT_CONNECT | uint (Constant) |
| ERROR_INTERNET_CONNECTION_ABORTED | uint (Constant) |
| ERROR_INTERNET_CONNECTION_RESET | uint (Constant) |
| ERROR_INTERNET_FORCE_RETRY | uint (Constant) |
| ERROR_INTERNET_INVALID_PROXY_REQUEST | uint (Constant) |
| ERROR_INTERNET_NEED_UI | uint (Constant) |
| ERROR_INTERNET_HANDLE_EXISTS | uint (Constant) |
| ERROR_INTERNET_SEC_CERT_DATE_INVALID | uint (Constant) |
| ERROR_INTERNET_SEC_CERT_CN_INVALID | uint (Constant) |
| ERROR_INTERNET_HTTP_TO_HTTPS_ON_REDIR | uint (Constant) |
| ERROR_INTERNET_HTTPS_TO_HTTP_ON_REDIR | uint (Constant) |
| ERROR_INTERNET_MIXED_SECURITY | uint (Constant) |
| ERROR_INTERNET_CHG_POST_IS_NON_SECURE | uint (Constant) |
| ERROR_INTERNET_POST_IS_NON_SECURE | uint (Constant) |
| ERROR_INTERNET_CLIENT_AUTH_CERT_NEEDED | uint (Constant) |
| ERROR_INTERNET_INVALID_CA | uint (Constant) |
| ERROR_INTERNET_CLIENT_AUTH_NOT_SETUP | uint (Constant) |
| ERROR_INTERNET_ASYNC_THREAD_FAILED | uint (Constant) |
| ERROR_INTERNET_REDIRECT_SCHEME_CHANGE | uint (Constant) |
| ERROR_INTERNET_DIALOG_PENDING | uint (Constant) |
| ERROR_INTERNET_RETRY_DIALOG | uint (Constant) |
| ERROR_INTERNET_HTTPS_HTTP_SUBMIT_REDIR | uint (Constant) |
| ERROR_INTERNET_INSERT_CDROM | uint (Constant) |
| ERROR_FTP_TRANSFER_IN_PROGRESS | uint (Constant) |
| ERROR_FTP_DROPPED | uint (Constant) |
| ERROR_FTP_NO_PASSIVE_MODE | uint (Constant) |
| ERROR_INTERNET_SECURITY_CHANNEL_ERROR | uint (Constant) |
| ERROR_INTERNET_UNABLE_TO_CACHE_FILE | uint (Constant) |
| ERROR_INTERNET_TCPIP_NOT_INSTALLED | uint (Constant) |
| ERROR_INTERNET_DISCONNECTED | uint (Constant) |
| ERROR_INTERNET_SERVER_UNREACHABLE | uint (Constant) |
| ERROR_INTERNET_PROXY_SERVER_UNREACHABLE | uint (Constant) |
| ERROR_INTERNET_BAD_AUTO_PROXY_SCRIPT | uint (Constant) |
| ERROR_INTERNET_UNABLE_TO_DOWNLOAD_SCRIPT | uint (Constant) |
| ERROR_INTERNET_SEC_INVALID_CERT | uint (Constant) |
| ERROR_INTERNET_SEC_CERT_REVOKED | uint (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| FileTimeToSystemTime(FILETIME lpFileTime, SYSTEMTIME lpSystemTime) : boolean | Public | Fonction publique |
| GetLastError() : ulong | Public | Fonction publique |
| CreateFile(string lpFileName, ulong dwDesiredAccess, ulong dwShareMode, ...) : ulong | Public | Fonction publique |
| CloseHandle(ulong hObject) : boolean | Public | Fonction publique |
| ReadFile(ulong hFile, blob lpBuffer, ulong nNumberOfBytesToRead, ...) : boolean | Public | Fonction publique |
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
| InternetCloseHandle(ulong hInternet) : boolean | Public | Fonction publique |
| InternetConnect(ulong hInternet, string lpszServerName, uint nServerPort, ...) : ulong | Public | Fonction publique |
| InternetFindNextFile(ulong hFind, WIN32_FIND_DATA lpvFindData) : boolean | Public | Fonction publique |
| InternetGetLastResponseInfo(ulong lpdwError, string lpszBuffer, ulong lpdwBufferLength) : boolean | Public | Fonction publique |
| InternetOpen(string lpszAgent, ulong dwAccessType, string lpszProxy, ...) : ulong | Public | Fonction publique |
| InternetReadFile(ulong hFile, blob lpBuffer, ulong dwNumberOfBytesToRead, ulong lpdwNumberOfBytesRead) : boolean | Public | Fonction publique |
| InternetWriteFile(ulong hFile, blob lpBuffer, ulong dwNumberOfBytesToWrite, ulong lpdwNumberOfBytesWritten) : boolean | Public | Fonction publique |
| of_ftp_createdirectory(string as_directory) : string | Public | Fonction publique |
| of_ftp_directory(s_ftpdirlist astr_dirlist[]) : integer | Public | Fonction publique |
| of_ftp_fileexists(string as_filename) : boolean | Public | Fonction publique |
| of_ftp_internetconnect(string as_servername) : string | Public | Fonction publique |
| of_ftp_internetconnect(string as_servername, string as_userid, string as_password) : string | Public | Fonction publique |
| of_ftp_putfile(string as_source, string as_target, boolean ab_ascii) : string | Public | Fonction publique |
| of_ftp_removedirectory(string as_directory) : string | Public | Fonction publique |
| of_ftp_renamefile(string as_filename, string as_newname) : string | Public | Fonction publique |
| of_getsession() : unsignedlong | Public | Fonction publique |
| of_internetclosehandle(unsignedlong aul_handle) : string | Public | Fonction publique |
| of_internetopen() : string | Public | Fonction publique |
| of_getlasterror() : string | Public | Fonction publique |
| of_ftp_command(string as_command, string as_response) : string | Public | Fonction publique |
| of_ftp_setcurrentdirectory(string as_directory) : string | Public | Fonction publique |
| of_ftp_getcurrentdirectory(string as_directory) : string | Public | Fonction publique |
| of_ftp_getfile(string as_source, string as_target, boolean ab_ascii) : string | Public | Fonction publique |
| of_ftp_readfile(string as_source, string as_target, long al_window, long al_event) : string | Public | Fonction publique |
| of_ftp_readfile(string as_source, string as_target) : string | Public | Fonction publique |
| of_ftp_writefile(string as_source, string as_target) : string | Public | Fonction publique |
| of_ftp_writefile(string as_source, string as_target, long al_window, long al_event) : string | Public | Fonction publique |
| of_ftp_directoryexists(string as_dirname) : boolean | Public | Fonction publique |
| of_ftp_readstring(string as_filename, string as_content) : string | Public | Fonction publique |
| of_ftp_writestring(string as_filename, string as_content) : string | Public | Fonction publique |
| of_ftp_deletefile(string as_filename) : string | Public | Fonction publique |
| of_disconnect_session() : string | Public | Fonction publique |
| of_filedatetimetopb(filetime astr_filetime) : datetime | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_internetopen | Evenement personnalise |
