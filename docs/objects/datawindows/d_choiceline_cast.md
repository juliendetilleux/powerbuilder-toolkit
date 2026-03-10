# d_choiceline_cast

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
		if choiceline.clline in ( 0, 200, 299, 500, 800, 999) then 1 else 0 endif as notmodifiable, 
		if choiceline.clline in ( 800, 999) then 1 else 0 endif as blocked, 
		choiceline.clival1
    FROM choiceline  
   WHERE ( choiceline.clcode = 'CAST' ) AND  
         ( choiceline.clline >= 0 )   
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
| notmodifiable |
| blocked |
| clival1 |

