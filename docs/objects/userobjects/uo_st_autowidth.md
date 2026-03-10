# uo_st_autowidth

- **Type**: User Object (Visuel)
- **Ancetre**: uo_statictext
- **Module**: _design
- **Description**: Objet de design/theme

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_autoResize | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| GetDC(ulong hWnd) : ulong | Public | Fonction publique |
| GetTextExtentPoint32A(ulong hDC, string tex, long len, struct_size size) : boolean | Public | Fonction publique |
| ReleaseDC(ulong hWnd, ulong hdcr) : ulong | Public | Fonction publique |
| SelectObject(ulong hdc, ulong hWnd) : ulong | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
