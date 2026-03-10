# d_linkitadpur_mass_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT Linkitad.lktyp,
		Linkitad.lkitem,
		Linkitad.lkadcode,
		Items.itname,
		Linkitad.lkadref,
		Linkitad.lkadref2,
		Items.itum,
		Quotes.qoprice AS Quotes_price, 
		Quotes.qominqty AS Quotes_minqty,
		Linkitad.lkum,
		Linkitad.lkcode,
		Linkitad.lkcurr,
		Linkitad.lkwithcertif,
       	Linkitad.lkdatecertif,
       	Linkitad.lknbdaycertif ,
		linkitad.lkctrqtymin
	FROM Linkitad LEFT OUTER JOIN Quotes ON Linkitad.lkcode = Quotes.qocode
			AND Quotes.qominqty = (SELECT Min(Q2.qominqty) FROM Quotes Q2 WHERE Q2.qocode = Linkitad.lkcode),
		Items
	WHERE Linkitad.lkadcode = :as_adcode
		AND Linkitad.lktyp = 'P'
		AND Linkitad.lkactiv = 'Y'
		AND Items.itcode = Linkitad.lkitem
	ORDER BY Linkitad.lkitem
```

## Colonnes
| Colonne |
|---------|
| linkitad_lktyp |
| lkitem |
| linkitad_lkadcode |
| items_itname |
| lkadref |
| lkadref2 |
| items_itum |
| linkitad_quotes_price |
| linkitad_quotes_minqty |
| lkum |
| linkitad_lkcode |
| linkitad_lkcurr |
| lkwithcertif |
| lkdatecertif |
| lknbdaycertif |
| linkitad_lkctrqtymin |

