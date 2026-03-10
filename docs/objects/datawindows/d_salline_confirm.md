# d_salline_confirm

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT  salline.slcode , 
          salline.slline , 
          salline.sldatreq , 
          salline.sldatship , 
          salline.sldatcustreq    
        FROM salline      
        WHERE ( salline.slcode = :salorder ) and 
		         ( salline.slline = :salline )   
```

## Colonnes
| Colonne |
|---------|
| slcode |
| slline |
| sldatreq |
| sldatship |
| sldatcustreq |

