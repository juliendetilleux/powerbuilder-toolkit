# dd_choice_flus

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
   WHERE ( choiceline.clcode = 'FLUS' ) AND
		choiceline.clactiv = 'Y' 
	ORDER BY choiceline.clsort ASC
```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clname |

