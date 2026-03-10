# ds_routline

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT routline.rlcode,   
         routline.rltype,   
         routline.rlline,   
         routline.rlwccode,   
         routline.rloffset,   
         routline.rlmacrun,   
         routline.rllabrun,   
         routline.rllabval,   
         routline.rlsetup,   
         routline.rloper,   
         routline.rllabfix,   
         routline.rlmacval,   
         routline.rltask,   
         routline.rlctrl,   
         routline.rltest,   
         routline.rlcoeff,   
         routline.rlum  
    FROM routline  
   WHERE ( (routline.rlcode = :ras_itcode) AND  
         (routline.rltype = :ras_type))   
ORDER BY routline.rltest ASC   

```

## Colonnes
| Colonne |
|---------|
| rlcode |
| rltype |
| rlline |
| rlwccode |
| rloffset |
| rlmacrun |
| rllabrun |
| rllabval |
| rlsetup |
| rloper |
| rllabfix |
| rlmacval |
| rltask |
| rlctrl |
| rltest |
| rlcoeff |
| rlum |

