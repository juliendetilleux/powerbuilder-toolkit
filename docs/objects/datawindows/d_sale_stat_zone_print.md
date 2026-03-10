# d_sale_stat_zone_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clname,    
         sum(invoicehead.ihsalval * invoicehead.ihfacnot / invoicehead.ihcurconv) val  
    FROM adresses,  
	 		choiceline,   
         invoicehead  
   WHERE ( invoicehead.ihcust = adresses.adcode ) and  
         ( adresses.adcustzone = choiceline.clline) and  
         ( invoicehead.ihdate >= :datedebut ) AND  
         ( invoicehead.ihdate <= :datefin )  and
      	( choiceline.clcode = 'ADCZ' )    AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
GROUP BY choiceline.clname 

union all
  SELECT '-',    
         sum(invoicehead.ihsalval * invoicehead.ihfacnot / invoicehead.ihcurconv) val  
    FROM adresses,   
         invoicehead  
   WHERE ( invoicehead.ihcust = adresses.adcode ) and  
         ( adresses.adcustzone is null ) and  
         ( invoicehead.ihdate >= :datedebut ) AND  
         ( invoicehead.ihdate <= :datefin )     AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
GROUP BY 1  
ORDER BY 2 DESC   
```

## Colonnes
| Colonne |
|---------|
| choiceline_clname |
| cval |

