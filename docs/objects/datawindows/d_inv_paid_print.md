# d_inv_paid_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         invoicehead.ihcust,   
         adresses.adname,   
         invoicehead.ihcurr,   
         invoicehead.ihdate,   
         invoicehead.ihpaymnt,   
         invoicehead.ihsalval,   
         invoicehead.ihtypinv,   
         invoicehead.ihcptper,   
         invoicehead.ihprint,   
         invoicehead.ihstatus,   
         IsNull( invoicehead.ihpaid, '0') As InvPaid,   
         invoicehead.ihpaidamount,   
         adresses.adcreditctrl,   
         invoicehead.ihtotval,   
         invoicehead.ihexpiry ,
			invoicehead.ihfacnot ,
			invoicehead.ihcurconv ,
			invoicehead.ihcodemc ,
//aa007
isnull((select first invoiceline.ilsalval
				from invoiceline
				where invoiceline.ilcode = invoicehead.ihcode and
					invoiceline.iltype = 'Z'),0) as esc ,
			( Select parameters.pmcval
				 From parameters
				Where parameters.pmcode = 'SYSCURR' ) As SysCurr,
			ihcodemc,
			ihmccode,
            (select list( choiceline.clname) 
					from histocash, choiceline
						 where histocash.hhpaytyp = choiceline.clline and 
								  choiceline.clcode = 'CPTY' AND
								  histocash.hhordno = invoicehead.ihcode AND
								  histocash.hhordtyp = 'I' and
								histocash.hhval > 0 ) as paymode2
    FROM adresses,   
         invoicehead  
   WHERE ( adresses.adcode = invoicehead.ihcust ) and  
         (
         ( invoicehead.ihexpiry between :adt_DateStart AND :adt_DateStop ) or 
         ( invoicehead.ihpaid < '2' AND invoicehead.ihexpiry <= :adt_DateStop  )
         )   
   ORDER BY invoicehead.ihcode   
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihcust |
| adresses_adname |
| invoicehead_ihcurr |
| invoicehead_ihdate |
| invoicehead_ihpaymnt |
| invoicehead_ihsalval |
| invoicehead_ihtypinv |
| invoicehead_ihcptper |
| invoicehead_ihprint |
| invoicehead_ihstatus |
| invpaid |
| invoicehead_ihpaidamount |
| adresses_adcreditctrl |
| invoicehead_ihtotval |
| invoicehead_ihexpiry |
| invoicehead_ihfacnot |
| invoicehead_ihcurconv |
| invoicehead_ihcodemc |
| esc |
| syscurr |
| invoicehead_ihcodemc |
| invoicehead_ihmccode |
| paymode2 |

