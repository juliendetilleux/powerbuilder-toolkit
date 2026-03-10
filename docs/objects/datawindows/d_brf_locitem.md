# d_brf_locitem

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT distinct stocks.stloc,
			locations.lcautoalloc  ,
			locations.lcexp   
    FROM stocks,
			locations  
   WHERE ( stocks.stitem = :Sel_item ) AND  
			( locations.lccode = stocks.stloc ) AND 
         ( stocks.stqty > 0 OR locations.lcautoalloc = 'G' )    
 
 ORDER BY stocks.stloc
```

## Colonnes
| Colonne |
|---------|
| stloc |
| lcautoalloc |
| locations_lcexp |

