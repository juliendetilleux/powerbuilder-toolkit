# d_choiceline_cpty

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
         choiceline.clcval 
    FROM choiceline  
   WHERE ( choiceline.clcode = :ras_code ) AND  
         ( choiceline.clline >= 0 )   
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
| clcval |

