# d_invoice_mod15_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode, 
         invoicehead.ihcust, 
         invoicehead.ihdate, 
         invoicehead.ihtvaref,
			invoicehead.ihtyptva,
         invoicehead.ihtypinv,
         invoicehead.ihexpiry,
			invoicehead.ihcomment,
			invoicehead.ihinvattention,
			adresses.adphysical,  
			invoicehead.ihcodemc,  
			invoicehead.ihmccode as mcdo ,
		isnull(adresses.adfour,'') as adfour    ,
		isnull((select first truckline.tlcode
				 from truckline, invoiceline
			 where truckline.tlsalhead = invoiceline.ilsalorder and
				truckline.tlsalline = invoiceline.ilsalline and
				invoiceline.ilcode = invoicehead.ihcode),0)  as tlcode ,
		isnull((select first truckref.trdesc
				 from truckhead, truckline, invoiceline, truckref
			 where truckline.tlsalhead = invoiceline.ilsalorder and
				truckline.tlsalline = invoiceline.ilsalline and
				invoiceline.ilcode = invoicehead.ihcode and
				truckhead.thcode = truckline.tlcode and
				truckref.trtyp = truckhead.thtyp), '')  as truckref ,
		isnull((select first turnhead.thdesc
				 from truckline, invoiceline, turnhead, truckturn
			 where truckline.tlsalhead = invoiceline.ilsalorder and
				truckline.tlsalline = invoiceline.ilsalline and
				invoiceline.ilcode = invoicehead.ihcode and
				truckturn.tttruck = truckline.tlcode and
				truckturn.ttturncode = turnhead.thid ),'')  as turnhead, 
		isnull((select count(distinct invoiceline.ilshiporder) 
				   from invoiceline 
				where invoiceline.ilcode = invoicehead.ihcode),0) as nbne, 
		isnull((select first invoiceline.ilshiporder 
				   from invoiceline 
				where invoiceline.ilcode = invoicehead.ihcode),0) as shiporder,
		adresses.adautoitpack, 
		( Select parameters.pmcval From parameters Where parameters.pmcode = 'LASTHCON' ) As Consignement  ,
		(select 
				 list (chname) 
			from 
				 choices 
			where 
				 chactiv = 'Y' and chcode <> '0'
			and 
				 chtype = 'DLVT' 
			and 
				 chcode in (
					  select 
							
```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihcust |
| ihdate |
| ihtvaref |
| ihtyptva |
| ihtypinv |
| ihexpiry |
| ihcomment |
| ihinvattention |
| adresses_adphysical |
| invoicehead_ihcodemc |
| cmcdo |
| adfour |
| tlcode |
| truckref |
| turnhead |
| nbne |
| shiporder |
| adresses_adautoitpack |
| consignement |
| incoterm |
| incotermloc |

