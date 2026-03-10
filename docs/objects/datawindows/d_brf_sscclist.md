# d_brf_sscclist

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT ssccline.slcode,   
	        ssccline.sllot,   
   		   ssccline.slqty,   
             ssccline.slloc,   
             ssccline.slin ,
		   ssccline.sl_lastmod,
		  items.itname
FROM ssccline,
		lots,
		items
WHERE ( ssccline.slcode like :as_sscc ) AND
		   ( ssccline.sllot like :as_lot ) AND  
         	   ( ssccline.slloc like :as_loc ) AND  
             ( ssccline.slin = :as_in )  AND
		   ( ssccline.sllot = lots.locode) AND
		   ( lots.loitem = items.itcode)

```

## Colonnes
| Colonne |
|---------|
| slcode |
| sllot |
| slqty |
| slloc |
| slin |
| sl_lastmod |
| items_itname |

