# dd_country_bymcdo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT distinct country.cocode,   
         country.codesc  
    FROM country, multico, adresses  
   WHERE multico.mccode = adresses.adcode AND
		multico.mcactiv = 'Y' AND
		adresses.adcountrid = country.cocode
ORDER BY country.cocode ASC   

```

## Colonnes
| Colonne |
|---------|
| cocode |
| codesc |

