# zd_2per_sal_cmp_sum_ad_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT Sum( invoiceline.ilqty * invoicehead.ihfacnot )    As Qty ,    
         Sum( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) As Val ,
         0                           As OldQty , 
         0                           As OldVal 
    FROM invoicehead,   
         invoiceline
   WHERE ( invoiceline.ilcode =  invoicehead.ihcode ) And 
         ( invoicehead.ihcust =  :as_Cust           ) And  
         ( invoicehead.ihdate >= :adt_Start         ) And  
         ( invoicehead.ihdate <= :adt_Stop          ) and    
         ( invoicehead.ihdate > :adt_Seuil          ) 
Union  all 
select sum(clotfinitad.cdqty), 
		 sum(clotfinitad.cdval) , 
		 0, 
       0 
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
       ( clotfinitad.cdadid = :as_Cust ) and 
		 ( date(clotfinitad.cdperiod +'01') >= :adt_start  ) and 
		 ( date(clotfinitad.cdperiod +'01') <= :adt_stop ) and
		 ( date(clotfinitad.cdperiod +'01') < :adt_seuil )   
Union all 

  SELECT 0                           ,    
         0                           ,
         Sum( invoiceline.ilqty * invoicehead.ihfacnot )    , 
         Sum( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) 
    FROM invoicehead,   
         invoiceline
   WHERE ( invoiceline.ilcode =  invoicehead.ihcode ) And 
         ( invoicehead.ihcust =  :as_Cust           ) And  
         ( invoicehead.ihdate >= :adt_OldStart      ) And  
         ( invoicehead.ihdate <= :adt_OldStop       ) and    
         ( invoicehead.ihdate > :adt_Seuil          )  
Union  all 
select 0, 
       0,
       sum(clotfinitad.cdqty), 
		 sum(clotfinitad.cdval) 
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
       ( clotfinitad.cdadid = :as_Cust ) and 
		 ( date(clotfinitad.cdperiod +'01') >= :adt_oldstart  ) and 
		 ( date(clotfinitad.cdperiod +'01') <= :adt_oldstop ) and
		 ( date(clotfinitad.cdperiod +'01') < :adt_seuil )   
```

## Colonnes
| Colonne |
|---------|
| cqty |
| cval |
| invoicehead_oldqty |
| invoicehead_oldval |

