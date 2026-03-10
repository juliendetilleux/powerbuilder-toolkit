# zmod_invoice_mansort2_subprint

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
         Invoiceline.ilorval AS ilorval,
         sum(Invoiceline.ilsalval) AS ilsalval,
			Invoiceline.iltva AS iltva,
			Invoicehead.ihcust AS ihcust,
         Invoicehead.ihcurr AS ihcurr,
			Salline.slcode AS slcode,
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
			Invoiceline.ilitcustnam,
			trim(isnull(invoiceline.ilcomment, '')) as ilcomment,
         string (
				( SELECT comments.cocmnt  
					 FROM comments  
					WHERE ( comments.cotype = 'ICMT' ) AND  
							( comments.cokey = invoiceline.ilitem ) AND  
							( comments.cotab = '1' ) AND  
							( comments.coprinv = 'Y'  )   ) , 
				( SELECT comments.cocmnt  
					 FROM comments  
					WHERE ( comments.cotype = 'ICMT' ) AND  
							( comments.cokey = invoiceline.ilitem ) AND  
							( comments.cotab = '2' ) AND  
							( comments.coprinv = 'Y'  )   ) , 
				( SELECT comments.cocmnt  
					 FROM comments  
					WHERE ( comments.cotype = 'ICMT' ) AND  
							( comments.cokey = invoiceline.ilitem ) AND  
							( comments.cotab = '3' ) AND  
							( comments.coprinv = 'Y'  )   ) , 
				( SELECT comments.coc
```

## Colonnes
| Colonne |
|---------|
| invoiceline_sort_criteria |
| invoiceline_itcode |
| invoiceline_ilqtycust |
| invoiceline_iluomord |
| invoiceline_ilstdval |
| invoiceline_ilorval |
| invoiceline_ilsalval |
| invoiceline_iltva |
| invoicehead_ihcust |
| invoicehead_ihcurr |
| salline_slcode |
| items_itname |
| items_itdesc2 |
| itemlang_translate |
| clkadref |
| clkadref2 |
| invoiceline_ilrist |
| invoiceline_iltyp |
| invoiceline_ilitcustnam |
| invoiceline_ilcomment |
| citem_comment |
| citemlang_comment |
| invoiceline_mansort_criteria |
| invoiceline_ilitem |

