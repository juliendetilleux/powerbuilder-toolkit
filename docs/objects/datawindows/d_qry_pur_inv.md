# d_qry_pur_inv

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT purinvline.plcode,   
         purinvline.plline,   
         purinvhead.pisup,   
         adresses.adname,   
         purinvline.plitem,   
         items.itname  As  ItemDesc,   
         purinvhead.pidate,   
         purinvline.plqty,   
         purinvline.plnetval,   
         purinvline.plordno,   
         purinvline.plordlin,   
         adresses.adcode,   
         purinvhead.pifacnot,   
         purinvhead.pitypinv,
         items.itstat1,  
         items.itstat2,
         adresses.adgrsupp,
         purinvhead.picurconv,
		purinvhead.picodemc,
		isnull(purinvhead.pimccode, '##########') as pimccode 
    FROM purinvline,   
         purinvhead,   
         adresses,   
         items  
   WHERE ( purinvhead.picode = purinvline.plcode ) and  
         ( purinvhead.pisup = adresses.adcode ) and  
         ( items.itcode = purinvline.plitem ) and  
         ( ( purinvhead.pidate >= :rdt_Start ) AND  
         ( purinvhead.pidate <= :rdt_Stop ) ) And
         ( purinvline.pltype = 'S' )  and 
            not exists( select * from purghead where purghead.phcode = purinvline.plordno)

UNION ALL

  SELECT purinvline.plcode,   
         purinvline.plline,   
         purinvhead.pisup,   
         adresses.adname,   
         purinvline.plitem,   
         ( Select purgline.pldesc 
				 From purgline
				Where purgline.plcode = purinvline.plordno 	And
						purgline.plline = purinvline.plordlin		  ),   
         purinvhead.pidate,   
         purinvline.plqty,   
         purinvline.plnetval,   
         purinvline.plordno,   
         purinvline.plordlin,   
         adresses.adcode,   
         purinvhead.pifacnot,   
         purinvhead.pitypinv, 
         '',  
         '',
         adresses.adgrsupp, 
         purinvhead.picurconv,
		purinvhead.picodemc,
		isnull(purinvhead.pimccode, '##########') as pimccode 
    FROM purinvline,   
         purinvhead,
         purghead,   
         ad
```

## Colonnes
| Colonne |
|---------|
| purinvline_plcode |
| purinvline_plline |
| purinvhead_pisup |
| adresses_adname |
| purinvline_plitem |
| items_itemdesc |
| purinvhead_pidate |
| purinvline_plqty |
| purinvline_plnetval |
| purinvline_plordno |
| purinvline_plordlin |
| adresses_adcode |
| purinvhead_pifacnot |
| purinvhead_pitypinv |
| items_itstat1 |
| items_itstat2 |
| adresses_adgrsupp |
| purinvhead_picurconv |
| picodemc |
| pimccode |

