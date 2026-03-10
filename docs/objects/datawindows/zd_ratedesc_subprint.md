# zd_ratedesc_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresrate.arstartdat,   
         adresrate.arstopdat,   
         adresrate.arrateid,   
         ratehead.rhdesc,   
         ratehead.rhcurr
    FROM adresrate,  
         ratehead  
   WHERE ( adresrate.arcode = :ls_cust ) and  
         ( adresrate.arrateid = ratehead.rhcode ) and
         ( ratehead.rhactiv = 'Y' ) AND
			( ratehead.rhtyp = 'T' ) 
ORDER BY  adresrate.arstartdat, adresrate.arrateid   

```

## Colonnes
| Colonne |
|---------|
| adresrate_arstartdat |
| adresrate_arstopdat |
| adresrate_arrateid |
| ratehead_rhdesc |
| ratehead_rhcurr |

