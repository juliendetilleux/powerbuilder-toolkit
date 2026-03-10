# ds_crm_ct_userfields

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT choicehead.chcode,   
         choicehead.chname,   
         choicehead.chactiv,   
         choicehead.chsort  
    FROM choicehead  
   WHERE choicehead.chcode like 'CTU%'   
ORDER BY choicehead.chsort ASC   

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chname |
| chactiv |
| chsort |

