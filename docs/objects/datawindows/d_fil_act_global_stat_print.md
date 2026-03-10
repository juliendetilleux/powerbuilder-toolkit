# d_fil_act_global_stat_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
 SELECT  sum(adrsactions.aatiming)
    FROM adrsactions
   WHERE ( adrsactions.aaactiondate between :start_date and :end_date ) and  
         ( adrsactions.aatiming <> 0 )  

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |

