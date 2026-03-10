# d_filepur_invoice

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         purinvline.plcode,   
         purinvline.plline,   
         'F' as type,   
         items.itname,   
         purinvline.plqty,   
         items.itum,
			purinvline.plcomment,
			purinvline.plnetval,
			purinvhead.picurr,
			purinvhead.picurconv,
			purinvhead.pirist
    FROM purinvhead,   
         purinvline,   
         adresses,   
         items  
   WHERE ( purinvhead.picode = purinvline.plcode ) and  
         ( purinvhead.pisup = adresses.adcode ) and  
         ( purinvline.plitem = items.itcode ) and 
			( purinvhead.pifacnot = 1 ) and
         ( ( purinvline.plordno = :ran_ordno ) AND  
         ( purinvline.plordlin = :ran_ordlin ) )

UNION all 

  SELECT adresses.adname,   
         purinvline.plcode,   
         purinvline.plline,   
         'N',   
         items.itname,   
         - purinvline.plqty,   
         items.itum,
			purinvline.plcomment,
			- purinvline.plnetval,
			purinvhead.picurr,
			purinvhead.picurconv,
			purinvhead.pirist
    FROM purinvhead,   
         purinvline,   
         adresses,   
         items  
   WHERE ( purinvhead.picode = purinvline.plcode ) and  
         ( purinvhead.pisup = adresses.adcode ) and  
         ( purinvline.plitem = items.itcode ) and 
			( purinvhead.pifacnot = -1 ) and
         ( ( purinvline.plordno = :ran_ordno ) AND  
         ( purinvline.plordlin = :ran_ordlin ) )

UNION all

	SELECT adresses.adname,
			purinvline.plcode,
			purinvline.plline,
			'F',
			purgline.pldesc,
			purinvline.plqty,
			purgline.pluomord,
			purinvline.plcomment,
			purinvline.plnetval,
			purinvhead.picurr,
			purinvhead.picurconv,
			purinvhead.pirist
		FROM purinvhead,
			purinvline,
			adresses,
			purgline,
			purghead
		WHERE purinvhead.picode = purinvline.plcode and
			purinvhead.pisup = adresses.adcode and
			purinvhead.pifacnot = 1 and
         ( purinvline.plordno = :ran_ordno and
         purinvl
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| purinvline_plcode |
| purinvline_plline |
| ctype |
| items_itname |
| purinvline_plqty |
| items_itum |
| purinvline_plcomment |
| purinvline_plnetval |
| purinvhead_picurr |
| purinvhead_picurconv |
| purinvhead_pirist |

