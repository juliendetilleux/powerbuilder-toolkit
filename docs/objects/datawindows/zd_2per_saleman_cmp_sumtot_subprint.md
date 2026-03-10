# zd_2per_saleman_cmp_sumtot_subprint

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
from 	  invoiceline, 
	     invoicehead  
where   ( invoiceline.ilcode = invoicehead.ihcode ) and 		 
		  ( invoiceline.iltype in ( 'I','A','C', 'R') ) and  
		  ( invoicehead.ihdate >= :adt_start ) and 
		  ( invoicehead.ihdate <= :adt_stop)  and
		  ( invoicehead.ihdate >= :adt_seuil ) 
group by  invoicehead.ihcurr  

UNION  all 

select sum(clotfinitad.cdqty), 
		 sum(clotfinitad.cdval),
       0,
       0,
		 'EUR'
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
		 (( date(clotfinitad.cdperiod +'01') >= :adt_start  ) and 
		 ( date(clotfinitad.cdperiod +'01') <= :adt_stop ) and
		 ( date(clotfinitad.cdperiod +'01') < :adt_seuil ) ) 

UNION  all 

select  0 ,
        0 ,
		  sum(invoiceline.ilqtycust),
		  sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv),
        invoicehead.ihcurr 
from 	  invoiceline, 
	     invoicehead  
where   ( invoiceline.ilcode = invoicehead.ihcode ) and 		 
		  ( invoiceline.iltype in ( 'I','A','C','R') ) and  
		  ( invoicehead.ihdate >= :adt_oldstart ) and 
		  ( invoicehead.ihdate <= :adt_oldstop)  and
		  ( invoicehead.ihdate >= :adt_seuil )  
group by  invoicehead.ihcurr  
UNION  all 
select 0,
       0,
		 sum(clotfinitad.cdqty), 
		 sum(clotfinitad.cdval),
       'EUR'
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
		 (( date(clotfinitad.cdperiod +'01') >= :adt_oldstart  ) and 
		 ( date(clotfinitad.cdperiod +'01') <= :adt_oldstop ) and
		 ( date(clotfinitad.cdperiod +'01') < :adt_seuil ) ) 

```

## Colonnes
| Colonne |
|---------|
| cqty |
| cval |
| invoiceline_oldqty |
| invoiceline_oldval |
| invoicehead_ihcurr |

