# d_itemlotstock

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         stocks.stloc,   
         stocks.stqty,   
         stocks.stalloc,   
         lots.lorecdat,   
         lots.lolotctrl,   
         lots.loexpdat,   
         lots.loorgcode,   
         lots.losampleid,
         lots.loadcode,
         ( SELECT string(mfghead.mhsalhead) + '/'+ string(mfghead.mhsalline) FROM mfghead WHERE ( mfghead.mhcode = lots.loorder ) AND  
         ( mfghead.mhitem = lots.loitem ) ) sorder,
         ( select items.itdefaultlot from items where items.itcode = lots.loitem ) deflot,
			isnull(locations.lcautoalloc,'') as lcautoalloc,
			isnull(locations.lcexp,'') as lcexp,
		lots.lost,
		isnull( stocks.stqtytarif, 0 ) as stqtytarif,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF
    FROM lots JOIN stocks ON stocks.stlot = lots.locode
				JOIN locations  ON locations.lccode = stocks.stloc
				JOIN items ON stocks.stitem = items.itcode AND
								lots.loitem = items.itcode
   WHERE ( lots.loitem = :Selected_item ) AND  
         ( stocks.stqty <> 0 ) AND 
		locations.lc_exclprepsimpl <> 'B' //FZ0172
ORDER BY lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| stocks_stloc |
| stocks_stqty |
| stocks_stalloc |
| lots_lorecdat |
| lots_lolotctrl |
| lots_loexpdat |
| lots_loorgcode |
| lots_losampleid |
| lots_loadcode |
| csorder |
| cdeflot |
| clcautoalloc |
| clcexp |
| lots_lost |
| stqtytarif |
| items_itum |
| itisumtarif |
| itumtarif |
| itumtrf |

