# d_salediscount_item

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
		isnull(itqtydisc,'Y') as itqtydisc,
		items.itstat1,
		items.itstat2
    FROM items
 WHERE items.itactiv = 'Y' AND items.itsale ='Y' and 
     	items.itcode not like '###########%'
 
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itqtydisc |
| itstat1 |
| itstat2 |

