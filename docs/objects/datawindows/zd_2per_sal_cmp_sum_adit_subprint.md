# zd_2per_sal_cmp_sum_adit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT Sum( invoiceline.ilqty * invoicehead.ihfacnot )    As Qty ,    
         Sum( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) As Val ,
         0                           As OldQty , 
         0                           As OldVal,
         min(invoicehead.ihcode) diff 
    FROM invoicehead,   
         invoiceline
   WHERE ( invoiceline.ilcode =  invoicehead.ihcode ) And 
         ( invoiceline.ilitem =  :as_Item           ) And  
         ( invoicehead.ihcust =  :as_Cust           ) And  
         ( invoicehead.ihdate >= :adt_Start         ) And  
         ( invoicehead.ihdate <= :adt_Stop          )  AND
         ( invoicehead.ihdate > :adt_Seuil          )   
UNION  all 
select clotfinitad.cdqty, 
		 clotfinitad.cdval , 
		 0, 
       0 ,
       convert(integer, clotfinitad.cdperiod)
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
       ( clotfinitad.cditem = :as_Item ) and 
       ( clotfinitad.cdadid = :as_Cust ) and 
		 ( date(clotfinitad.cdperiod +'01') >= :adt_start  ) and 
		 ( date(clotfinitad.cdperiod +'01') <= :adt_stop ) and
		 ( date(clotfinitad.cdperiod +'01') < :adt_seuil )   

Union all 

  SELECT 0                           ,    
         0                           ,
         Sum( invoiceline.ilqty * invoicehead.ihfacnot )    , 
         Sum( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) ,
         min(invoicehead.ihcode)
    FROM invoicehead,   
         invoiceline
   WHERE ( invoiceline.ilcode =  invoicehead.ihcode ) And 
         ( invoiceline.ilitem =  :as_Item           ) And  
         ( invoicehead.ihcust =  :as_Cust           ) And  
         ( invoicehead.ihdate >= :adt_OldStart      ) And  
         ( invoicehead.ihdate <= :adt_OldStop       )  and 
         ( invoicehead.ihdate > :adt_Seuil          )   

UNION  all 
select 0, 
       0,
       clotfinitad.cdqty, 
		 clotfinitad.cdval ,
       convert(integer, clotfinita
```

## Colonnes
| Colonne |
|---------|
| cqty |
| cval |
| invoicehead_oldqty |
| invoicehead_oldval |
| cdiff |

