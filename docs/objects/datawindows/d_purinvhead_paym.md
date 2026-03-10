# d_purinvhead_paym

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purinvhead.picode,   
         purinvhead.pidate,   
         adresses.adname,   
         purinvhead.pisupref,   
         purinvhead.pitypinv,   
         purinvhead.picurr,   
         purinvhead.pisup,   
         purinvhead.pityptva,   
         purinvhead.picptper,   
         purinvhead.pipaym,   
         purinvhead.pipaymdat,   
         purinvhead.pitotval,   
         purinvhead.piexpiry,
		purinvhead.picodemc,
		purinvhead.pipurval
    FROM purinvhead,   
         adresses
   WHERE ( purinvhead.pisup = adresses.adcode ) and  
         ( ( purinvhead.picptexer <= string(YEAR(:Sel_dat)) ) OR  
         ( purinvhead.pipaym <> 'Y' ) )   
ORDER BY purinvhead.picodemc DESC   

```

## Colonnes
| Colonne |
|---------|
| picode |
| pidate |
| adresses_adname |
| purinvhead_pisupref |
| purinvhead_pitypinv |
| purinvhead_picurr |
| purinvhead_pisup |
| purinvhead_pityptva |
| purinvhead_picptper |
| purinvhead_pipaym |
| purinvhead_pipaymdat |
| purinvhead_pitotval |
| purinvhead_piexpiry |
| purinvhead_picodemc |
| purinvhead_pipurval |

