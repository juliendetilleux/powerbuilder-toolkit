# d_qry_pur_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
         ( (purline.plstdval / currencies.cuconv) *  purline.plqtyrec *  purline.pluomconv) as plpurval,   
         purline.plline,
         0,
         adresses.adname,
         items.itstat1,
         items.itstat2,
         adresses.adgrsupp, 
         currencies.cuconv,
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
         ( ( purline.plqtyrec > 0 ) AND  
         ( purline.pldatreq >= :alimit ) AND  
         ( purline.pldatreq < :anow ) ) 

Union  all 

  SELECT purghead.phcurr,
         purghead.phsupp,   
         substr(purgline.pldesc,1,30),   
         purgline.plqty,   
         purgline.plqtyrec,
         purgline.pldatreq,   
         purgline.plstdval,   
         purghead.phcode,   
         choices.chname,   
         ((purgline.plstdval / currencies.cuconv) * purgline.plqtyrec),   
         purgline.plline,
         purgline.plrefnum,
         adresses.adname,
         '',
         '',
         adresses.adgrsupp, 
         currencies.cuconv,
		1,  
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purghead.phsupp),'##########') as mcdo,
		''    
    FROM purghead,   
         purgline,   
         choices,
         adresses, 
         currencies
   WHERE ( purgline.plcode = purghead.phcode ) and
         ( a
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
| currencies_cuconv |
| purline_pluomconv |
| mcdo |
| purhead_phrefint |

