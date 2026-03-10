# dd_choice_mope

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
   	WHERE ( choiceline.clcode = 'MOPE' ) 
	AND (choiceline.clline >= 0)
	ORDER BY choiceline.clsort ASC

```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clname |

