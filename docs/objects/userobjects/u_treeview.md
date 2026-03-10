# u_treeview

- **Type**: User Object (Visuel)
- **Ancetre**: uo_treeview
- **Module**: _ftp
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| in_Normal | n_imagelist |
| TV_FIRST | Long (Constant) |
| TVM_GETIMAGELIST | Long (Constant) |
| TVM_SETIMAGELIST | Long (Constant) |
| TVSIL_NORMAL | Long (Constant) |
| IMAGE_BITMAP | Long (Constant) |
| LR_CREATEDIBSECTION | Long (Constant) |
| LR_DEFAULTCOLOR | Long (Constant) |
| LR_DEFAULTSIZE | Long (Constant) |
| LR_LOADFROMFILE | Long (Constant) |
| LR_LOADMAP3DCOLORS | Long (Constant) |
| LR_LOADTRANSPARENT | Long (Constant) |
| LR_MONOCHROME | Long (Constant) |
| LR_SHARED | Long (Constant) |
| LR_VGACOLOR | Long (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ExtractIconEx(string lpszFile, long nIconIndex, long phIconLarge[], ...) : long | Public | Fonction publique |
| DestroyIcon(long hIcon) : boolean | Public | Fonction publique |
| SHGetFileInfo(string pszPath, long dwFileAttributes, SHFILEINFO psfi, ...) : ulong | Public | Fonction publique |
| CopyIcon(long hIcon) : long | Public | Fonction publique |
| LoadLibrary(string lpFileName) : long | Public | Fonction publique |
| FreeLibrary(long hModule) : boolean | Public | Fonction publique |
| LoadImage(long hinst, string lpszName, ulong uType, ...) : long | Public | Fonction publique |
| DeleteObject(long hObject) : boolean | Public | Fonction publique |
| of_importicons(string as_filename, long al_index, long al_normalicon) : long | Public | Fonction publique |
| of_getimagecount() : long | Public | Fonction publique |
| of_importicon(string as_filename, long al_index) : long | Public | Fonction publique |
| of_importbitmap(string as_filename, string as_resourceid) : long | Public | Fonction publique |
| of_importbitmap(string as_filename) : long | Public | Fonction publique |
| of_geticoncount(string as_filename) : long | Public | Fonction publique |
| of_setimagelist() : boolean | Public | Fonction publique |
| of_importstockbitmap(string as_imagename) : long | Public | Fonction publique |
| of_importassociatedicon(string as_filename, long al_normalicon) : boolean | Public | Fonction publique |
| of_createimagelist() : boolean | Public | Fonction publique |
| of_destroyimagelist() : void (subroutine) | Public | Fonction publique |
| of_deleteitems() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
