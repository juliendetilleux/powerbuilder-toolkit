# d_tracliaval2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         transactions.trname,   
         histostock.hsordno,   
         sum(histostock.hsqty),   
         histostock.hsum,   
         items.itname,   
         histostock.hsitem,   
         histostock.hslot,   
         transactions.triconnum,   
         lots.lolotctrl,   
         histostock.hsordtyp,   
         histostock.hsordlin,
		isnull( (select lostatus from lots where locode = histostock.hslot), '' ) as lostatus
		--isnull( (SELECT stdesc FROM shiphead join shipto on shiphead.shshipto = shipto.stseq and shiphead.shcust = shipto.stcode where shiphead.shcode = histostock.hsord2no),'')  as ad_livraison,     /*PHBO0077*/    
		--isnull((SELECT shiphead.shdate FROM shiphead join shipto on shiphead.shshipto = shipto.stseq and shiphead.shcust = shipto.stcode where shiphead.shcode = histostock.hsord2no),datetime('2099-12-31 23:59:59'))  as dt_livraison, /*PHBO0077*/
		--isnull((SELECT shiphead.shcode FROM shiphead join shipto on shiphead.shshipto = shipto.stseq and shiphead.shcust = shipto.stcode where shiphead.shcode = histostock.hsord2no),'')  as nb_bond_livraison, /*PHBO0077*/
		--isnull((SELECT linkmcad.lkmccode FROM linkmcad join shiphead on linkmcad.lkadcode = shiphead.shcust where shiphead.shcode = histostock.hsord2no),'##########') as mcdo, /*PHBO0077*/
		--isnull((SELECT adresses.adname FROM adresses where adcode = mcdo),' ') as mcdo_name /*PHBO0077*/              
    FROM histostock,   
         items,   
         transactions,   
         lots  
   WHERE ( histostock.hscode = transactions.trcode ) and  
         ( histostock.hsitem = items.itcode ) and  
         ( histostock.hslot = lots.locode ) and  
         ( ( histostock.hscode = 'RCMO' And histostock.hslot <> :ra_lot ) Or 
           ( histostock.hscode = 'RTMO' And histostock.hslot =  :ra_lot And histostock.hsordlin = :ra_ordline ) Or   
			  ( histostock.hscode = 'RNAM' And histostock.hsqty >  0       )    ) AND 
         ( histos
```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| transactions_trname |
| histostock_hsordno |
| totqty |
| histostock_hsum |
| items_itname |
| histostock_hsitem |
| histostock_hslot |
| transactions_triconnum |
| lots_lolotctrl |
| histostock_hsordtyp |
| histostock_hsordlin |
| lostatus |

