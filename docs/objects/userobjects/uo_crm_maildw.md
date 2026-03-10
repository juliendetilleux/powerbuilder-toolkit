# uo_crm_maildw

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _sales_crm
- **Description**: Objet du module CRM - gestion de messagerie

## Variables d'instance

| Variable | Type |
|----------|------|
| PBObject_mailStore | OLEObject |
| PBObject_message | OLEObject |
| is_adcode | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_returnrow(integer row) : long | Public | Fonction utilitaire |
| uf_cvrt2date(string maildate) : datetime | Public | Fonction utilitaire |
| uf_displayerror(string functioneasymail, integer stat) : string | Public | Fonction utilitaire |
| uf_loadmail(string ls_adcode) : void (subroutine) | Public | Fonction utilitaire |
| uf_setheight(integer parent_height) : void (subroutine) | Public | Fonction utilitaire |

## Evenements

Aucun evenement personnalise.
