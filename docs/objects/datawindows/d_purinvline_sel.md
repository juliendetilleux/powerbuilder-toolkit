# d_purinvline_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purinvline.plcode,   
         purinvline.plline,   
         purinvline.pltype,   
         purinvline.plitem,   
         purinvline.plordno,   
         purinvline.plordlin,   
         purinvline.plqty,   
         purinvline.plpurval,   
         purinvline.pltva,   
         purinvline.pltvaval,   
         purinvline.pltotval,   
         purinvline.plcptpur,   
         purinvline.plcptanal,   
         purinvline.plnetval,   
         purinvline.plbastva,   
         purinvline.plrealtva,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         purinvhead.picode,   
         purinvhead.pidate,   
         purinvhead.piexpiry,   
         purinvhead.pityptva,   
         purinvhead.pipurval,   
         purinvhead.pitvaval,   
         purinvhead.pitvaref,   
         purinvhead.pitotval,   
         purinvhead.picurr,   
         purinvhead.picurconv,   
         items.itname,
			purinvhead.picodemc  
    FROM purinvhead,   
         purinvline,   
         adresses,   
         items  
   WHERE ( purinvhead.picode = purinvline.plcode ) AND  
         ( purinvhead.pisup = adresses.adcode ) AND  
         ( purinvline.plitem = items.itcode ) AND  
         ( purinvhead.picode = :Selected_invoice )    
UNION ALL 
  SELECT purinvline.plcode,   
         purinvline.plline,   
         purinvline.pltype,   
         purinvline.plitem,   
         purinvline.plordno,   
         purinvline.plordlin,   
         purinvline.plqty,   
         purinvline.plpurval,   
         purinvline.pltva,   
         purinvline.pltvaval,   
         purinvline.pltotval,   
         purinvline.plcptpur,   
         purinvline.plcptanal,   
         purinvline.plnetval,   
         purinvline.plbastva,   
         purinvline.plrealtva,   
         adresses.adcode,   
         adresses.adname,   
         adresses.
```

## Colonnes
| Colonne |
|---------|
| purinvline_plcode |
| purinvline_plline |
| purinvline_pltype |
| purinvline_plitem |
| purinvline_plordno |
| purinvline_plordlin |
| purinvline_plqty |
| purinvline_plpurval |
| purinvline_pltva |
| purinvline_pltvaval |
| purinvline_pltotval |
| purinvline_plcptpur |
| purinvline_plcptanal |
| purinvline_plnetval |
| purinvline_plbastva |
| purinvline_plrealtva |
| adresses_adcode |
| adresses_adname |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| purinvhead_picode |
| purinvhead_pidate |
| purinvhead_piexpiry |
| purinvhead_pityptva |
| purinvhead_pipurval |
| purinvhead_pitvaval |
| purinvhead_pitvaref |
| purinvhead_pitotval |
| purinvhead_picurr |
| purinvhead_picurconv |
| items_itname |
| purinvhead_picodemc |

