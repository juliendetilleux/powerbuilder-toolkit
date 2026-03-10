# dd_choice_func

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
   WHERE choiceline.clcode = 'FUNC'   
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

