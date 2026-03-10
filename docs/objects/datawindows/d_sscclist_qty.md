# d_sscclist_qty

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
SELECT ssccline.slcode,   
	        ssccline.sllot,   
   		   ssccline.slqty,   
             ssccline.slloc,   
             ssccline.slin ,
		   ssccline.sl_lastmod,
		   cast( 0 as numeric(10,3))  as moveqty,
		   cast( 0 as numeric(10,3)) as rest,
		   isnull( ssccline.slshiphead, 0 ) as slshiphead,
		   isnull( ssccline.slshipline, 0 ) as slshipline
FROM ssccline  
WHERE ( ssccline.slcode like :as_sscc ) AND
		   ( ssccline.sllot like :as_lot ) AND  
         	   ( ssccline.slloc like :as_loc ) AND  
             ( ssccline.slin = :as_in )    

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
| moveqty |
| rest |
| slshiphead |
| slshipline |

