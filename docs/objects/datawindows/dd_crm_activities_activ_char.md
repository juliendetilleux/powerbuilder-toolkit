# dd_crm_activities_activ_char

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT CAST(activities.accode as char(30)) as accode,   
         activities.acdesc as ~
```

## Colonnes
| Colonne |
|---------|
| accode |
| desc |
| acsort |
| aacode_num |

