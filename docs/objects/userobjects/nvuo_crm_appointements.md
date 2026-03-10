# nvuo_crm_appointements

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales_crm
- **Description**: Objet du module CRM - gestion CRM

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| il_error | long |
| il_ahid | long |
| il_alid | long |
| il_ahaction | long |
| il_numact | long |
| idt_ahmajdat | datetime |
| il_ahdefval | long |
| is_adtyplist | string |
| is_mcdolist | string |
| il_impactedad | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_get_nbimpactedad() : string | Public | Fonction utilisateur publique |
| uof_calc_nb_app() : long | Public | Fonction utilisateur publique |
| uof_applicate(long al_ahid) : integer | Public | Fonction utilisateur publique |
| uof_get_error() : string | Public | Fonction utilisateur publique |
| f_linkappad(string as_adcode) : void (subroutine) | Public | Fonction publique |
| f_adlist() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
