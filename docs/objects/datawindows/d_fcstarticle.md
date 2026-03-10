# d_fcstarticle

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT items.itcode,   
         items.itname,   
         fcstline.flsold,   
         fcstline.flid  
    FROM items,   
         fcstline  
   WHERE ( items.itcode = fcstline.flitem ) and  
         ( ( items.itsale = 'Y' ) AND  
         ( items.itactiv = 'Y' ) AND  
		( ( items.ittyp in ('P', 'M' )  and  items.itsubstpl <> 'Y' ) or ( items.ittyp = 'V' ) )  and 
         ( fcstline.flid = :asec ) )    

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| fcstline_flsold |
| fcstline_flid |

