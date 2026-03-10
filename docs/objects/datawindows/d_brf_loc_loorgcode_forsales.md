# d_brf_loc_loorgcode_forsales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT stocks.stloc,
			locations.lcautoalloc ,
			locations.lcexp   
    FROM stocks,
			locations,
			lots  
   WHERE stocks.stlot = lots.locode AND 
		lots.loorgcode = :Sel_loorgcode AND
         stocks.stloc = locations.lccode AND 
         ( stocks.stqty > 0 OR locations.lcautoalloc = 'G' )     
		and//FZ0240
		lcactiv = 'Y' and
		lcintext = 'I' and 
		lcexp = 'Y'
GROUP BY stocks.stloc,
			locations.lcautoalloc ,
			locations.lcexp      

```

## Colonnes
| Colonne |
|---------|
| stloc |
| lcautoalloc |
| locations_lcexp |

