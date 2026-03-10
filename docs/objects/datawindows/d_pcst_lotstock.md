# d_pcst_lotstock

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT distinct lots.locode,   
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
			( Select adresses.adname
				 From adresses
				Where adresses.adcode = lots.loadcode ) As SuppName, 
 			lots.lorcpoum,
		stocks.stitem,
		stocks.stqty - stocks.stalloc as tocons 
    FROM lots,   
         stocks,
		locations,
		histostock  
   WHERE stocks.stlot = lots.locode AND 
         stocks.stqty <> 0 AND  
		locations.lccode = stocks.stloc AND
		stocks.stitem = lots.loitem AND
		histostock.hslot = stocks.stlot AND
		histostock.hsloc = stocks.stloc AND
		histostock.hsitem = stocks.stitem AND
		histostock.hscode = 'RCMO' AND
		histostock.hsordtyp = 'M'  AND
		histostock.hsordno = :al_of AND
		histostock.hsordlin = :al_pc 

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
| suppname |
| lots_lorcpoum |
| stocks_stitem |
| tocons |

