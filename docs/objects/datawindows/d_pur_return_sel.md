# d_pur_return_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  Select purhead.phcode,   
         purhead.phsupp,   
         adresses.adname,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         purline.pldatsup,   
         purline.plqtyreq,   
         purline.plqtyrec,   
         items.itum,
			'#' flag,
         0 ordernum,
         items.ittyp,
         purline.plrcio,
         purhead.phfileref,
         purhead.phfileline, 
         purline.plshipto,
			purline.pladref as lkadref,
			purline.pldatrec 
    From purhead,   
         purline,   
         adresses,   
         items  
   Where ( purline.plcode         = purhead.phcode                     ) And  
         ( adresses.adcode        = purhead.phsupp                     ) And  
         ( items.itcode           = purline.plitem                     ) And  
			( purline.plqtyrec       > 0                                  ) And
			( purline.pldatrec Between :radt_StartDate And :radt_StopDate )   

Union 	All     

  Select purghead.phcode,   
         purghead.phsupp,   
         adresses.adname,   
         purgline.plline,   
         chname,   
         substr(pldesc,1,30),   
         purgline.pldatreq,   
         purgline.plqty,   
         purgline.plqtyrec,   
         '  ',
         purghead.phtype,
         purgline.plrefnum,
         ' ',
         purgline.plrcio,
         purghead.phfileref,
         purghead.phfileline, 
         purgline.plshipto,
			'',
			purgline.pldatrec 
    From adresses,   
         purgline,   
         purghead,   
         choices  
   Where ( purghead.phsupp         = adresses.adcode                    ) And  
         ( purgline.plcode         = purghead.phcode                    ) And  
			( purgline.plqtyrec       > 0                                  ) And
         ( choices.chcode          = purghead.phtype                    ) And  
         ( choices.chtype          = 'PMGS'                             ) And
			( pur
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
| purline_plqtyrec |
| items_itum |
| flag |
| ordernum |
| items_ittyp |
| purline_plrcio |
| purhead_phfileref |
| purhead_phfileline |
| purline_plshipto |
| clkadref |
| purline_pldatrec |

