# d_intrastat_details_pur

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcountrid,   
         intrastat.isref,   
         intrastat.isdesc,   
         purinvline.plpurval * purinvhead.pifacnot / purinvhead.picurconv val_ligne,   
         intrastat.istyp,    
         items.itwistat * purinvline.plqty * purinvhead.pifacnot mass_1,   
         items.itweight * purinvline.plqty * purinvhead.pifacnot mass_2,
			purinvline.plcode,
			purinvline.plline,
			adresses.adcode,
			adresses.adname,
			purinvhead.pidate,
			items.itcode,
			items.itname,
			items.itum,
			purinvline.plqty    ,
            isnull( purinvhead.picountryid, adresses.adcountrid) as countryid,
            (select country.cointrastat from country where country.cocode = countryid) as intra
    FROM adresses,   
         items,   
         intrastat,   
         purinvhead,   
         purinvline  
   WHERE ( items.itintrastat = intrastat.iscode ) and  
         ( purinvline.plcode = purinvhead.picode ) and  
         ( purinvhead.pisup = adresses.adcode ) and  
         ( purinvline.plitem = items.itcode ) and  
         ( ( purinvhead.picptper In (:rn_periode) ) AND  
         ( purinvline.pltype = 'S') AND  
         (intra = 'Y' ))  and 
			intrastat.isref = :as_ref and
			countryid = :as_countryid   
ORDER BY purinvline.plcode ASC,   
         purinvline.plline ASC      

```

## Colonnes
| Colonne |
|---------|
| adresses_adcountrid |
| intrastat_isref |
| intrastat_isdesc |
| cval_ligne |
| intrastat_istyp |
| cmass_1 |
| cmass_2 |
| purinvline_plcode |
| purinvline_plline |
| adresses_adcode |
| adresses_adname |
| purinvhead_pidate |
| items_itcode |
| items_itname |
| items_itum |
| purinvline_plqty |
| countryid |
| intra |

