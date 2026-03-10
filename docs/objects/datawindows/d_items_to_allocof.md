# d_items_to_allocof

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
		lots.lolotctrl,   
         	lots.locode,   
         	lots.loorgcode,
		lots.lolotctrl,
		lots.lostatus,
		lots.loexpdat,
		stocks.stloc,
		stocks.stqty - stocks.stalloc as avalaible,
		items.itdefaultlot   
    FROM lots 
			JOIN items ON items.itcode = lots.loitem 
			JOIN stocks ON stocks.stlot = lots.locode AND
								stocks.stitem = lots.loitem  
   WHERE avalaible > 0 AND
		items.itactiv = 'Y' AND 
		(( lots.lostatus IN ( 'A', 'P' ) AND date( lots.loexpdat ) >= date( now() )) OR items.itlot = 'N') AND
		items.ittyp IN ('P' , 'M', 'C' ) AND
		exists ( select first * from mfglallocs JOIN mfghead ON mfghead.mhcode = mfglallocs.mlcode 
					where mfghead.mhstatus < '8' and
						mfglallocs.mlstatus < '8' AND
						mfglallocs.mlitem = items.itcode AND
						mfglallocs.mlpalloctyp NOT IN ( 'B', 'L', 'G' ) AND
						isnull( mfglallocs.mllallocqty, 0 ) - isnull( mfglallocs.mlpallocqty, 0 ) > 0 /*il faut qu'il reste quelque chose a alloué*/ ) 
 ORDER BY items.itcode,
	lots.locode
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| lots_lolotctrl |
| lots_locode |
| lots_loorgcode |
| lots_lolotctrl |
| lots_lostatus |
| lots_loexpdat |
| stocks_stloc |
| avalaible |
| items_itdefaultlot |

