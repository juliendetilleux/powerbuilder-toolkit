# d_itemstock_ajst_itemcons

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itstock,   
         items.italloc,   
         items.itum,   
         items.itlot,   
         items.itcat,   
         items.itstat1,   
         items.itstat2,   
         items.itstdpur  
    FROM items  
   WHERE ( items.itactiv = 'Y' ) AND  
         ( items.itcat <> 'K' ) AND  
         ( items.ittyp <> 'F' ) AND  
         ( items.itcode not like '###########%' )   AND
		EXISTS (  select *
					   from packings 
					where packings.pkactiv = 'Y' and
						packings.pkitemout = items.itcode)  
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itstock |
| italloc |
| itum |
| itlot |
| itcat |
| itstat1 |
| itstat2 |
| itstdpur |

