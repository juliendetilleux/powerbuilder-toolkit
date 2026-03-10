# d_intrastat_pur_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT isnull( purinvhead.picountryid, adresses.adcountrid) as countryid,
         intrastat.isref,   
         intrastat.isdesc,   
         purinvhead.picode,   
         purinvhead.pisup,   
         purinvline.plline,    
         purinvline.plitem,   
         purinvline.plpurval * purinvhead.pifacnot  / purinvhead.picurconv val_ligne  ,   
         intrastat.istyp,   
         items.itweight * purinvline.plqty * purinvhead.pifacnot mass_2,   
         items.itwistat * purinvline.plqty * purinvhead.pifacnot mass_1    
    FROM adresses,   
         items,   
         intrastat,   
         purinvhead,   
         purinvline,   
         country  
   WHERE ( items.itintrastat = intrastat.iscode ) and  
         ( purinvline.plcode = purinvhead.picode ) and  
         ( purinvhead.pisup = adresses.adcode ) and  
         ( purinvline.plitem = items.itcode ) and  
         ( countryid = country.cocode ) and  
         ( purinvhead.picptper In ( :rn_periode) ) AND  
         ( purinvline.pltype = 'S') AND  
         ( country.cointrastat = 'Y' )   
ORDER BY intrastat.isref ASC,   
        		  countryid ASC   

```

## Colonnes
| Colonne |
|---------|
| countryid |
| intrastat_isref |
| intrastat_isdesc |
| purinvhead_picode |
| purinvhead_pisup |
| purinvline_plline |
| purinvline_plitem |
| cval_ligne |
| intrastat_istyp |
| cmass_2 |
| cmass_1 |

