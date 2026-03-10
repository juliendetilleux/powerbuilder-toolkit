# d_stat_inv

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihdate,   
         invoicehead.ihcode,   
         adresses.adname,   
         invoicehead.ihcurr,   
         invoicehead.ihexpiry,   
         invoicehead.ihtypinv,   
         invoicehead.ihsalval * invoicehead.ihfacnot / invoicehead.ihcurconv localval,   
         invoicehead.ihcust,   
         adresses.adgrcust,   
         invoicehead.ihcodemc,  
         invoicehead.ihmccode as mcdo,
			adresses.adsalesman   
    FROM invoicehead,   
         adresses  
   WHERE ( invoicehead.ihcust = adresses.adcode ) and  
         ( ( invoicehead.ihdate >= :Sel_start ) AND  
         ( invoicehead.ihdate <= :Sel_end ) )   
ORDER BY invoicehead.ihcode ASC   

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihdate |
| invoicehead_ihcode |
| adresses_adname |
| invoicehead_ihcurr |
| invoicehead_ihexpiry |
| invoicehead_ihtypinv |
| clocalval |
| invoicehead_ihcust |
| adresses_adgrcust |
| invoicehead_ihcodemc |
| cmcdo |
| salesman |

