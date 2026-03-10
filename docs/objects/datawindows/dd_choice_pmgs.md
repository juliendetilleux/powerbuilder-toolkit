# dd_choice_pmgs

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT choices.chcode,   
         choices.chname,   
         choices.chsort  
    FROM choices  
   WHERE ( choices.chactiv = 'Y' ) AND  
         ( choices.chtype = 'PMGS' ) 

Union All

  Select '*',
			'Tous',
			-999 
	 From Dummy 

ORDER BY 3 ASC,   
         1 ASC   

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chname |
| chsort |

