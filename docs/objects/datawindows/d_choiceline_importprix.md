# d_choiceline_importprix

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clactiv,   
         choiceline.clname,   
         choiceline.clsort,   
         choiceline.clline,   
         choiceline.clcode,   
         choiceline.clcval ,
		choiceline.clival1
    FROM choiceline  
   WHERE	choiceline.clcode = 'IMPX'  AND  
				choiceline.clcval = :as_sale AND
				 choiceline.clline >= 0
ORDER BY choiceline.clline ASC   

```

## Colonnes
| Colonne |
|---------|
| clactiv |
| clname |
| clsort |
| clline |
| clcode |
| clcval |
| clival1 |

