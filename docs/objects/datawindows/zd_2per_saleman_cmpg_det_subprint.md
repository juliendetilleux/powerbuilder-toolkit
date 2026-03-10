# zd_2per_saleman_cmpg_det_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select  invoicehead.ihcode ,
        invoiceline.illine,
        invoiceline.ilqtycust,
		  invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv as val,
		  invoicehead.ihcurr,
		  0,
        invoicehead.ihcust,
		  adresses.adname,
        invoiceline.ilitem, 
		  items.itname,
		  invoicehead.ihdate,
        adresses.adcountrid ,
        invoicehead.ihfacnot ,
		invoiceline.iltype
from 	  salhead,
	     invoiceline, 
	     invoicehead, 
		  adresses, 
		  items	
where   ( invoicehead.ihcust = adresses.adcode )  And
		  ( invoiceline.ilitem = items.itcode ) And
		  ( invoiceline.ilsalorder = salhead.shcode ) and 		  
		  ( invoiceline.iltype in ( 'I','A') ) and 
		  ( salhead.shsalesman = :as_salesman   ) and 
		  ( invoiceline.ilcode = invoicehead.ihcode ) and 		  
		  (( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  )      

Union  all      

select  invoicehead.ihcode ,
        invoiceline.illine,
        invoiceline.ilqtycust,
		  invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv as val,
		  invoicehead.ihcurr,
		  0,
        invoicehead.ihcust,
		  adresses.adname,
        invoiceline.ilitem, 
		  items.itname,
		  invoicehead.ihdate,
        adresses.adcountrid ,
        invoicehead.ihfacnot    ,
		invoiceline.iltype
from 	  invoiceline, 
	     invoicehead, 
		  adresses, 
		  items	
where   ( invoicehead.ihcust = adresses.adcode )  And
		  ( invoiceline.ilitem = items.itcode ) And
		  ( isnull(invoiceline.ilsalorder,0) = 0 ) and 		  
		  ( invoiceline.iltype in ( 'I', 'D' , 'C', 'R' ) ) and 
		  ( adresses.adsalesman = :as_salesman   ) and 
		  ( invoiceline.ilcode = invoicehead.ihcode ) and 		  
		  (( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  )       

UNION  all        
	/*chercher dans clotfinit pour h
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoiceline_illine |
| invoiceline_ilqtycust |
| cval |
| invoicehead_ihcurr |
| compute_0006 |
| invoicehead_ihcust |
| adresses_adname |
| invoiceline_ilitem |
| items_itname |
| invoicehead_ihdate |
| adresses_adcountrid |
| invoicehead_ihfacnot |
| invoiceline_iltype |

