# d_clot_sto_item_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
SELECT 
		items.itcode,   
         items.itname,   
         items.itum,   
         items.itconvusr,   
         items.itumusr,   
         items.itstdpur,   
         clotfinit.ciqty,   
         clotfinit.cival,
		items.itmccode,
		(select adname from adresses where adcode = isnull (items.itmccode, '##########')) as mcdoname
FROM 
		items,   
		clotfinit  
WHERE 
		( clotfinit.ciitem = items.itcode ) and  
         ( ( clotfinit.ciperiod = :Sel_period ) AND  
         ( clotfinit.cityp = 'I' ) AND  
         ( clotfinit.ciqty <> 0 ) )   
ORDER BY 
		itmccode, items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| items_itconvusr |
| items_itumusr |
| items_itstdpur |
| clotfinit_ciqty |
| clotfinit_cival |
| items_itmccode |
| mcdoname |

