# d_items_commission

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         (select itstat1.imdesc 
				from itstat1 
				where itstat1.imcode = items.itstat1),   
         (select itstat2.isdesc 
				from itstat2 
				where itstat2.iscode = items.itstat1 and 
					itstat2.iscode2 = items.itstat2 ),   
         items.itcode,   
         items.itum,
			isnull(items.itcommission,0) as itcommission  
    FROM items  
   WHERE ( items.itactiv = 'Y' ) AND
			( items.itsale = 'Y' )  
 ORDER BY items.itcode   

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| imdesc |
| isdesc |
| itcode |
| items_itum |
| itcommission |

