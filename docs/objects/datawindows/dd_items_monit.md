# dd_items_monit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  	SELECT itcode, itname
   	FROM items
   	WHERE itismonit = 'Y'
	ORDER BY itcode ASC

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |

