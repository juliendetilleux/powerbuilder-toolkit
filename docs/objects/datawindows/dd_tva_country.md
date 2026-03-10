# dd_tva_country

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
			convert (varchar(25), tvalvl_country.tclvl) + ' %' + ' ' +tvalvl_country.tccountry as ttlvl2
    FROM tvalvl,
		tvalvl_country
  WHERE tvalvl_country.tccode = tvalvl.ttcode 
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

