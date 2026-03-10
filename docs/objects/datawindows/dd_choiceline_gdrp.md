# dd_choiceline_gdrp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _gdpr
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clactiv,   
         choiceline.clname,   
         choiceline.clsort,   
         choiceline.clline,   
         choiceline.clcode,   
         choiceline.clival1,   
         choiceline.clival2,
			choiceline.clcval ,
	choiceline.clcval4 
    FROM choiceline  
   WHERE ( choiceline.clcode = 'gdrp' ) 
ORDER BY choiceline.clsort ASC   

```

## Colonnes
| Colonne |
|---------|
| clactiv |
| clname |
| clsort |
| clline |
| clcode |
| clival1 |
| clival2 |
| clcval |
| clcval4 |

