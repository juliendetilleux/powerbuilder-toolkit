# d_sscclist_lot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT ssccline.slcode,   
         ssccline.sllot,   
         ssccline.slqty,   
         ssccline.slloc,   
         ssccline.slin,   
         ssccline.sl_lastmod  
    FROM ssccline  
   WHERE ( ssccline.sllot = :as_lot ) AND  
         ( ssccline.slin = 'Y' )    

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

