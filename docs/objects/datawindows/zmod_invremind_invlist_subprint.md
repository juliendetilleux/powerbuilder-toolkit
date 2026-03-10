# zmod_invremind_invlist_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT '1' as MARK , 
		 invoicehead.ihcode , 
		 invoicehead.ihcodemc , 
       invoicehead.ihcust , 
       invoicehead.ihexpiry , 
       invoicehead.ihtotval * invoicehead.ihfacnot as ihtotval ,  
       IsNull( invoicehead.ihpaidamount, 0) * invoicehead.ihfacnot as ihpaidamount,  
       invoicehead.ihcurr , 
       isnull(invoicehead.ihremindnb,0) as remindnb , 
       invoicehead.ihlastremind, 
		 invoicehead.ihdate , 
		 invoicehead.ihtypinv , 
       isnull ( ( SELECT sum(allinv.ihtotval * allinv.ihfacnot) - sum(IsNull( allinv.ihpaidamount, 0) * allinv.ihfacnot)
           FROM invoicehead as allinv
          WHERE allinv.ihpaid in ( '0', '1' )
            AND allinv.ihexpiry > :ad_date   
            AND allinv.ihcust = :as_cust 
       ) ,0 ) as echoir
  FROM invoicehead
 WHERE IsNull( invoicehead.ihpaid, '0') in ( '0', '1' )
   AND invoicehead.ihexpiry <= :ad_date   
   AND invoicehead.ihcust = :as_cust 
   AND if isnull(ihremindnb,0) = 0 then 0 else 1 endif = :nb 


```

## Colonnes
| Colonne |
|---------|
| mark |
| ihcode |
| ihcodemc |
| ihcust |
| ihexpiry |
| ihtotval |
| ihpaidamount |
| ihcurr |
| remindnb |
| ihlastremind |
| ihdate |
| ihtypinv |
| echoir |

