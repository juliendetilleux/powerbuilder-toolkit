# d_routjal

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
SELECT routjal.rjminqty,
		routjal.rjprice,
		routjal.rjcode,
		routjal.rjcode_item  
	FROM routjal
   WHERE routjal.rjcode = :Selected_code
	AND routjal.rjcode_item = :Selected_code_item
	ORDER BY routjal.rjminqty ASC

```

## Colonnes
| Colonne |
|---------|
| rjminqty |
| rjprice |
| rjcode |
| rjcode_item |

