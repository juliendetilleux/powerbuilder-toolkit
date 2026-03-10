# d_factoring_eurofactor_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT country.coiso3,  
         country.codesc,   
         sum(invoicehead.ihtotval) as sumihtotval,
	    count(*) as nb  
    FROM adresses,   
         country,   
         invoicehead  
  WHERE invoicehead.ihcust = adresses.adcode AND
	    	country.cocode = adresses.adcountrid AND
		invoicehead.ihcode in (:al_ihcode)   
GROUP BY country.coiso3,     
         country.codesc 

```

## Colonnes
| Colonne |
|---------|
| country_coiso3 |
| country_codesc |
| sumihtotval |
| nb |

