# d_ticket_create_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
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
			isnull((select pmcval from parameters where pmcode = 'SYSCURR2'), '') as SYSCURR2 ,
			(select smname from salesman where smcode = (select first hhcmnt from histocash where hhcode = 'IINV' and hhcash = :ras_Cash and hhordtyp = 'T' and hhordno = :ran_TckHead order by 1 desc)) as serveur,
			(select adcmnt from adresses where adcode = '##########') as ouverture
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
| adresses_tvanum |
| adtel |
| tlcurrconv2 |
| syscurr |
| syscurr2 |
| serveur |
| ouverture |

