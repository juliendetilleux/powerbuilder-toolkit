# nvo_advsched_graph

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _planning
- **Description**: Objet du module Planning

## Variables d'instance

| Variable | Type |
|----------|------|
| il_weight | long |
| is_error | string |
| is_color_timemachine | string |
| is_color_timemachine_overflow | string |
| is_color_timemachine_forc | string |
| is_color_timemachine_delay | string |
| is_color_timenoavailable | string |
| il_x | long |
| id_marge | decimal |
| id_perc_nonworkingday | decimal |
| cur_interupt | Declare |
| is_sqlstatement | string |
| inst_day_interval | nst_day_interval[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_insert_interrupt(long al_nb_col, datetime adt_datestart, datawindow adw_graph) : boolean | Public | Fonction utilisateur publique |
| uof_insert_machinetime(long al_nb_col, long ai_schednum, datetime adt_datestart, datawindow adw_graph) : boolean | Public | Fonction utilisateur publique |
| uof_insert_machinefordate(long al_col, long al_row, long ai_schednum, ...) : boolean | Public | Fonction utilisateur publique |
| uof_reset_machine_date(long al_col, long al_row, datawindow adw_graph) : boolean | Public | Fonction utilisateur publique |
| uof_days_limite(long al_nb_col, datetime adt_datestart) : boolean | Public | Fonction utilisateur publique |
| uof_fix(long al_col, long al_row, datawindow adw_graph) : boolean | Public | Fonction utilisateur publique |
| uof_find_of(long al_of, long al_lines[], datawindow adw_graph) : boolean | Public | Fonction utilisateur publique |
| uof_insert_header_hour(long al_nb_col, datawindow adw_graph) : boolean | Public | Fonction utilisateur publique |
| uof_create_dw(datetime adt_start, datetime adt_stop, integer ai_schednumber, datawindow adw_graph) : boolean | Public | Fonction utilisateur publique |
| uof_insert_line_day(long al_nbcol, datetime adt_datestart, datawindow adw_dw) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
