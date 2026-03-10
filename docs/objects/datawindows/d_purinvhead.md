# d_purinvhead

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
         adresses.adtva,   
         purinvhead.pirist,   
         purinvhead.piesct,   
         purinvhead.pimccode,   
         purinvhead.picodemc  ,
	isnull (purinvhead.picountryid,     adresses.adcountrid)
    FROM purinvhead,   
         adresses  
   WHERE ( purinvhead.pisup = adresses.adcode ) and  
         ( ( purinvhead.pistatus >= :Min_status ) AND  
         ( purinvhead.pistatus <= :Max_status ) )   
ORDER BY purinvhead.picode DESC   

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
| adresses_adtva |
| purinvhead_pirist |
| purinvhead_piesct |
| pimccode |
| picodemc |
| compute_0015 |

