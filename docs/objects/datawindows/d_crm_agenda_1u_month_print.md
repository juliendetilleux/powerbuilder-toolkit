# d_crm_agenda_1u_month_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT today() as cldate, 
         1 as clwork, 
         ( select distinct usname from users where uscode = :user_code ) usernamed 
    FROM dummy 
  
```

## Colonnes
| Colonne |
|---------|
| cldate |
| clwork |
| usernamed |

