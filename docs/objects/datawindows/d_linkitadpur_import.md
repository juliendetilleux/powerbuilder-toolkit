# d_linkitadpur_import

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT Linkitad.lkitem,
		Linkitad.lkcurr,
		Linkitad.lkadref, 
		Linkitad.lkadref2,
		Linkitad.lkcode,
		Quotes.qominqty,
		Quotes.qoprice,
		Items.itname,
		'N' AS NewQuote,
		Quotes.qoprice AS NewPrice,
		Quotes.qoprice AS NewPricePur
	FROM Linkitad LEFT OUTER JOIN Quotes ON Linkitad.lkcode = Quotes.qocode
			AND Quotes.qominqty = (SELECT min(Q2.Qominqty) FROM Quotes Q2 WHERE Q2.qocode = Quotes.qocode),
		Items
	WHERE Linkitad.lktyp = 'P'
		AND Linkitad.lkadcode = :as_lkadcode
		AND Linkitad.lkcurr = :as_lkcurr
		AND Linkitad.lkactiv = 'Y'
		AND Items.itcode = Linkitad.lkitem
```

## Colonnes
| Colonne |
|---------|
| linkitad_lkitem |
| linkitad_lkcurr |
| linkitad_lkadref |
| linkitad_lkadref2 |
| lkcode |
| quotes_qominqty |
| quotes_qoprice |
| items_itname |
| newquote |
| newprice |
| newpricepur |

