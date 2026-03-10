# d_invoicexml_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: Shared_peppol
- **Table principale**: 0

## SQL
```sql
 SELECT adresses_b.adcode,   
         adresses_b.adname,   
         adresses_b.adadr1,   
         adresses_b.adadr2,   
         adresses_b.adzip,   
         adresses_b.adloc,   
         adresses_b.adcountr,   
         invoicehead.ihcode, 
         adresses_a.adcode,  
         adresses_a.adname,   
         adresses_a.adadr1,   
         adresses_a.adadr2,   
         adresses_a.adzip,   
         adresses_a.adloc,   
         adresses_a.adcountr,   
         adresses_a.adcountrid,   
         invoicehead.ihdate,   
         choices.chname,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihexpiry,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         Replace(invoicehead.ihtvaref, ' ', '') as invoicehead_ihtvaref, 
         invoicehead.ihtyptva,
         invoicehead.ihcomment,   
         adresses_b.adtel,   
         adresses_b.adfax,   
         adresses_b.adbank,   
         adresses_b.adcmnt,   
         adresses_b.adreg,   
         Replace(adresses_b.adtva, ' ', '') as adresses_adtva,   
         invoiceline.illine,   
         invoiceline.iltype,   
         invoiceline.ilitem,   
         invoiceline.ilitcustnam,   
         invoiceline.ilqtycust,   
         invoiceline.iluomord,   
         invoiceline.ilsalval,   
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         invoiceline.ilstdval,   
         salline.slcustref,   
         isnull(invoiceline.iltva,6) as iltva,   
         isnull(invoiceline.iltvaval,0) as iltvaval,  
         invoiceline.ilcomment,   
         adresses_b.admail ,  
		invoicehead.ihcodemc, 
		invoicehead.ihtypinv, 
	     invoicehead.ihmccode as mcdo,
         isnull(max(shdate) over (partition by invoicehead.ihcode),invoicehead.ihdate) as max_shipdate,
         r_ih_ih.ihcode as invoicecode,

		isnull((SELECT       
       		   SUM(ilnetval) 
		FROM 
			    invoiceline
		WHER
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| invoicehead_ihcode |
| adresses_adcode |
| invoicehead |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adcountrid |
| invoicehead_ihdate |
| choices_chname |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihexpiry |
| invoicehead_ihtotval |
| invoicehead_ihcurr |
| invoicehead_ihtvaref |
| invoicehead_ihtyptva |
| invoicehead_ihcomment |
| adresses_adtel |
| adresses_adfax |
| adresses_adbank |
| adresses_adcmnt |
| adresses_adreg |
| adresses_adtva |
| invoiceline_illine |
| invoiceline_iltype |
| invoiceline_ilitem |
| invoiceline_ilitcustnam |
| invoiceline_ilqtycust |
| invoiceline_iluomord |
| invoiceline_ilsalval |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| invoiceline_ilstdval |
| salline_slcustref |
| iltva |
| iltvaval |
| invoiceline_ilcomment |
| adresses_admail |
| invoicehead_ihcodemc |
| invoicehead_ihtypinv |
| invoicehead_mcdo |
| max_shipdate |
| r_ih_ih_invoicecode |
| htva_a |
| tva_a |
| htva_b |
| tva_b |
| htva_c |
| tva_c |
| htva_d |
| tva_d |
| ttva |
| thtva |
| ttc |
| invcode |
| schema |
| customizationid |
| profileid |
| invoiceline_ilqty |
| invoiceline_iluomconv |
| qty_unit |
| price_unit |

