# ds_statistics

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT 11 seq,
         'Historical records' description,
         parameters.pmival number ,
         '' string  
    FROM parameters  
   WHERE parameters.pmcode = 'LASTHIST'   
UNION all 
  SELECT 21 ,
         'Inv Purchase orders' ,
         count(phcode) ,
         '' 
    FROM purhead 
   WHERE phdatcrea between :start_dat and :stop_dat 
UNION all 
  SELECT 22 ,
         'Inv Purchase lines' ,
         count(plline) ,
         '' 
    FROM purline, purhead  
   WHERE purhead.phcode = purline.plcode and
         plstatus < '9' and
         phdatcrea  between :start_dat and :stop_dat 
UNION all 
  SELECT 31 ,
         'Gnrl Purchase orders' ,
         count(phcode) ,
         '' 
    FROM purghead 
   WHERE phdatcrea  between :start_dat and :stop_dat 
UNION all 
  SELECT 32 ,
         'Gnrl Purchase lines' ,
         count(plline) ,
         '' 
    FROM purgline , purghead 
   WHERE purghead.phcode = purgline.plcode and
         plstatus < '9' and
         phdatcrea  between :start_dat and :stop_dat 
UNION  all 
  SELECT 35 ,
         'Purchase invoices' ,
         count(picode) ,
         '' 
    FROM purinvhead 
   WHERE pidate  between :start_dat and :stop_dat   
UNION all 
  SELECT 36 ,
         'Purchase invoice lines' ,
         count(plcode) ,
         '' 
    FROM purinvhead, purinvline 
   WHERE purinvhead.picode = purinvline.plcode and
         pidate  between :start_dat and :stop_dat   
UNION  all 
  SELECT 41 ,
         'Manufacturing orders' ,
         count(mhcode) ,
         '' 
    FROM mfghead 
   WHERE mhstatus < '9' and
         mhreldat  between :start_dat and :stop_dat 
UNION all 
  SELECT 51 ,
         'Sales orders' ,
         count(shcode) ,
         '' 
    FROM salhead 
   WHERE shstatus < '9' and
         shdatcrea  between :start_dat and :stop_dat 
UNION all 
  SELECT 52 ,
         'Sales orders lines' ,
         count(slcode) ,
         '' 
    FROM salline
```

## Colonnes
| Colonne |
|---------|
| seq |
| description |
| number |
| string |

