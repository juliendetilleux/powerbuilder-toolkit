# d_qry_itemwhereused2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT bomline.blramqty,   
         bomline.blramtype,   
         bomhead.bhcoeff,   
         bomline.blcode,   
         items_a.itname,   
         items_b.itum ummat ,   
         items_a.itum  ummfg,   
         bomhead.bhdesc,   
         bomline.bltype,
         bomline.blpalloctyp  
    FROM bomline,   
         bomhead,   
         items items_a,   
         items items_b  
   WHERE ( bomline.blcode = bomhead.bhcode ) and  
         ( bomhead.bhcode = items_a.itcode ) and  
         ( bomline.blramcode = items_b.itcode ) and  
         ( bomline.bltype = bomhead.bhtype ) and  
         ( ( bomline.blramcode = :Selected_item ) )   
ORDER BY bomline.blcode ASC,   
         bomline.bltype ASC   

```

## Colonnes
| Colonne |
|---------|
| bomline_blramqty |
| bomline_blramtype |
| bomhead_bhcoeff |
| blcode |
| items_itname |
| items_ummat |
| items_ummfg |
| bomhead_bhdesc |
| bomline_bltype |
| bomline_blpalloctyp |

