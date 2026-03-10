# uo_crm_agenda_month

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _sales_crm
- **Description**: Objet du module CRM - gestion CRM

## Variables d'instance

| Variable | Type |
|----------|------|
| Iw_parent | w_main |
| ii_month_clicked | int |
| id_current_date | date |
| lds | nv_datastore |
| old_row | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_getmonth() : integer | Public | Fonction utilitaire |
| uf_find_first_monday(date ad_startdate) : date | Public | Fonction utilitaire |
| uf_getmonth_name(string nummonth) : string | Public | Fonction utilitaire |
| uf_setmonth(integer to_set) : void (subroutine) | Public | Fonction utilitaire |
| uf_fill_agenda(date ad_startdate, string user) : void (subroutine) | Public | Fonction utilitaire |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_year_change | Evenement personnalise |
| ue_mousemove | Evenement personnalise |
| ue_mousemouve | Evenement personnalise |
