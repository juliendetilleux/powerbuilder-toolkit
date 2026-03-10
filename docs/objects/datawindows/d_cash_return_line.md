# d_cash_return_line

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT tickethead.thcode,   
         tickethead.thcash,   
         tickethead.thdate,   
         tickethead.thuser,   
         ticketline.tlitem,   
         ticketline.tlqty,   
         ticketline.tlstdval,   
         ticketline.tltotval,   
         items.itdirsaldesc,
			items.itname,
			adresses.adname As AdName , 
			adresses.adtva As TvaNum ,
			adresses.adtel As AdTel   ,
		( select cocmnt from comments where cotype = 'CMSP'  and cokey = 'XX' and coline = 0 and cotab = 6 ) as cmnt,
			isnull(ticketline.tlcurrconv2, 0) as tlcurrconv2,
			isnull((select pmcval from parameters where pmcode = 'SYSCURR'), '') as SYSCURR,
			isnull((select pmcval from parameters where pmcode = 'SYSCURR2'), '') as SYSCURR2,
		ticketline.tlline,
		cast(0 as numeric(12,3)) as returnqty,
		'' as plus,
		ticketline.tlqtypc,
		items.itisumtarif,
		items.itumtarif,
		items.itum,
		cast(0 as numeric(12,3)) as returnqtypc
    FROM tickethead,   
         ticketline,   
         items     ,
			adresses
   WHERE ( adresses.adcode = '##########' ) And
			( tickethead.thcode = ticketline.tlcode ) and  
         ( tickethead.thcash = ticketline.tlcash ) and  
         ( ticketline.tlitem = items.itcode ) and  
         ( tickethead.thcode = :ran_TckHead ) AND  
         ( tickethead.thcash = :ras_Cash )   AND  
         ( ticketline.tltype = 'I' )  
UNION ALL 
  SELECT tickethead.thcode,   
         tickethead.thcash,   
         tickethead.thdate,   
         tickethead.thuser,   
         ticketline.tlitem,   
         ticketline.tlqty,   
         ticketline.tlstdval,   
         ticketline.tltotval,   
			packings.pkname,
			packings.pkname,
			adresses.adname As AdName , 
			adresses.adtva As TvaNum ,
			adresses.adtel As AdTel   ,
		( select cocmnt from comments where cotype = 'CMSP'  and cokey = 'XX' and coline = 0 and cotab = 6 ) as cmnt ,
			isnull(ticketline.tlcurrconv2, 0) as tlcurrconv2,
			isnull((select pmcval from paramet
```

## Colonnes
| Colonne |
|---------|
| tickethead_thcode |
| tickethead_thcash |
| tickethead_thdate |
| tickethead_thuser |
| ticketline_tlitem |
| ticketline_tlqty |
| ticketline_tlstdval |
| ticketline_tltotval |
| items_itdirsaldesc |
| items_itname |
| adresses_adname |
| adresses_tvanum |
| adresses_adtel |
| cmnt |
| tlcurrconv2 |
| syscurr |
| syscurr2 |
| ticketline_tlline |
| returnqty |
| plus |
| ticketline_tlqtypc |
| items_itisumtarif |
| items_itumtarif |
| items_itum |
| returnqtypc |

