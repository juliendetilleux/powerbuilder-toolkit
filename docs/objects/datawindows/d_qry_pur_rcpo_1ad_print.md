# d_qry_pur_rcpo_1ad_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         histostock.hsdatim,   
         histostock.hsqty,   
         histostock.hsum,   
         purhead.phsupp,   
         adresses.adname,   
         histostock.hsseq ,
         0,
			items.itstat1,	
			items.itstat2,
			items.itactiv 
    FROM histostock,   
         purhead,   
         purline,   
         items,   
         adresses  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( histostock.hsordno = purline.plcode ) and  
         ( histostock.hsordlin = purline.plline ) and  
         ( items.itcode = purline.plitem ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( ( histostock.hscode = 'RCPO' ) AND  
         ( histostock.hsordtyp = 'P' ) AND  
         ( purhead.phsupp = :ras_adid ) AND  
         ( histostock.hsdatim >= :rdt_start ) AND  
         ( histostock.hsdatim <= :rdt_stop ) ) 
   
Union all 

  Select purgline.plcode,
         purgline.plline,
         choices.chname,
         substr(purgline.pldesc,1,30), 
         histostock.hsdatim,   
         histostock.hsqty,   
         histostock.hsum,   
         purghead.phsupp,   
         adresses.adname,   
         histostock.hsseq,
         0,
			'',
			'',
			'Y'
    From histostock,
         purghead,
         purgline,
         choices,
         adresses
   Where ( purgline.plcode = purghead.phcode ) And  
         ( histostock.hsordno = purgline.plcode ) And  
         ( histostock.hsordlin = purgline.plline ) And
         ( choices.chcode = purghead.phtype ) And  
         ( choices.chtype = 'PMGS' ) And  
         ( adresses.adcode = purghead.phsupp ) And  
         ( ( histostock.hscode = 'RCPO' ) And 
         ( histostock.hsordtyp = 'P' ) And   
         ( purghead.phsupp = :ras_adid ) AND 
         ( histostock.hsdatim >= :rdt_start ) And  
         ( histostock.hsdatim <= :rdt_s
```

## Colonnes
| Colonne |
|---------|
| purline_plcode |
| purline_plline |
| purline_plitem |
| items_itname |
| histostock_hsdatim |
| histostock_hsqty |
| histostock_hsum |
| purhead_phsupp |
| adresses_adname |
| histostock_hsseq |
| cf_mfg |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |

