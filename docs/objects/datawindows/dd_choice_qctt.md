# dd_choice_qctt

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
      	    ( choices.chtype = 'QCTT' ) 
ORDER BY choices.chsort ASC,   
         choices.chcode ASC   

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chname |
| chsort |

