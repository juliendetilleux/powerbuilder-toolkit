# d_quotes

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT Quotes.qominqty,
		Quotes.qoprice,
		Quotes.qocode,
		Linkitad.lkcurr,
		Linkitad.lkum  
	FROM Quotes,
		Linkitad
   WHERE Quotes.qocode = Linkitad.lkcode
		AND Quotes.qocode = :Selected_code
		AND Linkitad.lktyp = 'P' 
	ORDER BY quotes.qominqty ASC

```

## Colonnes
| Colonne |
|---------|
| qominqty |
| qoprice |
| quotes_qocode |
| lkcurr |
| lkum |

