# d_items_sqlselect

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
         cast(null as integer) as change_color,
	items.itlot,
	items.itval
    FROM items  
   where items.itcode not like '###########%'
ORDER BY items.itcode ASC   

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
| change_color |
| itlot |
| itval |

