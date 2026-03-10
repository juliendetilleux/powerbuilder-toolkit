# gf_workflow

- **Module**: `_sales_crm` (CRM - Gestion de la relation client)
- **Signature**: `integer gf_workflow(string as_type, integer ai_head, integer ai_line, string as_adcode, string as_user_act_prec, date ad_date, long al_aacode, long al_fileref, long al_fileline)`
- **Description**: Gestion des workflows CRM

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_type` | `string` | Chaine - type |
| `ai_head` | `integer` | Entier - head |
| `ai_line` | `integer` | Entier - line |
| `as_adcode` | `string` | Chaine - adcode |
| `as_user_act_prec` | `string` | Chaine - user act prec |
| `ad_date` | `date` | Date/decimal - date |
| `al_aacode` | `long` | Valeur long - aacode |
| `al_fileref` | `long` | Valeur long - fileref |
| `al_fileline` | `long` | Valeur long - fileline |

## Appele par

- `gf_workflow_launch` (_sales_crm)
- `uo_tab_crm_action_update` (_pad)
- `w_crm_action_invreport_update` (_sales_crm)
- `w_crm_action_update` (_sales_crm)
- `w_quick_timesheet` (_projects)
- `w_quick_timesheet2` (_projects)
- `w_quick_timesheet3` (_projects)
- `w_quick_timesheet4` (_projects)
- `w_quick_timesheet5` (_projects)

## Appelle

- `dberrormsg`
- `gf_workflow_launch`
- `gf_workflow_seqsearch`
- `messagebox`

