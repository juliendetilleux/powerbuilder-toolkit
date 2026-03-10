# uo_mcdo

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _masters
- **Description**: Objet du module Donnees de base

## Variables d'instance

| Variable | Type |
|----------|------|
| CallFrom | string |
| AdCode | string |
| is_CptId | String |
| is_McDoName | string |
| is_ustyp | string |
| is_usmcdo2 | string |
| boolean | privatewrite |
| ib_Locked | boolean |
| ib_Exist | boolean |
| idwc | datawindowchild |
| is_McCode | string |
| is_McCodeOrg | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| getmccode() : string | Public | Fonction publique |
| getmcdoname() : string | Public | Fonction publique |
| uof_getwindowparent() : w_window | Public | Fonction utilisateur publique |
| save() : integer | Public | Fonction publique |
| load() : string | Public | Fonction publique |
| init(string as_filter) : void (subroutine) | Public | Fonction publique |
| enable(boolean ab_enabled) : void (subroutine) | Public | Fonction publique |
| check() : void (subroutine) | Public | Fonction publique |
| livecheck() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
