# zz_invoice_stockunit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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
			Invoiceline.ilitcustnam AS ilitcustnam,
			Invoiceline.iltva AS iltva,
			9999999 AS ilshiporder,
			Invoicehead.ihcust AS ihcust,
         Invoicehead.ihcurr AS ihcurr,
			(select list ( a.shcustref ) from salhead as a where a.shcode in (select distinct b.slsalorder from shipline as b where b.slcode = Invoiceline.ilshiporder )) AS slcustref,
			Items.itname AS itname,
			Items.itdesc2 AS itdesc2,
			(Select Itemlang.ildesc
				From Itemlang
				Where Itemlang.ilitcode = Invoiceline.ilitem
					And Itemlang.illgcode = :as_lang) AS translate,
			(Select lkadref
				From Linkitad
				Where Linkitad.lkactiv = 'Y'
					And Linkitad.lktyp = 'S'
					And Linkitad.lkitem = Invoiceline.ilitem
					And Linkitad.lkadcode = Invoicehead.ihcust) AS lkadref,
			(Select lkadref2
				From Linkitad
				Where Linkitad.lkactiv = 'Y'
					And Linkitad.lktyp = 'S'
					And Linkitad.lkitem = Invoiceline.ilitem
					And Linkitad.lkadcode = Invoicehead.ihcust) AS lkadref2,
			Invoiceline.iltype AS iltyp,
			(Select Shiphead.shshipto From Shiphead Where Shiphead.shcode = Invoiceline.ilshiporder) AS shshipto,
			Invoiceline.ilitcustnam,
			invoiceline.ilcomment,
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
| invoiceline_ilitcustnam |
| invoiceline_iltva |
| invoiceline_ilshiporder |
| invoicehead_ihcust |
| invoicehead_ihcurr |
| salline_slcustref |
| items_itname |
| items_itdesc2 |
| itemlang_translate |
| clkadref |
| clkadref2 |
| invoiceline_iltyp |
| cshshipto |
| invoiceline_ilitcustnam |
| invoiceline_ilcomment |
| citem_comment |
| citemlang_comment |
| invoiceline_ilqty |
| salline_unitprice |
| um |
| invoiceline_umconv |
| txacc |
| txeco |
| invoiceline_ilrist |
| ristourne_tarif |
| invoiceline_orderbaseprice |
| salcmnt |
| invoiceline_rist_glog |

