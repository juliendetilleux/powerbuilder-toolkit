# d_clot_sto_family_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
SELECT 
		itstat1.imcode,   
         itstat1.imdesc,   
         itstat2.iscode2,   
         itstat2.isdesc,   
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itconvusr,   
         items.itumusr,   
         items.itstdpur,   
         clotfinit.ciqty,   
         clotfinit.cival  ,
		items.itmccode,
		(select adname from adresses where adcode = isnull (items.itmccode, '##########')) as mcdoname
FROM 
		items,   
         itstat1,   
         itstat2,   
         clotfinit  
WHERE 
		( items.itstat1 = itstat1.imcode ) and  
         ( items.itstat2 = itstat2.iscode2 ) and  
         ( itstat1.imcode = itstat2.iscode ) and  
         ( clotfinit.ciitem = items.itcode ) and  
         ( ( clotfinit.ciperiod = :Sel_period ) AND  
         ( clotfinit.cityp = 'I' ) )   
ORDER BY 
		items.itmccode,
		itstat1.imcode ASC,   
         itstat2.iscode2 ASC,   
         items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itstat1_imcode |
| itstat1_imdesc |
| itstat2_iscode2 |
| itstat2_isdesc |
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

