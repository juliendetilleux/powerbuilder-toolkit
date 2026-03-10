# d_invremind_invlist

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
SELECT invoicehead.ihcode , 
       invoicehead.ihcust , 
       invoicehead.ihexpiry , 
       invoicehead.ihtotval * invoicehead.ihfacnot as total ,  
       ISNull( invoicehead.ihpaidamount * invoicehead.ihfacnot, 0) as paid ,  
       invoicehead.ihcurr , 
       isnull(invoicehead.ihremindnb,0) , 
       invoicehead.ihlastremind,
		 invoicehead.ihtypinv,
		 invoicehead.ihcodemc   
  FROM invoicehead
 WHERE IsNull( invoicehead.ihpaid, '0') in ( '0', '1' )
   AND invoicehead.ihexpiry <= :ad_date   
   AND invoicehead.ihcust = :as_cust
order by invoicehead.ihexpiry
```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihcust |
| ihexpiry |
| total |
| paid |
| ihcurr |
| ihremindnb |
| ihlastremind |
| ihtypinv |
| ihcodemc |

