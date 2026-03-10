# d_rate_modify

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
			items.itratemodval,
			items.itatedaterupd
    FROM items  
   WHERE (items.itsale = 'Y' ) AND ( items.itactiv = 'Y' ) and 
		items.itcode not in ('###########M','###########P','###########R','###########S')
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
| itum |
| itlot |
| itratemodval |
| itatedaterupd |

