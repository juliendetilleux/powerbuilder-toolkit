# d_ticket_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
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
			adresses.adtel As AdTel,
			isnull(ticketline.tlcurrconv2, 0) as tlcurrconv2,
			isnull((select pmcval from parameters where pmcode = 'SYSCURR'), '') as SYSCURR,
			isnull((select pmcval from parameters where pmcode = 'SYSCURR2'), '') as SYSCURR2    
    FROM tickethead,   
         ticketline,   
         items     ,
			adresses
   WHERE ( adresses.adcode = '##########' ) And
			( tickethead.thcode = ticketline.tlcode ) and  
         ( tickethead.thcash = ticketline.tlcash ) and  
         ( ticketline.tlitem = items.itcode ) and  
         ( tickethead.thcode = :ran_TckHead ) AND  
         ( tickethead.thcash = :ras_Cash )     

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
| adname |
| tvanum |
| adtel |
| tlcurrconv2 |
| syscurr |
| syscurr2 |

