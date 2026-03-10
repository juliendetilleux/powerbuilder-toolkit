# d_stock_sel2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT stocks.stlot,   
         lots.lostatus,   
         stocks.stloc,   
         stocks.stqty,   
         lots.lorecdat,   
         items.itdefaultlot,   
         lots.locmnt,   
         (stocks.stqty - stocks.stalloc) disponible,   
         lots.loexpdat,   
         lots.losampleid,
         lots.loadcode,
         lots.loorgcode,
         lots.lolotctrl, 
			locations.lcautoalloc ,
		isnull( stocks.stqtytarif, 0 ) as stqtytarif,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF
    FROM stocks JOIN lots ON stocks.stlot = lots.locode
         				JOIN items ON lots.loitem = items.itcode
					JOIN locations ON stocks.stloc = locations.lccode
   WHERE stocks.stitem = :Selected_item AND
		locations.lc_exclprepsimpl   <> 'B' 
 ORDER BY lots.loexpdat ASC,   
			lots.lorecdat ASC,
			locations.lcpriority ASC,
			locations.lccode ASC 

```

## Colonnes
| Colonne |
|---------|
| stlot |
| lots_lostatus |
| stloc |
| stqty |
| lots_lorecdat |
| items_itdefaultlot |
| lots_locmnt |
| cdisponible |
| lots_loexpdat |
| lots_losampleid |
| lots_loadcode |
| lots_loorgcode |
| lots_lolotctrl |
| locations_lcautoalloc |
| stqtytarif |
| items_itum |
| itisumtarif |
| itumtarif |
| itumtrf |

