# dd_choice_cast

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clcode,   
         choiceline.clline,   
         choiceline.clname
		//if choiceline.clline in ( 0, 200, 299, 500, 800, 999) then 1 else 0 endif as blocked 
   FROM choiceline  
   WHERE ( choiceline.clcode = 'CAST' ) AND clactiv='Y'
	ORDER BY choiceline.clsort ASC
```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clname |

