# d_intrastat_pur

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
SELECT isnull( purinvhead.picountryid, adresses.adcountrid) as countryid,
         intrastat.isref,   
         intrastat.isdesc,   
         sum( purinvline.plpurval * purinvhead.pifacnot / purinvhead.picurconv ) val_ligne,   
         intrastat.istyp,   
         sum( items.itwistat * purinvline.plqty * purinvhead.pifacnot ) mass_1,   
         sum( items.itweight * purinvline.plqty * purinvhead.pifacnot ) mass_2  ,
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
         (intra = 'Y' ))  
GROUP BY countryid,   
         intrastat.isref,   
         intrastat.isdesc,
			intrastat.istyp    
ORDER BY intrastat.isref ASC,   
         countryid ASC   
```

## Colonnes
| Colonne |
|---------|
| countryid |
| intrastat_isref |
| intrastat_isdesc |
| cval_ligne |
| intrastat_istyp |
| cmass_1 |
| cmass_2 |
| intra |

