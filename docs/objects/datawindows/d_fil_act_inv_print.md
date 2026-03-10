# d_fil_act_inv_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhcode,

			filehead.fhdesc,

			isnull(( SELECT sum(salline.slsalval / currencies.cuconv)
					FROM salhead,			salline,		currencies
					WHERE salline.slcode = salhead.shcode
						AND currencies.cucode = salhead.shcurr
						AND salline.slfileref = filehead.fhcode 
						AND salline.slstatus < '9' ), 0) as Forecasted_sale ,


			isnull((select sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv)
				 from invoiceline, invoicehead, salline 
				 where invoicehead.ihcode = invoiceline.ilcode and
						 invoiceline.ilsalorder = salline.slcode and
						 invoiceline.ilsalline = salline.slline  and
						 salline.slfileref = filehead.fhcode ), 0 )    
			+  
			isnull((select sum(invoiceline.ilnetval * invoicehead.ihfacnot  / invoicehead.ihcurconv)
				FROM invoicehead, invoiceline 
				WHERE invoicehead.ihcode = invoiceline.ilcode
					AND invoiceline.ilfileref = filehead.fhcode
					AND invoiceline.iltype NOT IN('A','I','Y','Z')
					AND invoicehead.ihfacnot = 1
					AND invoiceline.ilsalorder = 0 ), 0 )  

			+
			 isnull((select sum( invoiceline.ilnetval * invoicehead.ihfacnot  / invoicehead.ihcurconv)
				FROM invoicehead, invoiceline
				WHERE invoicehead.ihcode = invoiceline.ilcode
					AND invoiceline.ilfileref = filehead.fhcode
					AND invoicehead.ihfacnot = -1
					AND ((invoiceline.iltype NOT IN ('A','I','Y','Z')) OR (invoiceline.iltype = 'I' AND invoiceline.ilsalorder = 0 ) ) ), 0 )

           as Invoiced_sale ,



			isnull((SELECT sum(hsval) as mhmreal
							 FROM histostock 
							WHERE ( histostock.hsordtyp = 'F' ) and 
									( histostock.hscode = 'DLFO' ) and  
									( histostock.hsordno = filehead.fhcode ) ),0)
			+

						isnull((SELECT sum((select sum (purinvline.plnetval / purinvhead.picurconv * purinvhead.pifacnot) 
											from purinvline, purinvhead
											 where purinvhead.picode = purinvline.plcode and
													 purinvline.plordno = purl
```

## Colonnes
| Colonne |
|---------|
| filehead_fhcode |
| filehead_fhdesc |
| cforecasted_sale |
| cinvoiced_sale |
| crealcost |
| crea_date |
| start_date |
| expectstart_date |
| expectend_date |
| lastmod_date |
| respid |
| respname |
| project_status_code |
| project_status |
| custcode |
| custname |
| ffcode |
| ffdesc |

