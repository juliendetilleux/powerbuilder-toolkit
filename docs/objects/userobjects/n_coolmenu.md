# n_coolmenu

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| SUCCESS | Integer (Constant) |
| NO_ACTION | Integer (Constant) |
| FAILURE | Integer (Constant) |
| MenuStyleNormal | Integer (Constant) |
| MenuStyleOffice2K | Integer (Constant) |
| MenuStyleOfficeXP | Integer (Constant) |
| MenuStyleOffice2K3 | Integer (Constant) |
| ib_ReactOnThemeChanges | Boolean |
| ii_RequestorIndex | Integer |
| istr_MenuData | s_menudata |
| iw_Requestor | Window |
| ib_ShowToolbarVisibleOnly | Boolean |
| iul_PBVMHandle | uLong |
| il_PbVersion | Long |
| COLOR_SCROLLBAR | Integer (Constant) |
| COLOR_BACKGROUND | Integer (Constant) |
| COLOR_ACTIVECAPTION | Integer (Constant) |
| COLOR_INACTIVECAPTION | Integer (Constant) |
| COLOR_MENU | Integer (Constant) |
| COLOR_WINDOW | Integer (Constant) |
| COLOR_WINDOWFRAME | Integer (Constant) |
| COLOR_MENUTEXT | Integer (Constant) |
| COLOR_WINDOWTEXT | Integer (Constant) |
| COLOR_CAPTIONTEXT | Integer (Constant) |
| COLOR_ACTIVEBORDER | Integer (Constant) |
| COLOR_INACTIVEBORDER | Integer (Constant) |
| COLOR_APPWORKSPACE | Integer (Constant) |
| COLOR_HIGHLIGHT | Integer (Constant) |
| COLOR_HIGHLIGHTTEXT | Integer (Constant) |
| COLOR_BTNFACE | Integer (Constant) |
| COLOR_BTNSHADOW | Integer (Constant) |
| COLOR_GRAYTEXT | Integer (Constant) |
| COLOR_BTNTEXT | Integer (Constant) |
| COLOR_INACTIVECAPTIONTEXT | Integer (Constant) |
| COLOR_BTNHIGHLIGHT | Integer (Constant) |
| COLOR_3DDKSHADOW | Integer (Constant) |
| COLOR_3DLIGHT | Integer (Constant) |
| COLOR_INFOTEXT | Integer (Constant) |
| COLOR_INFOBK | Integer (Constant) |
| COLOR_DESKTOP | Integer (Constant) |
| COLOR_3DFACE | Integer (Constant) |
| COLOR_3DSHADOW | Integer (Constant) |
| COLOR_3DHIGHLIGHT | Integer (Constant) |
| COLOR_3DHILIGHT | Integer (Constant) |
| COLOR_BTNHILIGHT | Integer (Constant) |
| COLOR_ALTERNATEBTNFACE | Integer (Constant) |
| COLOR_HOTLIGHT | Integer (Constant) |
| COLOR_GRADIENTACTIVECAPTION | Integer (Constant) |
| COLOR_GRADIENTINACTIVECAPTION | Integer (Constant) |
| COLOR_MIN | Integer (Constant) |
| COLOR_MAX | Integer (Constant) |
| SelectedColor | Integer (Constant) |
| MenuBckColor | Integer (Constant) |
| BitmapBckColor | Integer (Constant) |
| CheckedSelectedColor | Integer (Constant) |
| CheckedColor | Integer (Constant) |
| PenColor | Integer (Constant) |
| TextColor | Integer (Constant) |
| HighlightTextColor | Integer (Constant) |
| DisabledTextColor | Integer (Constant) |
| GradientStartColor | Integer (Constant) |
| GradientEndColor | Integer (Constant) |
| MenubarColor | Integer (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| SetResourceFile(String sResourceFile) : Boolean | Public | Fonction publique |
| AddStockImage(Long iImage, Boolean bBitmap, uLong hModule, ...) : Integer | Public | Fonction publique |
| AddImage(String sImage, Long bckColor, Integer xPixel, Integer yPixel) : Integer | Public | Fonction publique |
| AddImageID(Long wImage, Long bckColor, Integer xPixel, Integer yPixel) : Integer | Public | Fonction publique |
| AddMenuImage(String sImage, uLong hIcon) : Integer | Public | Fonction publique |
| SetImageNameId(String iName, uInt iImage) : int | Public | Fonction publique |
| SetImageNameIdW(String iName, uInt iImage) : int | Public | Fonction publique |
| SetMenuItemProps(String sName, Boolean bBold, Boolean bItalic, ...) : int | Public | Fonction publique |
| AddImageW(String sImage, Long bckColor, Integer xPixel, Integer yPixel) : Integer | Public | Fonction publique |
| AddMenuImageW(String sImage, uLong hIcon) : Integer | Public | Fonction publique |
| GetCoolMenubar() : Boolean | Public | Fonction publique |
| GetSysColor(uInt uIndex) : Long | Public | Fonction publique |
| FN_ResGetBitmapID_70(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetIconID_70(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetBitmapName_70(Long lpLibFileName) : String | Public | Fonction publique |
| FN_ResGetBitmapID_80(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetIconID_80(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetBitmapName_80(Long lpLibFileName) : String | Public | Fonction publique |
| FN_ResGetBitmapID_90(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetIconID_90(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetBitmapName_90(Long lpLibFileName) : String | Public | Fonction publique |
| FN_ResGetBitmapID_10(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetIconID_10(String lpLibFileName) : Long | Public | Fonction publique |
| FN_ResGetBitmapName_10(Long lpLibFileName) : String | Public | Fonction publique |
| GetModuleHandleA(String lpModuleName) : uLong | Public | Fonction publique |
| GetModuleHandleW(String lpModuleName) : uLong | Public | Fonction publique |
| GetFont() : uLong | Public | Fonction publique |
| of_addmenubitmap(string as_menutext, unsignedlong aul_icon) : boolean | Public | Fonction publique |
| of_settoolbarvisibleonly(boolean ab_switch) : integer | Public | Fonction publique |
| of_gettoolbarvisibleonly() : boolean | Public | Fonction publique |
| of_getmenustyle() : integer | Public | Fonction publique |
| of_loadstockimage(string as_stockimage, string as_tag) : integer | Public | Fonction publique |
| of_setrequestor(window aw_requestor) : integer | Public | Fonction publique |
| of_setmenu(string as_menu) : integer | Public | Fonction publique |
| of_getcoolmenubar() : boolean | Public | Fonction publique |
| of_setresourcefile(string as_resourcefile) : boolean | Public | Fonction publique |
| of_getreactonthemechange() : boolean | Public | Fonction publique |
| of_loadimagesfrommenu(menu amnu_menu) : integer | Public | Fonction publique |
| SetResourceFileW(String sResourceFile) : void (subroutine) | Public | Fonction publique |
| ChangeMenuText(String sOld, String sNew) : void (subroutine) | Public | Fonction publique |
| InstallCoolMenu(uLong hWnd) : void (subroutine) | Public | Fonction publique |
| Uninstall() : void (subroutine) | Public | Fonction publique |
| SetMenuStyle(Integer MenuStyle) : void (subroutine) | Public | Fonction publique |
| SetCoolMenubar(Boolean bCoolMenubar) : void (subroutine) | Public | Fonction publique |
| SetReactOnThemeChange(Boolean bReactOnThemeChange) : void (subroutine) | Public | Fonction publique |
| SetShadowEnabled(Boolean bShadowEnabled) : void (subroutine) | Public | Fonction publique |
| SetFlatMenu(Boolean bFlatMenu) : void (subroutine) | Public | Fonction publique |
| SetMenuColor(Integer colorIndex, Long colorRef) : void (subroutine) | Public | Fonction publique |
| SetDefaults() : void (subroutine) | Public | Fonction publique |
| SetPbVersion(String lpszVersion) : void (subroutine) | Public | Fonction publique |
| of_setxpselectedcolor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpMenuColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpBmpBkColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpCheckedSelectedColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpCheckedColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpPenColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpHighTextColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpDisabledTextColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_SetXpTextColor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_setxpdefaults() : void (subroutine) | Public | Fonction publique |
| of_set2k3gradient(long al_colorstart, long al_colorend) : void (subroutine) | Public | Fonction publique |
| of_setxpstyle() : void (subroutine) | Public | Fonction publique |
| of_set2k3style() : void (subroutine) | Public | Fonction publique |
| of_set2kstyle() : void (subroutine) | Public | Fonction publique |
| of_setnormalstyle() : void (subroutine) | Public | Fonction publique |
| of_setcoolmenubar(boolean ab_coolmenubar) : void (subroutine) | Public | Fonction publique |
| of_setflatmenu(boolean ab_flatmenu) : void (subroutine) | Public | Fonction publique |
| of_initialize() : void (subroutine) | Public | Fonction publique |
| of_setmenubarcolor(long al_color) : void (subroutine) | Public | Fonction publique |
| of_setshadow(boolean ab_switch) : void (subroutine) | Public | Fonction publique |
| of_uninitialize() : void (subroutine) | Public | Fonction publique |
| of_changemenutext(string as_newmenutext, string as_oldmenutext, string as_image, string as_tag) : void (subroutine) | Public | Fonction publique |
| of_setreactonthemechange(boolean ab_reactonthemechange) : void (subroutine) | Public | Fonction publique |
| of_setmenuitemprops(string as_menuname, boolean ab_bold, boolean ab_italic, ...) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
