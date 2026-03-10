# d_tab_item_qtyexp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
SELECT (select datepart(dw, now()) from dummy) - 1 as dayofweek, 


		isnull(itisumtarif, 'N')  as isumtarif,


		items.itum as itum ,


		if isumtarif = 'N' then 1 else itumtarifconv endif as itumconv ,


		  isnull((select sum(shipline.slqty) 
			 from shiphead, shipline
			where shipline.slitem = items.itcode and
				shiphead.shcode = shipline.slcode and
				date(shiphead.shdate) between date(now()) - (dayofweek + 6) and now() - dayofweek) , 0 )
		+ 
		isnull(( select sum( ( If IsNull(( Select it_2.itisumtarif From items it_2 Where it_2.itcode = items.itcode ), 'N') = 'N' Then ticketline.tlqty Else ticketline.tlqtypc EndIf)) 
		  from tickethead, ticketline
		  where thcode = tlcode and
			 thcash = tlcash and
			 ticketline.tltype = 'I' and
			ticketline.tlitem =  items.itcode and 
			date( tickethead.thdate)  between date(now()) - (dayofweek + 6) and now() - dayofweek) , 0)

			as qty1,


  
		  isnull((select sum(shipline.slqty) 
			 from shiphead, shipline
			where shipline.slitem = items.itcode and
				shiphead.shcode = shipline.slcode and
				date(shiphead.shdate) between date(now()) - (dayofweek + 13) and now() - (dayofweek + 7)), 0)
		+ 
		isnull( ( select sum(( If IsNull(( Select it_2.itisumtarif From items it_2 Where it_2.itcode = items.itcode ), 'N') = 'N' Then ticketline.tlqty Else ticketline.tlqtypc EndIf)) 
		  from tickethead, ticketline
		  where thcode = tlcode and
			 thcash = tlcash and
			 ticketline.tltype = 'I' and
			ticketline.tlitem =  items.itcode and 
			date( tickethead.thdate)  between date(now()) -  (dayofweek + 13) and now() - (dayofweek + 7)) , 0)

			 as qty2,


  
		  isnull((select sum(shipline.slqty) 
			 from shiphead, shipline
			where shipline.slitem = items.itcode and
				shiphead.shcode = shipline.slcode and
				date(shiphead.shdate) between date(now()) - (dayofweek + 20) and now() - (dayofweek + 14)) , 0)
		+ 
		isnull(( select sum(( If IsNull(( Select it_2.itisumtarif
```

## Colonnes
| Colonne |
|---------|
| dayofweek |
| isumtarif |
| itum |
| itumconv |
| qty1 |
| qty2 |
| qty3 |
| qty4 |
| qtyavg |
| rqty1 |
| rqty2 |
| rqty3 |
| rqty4 |
| rqtyavg |
| qty0 |
| rqty0 |

