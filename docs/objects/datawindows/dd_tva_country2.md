# dd_tva_country2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  tvalvl.ttcode ,
            tvalvl.ttpos ,
           tvalvl.ttdesc,
		  tvalvl_country.tclvl,
		  tvalvl_country.tccountry ,
		  convert (varchar(25), tvalvl_country.tclvl) + '% - ' + tvalvl.ttdesc as ttlvl2
    FROM tvalvl,
		tvalvl_country
  WHERE tvalvl_country.tccode = tvalvl.ttcode and
			tvalvl_country.tccountry = :as_country
ORDER BY tvalvl.ttpos          ASC  

```

## Colonnes
| Colonne |
|---------|
| ttcode |
| ttpos |
| ttdesc |
| ttlvl |
| tccountry |
| ttlvl2 |

