# d_ticketline_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT tickethead.thcode,   
         tickethead.thcash,   
         tickethead.thdate,   
         tickethead.thuser,   
         IF isnull(tickethead.thcust,'') <> '' THEN 
				tickethead.thcust 
			ELSE 
				IF trim(isnull((select first clcval from choiceline where clcode = 'CASH' and clname = tickethead.thcash), '')) <> '' THEN
					(select first clcval from choiceline where clcode = 'CASH' and clname = tickethead.thcash)
				ELSE
					(select pmcval from parameters where pmcode = 'DIRCTSAL') 
				ENDIF
			ENDIF as thcust,
		(select adresses.adname from adresses where adresses.adcode = thcust) as adname,
		ticketline.tlline,
		ticketline.tlitem,
		ticketline.tlqty,
		ticketline.tlstdval,
		ticketline.tlsalval,
		ticketline.tltva,
		ticketline.tltvaval,
		ticketline.tltotval,
		ticketline.tltype,
		ticketline.tlbascost,
		ticketline.tlxtrcost,
		items.itname,
		items.itstat1,
		items.itstat2,
		items.itactiv,
		(select adresses.adgrcust from adresses where adresses.adcode = thcust) as adgrcust, 
		(select adresses.adsalesman from adresses where adresses.adcode = thcust) as shsalesman,
		(select adresses.adactiv from adresses where adresses.adcode = thcust) as adactiv,
		items.ittyp,
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = thcust),'##########') as mcdo,
		if isnull(itisumtarif, 'N') = 'Y' then itumtarif else itum endif as unit 		
    FROM ticketline, items,  tickethead 
   WHERE date(tickethead.thdate) between date(:adt_start) AND date(:adt_end) AND
		tickethead.thcode = ticketline.tlcode AND
		tickethead.thcash = ticketline.tlcash And //HA2150
		ticketline.tlitem = items.itcode
 ORDER BY tickethead.thdate desc,
		tickethead.thcode desc, 
		ticketline.tlline asc

```

## Colonnes
| Colonne |
|---------|
| tickethead_thcode |
| tickethead_thcash |
| tickethead_thdate |
| tickethead_thuser |
| tickethead_thcust |
| adresses_adname |
| ticketline_tlline |
| ticketline_tlitem |
| ticketline_tlqty |
| ticketline_tlstdval |
| ticketline_tlsalval |
| ticketline_tltva |
| ticketline_tltvaval |
| ticketline_tltotval |
| ticketline_tltype |
| ticketline_tlbascost |
| ticketline_tlxtrcost |
| items_itname |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| adresses_adgrcust |
| adresses_shsalesman |
| adresses_adactiv |
| items_ittyp |
| mcdo |
| unit |

