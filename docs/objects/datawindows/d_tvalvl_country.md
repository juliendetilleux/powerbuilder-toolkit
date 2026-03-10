# d_tvalvl_country

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT tvalvl.ttcode,   
         tvalvl.ttdesc,   
         tvalvl_country.tclvl,   
         tvalvl_country.tccode,   
         tvalvl_country.tccountry,   
         country.codesc,
  		tvalvl_country.tcprestalvl
    FROM tvalvl,   
         tvalvl_country,   
         country  
   WHERE ( country.cocode = tvalvl_country.tccountry )   AND
		tvalvl.ttcode = tvalvl_country.tccode 
ORDER BY  tvalvl_country.tccountry, 
		tvalvl.ttpos ASC,   
         tvalvl.ttcode ASC      


```

## Colonnes
| Colonne |
|---------|
| ttcode |
| ttdesc |
| tclvl |
| tvalvl_country_tccode |
| tvalvl_country_tccountry |
| country_codesc |
| tvalvl_country_tcprestalvl |

