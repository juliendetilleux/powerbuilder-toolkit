# d_dvi_method_ram_ds

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcoeff,   
         bomline.blramcode,   
         bomline.blramqty,   
         bomline.blramtype,   
         bomline.blpalloctyp,   
         bomline.blline,   
         bomhead.bhtype  ,
         0 As DviLineNum
    FROM bomhead,   
         bomline,   
         items  
   WHERE ( bomhead.bhcode = bomline.blcode ) and  
         ( bomhead.bhcode = items.itcode ) and  
         ( items.itcode = :ras_ItId       ) AND  
         bomhead.bhtype = :ras_BomHdType   AND  
         bomline.bltype = :ras_BomHdType   
ORDER BY bomline.blline ASC   

```

## Colonnes
| Colonne |
|---------|
| bomhead_bhcoeff |
| bomline_blramcode |
| bomline_blramqty |
| bomline_blramtype |
| bomline_blpalloctyp |
| bomline_blline |
| bomhead_bhtype |
| bomhead_dvilinenum |

