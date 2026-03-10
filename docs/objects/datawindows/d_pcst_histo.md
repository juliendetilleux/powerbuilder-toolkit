# d_pcst_histo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         histostock.hsloc,   
         histostock.hsqty,  
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
 			lots.lorcpoum
    FROM lots,   
         histostock,
		locations,
		mfghead 
   WHERE ( histostock.hslot = lots.locode ) AND 
         ( lots.loitem = mfghead.mhitem ) AND  
      	( locations.lccode = histostock.hsloc ) AND
		histostock.hsitem = lots.loitem AND
		histostock.hscode = 'RCMO' AND
		histostock.hsordtyp = 'M'  AND
		histostock.hsordno = :al_of AND
		histostock.hsordlin = :al_pc And
		 mfghead.mhcode = histostock.hsordno /*HA2277*/
ORDER BY lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| histostock_hsloc |
| histostock_hsqty |
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

