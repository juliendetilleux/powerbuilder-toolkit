# zd_invoice_m1_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
	SELECT 10 AS sort_criteria,
			Invoiceline.ilitem AS itcode,
			Invoiceline.ilqtycust AS ilqtycust,
			Invoiceline.iluomord AS iluomord,   
         Invoiceline.ilstdval AS ilstdval,
         Invoiceline.ilsalval AS ilsalval,
			Invoiceline.ilitcustnam AS ilitcustnam,
			Invoiceline.iltva AS iltva,
			9999999 AS ilshiporder,
			null AS ilshipline,
			Invoicehead.ihcust AS ihcust,
         Invoicehead.ihcurr AS ihcurr,
			Salline.slcustref AS slcustref,
			Salline.slcode AS slcode,
			Salline.slline AS slline,
			Items.itname AS itname,
			Items.itdesc2 AS itdesc2,
			(Select Itemlang.ildesc
				From Itemlang
				Where Itemlang.ilitcode = Invoiceline.ilitem
					And Itemlang.illgcode = :as_lang) AS translate,
			(Select lkadref
				From yv_linkitad
				Where yv_linkitad.lkactiv = 'Y'
					And yv_linkitad.lktyp = 'S'
					And yv_linkitad.lkitem = Invoiceline.ilitem
					And yv_linkitad.lkadcode = Invoicehead.ihcust) AS lkadref,
			(Select lkadref2
				From yv_linkitad
				Where yv_linkitad.lkactiv = 'Y'
					And yv_linkitad.lktyp = 'S'
					And yv_linkitad.lkitem = Invoiceline.ilitem
					And yv_linkitad.lkadcode = Invoicehead.ihcust) AS lkadref2,
			Invoiceline.ilrist AS ilrist,
			Invoiceline.iltype AS iltyp,
			(Select Shiphead.shshipto From Shiphead Where Shiphead.shcode = Invoiceline.ilshiporder) AS shshipto
		FROM Invoiceline,
			Invoicehead,
			Salline,
			Items
		WHERE Invoicehead.ihcode = :an_invoice
			AND Invoicehead.ihcode = Invoiceline.ilcode
			AND Invoiceline.iltype = 'A'
			AND Salline.slline = Invoiceline.ilsalline
			AND Salline.slcode = Invoiceline.ilsalorder
			AND Invoiceline.ilitem = Items.itcode

 UNION ALL 

	SELECT 20,
			Invoiceline.ilitem,
			Invoiceline.ilqtycust,
			Invoiceline.iluomord,   
         Invoiceline.ilstdval,
         Invoiceline.ilsalval,
			Invoiceline.ilitcustnam,
			Invoiceline.iltva,
			9999999,
			null,
			Invoicehead.ihcust,
         Invoicehead.ihcurr,
			nul
```

## Colonnes
| Colonne |
|---------|
| invoiceline_sort_criteria |
| invoiceline_itcode |
| invoiceline_ilqtycust |
| invoiceline_iluomord |
| invoiceline_ilstdval |
| invoiceline_ilsalval |
| invoiceline_ilitcustnam |
| invoiceline_iltva |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| invoicehead_ihcust |
| invoicehead_ihcurr |
| salline_slcustref |
| salline_slcode |
| salline_slline |
| items_itname |
| items_itdesc2 |
| itemlang_translate |
| clkadref |
| clkadref2 |
| invoiceline_ilrist |
| invoiceline_iltyp |
| cshshipto |

