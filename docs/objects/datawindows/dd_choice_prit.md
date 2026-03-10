# dd_choice_prit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clcode,   
         choiceline.clline,   
         choiceline.clname
   FROM choiceline  
   WHERE ( choiceline.clcode = 'PRIT' ) AND  
		choiceline.clactiv = 'Y' 
 ORDER BY choiceline.clsort ASC
```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clname |

