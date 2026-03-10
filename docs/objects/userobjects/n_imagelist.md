# n_imagelist

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _ftp
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| il_hImageList | Long |
| ILC_COLOR | Long (Constant) |
| ILC_MASK | Long (Constant) |
| ILC_COLOR4 | Long (Constant) |
| ILC_COLOR8 | Long (Constant) |
| ILC_COLOR16 | Long (Constant) |
| ILC_COLOR24 | Long (Constant) |
| ILC_COLOR32 | Long (Constant) |
| ILC_COLORDDB | Long (Constant) |
| ILC_PALETTE | Long (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ImageList_Create(long cx, long cy, ulong flags, ...) : long | Public | Fonction publique |
| ImageList_Destroy(long himl) : boolean | Public | Fonction publique |
| ImageList_GetImageCount(long himl) : long | Public | Fonction publique |
| ImageList_ReplaceIcon(long himl, long i, long hicon) : long | Public | Fonction publique |
| ImageList_Add(long himl, long hbmImage, long hbmMask) : long | Public | Fonction publique |
| FN_ResGetBitmapID(string lpImageName) : long | Public | Fonction publique |
| of_create(long al_size, unsignedlong aul_flags) : boolean | Public | Fonction publique |
| of_replaceicon(long al_index, long al_icon) : long | Public | Fonction publique |
| of_getstockbitmap(string as_imagename) : string | Public | Fonction publique |
| of_pbvmname() : string | Public | Fonction publique |
| of_destroy() : boolean | Public | Fonction publique |
| of_gethandle() : long | Public | Fonction publique |
| of_getimagecount() : long | Public | Fonction publique |
| of_addbitmap(long al_bitmap) : long | Public | Fonction publique |
| of_addicon(long al_icon) : long | Public | Fonction publique |
| of_sethandle(long al_handle) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
