# dd_choice_caor

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
   	WHERE ( choiceline.clcode = 'CAOR' ) 
	AND (choiceline.clline >= 0)
	ORDER BY choiceline.clsort ASC

```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clname |

