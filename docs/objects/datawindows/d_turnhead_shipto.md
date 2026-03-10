# d_turnhead_shipto

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT turnhead.thid,   
         	turnhead.thdesc
    FROM turnhead LEFT OUTER JOIN turnline  
		ON turnhead.thid = turnline.tlid 
  WHERE turnhead.thactiv = 'Y' AND
		((turnline.tladcode = :as_adcode AND
		turnline.tlshipto = :al_shipto) OR :as_adcode = '%' ) 
GROUP BY turnhead.thid,   
         	turnhead.thdesc 
ORDER BY 1 ;



```

## Colonnes
| Colonne |
|---------|
| thid |
| thdesc |

