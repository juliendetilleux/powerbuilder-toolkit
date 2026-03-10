# d_item_plu_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
 select 
	items.itcode as code_item,
	items.itname, 
	items.itum, 
    items.itplu as plu_item
    from items 
    where items.itactiv = 'Y' and
				items.itsale = 'Y' and
				isnull(items.itplu, '') <> ''
order by plu_item asc

```

## Colonnes
| Colonne |
|---------|
| code_item |
| itname |
| itum |
| plu_item |

