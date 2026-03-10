# d_ticketpreview_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT tickethead.thcode,   
         tickethead.thcash,   
         tickethead.thdate,   
         tickethead.thuser,   
         ticketline.tlitem,   
         ticketline.tlqty,   
         ticketline.tltotval,   
         items.itdirsaldesc,
			items.itname,
			adresses.adname As AdName , 
			adresses.adtva As TvaNum ,
			adresses.adtel As AdTel   
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
         ticketline.tltotval,   
			packings.pkname,
			packings.pkname,
			adresses.adname As AdName , 
			adresses.adtva As TvaNum ,
			adresses.adtel As AdTel   
    FROM tickethead,   
         ticketline,   
         packings     ,
			adresses
   WHERE ( adresses.adcode = '##########' ) And
			( tickethead.thcode = ticketline.tlcode ) and  
         ( tickethead.thcash = ticketline.tlcash ) and  
         ( ticketline.tlitem = packings.pkcode ) and  
         ( tickethead.thcode = :ran_TckHead ) AND  
         ( tickethead.thcash = :ras_Cash )     AND  
         ( ticketline.tltype = 'P' )    

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
| ticketline_tltotval |
| items_itdirsaldesc |
| items_itname |
| adname |
| tvanum |
| adtel |

