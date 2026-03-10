# d_crm_choice_civ1

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT choices.chtype,   
         choices.chcode,   
         choices.chactiv,   
         choices.chname,   
         choices.chsort,   
         choices.chaxs,   
         choices.chvali,   
         choices.chvalc  
    FROM choices
	WHERE choices.chtype = 'CIV1'   

```

## Colonnes
| Colonne |
|---------|
| chtype |
| chcode |
| chactiv |
| chname |
| chsort |
| chaxs |
| chvali |
| chvalc |

