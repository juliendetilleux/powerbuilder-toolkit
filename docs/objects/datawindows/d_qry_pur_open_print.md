# d_qry_pur_open_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcurr,
         '',   
         items.itname,   
         purline.plqtyreq,   
         purline.plqtyrec,   
         purline.plstdval,   
         purhead.phcode,   
         purline.plitem,   
         ( purline.plstdval * purline.pluomconv * ( purline.plqtyreq  -  purline.plqtyrec ) /  currencies.cuconv) as plpurval,   
         purline.pldatsup, 
         adresses.adname,
         purhead.phsupp,
         items.itstat1,
		items.itstat2,
		items.itactiv,
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
         ( purhead.phsupp = adresses.adcode) And   
         ( ( purline.plstatus < '6' ) )    

Union  all 

  SELECT purghead.phcurr, 
         purghead.phtype,  
         substr(purgline.pldesc,1,30),   
         purgline.plqty,   
         purgline.plqtyrec,  
         purgline.plstdval,   
         purghead.phcode,   
         choices.chname,   
         ( purgline.plstdval * ( purgline.plqty  -  purgline.plqtyrec ) /  currencies.cuconv),   
         purgline.pldatreq, 
         adresses.adname,
         purghead.phsupp,
         '',
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
         ( purghead.phsupp = adresses.adcode) And  
         ( purghead.phcurr = currencies.cuco
```

## Colonnes
| Colonne |
|---------|
| purhead_phcurr |
| pur_typ |
| items_itname |
| purline_plqtyreq |
| purline_plqtyrec |
| purline_plstdval |
| purhead_phcode |
| purline_plitem |
| purline_plpurval |
| purline_pldatsup |
| adresses_adname |
| purhead_phsupp |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| adresses_adgrsupp |
| currencies_cuconv |
| purline_pluomconv |
| mcdo |
| purhead_phrefint |

