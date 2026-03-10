# d_qry_pur_rcpo_print

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
         ( histostock.hsqty * transactions.trsign ) Qty,   
         histostock.hsum,   
         purhead.phsupp,   
         adresses.adname,   
         histostock.hsseq,
         0,
         items.itstat1,
         items.itstat2,
         adresses.adgrsupp, 
			items.itdefaultlot,
			histostock.hslot,
			( Select lots.loexpdat
				 From lots
				Where lots.locode = histostock.hslot ) As LotExpiry ,
			( Select lots.loorgcode
				 From lots
				Where lots.locode = histostock.hslot ) As LotFss ,  
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purhead.phsupp),'##########') as mcdo,
		purhead.phrefint,
		'' as soustrait
    FROM histostock,   
         purhead,   
         purline,   
         items,   
         adresses,
         transactions
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( histostock.hsordno = purline.plcode ) and  
         ( histostock.hsordlin = purline.plline ) and  
         ( histostock.hscode = transactions.trcode ) and  
         ( items.itcode = purline.plitem ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( ( histostock.hscode IN ('RCPO', 'RTPO') ) AND  
         ( histostock.hsordtyp = 'P' ) AND  
         ( histostock.hsdatim >= :rdt_start ) AND  
         ( histostock.hsdatim <= :rdt_stop ) )    
Union all 

  Select purgline.plcode,
         purgline.plline,
         choices.chname,
         substr(purgline.pldesc,1,30), 
         histostock.hsdatim,   
         histostock.hsqty * transactions.trsign,   
         histostock.hsum,   
         purghead.phsupp,   
         adresses.adname,   
         histostock.hsseq,
         0,
         '',
         '',
         adresses.adgrsupp,
			'',
			'',
			Null,
			'',  
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmca
```

## Colonnes
| Colonne |
|---------|
| purline_plcode |
| purline_plline |
| purline_plitem |
| items_itname |
| histostock_hsdatim |
| cqty |
| histostock_hsum |
| purhead_phsupp |
| adresses_adname |
| histostock_hsseq |
| c |
| items_itstat1 |
| items_itstat2 |
| adresses_adgrsupp |
| items_itdefaultlot |
| histostock_hslot |
| lotexpiry |
| lotfss |
| mcdo |
| purhead_phrefint |
| soustrait |

