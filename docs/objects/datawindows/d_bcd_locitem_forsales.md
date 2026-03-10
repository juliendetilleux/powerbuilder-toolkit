# d_bcd_locitem_forsales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT distinct stocks.stloc,
			locations.lcautoalloc ,
			locations.lcexp   
    FROM stocks,
			locations  
   WHERE ( stocks.stitem = :Sel_item ) AND 
         ( stocks.stloc = locations.lccode ) AND 
         ( stocks.stqty > 0 OR locations.lcautoalloc = 'G' )     
 		and//FZ0240
		lcactiv = 'Y' and
		lcintext = 'I' and 
		lcexp = 'Y'
 ORDER BY stocks.stloc
```

## Colonnes
| Colonne |
|---------|
| stloc |
| lcautoalloc |
| locations_lcexp |

