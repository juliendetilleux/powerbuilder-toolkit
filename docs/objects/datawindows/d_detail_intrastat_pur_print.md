# d_detail_intrastat_pur_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT purinvhead.pitypinv,   
         purinvhead.picode,   
         purinvhead.pisup,   
         adresses.adname,   
         purinvline.plline,   
         purinvline.plitem,   
         items.itname,   
         purinvline.plqty,   
         purinvhead.picurconv,   
         purinvhead.picptper,   
         items.itintrastat,    
         intrastat.isref,   
         purinvline.plpurval,   
         adresses.adcountrid,   
         purinvhead.pifacnot,   
         items.itwistat  
    FROM {oj adresses  LEFT OUTER JOIN country  ON adresses.adcountrid = country.cocode},   
         items,   
         intrastat,   
         purinvhead,   
         purinvline   
   WHERE ( intrastat.iscode = items.itintrastat ) and  
			( purinvline.plcode = purinvhead.picode ) and   
         ( purinvhead.pisup = adresses.adcode ) and  
         ( items.itcode = purinvline.plitem ) and   
         ( purinvhead.picptper IN ( :Periode ) ) AND 
         ( purinvline.pltype = 'S') AND   
         ( country.cointrastat = 'Y' )  

```

## Colonnes
| Colonne |
|---------|
| purinvhead_pitypinv |
| purinvhead_picode |
| purinvhead_pisup |
| adresses_adname |
| purinvline_plline |
| purinvline_plitem |
| items_itname |
| purinvline_plqty |
| purinvhead_picurconv |
| purinvhead_picptper |
| items_itintrastat |
| intrastat_isref |
| purinvline_plpurval |
| adresses_adcountrid |
| purinvhead_pifacnot |
| items_itwistat |

