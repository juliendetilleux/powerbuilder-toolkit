# d_test

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
SELECT distinct items.itcode, 
                items.itname, 
                items.itleadtime, 
                items.itactiv, 
                items.ittyp, 
                items.itsale, 
                items.itstat1, 
                items.itstat2, 
                cast(null as integer) as change_color  
  from items  
WHERE items.itcode not like '###########%'  

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itleadtime |
| itactiv |
| ittyp |
| itsale |
| itstat1 |
| itstat2 |
| change_color |

