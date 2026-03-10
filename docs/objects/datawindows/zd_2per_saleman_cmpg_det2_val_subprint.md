# zd_2per_saleman_cmpg_det2_val_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select  sum(invoiceline.ilqtycust) as ilqtycust,
		  sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as val,
		  invoicehead.ihcurr as ihcurr,
		  invoicehead.ihcust as ihcust,
		  adresses.adname as adname,
        adresses.adcountrid ,
        invoicehead.ihfacnot as ihfacnot ,
		invoiceline.iltype     
from 	  invoiceline, 
	     adresses ,
			invoicehead , 
		  items	
where   ( invoiceline.ilitem = items.itcode ) And
		  ( invoicehead.ihcust = adresses.adcode ) And	  
		  ( isnull(invoiceline.ilsalorder,0) > 0 ) and
		  ( invoiceline.iltype in ( 'I','A','C','R') ) and 
		  ( adresses.adcode = :ls_adcode ) and
		  ( invoiceline.ilcode = invoicehead.ihcode ) and 		  
		  ( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  
group by ihcurr,
			ihcust,
			adname,
			adcountrid,
			ihfacnot ,
			iltype 
          
Union  all      

select  sum(invoiceline.ilqtycust),
		  sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as val,
		  invoicehead.ihcurr,
		  invoicehead.ihcust,
		  adresses.adname,
        adresses.adcountrid ,
        invoicehead.ihfacnot ,
		invoiceline.iltype         
from 	  invoiceline, 
	     adresses ,
		  invoicehead , 
		  items	
where   ( invoiceline.ilitem = items.itcode ) And
		  ( invoicehead.ihcust = adresses.adcode ) and
		  ( isnull(invoiceline.ilsalorder,0) = 0 ) and 		  
		  ( invoiceline.iltype in ( 'I', 'D' ) ) and 
		  ( invoiceline.ilcode = invoicehead.ihcode ) and 	
		  ( adresses.adcode = :ls_adcode ) and	  
		  ( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  
group by ihcurr,
			ihcust,
			adname,
			adcountrid,
			ihfacnot    ,
			iltype     
   
UNION  all        
	/*chercher dans clotfinit pour historique AVANT pmix*/  
select sum(clotfinitad.cdqty), 
		 sum(clotfin
```

## Colonnes
| Colonne |
|---------|
| invoiceline_ilqtycust |
| cval |
| invoicehead_ihcurr |
| invoicehead_ihcust |
| adresses_adname |
| adresses_adcountrid |
| invoicehead_ihfacnot |
| invoiceline_iltype |

