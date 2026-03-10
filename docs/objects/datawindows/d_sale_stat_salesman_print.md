# d_sale_stat_salesman_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql

  SELECT 1,
         salhead.shsalesman,   
         invoiceline.ilnetval * invoicehead.ihfacnot  / invoicehead.ihcurconv salval,
			invoicehead.ihcode,
         invoiceline.illine,
         iltype,
         salesman.smname smname
    FROM invoicehead,   
         invoiceline,   
         salhead,
         salesman  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilsalorder = salhead.shcode )  and
         ( salhead.shsalesman = salesman.smcode    ) and 
         ( invoicehead.ihdate >= :adt_Start ) AND  
         ( invoicehead.ihdate <= :adt_Stop ) and
         ( invoiceline.iltype in ( 'A' ,'I' ) )    AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
UNION all 
  SELECT 1,
         adresses.adsalesman,   
         invoiceline.ilnetval * invoicehead.ihfacnot  / invoicehead.ihcurconv salval,
			invoicehead.ihcode,
         invoiceline.illine,
         iltype,
         salesman.smname smname
    FROM invoicehead,   
         invoiceline,   
         adresses,
         salesman
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoicehead.ihcust = adresses.adcode )  and
         ( adresses.adsalesman = salesman.smcode    ) and 
         ( invoiceline.iltype in ( 'I', 'D' )) and
         ( invoicehead.ihdate >= :adt_Start ) AND  
         ( invoicehead.ihdate <= :adt_Stop ) and
         ( isnull(invoiceline.ilsalorder,0) = 0   )   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
UNION all 
  SELECT 1,
         adresses.adsalesman,   
         invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv,
			invoicehead.ihcode,
         invoiceline.illine,
         iltype,
         salesman.smname smname
    FROM invoicehead,   
         invoiceline,   
         adresses,
         salesman
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoicehead.ihcust = adresses.adcode ) and  
```

## Colonnes
| Colonne |
|---------|
| c |
| salhead_shsalesman |
| csalval |
| invoicehead_ihcode |
| invoiceline_illine |
| invoiceline_iltype |
| salesman_smname |

