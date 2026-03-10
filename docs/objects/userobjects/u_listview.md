# u_listview

- **Type**: User Object (Visuel)
- **Ancetre**: uo_listview
- **Module**: _ftp
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| in_Large | n_imagelist |
| in_Small | n_imagelist |
| ib_Large | Boolean |
| ib_Small | Boolean |
| LVM_FIRST | Long (Constant) |
| LVM_GETIMAGELIST | Long (Constant) |
| LVM_SETIMAGELIST | Long (Constant) |
| LVSIL_NORMAL | Long (Constant) |
| LVSIL_SMALL | Long (Constant) |
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
| of_importlargeicon(string as_filename, long al_index) : long | Public | Fonction publique |
| of_importsmallicon(string as_filename, long al_index) : long | Public | Fonction publique |
| of_importicons(string as_filename, long al_index, boolean ab_large, ...) : long | Public | Fonction publique |
| of_getlargeimagecount() : long | Public | Fonction publique |
| of_getsmallimagecount() : long | Public | Fonction publique |
| of_createlargeimagelist() : boolean | Public | Fonction publique |
| of_createsmallimagelist() : boolean | Public | Fonction publique |
| of_importlargebitmap(string as_filename, string as_resourceid) : long | Public | Fonction publique |
| of_importsmallbitmap(string as_filename, string as_resourceid) : long | Public | Fonction publique |
| of_importlargebitmap(string as_filename) : long | Public | Fonction publique |
| of_importsmallbitmap(string as_filename) : long | Public | Fonction publique |
| of_geticoncount(string as_filename) : long | Public | Fonction publique |
| of_setlargeimagelist() : boolean | Public | Fonction publique |
| of_setsmallimagelist() : boolean | Public | Fonction publique |
| of_importstockbitmap(string as_imagename) : long | Public | Fonction publique |
| of_getfiledescription(string as_filename) : string | Public | Fonction publique |
| of_importassociatedicon(string as_filename, long al_largeicon, long al_smallicon) : boolean | Public | Fonction publique |
| of_destroyimagelists() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
