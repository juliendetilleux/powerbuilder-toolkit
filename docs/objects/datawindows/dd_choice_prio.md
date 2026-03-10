# dd_choice_prio

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clcode,   
         choiceline.clline,   
         choiceline.clname,   
         choiceline.clsort,   
         choiceline.clactiv  
    FROM choiceline  
   WHERE choiceline.clcode = 'PRIO'   
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

