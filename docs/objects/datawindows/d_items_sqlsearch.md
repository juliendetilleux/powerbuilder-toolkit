# d_items_sqlsearch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itleadtime,   
         items.itactiv,   
         items.ittyp,   
         items.itsale,
			items.itstat1,
			items.itstat2,
			items.itdesc2,
			items.itcat,
			items.itum,
			items.itlot,   
			items.itmccode ,
         cast(null as integer) as change_color,
		items.itpn,
			items.itsalghost /*HA2594-14490*/
    FROM items  
   WHERE items.itcode not like '###########%'


```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itleadtime |
| itactiv |
| ittyp |
| itsale |
| itstat1 |
| itstat2 |
| itdesc2 |
| itcat |
| itum |
| itlot |
| itmccode |
| change_color |
| itpn |
| itsalghost |

