# d_crm_choiceline_aaus

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clcode,   
         choiceline.clline,   
         choiceline.clname,   
         choiceline.clsort,   
         choiceline.clactiv  
    FROM choiceline  
   WHERE choiceline.clcode = 'AAUS'   
ORDER BY choiceline.clsort ASC   

```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clname |
| clsort |
| clactiv |

