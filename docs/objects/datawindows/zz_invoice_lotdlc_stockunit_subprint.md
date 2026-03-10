# zz_invoice_lotdlc_stockunit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
	SELECT 10 AS sort_criteria,
			Invoiceline.ilitem AS itcode,
			Sum ( Invoiceline.ilqtycust ) AS ilqtycust,
			Min ( Invoiceline.iluomord ) AS iluomord,   
         Invoiceline.ilstdval AS ilstdval,
         Invoiceline.ilorval AS ilorval,
         Sum ( Invoiceline.ilsalval ) AS ilsalval,
			Min ( Invoiceline.ilitcustnam ) AS ilitcustnam,
			Min ( Invoiceline.iltva ) AS iltva,
			999999 AS ilshiporder,
			null AS ilshipline,
			Min ( Invoicehead.ihcust ) AS ihcust,
         Min ( Invoicehead.ihcurr ) AS ihcurr,
			Min ( Salline.slcustref ) AS slcustref,
			Min ( Salline.slcode ) AS slcode,
			Min ( Salline.slline ) AS slline,
			Min ( Items.itname ) AS itname,
			Min ( Items.itdesc2 ) AS itdesc2,
			(Select Itemlang.ildesc
				From Itemlang
				Where Itemlang.ilitcode = itcode
					And Itemlang.illgcode = :as_lang) AS translate,
			(Select lkadref
				From Linkitad
				Where Linkitad.lkactiv = 'Y'
					And Linkitad.lktyp = 'S'
					And Linkitad.lkitem = itcode
					And Linkitad.lkadcode = ihcust) AS lkadref,
			(Select lkadref2
				From Linkitad
				Where Linkitad.lkactiv = 'Y'
					And Linkitad.lktyp = 'S'
					And Linkitad.lkitem = itcode
					And Linkitad.lkadcode = ihcust) AS lkadref2,
			Invoiceline.ilrist AS ilrist,
			Min ( Invoiceline.iltype ) AS iltyp,
			(Select Shiphead.shshipto From Shiphead Where Shiphead.shcode = ilshiporder) AS shshipto,
			Min ( Invoiceline.ilitcustnam ) ,
			invoiceline.ilcomment,
         string (
				( SELECT comments.cocmnt  
					 FROM comments  
					WHERE ( comments.cotype = 'ICMT' ) AND  
							( comments.cokey = itcode ) AND  
							( comments.cotab = '1' ) AND  
							( comments.coprinv = 'Y'  )   ) , 
				( SELECT comments.cocmnt  
					 FROM comments  
					WHERE ( comments.cotype = 'ICMT' ) AND  
							( comments.cokey = itcode ) AND  
							( comments.cotab = '2' ) AND  
							( comments.coprinv = 'Y'  )   ) , 
				( SELECT comments.cocmnt  
					 FROM comment
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
| compute_0025 |
| invoiceline_ilcomment |
| citem_comment |
| citemlang_comment |
| invoiceline_ilqty |
| salline_unitprice |
| um |
| invoiceline_umconv |
| chdcustref |
| clkusr01 |
| cremref |
| cdateref |
| clkremval |
| citreduit |
| clotexpiry |
| clot |
| items_itdefaultlot |

