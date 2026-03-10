# d_sale_stat_country_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT country.cocode,   
         country.codesc,   
         sum(invoicehead.ihsalval * invoicehead.ihfacnot / invoicehead.ihcurconv) val  
    FROM adresses,   
         country,   
         invoicehead  
   WHERE ( invoicehead.ihcust = adresses.adcode ) and  
         ( adresses.adcountrid = country.cocode ) and  
         ( ( invoicehead.ihdate >= :datedebut ) AND  
         ( invoicehead.ihdate <= :datefin ) )     AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
GROUP BY country.cocode,   
         country.codesc  
ORDER BY val DESC   

```

## Colonnes
| Colonne |
|---------|
| country_cocode |
| country_codesc |
| cval |

