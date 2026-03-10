# ds_adresrate

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: adresrate

## SQL
```sql
  SELECT adresrate.arcode,   
         adresrate.arstartdat,   
         adresrate.arstopdat,   
         adresrate.arrateid  
    FROM adresrate,   
         adresses   
   WHERE adresrate.arcode = adresses.adcode  
     AND adresses.adsalesman like :as_adsalesman   
     AND adresses.adcust = 'Y'   
     AND adresrate.arstopdat > :adt_lastsync   
 



```

## Colonnes
| Colonne |
|---------|
| adresrate_arcode |
| adresrate_arstartdat |
| adresrate_arstopdat |
| adresrate_arrateid |

