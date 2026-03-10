# d_invonote_head

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         invoicehead.ihcust,   
         invoicehead.ihcurr,   
         invoicehead.ihpaymnt,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcomment,   
         invoicehead.ihtvaref,   
         invoicehead.ihstatus,   
         invoicehead.ihprint,   
         invoicehead.ihdate,   
         invoicehead.ihtypinv,   
         invoicehead.ihexpiry,   
         invoicehead.ihcptper,   
         invoicehead.ihtyptva,   
         invoicehead.ihcurconv,   
         invoicehead.ihcptexer,   
         invoicehead.ihrist,   
         invoicehead.ihesct,   
         invoicehead.ihfacnot,   
         invoicehead.ihpaymode,   
         invoicehead.ihpaid,   
         invoicehead.ihpaidamount,   
         invoicehead.ihexpedi,   
         invoicehead.ihfileref,   
         invoicehead.ihfileline,   
         invoicehead.ihinvattention,   
         invoicehead.ihorderrist,   
         invoicehead.ihstructcom,   
         invoicehead.ihcodemc,   
         invoicehead.ihmccode,   
         invoicehead.ihcreauser,   
         invoicehead.ihcreadate,   
         invoicehead.ihshipto,   
         invoicehead.ihnuminv,
		invoicehead.ihristtnet1,
		invoicehead.ihristtnet2,
		invoicehead.ihristtnet3,
			isnull((select ppvalue from progparam where ppcode = 'NUMINNC'),'') as NUMINNC,
		invoicehead.ihrefedi,
		isnull( ( SELECT isnull( adinvedi, 'N' ) FROM adresses WHERE adcode = invoicehead.ihcust ), 'N' ) as is_invedi
    FROM invoicehead 
   WHERE invoicehead.ihcode = :Selected_invoice

```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihcust |
| ihcurr |
| ihpaymnt |
| ihsalval |
| ihtvaval |
| ihtotval |
| ihcomment |
| ihtvaref |
| ihstatus |
| ihprint |
| ihdate |
| ihtypinv |
| ihexpiry |
| ihcptper |
| ihtyptva |
| ihcurconv |
| ihcptexer |
| ihrist |
| ihesct |
| ihfacnot |
| ihpaymode |
| ihpaid |
| ihpaidamount |
| ihexpedi |
| ihfileref |
| ihfileline |
| ihinvattention |
| ihorderrist |
| ihstructcom |
| ihcodemc |
| ihmccode |
| ihcreauser |
| ihcreadate |
| ihshipto |
| ihnuminv |
| ihristtnet1 |
| ihristtnet2 |
| ihristtnet3 |
| numinnc |
| ihrefedi |
| is_invedi |

