# zd_2per_saleman_cmp_sumdet_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select  sum(invoiceline.ilqtycust) as qty,
		  sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as val ,
        0 oldqty,
        0 oldval,
		  invoicehead.ihcurr 
from 	  salhead, 		 
	     invoiceline, 
	     invoicehead  
where   ( invoiceline.ilsalorder = salhead.shcode ) and 		 		  
		  ( salhead.shsalesman = :as_salesman   ) and 
		  ( invoiceline.ilcode = invoicehead.ihcode ) and 		 
		  ( invoiceline.iltype in ( 'I','A') ) and  
		  ( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  
group by  invoicehead.ihcurr   
UNION  all 
select  sum(invoiceline.ilqtycust) as qty,
		  sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as val ,
        0 oldqty,
        0 oldval,
		  invoicehead.ihcurr 
from 	  adresses, 		 
	     invoiceline, 
	     invoicehead  
where   ( invoicehead.ihcust = adresses.adcode ) and 		 		  
		  ( adresses.adsalesman = :as_salesman   ) and 
		  ( invoiceline.ilcode = invoicehead.ihcode ) and 		 
		  ( invoiceline.iltype in ( 'I', 'D' ) ) and  
        ( isnull(invoiceline.ilsalorder,0) = 0 ) And
		  ( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  
group by  invoicehead.ihcurr 
UNION  all 
select  sum(invoiceline.ilqtycust) as qty,
		  sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as val ,
        0 oldqty,
        0 oldval,
		  invoicehead.ihcurr 
from 	  adresses, 		 
	     invoiceline, 
	     invoicehead  
where   ( invoicehead.ihcust = adresses.adcode ) and 		 		  
		  ( adresses.adsalesman = :as_salesman   ) and 
		  ( invoiceline.ilcode = invoicehead.ihcode ) and 		 
		  ( invoiceline.iltype in ( 'C', 'R') ) and  
		  ( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  
group by  inv
```

## Colonnes
| Colonne |
|---------|
| cqty |
| cval |
| salhead_oldqty |
| salhead_oldval |
| invoicehead_ihcurr |

