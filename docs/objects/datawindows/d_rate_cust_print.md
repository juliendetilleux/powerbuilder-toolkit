# d_rate_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT '1', 
		adresses.adcode,
         adresses.adname,   
         adresrate.arstartdat,   
         adresrate.arstopdat,   
         adresrate.arrateid,   
         ratehead.rhdesc,   
         ratehead.rhcurr,
		adresses.adristcust,
		adresses.adristrate 
    FROM adresrate,   
         adresses,   
         ratehead  
   WHERE ( adresrate.arcode = adresses.adcode ) and  
         ( adresrate.arrateid = ratehead.rhcode ) and  
         ( adresses.adactiv = 'Y' ) and
         ( adresses.adcust = 'Y' ) and
			( ratehead.rhtyp <> 'M' ) 


UNION ALL
  SELECT '2', 
		adresses.adcode,
         adresses.adname,   
         null,   
         null,   
         0,   
         'Pas de tarif',   
         '',
		adresses.adristcust,
		adresses.adristrate 
    FROM adresses  
   WHERE ( adresses.adactiv = 'Y' ) and
         ( adresses.adcust = 'Y' ) and
         ( select count(adresrate.arcode) from adresrate where adresrate.arcode = adresses.adcode) = 0


UNION ALL
  SELECT '3',
		'-',
         'Pas de client',   
         null,   
         null,   
         ratehead.rhcode,   
         ratehead.rhdesc,   
         ratehead.rhcurr,
		null,
		0 
    FROM ratehead  
   WHERE ( ratehead.rhtyp <> 'M' ) and
         ( select count(adresrate.arcode) from adresrate where adresrate.arrateid = ratehead.rhcode) = 0

ORDER BY 1, 7, 3   

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| adresses_adcode |
| adresses_adname |
| adresrate_arstartdat |
| adresrate_arstopdat |
| adresrate_arrateid |
| ratehead_rhdesc |
| ratehead_rhcurr |
| adresses_adristcust |
| adresses_adristrate |

