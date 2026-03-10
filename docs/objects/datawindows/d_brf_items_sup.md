# d_brf_items_sup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT items.itcode,
        purline.plcode,   
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
         cast(null as integer) as change_color
    FROM items, purline 
     Where purline.plitem = items.itcode
     and plstatus < '6'
	and items.itcode not like '###########%'
ORDER BY items.itcode ASC   
```

## Colonnes
| Colonne |
|---------|
| itcode |
| purline_plcode |
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
| change_color |

