# uo_display_cash

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales_cash
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| is_typdisplayer | string |
| is_Port | string |
| is_settings | string |
| is_getweight_rs232_param | s_getweight_rs232_param |
| ole_rs232 | OLEObject |
| ole_cash | OLEObject |
| is_typcash | string |
| is_Port_cash | string |
| is_settings_cash | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_connect_vdf_450_550() : boolean | Public | Fonction utilisateur publique |
| uof_hex2dec(string as_hex) : long | Public | Fonction utilisateur publique |
| uof_hex2char(string as_hex) : string | Public | Fonction utilisateur publique |
| uof_connect_cdv50() : boolean | Public | Fonction utilisateur publique |
| uof_cash(st_display ast_display) : boolean | Public | Fonction utilisateur publique |
| uof_connect_cash() : boolean | Public | Fonction utilisateur publique |
| uof_send_cashblack(string as_message) : string | Public | Fonction utilisateur publique |
| uof_diplay(st_display ast_display) : boolean | Public | Fonction utilisateur publique |
| uof_get_rs232_param() : s_getweight_rs232_param | Public | Fonction utilisateur publique |
| uof_display_vfd_450_550(string as_display, boolean ab_senddel) : string | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
