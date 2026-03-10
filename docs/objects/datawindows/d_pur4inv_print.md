# d_pur4inv_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,
         purhead.phsupp,   
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
         IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			purline.plqtyord
		ELSE
			purline.plqtyreq
		ENDIF /*os1437*/ AS sordered,
         IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN	/*os1437*/
			purline.plqtyrectarif
		ELSE
			(select sum(histostock.hsqty * transactions.trsign)
				from histostock  ,
                 transactions
				where histostock.hsordtyp = 'P'
					and histostock.hsordno = purline.plcode
					and histostock.hsordlin = purline.plline
					and histostock.hsitem = items.itcode
               and histostock.hscode = transactions.trcode 
               and histostock.hscode not in ('RCIO')  
					and date(histostock.hsdatim) <= :adt_date_limite) 
		ENDIF AS received_at,
			ifnull(received_at,0,received_at) AS sreceived,   
         (purline.plqtyinv) AS sinvoiced,   
         ((
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			purline.plqtyrectarif
		ELSE
			purline.plqtyrec
		ENDIF /*os1437*/
		- purline.plqtyinv - qty_ald)* if purline.plpurval = 0 then 0.01 else purline.plpurval endif / 
		IF isnull(items.itisumtarif,'') = 'Y' AND isnu
```

## Colonnes
| Colonne |
|---------|
| purline_plcode |
| purline_plline |
| purhead_phsupp |
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

