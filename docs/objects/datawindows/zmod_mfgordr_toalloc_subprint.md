# zmod_mfgordr_toalloc_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         items.itlot,   
         items.itum,   
         lots.loexpdat,   
         items.itdefaultlot,   
         lots.loorgcode  
FROM lots,   
         stocks,
		locations,
		items  
   WHERE stocks.stlot = lots.locode AND 
         lots.loitem = :Selected_item AND  
         stocks.stqty <> 0 AND  
		locations.lccode = stocks.stloc AND
		lots.loitem = items.itcode 
ORDER BY lots.loexpdat, lots.lorecdat
 
```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| items_itlot |
| items_itum |
| lots_loexpdat |
| items_itdefaultlot |
| lots_loorgcode |

