# d_pur_rcpt_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,   
         purhead.phsupp,   
         adresses.adname,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         purline.pldatsup,   
         purline.plqtyreq,   
         purline.plqtyreq - purline.plqtyrec solde,   
         items.itum,
			'#' flag,
         0 ordernum,
         items.ittyp,
         purline.plrcio,
         purhead.phfileref,
         purhead.phfileline, 
         purline.plshipto,
		purline.pladref as lkadref,
		items.itmccode,
		purhead.phrefint
    FROM purhead,   
         purline,   
         adresses,   
         items  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( items.itcode = purline.plitem ) and  
         ( ( purline.plstatus < '6' ) ) and  
			( ( purhead.phstatus < '6' ) ) and
			( isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') <> 'Y' OR isnull(purhead.phaut,'') = 'A' ) 
UNION  all 
SELECT purghead.phcode,   
         purghead.phsupp,   
         adresses.adname,   
         purgline.plline,   
         chname,   
         substr(pldesc,1,30),   
         purgline.pldatreq,   
         purgline.plqty,   
         purgline.plqty - purgline.plqtyrec,   
         '  ',
         purghead.phtype,
         purgline.plrefnum,
         ' ',
         purgline.plrcio,
         purghead.phfileref,
         purghead.phfileline, 
         purgline.plshipto,
			'',
		'',
		''
    FROM adresses,   
         purgline,   
         purghead,   
         choices  
   WHERE ( purghead.phsupp = adresses.adcode ) and  
         ( purgline.plcode = purghead.phcode ) and  
         ( choices.chcode = purghead.phtype )  and  
         ( (purgline.plstatus < '6') )   and  
         ( ( choices.chtype = 'PMGS') ) and  
			( ( purghead.phstatus < '6' ) ) and
			( isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') <> 'Y' OR isnul
```

## Colonnes
| Colonne |
|---------|
| phcode |
| purhead_phsupp |
| adresses_adname |
| plline |
| plitem |
| items_itname |
| purline_pldatsup |
| purline_plqtyreq |
| solde |
| items_itum |
| flag |
| ordernum |
| items_ittyp |
| purline_plrcio |
| purhead_phfileref |
| purhead_phfileline |
| purline_plshipto |
| clkadref |
| items_itmccode |
| purhead_phrefint |

