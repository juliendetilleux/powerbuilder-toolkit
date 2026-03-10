# d_items_to_trustbox

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itactiv,   
         items.ittyp,   
         items.itcons,   
         items.itsale,   
         items.itum,   
         items.itcat,   
         items.itowner,   
         items.itlot,   
         items.itqc,   
         items.itdesc2,   
         items.itisumtarif,   
         items.itmccode,   
         items.itstat1,   
         items.itstat2  
    FROM items  
   WHERE items.itcode not like '###########%'  AND
	items.itactiv = 'Y' AND 
	items.itsale = 'Y' 
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itactiv |
| ittyp |
| itcons |
| itsale |
| itum |
| itcat |
| itowner |
| itlot |
| itqc |
| itdesc2 |
| itisumtarif |
| itmccode |
| itstat1 |
| itstat2 |

