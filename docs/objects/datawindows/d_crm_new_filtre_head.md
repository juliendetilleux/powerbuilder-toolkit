# d_crm_new_filtre_head

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
			'Adresses' as fromtable,
			'P' as operatorchoice
    FROM choicehead  
   WHERE ( choicehead.chactiv = 'Y' ) AND  
         ( choicehead.chtype = 'C' ) AND  
         ( choicehead.chaxs = 'U' )  AND 
	    ( choicehead.chcode not in ('AAUS', 'DGR1', 'DGR2', 'FUNC') )  
ORDER BY choicehead.chname ASC   

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chname |
| chactiv |
| chtype |
| chaxs |
| fromtable |
| operatorchoice |

