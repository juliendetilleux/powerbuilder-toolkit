# zd_2per_sal_cmp_adit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihdate,
         invoicehead.ihcode,
         invoiceline.illine,
         invoiceline.ilitem,
         invoiceline.ilqty,    
         invoiceline.ilstdval,
         invoiceline.ilnetval,
         invoicehead.ihcurconv,
         invoicehead.ihcurr,
         invoicehead.ihfacnot
    FROM invoicehead,   
         invoiceline
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = :as_Item ) And
         ( ( invoicehead.ihcust = :as_Cust ) AND  
         ( invoicehead.ihdate >= :adt_Start ) AND  
         ( invoicehead.ihdate <= :adt_Stop ) and
         ( invoicehead.ihdate >= :adt_Seuil ) )
UNION  all 
select date(clotfinitad.cdperiod +'01'), 
       0,
       0,
       clotfinitad.cditem, 
       clotfinitad.cdqty, 
		 clotfinitad.cdval , 
		 clotfinitad.cdval , 
       1, 
       'EUR', 
		 1
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
       ( clotfinitad.cditem = :as_Item ) and 
       ( clotfinitad.cdadid = :as_Cust ) and 
		 ( date(clotfinitad.cdperiod +'01') >= :adt_start  ) and 
		 ( date(clotfinitad.cdperiod +'01') <= :adt_stop ) and
		 ( date(clotfinitad.cdperiod +'01') < :adt_seuil )   
ORDER BY 1 ASC  
  
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihdate |
| invoicehead_ihcode |
| invoiceline_illine |
| invoiceline_ilitem |
| invoiceline_ilqty |
| invoiceline_ilstdval |
| invoiceline_ilnetval |
| invoicehead_ihcurconv |
| invoicehead_ihcurr |
| invoicehead_ihfacnot |

