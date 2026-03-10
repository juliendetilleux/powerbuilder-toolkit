# d_qry_pur_histo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcurr,
         purhead.phsupp,   
         items.itname,   
         purline.plqtyreq,   
         purline.plqtyrec,   
         purline.pldatreq,   
         purline.plstdval,   
         purhead.phcode,   
         purline.plitem,   
         purline.plpurval,   
         purline.plline,
         0,
         adresses.adname,
         items.itstat1,
         items.itstat2,
         adresses.adgrsupp ,
         '0'  linetype, 
         currencies.cuconv,
			purline.plcmnt ,
		currencies.cucode,
		purline.pluomconv,  
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purhead.phsupp),'##########') as mcdo,
		purhead.phrefint 
    FROM purhead,   
         purline,   
         items,
         adresses, 
         currencies
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( items.itcode = purline.plitem ) and
         ( purhead.phcurr = currencies.cucode ) and
         ( adresses.adcode = purhead.phsupp ) And  
         ( purline.pldatreq >= :alimit ) AND  
         ( purline.pldatreq < :anow )

Union all

  SELECT purghead.phcurr,
         purghead.phsupp,   
         substr(purgline.pldesc,1,30),   
         purgline.plqty,   
         purgline.plqtyrec,
         purgline.pldatreq,   
         purgline.plstdval,   
         purghead.phcode,   
         choices.chname,   
         purgline.plpurval,   
         purgline.plline,
         purgline.plrefnum,
         adresses.adname,
         '',
         '',
         adresses.adgrsupp,
         purghead.phtype, 
         currencies.cuconv,
			purgline.plcmnt  ,
		currencies.cucode ,
		1 ,  
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purghead.phsupp),'##########') as mcdo,
		isnull( string((select first mhcode from mfghead where mhstatus < '9' and mhsalhead = purghead.phcode order by mhcode desc )),'') 
    FROM purghead,   
         purgline,   
         choices,
         a
```

## Colonnes
| Colonne |
|---------|
| purhead_phcurr |
| purhead_phsupp |
| items_itname |
| purline_plqtyreq |
| purline_plqtyrec |
| purline_pldatreq |
| purline_plstdval |
| purhead_phcode |
| purline_plitem |
| purline_plpurval |
| purline_plline |
| c |
| adresses_adname |
| items_itstat1 |
| items_itstat2 |
| adresses_adgrsupp |
| clinetype |
| currencies_cuconv |
| purline_plcmnt |
| currencies_cucode |
| purline_pluomconv |
| mcdo |
| purhead_phrefint |

