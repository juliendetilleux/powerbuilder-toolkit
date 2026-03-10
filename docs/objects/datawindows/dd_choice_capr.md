# dd_choice_capr

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
   WHERE ( choiceline.clcode = 'CAPR' )
	ORDER BY choiceline.clsort ASC
```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clname |

