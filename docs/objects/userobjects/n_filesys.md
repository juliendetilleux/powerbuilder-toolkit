# n_filesys

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _ftp
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| DRIVE_UNKNOWN | UInt (Constant) |
| DRIVE_NO_ROOT_DIR | UInt (Constant) |
| DRIVE_REMOVABLE | UInt (Constant) |
| DRIVE_FIXED | UInt (Constant) |
| DRIVE_REMOTE | UInt (Constant) |
| DRIVE_CDROM | UInt (Constant) |
| DRIVE_RAMDISK | UInt (Constant) |
| CSIDL_DESKTOP | Long (Constant) |
| CSIDL_INTERNET | Long (Constant) |
| CSIDL_PROGRAMS | Long (Constant) |
| CSIDL_CONTROLS | Long (Constant) |
| CSIDL_PRINTERS | Long (Constant) |
| CSIDL_PERSONAL | Long (Constant) |
| CSIDL_FAVORITES | Long (Constant) |
| CSIDL_STARTUP | Long (Constant) |
| CSIDL_RECENT | Long (Constant) |
| CSIDL_SENDTO | Long (Constant) |
| CSIDL_BITBUCKET | Long (Constant) |
| CSIDL_STARTMENU | Long (Constant) |
| CSIDL_MYDOCUMENTS | Long (Constant) |
| CSIDL_MYMUSIC | Long (Constant) |
| CSIDL_MYVIDEO | Long (Constant) |
| CSIDL_DESKTOPDIRECTORY | Long (Constant) |
| CSIDL_DRIVES | Long (Constant) |
| CSIDL_NETWORK | Long (Constant) |
| CSIDL_NETHOOD | Long (Constant) |
| CSIDL_FONTS | Long (Constant) |
| CSIDL_TEMPLATES | Long (Constant) |
| CSIDL_COMMON_STARTMENU | Long (Constant) |
| CSIDL_COMMON_PROGRAMS | Long (Constant) |
| CSIDL_COMMON_STARTUP | Long (Constant) |
| CSIDL_COMMON_DESKTOPDIRECTORY | Long (Constant) |
| CSIDL_APPDATA | Long (Constant) |
| CSIDL_PRINTHOOD | Long (Constant) |
| CSIDL_LOCAL_APPDATA | Long (Constant) |
| CSIDL_ALTSTARTUP | Long (Constant) |
| CSIDL_COMMON_ALTSTARTUP | Long (Constant) |
| CSIDL_COMMON_FAVORITES | Long (Constant) |
| CSIDL_INTERNET_CACHE | Long (Constant) |
| CSIDL_COOKIES | Long (Constant) |
| CSIDL_HISTORY | Long (Constant) |
| CSIDL_COMMON_APPDATA | Long (Constant) |
| CSIDL_WINDOWS | Long (Constant) |
| CSIDL_SYSTEM | Long (Constant) |
| CSIDL_PROGRAM_FILES | Long (Constant) |
| CSIDL_MYPICTURES | Long (Constant) |
| CSIDL_PROFILE | Long (Constant) |
| CSIDL_SYSTEMX86 | Long (Constant) |
| CSIDL_PROGRAM_FILESX86 | Long (Constant) |
| CSIDL_PROGRAM_FILES_COMMON | Long (Constant) |
| CSIDL_PROGRAM_FILES_COMMONX86 | Long (Constant) |
| CSIDL_COMMON_TEMPLATES | Long (Constant) |
| CSIDL_COMMON_DOCUMENTS | Long (Constant) |
| CSIDL_COMMON_ADMINTOOLS | Long (Constant) |
| CSIDL_ADMINTOOLS | Long (Constant) |
| CSIDL_CONNECTIONS | Long (Constant) |
| CSIDL_COMMON_MUSIC | Long (Constant) |
| CSIDL_COMMON_PICTURES | Long (Constant) |
| CSIDL_COMMON_VIDEO | Long (Constant) |
| CSIDL_RESOURCES | Long (Constant) |
| CSIDL_RESOURCES_LOCALIZED | Long (Constant) |
| CSIDL_COMMON_OEM_LINKS | Long (Constant) |
| CSIDL_CDBURN_AREA | Long (Constant) |
| FO_MOVE | uint (Constant) |
| FO_COPY | uint (Constant) |
| FO_DELETE | uint (Constant) |
| FO_RENAME | uint (Constant) |
| FOF_MULTIDESTFILES | uint (Constant) |
| FOF_CONFIRMMOUSE | uint (Constant) |
| FOF_SILENT | uint (Constant) |
| FOF_RENAMEONCOLLISION | uint (Constant) |
| FOF_NOCONFIRMATION | uint (Constant) |
| FOF_WANTMAPPINGHANDLE | uint (Constant) |
| FOF_ALLOWUNDO | uint (Constant) |
| FOF_FILESONLY | uint (Constant) |
| FOF_SIMPLEPROGRESS | uint (Constant) |
| FOF_NOCONFIRMMKDIR | uint (Constant) |
| FOF_NOERRORUI | uint (Constant) |
| FOF_NOCOPYSECURITYATTRIBS | uint (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| GetLogicalDrives() : ulong | Public | Fonction publique |
| GetDriveType(string lpBuffer) : uint | Public | Fonction publique |
| WNetGetConnection(string lpszLocalName, string lpszRemoteName, ulong buflen) : ulong | Public | Fonction publique |
| GetVolumeInformation(string lpRootPathName, string lpVolumeNameBuffer, long nVolumeNameSize, ...) : ulong | Public | Fonction publique |
| FindFirstFile(string filename, win32_find_data findfiledata) : long | Public | Fonction publique |
| FindNextFile(ulong handle, win32_find_data findfiledata) : boolean | Public | Fonction publique |
| FindClose(ulong handle) : boolean | Public | Fonction publique |
| FileTimeToSystemTime(filetime lpFileTime, systemtime lpSystemTime) : boolean | Public | Fonction publique |
| SystemTimeToTzSpecificLocalTime(ulong lpTimeZone, SYSTEMTIME lpUniversalTime, SYSTEMTIME lpLocalTime) : boolean | Public | Fonction publique |
| GetDiskFreeSpaceEx(string lpDirectoryName, large_integer lpFreeBytesAvailable, large_integer lpTotalNumberOfBytes, large_integer lpTotalNumberOfFreeBytes) : boolean | Public | Fonction publique |
| GetTempPath(int nBufferLength, string lpBuffer) : int | Public | Fonction publique |
| SetFileAttributes(string lpFileName, ulong dwFileAttributes) : boolean | Public | Fonction publique |
| SHGetFolderPath(long hwndOwner, long nFolder, long hToken, ...) : long | Public | Fonction publique |
| SHFileOperation(shfileopstruct lpFileOp) : Integer | Public | Fonction publique |
| RtlMoveMemory(Long Destination, Char Source[], Long Size) : Long | Public | Fonction publique |
| LocalAlloc(Long Flags, Long Bytes) : Long | Public | Fonction publique |
| LocalFree(Long MemHandle) : Long | Public | Fonction publique |
| of_wnetgetconnection(string as_drive) : string | Public | Fonction publique |
| of_getdrives(string as_drive[], integer ai_type[], string as_label[]) : integer | Public | Fonction publique |
| of_getfileattributes(string as_filename, boolean ab_readonly, boolean ab_hidden, ...) : integer | Public | Fonction publique |
| of_dirsexist(string as_filespec, boolean ab_hidden) : boolean | Public | Fonction publique |
| of_filesexist(string as_filespec, boolean ab_hidden) : boolean | Public | Fonction publique |
| of_getfiles(string as_filespec, boolean ab_hidden, string as_name[], ...) : integer | Public | Fonction publique |
| of_gettemppath() : string | Public | Fonction publique |
| of_setfileattributes(string as_filename, boolean ab_readonly, boolean ab_hidden, ...) : unsignedlong | Public | Fonction publique |
| of_getfiledescription(string as_filename) : string | Public | Fonction publique |
| of_getfiles(string as_filespec, string as_name[], boolean ab_subdir[]) : integer | Public | Fonction publique |
| of_filedatetimetopb(filetime astr_filetime, boolean ab_msecs) : datetime | Public | Fonction publique |
| of_filedatetimetopb_utc(filetime astr_filetime, boolean ab_msecs) : datetime | Public | Fonction publique |
| of_getfolderpath(long al_csidl) : string | Public | Fonction publique |
| of_getlastwritetime(string as_filename) : datetime | Public | Fonction publique |
| of_shellcopyfiles(long al_window, string as_source[], string as_target) : boolean | Public | Fonction publique |
| of_getdrivetype(string as_drive) : integer | Public | Fonction publique |
| of_getvolumelabel(string as_drive) : string | Public | Fonction publique |
| of_checkbit(long al_number, unsignedinteger ai_bit) : boolean | Public | Fonction publique |
| of_getdiskfreespace(string as_drive, double adb_size, double adb_used, double adb_free) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
