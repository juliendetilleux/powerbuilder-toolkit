# ds_proforma_det_word

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT Profoline.plcode,
		Profoline.plline,
		Profoline.plitem,
		Profoline.plitcustnam,
		Profoline.plqty,
		Profoline.plqtycust,
		Profoline.pluomconv,
		Profoline.plstdval,
		Profoline.plsalval,
		Profoline.pltva,
		Profoline.pltvaval,
		Profoline.pltotval,
		Profoline.pluomord,
		Profoline.plcomment,
		Profoline.pldlvt,
		Profoline.pldlvtplace,
		Profoline.plnetval,
		Profoline.plorval,
		Profoline.plrist,
		Profoline.plbastva,
		Profoline.plrealtva,
		Profoline.pltype,
		Profoline.plsalorder,
		Profoline.plsalline,
		Profoline.plshiporder,
		Profoline.plshipline,
		Profohead.phcurr,
		Items.itname AS itname,
		Items.itdesc2 AS itdesc2,
		Items.itdefaultlot AS itdefaultlot,
		(SELECT yv_linkitad.lkadref
			FROm yv_linkitad
			WHERE yv_linkitad.lktyp = 'S'
				AND yv_linkitad.lkitem = Items.itcode
				AND yv_linkitad.lkadcode = Profohead.phcust
				AND yv_linkitad.lkactiv  = 'Y') AS Lkadref,
		(SELECT yv_linkitad.lkadref2
			FROm yv_linkitad
			WHERE yv_linkitad.lktyp    = 'S'
				AND yv_linkitad.lkitem   = Items.itcode
				AND yv_linkitad.lkadcode = Profohead.phcust
				AND yv_linkitad.lkactiv  = 'Y') AS Lkadref2,
		(SELECT Itemlang.ildesc
			FROM Itemlang
			WHERE Itemlang.ilitcode = Profoline.plitem
				AND Itemlang.illgcode = :as_Lang) AS Translate,
		(SELECT Choices.chname
			FROM Choices
			WHERE Choices.chtype = 'DLVT'
				AND Choices.chcode = Profoline.pldlvt) AS Incotermes
	FROM Profohead,
		Profoline LEFT OUTER JOIN Items ON Profoline.plitem = Items.itcode
	WHERE Profohead.phcode = :an_profohead
		AND Profohead.phcode = Profoline.plcode
	ORDER BY Profoline.pltype,
		Profoline.plline
```

## Colonnes
| Colonne |
|---------|
| plcode |
| plline |
| plitem |
| plitcustnam |
| plqty |
| plqtycust |
| pluomconv |
| plstdval |
| plsalval |
| pltva |
| pltvaval |
| pltotval |
| pluomord |
| plcomment |
| pldlvt |
| pldlvtplace |
| plnetval |
| plorval |
| plrist |
| plbastva |
| plrealtva |
| pltype |
| plsalorder |
| plsalline |
| plshiporder |
| plshipline |
| phcurr |
| itname |
| itdesc2 |
| itdefaultlot |
| lkadref |
| lkadref2 |
| translate |
| incotermes |

