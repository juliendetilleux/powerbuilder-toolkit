# d_qry_pur_rcpo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
 SELECT  'Rec sur achat stock    ' rectype , 
         purline.plcode,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         histostock.hsdatim,   
         ( histostock.hsqty  * transactions.trsign ) Qty,
         histostock.hscode,   
         histostock.hsum,   
         purhead.phsupp,   
         adresses.adname,   
         histostock.hsseq,
         0,
         items.itstat1,
         items.itstat2,
         adresses.adgrsupp,
        /* if (purline.plqtyreq = 0) then 0 else ( purline.plpurval / purline.plqtyreq ) endif as pu_curr,*/
		purline.plstdval as pu_curr,
         purhead.phcurr currency,
			purline.plcmnt,  
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
         ( ( histostock.hscode IN ('RCPO','RTPO')) AND  
         ( histostock.hsordtyp = 'P' ) AND  
         ( histostock.hsdatim >= :rdt_start ) AND  
         ( histostock.hsdatim <= :rdt_stop ) )    
Union all

  Select 'Rec sur achat général', 
         purgline.plcode,
         purgline.plline,
         choices.chname,
         substr(purgline.pldesc,1,30), 
         histostock.hsdatim,   
         histostock.hsqty * transactions.trsign,
         histostock.hscode,      
         histostock.hsum,   
         purghead.phsupp,   
         adresses.adname,   
         histostock.hsseq,
         0,
         '',
         '',
         adresses.adgrsupp, 
    
```

## Colonnes
| Colonne |
|---------|
| crectype |
| purline_plcode |
| purline_plline |
| purline_plitem |
| items_itname |
| histostock_hsdatim |
| cqty |
| histostock_hscode |
| histostock_hsum |
| purhead_phsupp |
| adresses_adname |
| histostock_hsseq |
| c |
| items_itstat1 |
| items_itstat2 |
| adresses_adgrsupp |
| cpu_curr |
| purhead_currency |
| purline_plcmnt |
| mcdo |
| purhead_phrefint |
| soustrait |

