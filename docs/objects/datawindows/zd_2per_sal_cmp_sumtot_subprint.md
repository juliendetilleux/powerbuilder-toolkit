# zd_2per_sal_cmp_sumtot_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT Sum ( invoiceline.ilqty * invoicehead.ihfacnot )                                  As Qty       ,
         Sum ( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv )       As NetVal    ,
         0                                                         As OldQty    ,
         0                                                         As OldNetVal
    FROM invoicehead,   
         invoiceline,
         items
   WHERE ( invoiceline.ilcode =  invoicehead.ihcode ) And 
         ( invoiceline.ilitem =  items.itcode       ) And 
         ( invoicehead.ihdate >= :adt_Start         ) And  
         ( invoicehead.ihdate <= :adt_Stop          ) And 
         ( invoicehead.ihdate > :adt_Seuil ) And
         ( invoiceline.iltype In ( 'I', 'A', 'C', 'D', 'R' )   ) 
union  all 
select clotfinitad.cdqty, 
		 clotfinitad.cdval , 
		 0,
		 0
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
		 ( date(clotfinitad.cdperiod +'01') >= :adt_start  ) and 
		 ( date(clotfinitad.cdperiod +'01') <= :adt_stop ) and
		 ( date(clotfinitad.cdperiod +'01') < :adt_seuil ) 
Union  all 

  SELECT 0,
         0,
         Sum (invoiceline.ilqty * invoicehead.ihfacnot ) ,
         Sum ( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv )                             
    FROM invoicehead,   
         invoiceline,
         items
   WHERE ( invoiceline.ilcode =  invoicehead.ihcode ) And 
         ( invoiceline.ilitem =  items.itcode       ) And 
         ( invoicehead.ihdate >= :adt_OldStart      ) And  
         ( invoicehead.ihdate <= :adt_OldStop       ) And 
         ( invoicehead.ihdate > :adt_Seuil ) And
         ( invoiceline.iltype In ( 'I', 'A', 'C', 'D', 'R' )   ) 
union  all 
select 0,
       0,
       clotfinitad.cdqty, 
		 clotfinitad.cdval 
from 	 clotfinitad 
where  ( clotfinitad.cdtyp = 'S' ) And
		 ( date(clotfinitad.cdperiod +'01') >= :adt_OldStart  ) and 
		 ( date(clotfinitad.cdperiod +'01
```

## Colonnes
| Colonne |
|---------|
| invoiceline_qty |
| invoiceline_netval |
| invoicehead_oldqty |
| invoicehead_oldnetval |

