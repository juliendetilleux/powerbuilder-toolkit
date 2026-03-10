# d_items_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itleadtime,   
         items.itcat,   
         items.ittyp,
		items.itum  ,
		items.itean
    FROM items  
   WHERE ( items.itactiv = 'Y' )   
     AND ( items.ittyp like :Selected_typ )   
     AND ( items.itsale like :Selected_sale )   
     AND ( items.itcons like :Selected_cons )   
     AND ( items.itlot like :Selected_lot )   
     AND ( items.itqc like :Selected_QC )   
     AND ( items.itcode not like '###########%' )   
	  AND	( items.itcat like :Selected_cat )   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itleadtime |
| itcat |
| ittyp |
| itum |
| itean |

