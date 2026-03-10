# zd_invremind_invlist_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT '1' as MARK , 
		 invoicehead.ihcode , 
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
          WHERE IsNull( allinv.ihpaid, '0') in ( '0', '1' )
            AND allinv.ihexpiry > :ad_date   
            AND allinv.ihcust = :as_cust 
       ) ,0 ) as echoir ,
	invoicehead.ihcodemc 
  FROM invoicehead
 WHERE IsNull( invoicehead.ihpaid, '0') in ( '0', '1' )
   AND invoicehead.ihexpiry <= :ad_date   
   AND invoicehead.ihcust = :as_cust  
order by invoicehead.ihdate


```

## Colonnes
| Colonne |
|---------|
| mark |
| ihcode |
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
| ihcodemc |

