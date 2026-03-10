# d_choices_dlvt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT choices.chname,   
         choices.chactiv,   
         choices.chaxs,   
         choices.chvali,   
         choices.chvalc,   
         choices.chtype,   
         choices.chcode,   
         choices.chsort  
    FROM choices  
   WHERE ( choices.chtype = :Type ) AND  
         ( choices.chcode <> '0' )
         and (choices.chaxs <> 'S')
ORDER BY choices.chsort ASC   

```

## Colonnes
| Colonne |
|---------|
| chname |
| chactiv |
| chaxs |
| chvali |
| chvalc |
| chtype |
| chcode |
| chsort |

