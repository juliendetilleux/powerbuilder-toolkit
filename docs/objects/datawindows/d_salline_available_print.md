# d_salline_available_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
		itloc as loc ,
		isnull( salline.slqtyreq, 0 ) - isnull( salline.slqtyalloc, 0 ) - isnull( salline.slqtyreal, 0 ) as qty_need,
		sum( stocks.stqty - stocks.stalloc ) as avalaible,
		items.itdefaultlot,
		salhead.shcode ,
		(select chname from choices where chtype = 'CUSS' and chcode = salhead.shstatus ) as status,
		salhead.shcustref,
		date( salhead.shdatreq ) as datreq,
		( select count(sl.slline) 
					from salline as sl
						JOIN items as it ON it.itcode = sl.slitem 
					where sl.slcode = salhead.shcode and 
							it.ittyp not IN ('U', 'S' ) and
							sl.slstatus < '5' and
							isnull( sl.slqtyreq, 0 ) - isnull( sl.slqtyalloc, 0 ) - isnull( sl.slqtyreal, 0 ) > 0 and
							isnull(( select sum( st.stqty - st.stalloc )
        								from lots as lo
        									JOIN stocks as st ON st.stlot = lo.locode AND
        											st.stitem = lo.loitem 
        								where it.itcode = lo.loitem and
        									(( lo.lostatus IN ( 'A', 'P' ) and date( lo.loexpdat ) >= date( now() )) OR it.itlot = 'N') ),0) < isnull( sl.slqtyreq, 0 ) - isnull( sl.slqtyalloc, 0 ) - isnull( sl.slqtyreal, 0 )	//stock disponible < stock a préparer
						 ) as nb_of_partial,
		salline.slline,
		string(salline.slcode) + '/'+ string(salline.slline) as cmd
    FROM lots 
			JOIN items ON items.itcode = lots.loitem 
			JOIN stocks ON stocks.stlot = lots.locode AND
								stocks.stitem = lots.loitem  
			JOIN salline ON salline.slitem = items.itcode
			JOIN salhead ON salhead.shcode = salline.slcode  
   WHERE 
		items.itactiv = 'Y' AND 
		(( lots.lostatus IN ( 'A', 'P' ) AND date( lots.loexpdat ) >= date( now() )) OR items.itlot = 'N') AND
		items.ittyp not IN ('U', 'S' ) AND
		salline.slstatus < '5' AND
		salhead.shstatus < '5' AND
		qty_need > 0 /*il faut qu'il reste quelque chose a sortire*/ 
 GROUP BY items.itcode,
		items.itname,
		loc,
		qty_need,
		items.itdefaultlot,
		salhead.shcustref
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_loc |
| qty_need |
| avalaible |
| items_itdefaultlot |
| salhead_shcode |
| status |
| salhead_shcustref |
| datreq |
| nb_of_partial |
| salline_slline |
| cmd |

