# zmod_invoice_byfile_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
	SELECT 10 AS sort_criteria,
			Invoiceline.ilitem AS itcode,
			sum(Invoiceline.ilqtycust) AS ilqtycust,
			Invoiceline.iluomord AS iluomord,   
         Invoiceline.ilstdval AS ilstdval,
         sum(Invoiceline.ilsalval) AS ilsalval,
			Invoiceline.ilitcustnam AS ilitcustnam,
			Invoiceline.iltva AS iltva,
			Invoicehead.ihcust AS ihcust,
         Invoicehead.ihcurr AS ihcurr,
			Salline.slcustref AS slcustref,
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
			Invoiceline.iltype AS iltyp,
			Invoiceline.ilfileref as fileref,
			Invoiceline.ilfileline as fileline,
			(Select fhdesc from filehead where filehead.fhcode = Invoiceline.ilfileref),
			Invoiceline.ilitcustnam ,
         invoiceline.ilcomment
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
	GROUP BY sort_criteria,
			itcode,
			iluomord,
			ilstdval,
			ilorval,
			ilitcustnam,
			iltva,
			ihcust,
         ihcurr,
			slcustref,
			itname,
			itdesc2,
			translate,
			lkadref,
			lkadref2,
			iltyp,
			fileref,
			fileline,
			20,
			ilitcustnam,
			ilcomment 
 
 UNION ALL 

	SELECT 20,
	
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
| invoicehead_ihcust |
| invoicehead_ihcurr |
| salline_slcustref |
| items_itname |
| items_itdesc2 |
| itemlang_translate |
| clkadref |
| clkadref2 |
| invoiceline_iltyp |
| cfileref |
| cfileline |
| cfhdesc |
| invoiceline_ilitcustnam |
| invoiceline_ilcomment |

