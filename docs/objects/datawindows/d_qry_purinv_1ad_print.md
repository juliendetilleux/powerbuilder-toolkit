# d_qry_purinv_1ad_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT purinvline.plcode,   
         purinvline.plline,   
         purinvhead.pisup,   
         adresses.adname,   
         purinvline.plitem,   
         items.itname,   
         purinvhead.pidate,   
         purinvline.plqty,   
         ( purinvline.plnetval * purinvhead.pifacnot ) As plnetval,   
         purinvline.plordno,   
         purinvline.plordlin,   
         adresses.adcode,   
         purinvhead.pitypinv,
			items.itstat1,
			items.itstat2,
			items.itactiv
    FROM purinvline,   
         purinvhead,   
         adresses,   
         items  
   WHERE ( purinvhead.picode = purinvline.plcode ) and  
         ( purinvhead.pisup = adresses.adcode ) and  
         ( items.itcode = purinvline.plitem ) and  
         ( ( adresses.adcode = :as_CliFour ) AND  
         ( purinvhead.pidate >= :datestart ) AND  
         ( purinvhead.pidate <= :datestop ) ) And
         ( purinvline.pltype = 'S' )  

Union all 

  SELECT purinvline.plcode,   
         purinvline.plline,   
         purinvhead.pisup,   
         adresses.adname,   
         purinvline.plitem,   
         '',   
         purinvhead.pidate,   
         purinvline.plqty,   
         ( purinvline.plnetval * purinvhead.pifacnot ) As plnetval,   
         purinvline.plordno,   
         purinvline.plordlin,   
         adresses.adcode,   
         purinvhead.pitypinv,
			'',
			'',
			'Y'
    FROM purinvline,   
         purinvhead,   
         adresses
   WHERE ( purinvhead.picode = purinvline.plcode ) and  
         ( purinvhead.pisup = adresses.adcode ) and 
         ( ( adresses.adcode = :as_CliFour ) AND  
         ( purinvhead.pidate >= :datestart ) AND  
         ( purinvhead.pidate <= :datestop ) ) And
         ( purinvline.pltype <> 'S' )  
ORDER BY 1 ASC,   
         2 ASC   

```

## Colonnes
| Colonne |
|---------|
| purinvline_plcode |
| purinvline_plline |
| purinvhead_pisup |
| adresses_adname |
| purinvline_plitem |
| items_itname |
| purinvhead_pidate |
| purinvline_plqty |
| purinvline_plnetval |
| purinvline_plordno |
| purinvline_plordlin |
| adresses_adcode |
| purinvhead_pitypinv |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |

