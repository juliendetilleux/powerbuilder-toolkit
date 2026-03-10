# d_pur4inv_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,
         purhead.phsupp, 
		(Select  adresses.adname from adresses where adresses.adcode = purhead.phsupp) as supplier,
         purline.pldatreq,   
         purline.plpurval,
			(select sum(histostock.hsqty * transactions.trsign)
				from histostock  ,
                 transactions
				where histostock.hsordtyp = 'P'
					and histostock.hsordno = purline.plcode
					and histostock.hsordlin = purline.plline
               and histostock.hscode = transactions.trcode 
               and histostock.hscode not in ('RCIO')  
					and date(histostock.hsdatim) > :adt_date_limite) AS qty_after_limit,
			ifnull(qty_after_limit,0,qty_after_limit) AS qty_ald,
         purline.plqtyreq AS sordered,
         (select sum(histostock.hsqty * transactions.trsign)
				from histostock  ,
                 transactions
				where histostock.hsordtyp = 'P'
					and histostock.hsordno = purline.plcode
					and histostock.hsordlin = purline.plline
					and histostock.hsitem = items.itcode
               and histostock.hscode = transactions.trcode 
               and histostock.hscode not in ('RCIO')  
					and date(histostock.hsdatim) <= :adt_date_limite) AS received_at,
			ifnull(received_at,0,received_at) AS sreceived,   
         (purline.plqtyinv) AS sinvoiced,   
         ((purline.plqtyrec - purline.plqtyinv - qty_ald)* if purline.plpurval = 0 then 0.01 else purline.plpurval endif / purline.plqtyreq) AS solde2binv,    
         (purline.plqtyrec - purline.plqtyinv - qty_ald) AS qty2binv,   
         (purline.plitem + ', ' + items.itname) item ,
         items.itum,
			(purline.plqtyrec) AS qtyreceived, 
			0 As MfgId ,
			'PUR' As HistoLink
    FROM purline,
         purhead,   
         items 
   WHERE ( items.itcode = purline.plitem ) and 
         ( purline.plcode = purhead.phcode) and
			( qtyreceived <> sinvoiced) and 
         ( isnull(purline.plinvclot, 'N') <> 'Y') and  
         (
```

## Colonnes
| Colonne |
|---------|
| purline_plcode |
| purline_plline |
| purhead_phsupp |
| supplier |
| purline_pldatreq |
| purline_plpurval |
| cqty_after_limit |
| cqty_ald |
| sordered |
| creceived_at |
| csreceived |
| csinvoiced |
| csolde2binv |
| cqty2binv |
| citem |
| items_itum |
| cqtyreceived |
| purline_mfgid |
| chistolink |

