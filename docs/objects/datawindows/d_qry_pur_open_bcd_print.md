# d_qry_pur_open_bcd_print

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
         purline.plpurval,   
         purline.pldatsup, 
         adresses.adname,
         purhead.phsupp,
         items.itstat1,
			items.itstat2,
			items.itactiv,
         adresses.adgrsupp, 
         currencies.cuconv   
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
         purgline.plpurval,   
         purgline.pldatreq, 
         adresses.adname,
         purghead.phsupp,
         '',
			'',
			'',
         adresses.adgrsupp, 
         currencies.cuconv   
    FROM purghead,   
         purgline,   
         choices,
         adresses, 
         currencies   
   WHERE ( purgline.plcode = purghead.phcode ) and
         ( purghead.phsupp = adresses.adcode) And  
         ( purghead.phcurr = currencies.cucode ) and
         ( choices.chcode = purghead.phtype ) And  
         ( choices.chtype = 'PMGS' ) and  
         ( ( purgline.plstatus < '6' ) ) 
Order By 7
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

