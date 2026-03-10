# ds_ifinvoicehead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         invoicehead.ihcust,   
         invoicehead.ihdate,   
         invoicehead.ihcurr,   
         invoicehead.ihtvaref,   
         invoicehead.ihpaymnt,   
         invoicehead.ihstatus,   
         invoicehead.ihprint,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcomment,   
         invoicehead.ihtypinv,   
         invoicehead.ihexpiry,   
         invoicehead.ihcptper,   
         invoicehead.ihtyptva,   
         invoicehead.ihcurconv,   
         invoicehead.ihcptexer,   
         invoicehead.ihrist,   
         invoicehead.ihesct,   
         invoicehead.ihfacnot,   
         invoicehead.ihristval,   
         invoicehead.ihesctval,   
         invoicehead.ihpaymode,   
         invoicehead.ihpaid,   
         invoicehead.ihpaydate,   
         invoicehead.ihpaidamount,   
         invoicehead.ihexpedi,
			invoicehead.ihmccode 
    FROM invoicehead   
	WHERE invoicehead.ihcust = :ihcust AND 
	(	SELECT count(*) 
		FROM invoiceline 
		WHERE ihcode = ilcode AND 
				invoiceline.iltype < 'X' And /*HA2171*/
					isnull(iltransfered, 'N') <> 'Y' ) > 0 


```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihcust |
| ihdate |
| ihcurr |
| ihtvaref |
| ihpaymnt |
| ihstatus |
| ihprint |
| ihsalval |
| ihtvaval |
| ihtotval |
| ihcomment |
| ihtypinv |
| ihexpiry |
| ihcptper |
| ihtyptva |
| ihcurconv |
| ihcptexer |
| ihrist |
| ihesct |
| ihfacnot |
| ihristval |
| ihesctval |
| ihpaymode |
| ihpaid |
| ihpaydate |
| ihpaidamount |
| ihexpedi |
| ihmccode |

