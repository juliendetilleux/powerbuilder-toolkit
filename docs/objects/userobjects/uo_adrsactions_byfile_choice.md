# uo_adrsactions_byfile_choice

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _projects
- **Description**: Objet du module Projets

## Variables d'instance

| Variable | Type |
|----------|------|
| ids_adrsactions | nv_datastore |
| il_rows | long |
| il_currentrow | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_getdesc(long an_pos) : string | Public | Fonction utilisateur publique |
| uof_getcode(integer an_pos) : long | Public | Fonction utilisateur publique |
| uof_getcurrentrow() : long | Public | Fonction utilisateur publique |
| uof_retrieve(long al_file) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_itemchanged | Evenement personnalise |
