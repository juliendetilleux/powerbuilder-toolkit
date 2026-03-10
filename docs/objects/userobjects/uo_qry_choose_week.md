# uo_qry_choose_week

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _projects
- **Description**: Objet du module Projets

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_date | datetime |
| is_curr_user | string |
| ib_border | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| get_date() : datetime | Public | Fonction publique |
| wf_refresh() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_refresh(datetime adt_date) : void (subroutine) | Public | Fonction privee de fenetre |
| set_date(datetime adt_date) : void (subroutine) | Public | Fonction publique |
| wf_border() : void (subroutine) | Public | Fonction privee de fenetre |
| set_border(boolean ab_border) : void (subroutine) | Public | Fonction publique |
| set_date(datetime adt_date, boolean ab_refresh) : void (subroutine) | Public | Fonction publique |
| set_user(string as_user) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
