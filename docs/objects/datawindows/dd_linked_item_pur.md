# dd_linked_item_pur

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT items.itcode,   
		items.itname
	FROM items, linkitad
	WHERE  items.itactiv = 'Y'
		AND linkitad.lkitem = items.itcode
		AND linkitad.lktyp = 'P'
		AND linkitad.lkadcode = :as_supplier
	ORDER BY items.itcode ASC
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |

