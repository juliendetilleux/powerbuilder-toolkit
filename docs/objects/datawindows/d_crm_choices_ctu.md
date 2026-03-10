# d_crm_choices_ctu

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT choicehead.chcode,   
         choicehead.chname,   
         choicehead.chactiv,   
         choicehead.chtype,   
         choicehead.chaxs,   
         choicehead.chsort  
    FROM choicehead  
   WHERE ( choicehead.chtype = 'C' ) AND  
         ( chcode like 'CTU%' )   
ORDER BY choicehead.chsort ASC   

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chname |
| chactiv |
| chtype |
| chaxs |
| chsort |

