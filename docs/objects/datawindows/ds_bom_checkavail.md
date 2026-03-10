# ds_bom_checkavail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT bomline.blline,   
         bomline.blramcode,   
         items.itname,   
         bomline.blramqty,   
         items.itum,   
         bomline.blramtype,   
         bomline.blstartdat,   
         bomline.blstopdat,   
         items.ittyp  ,
		bomline.blpalloctyp,
		bomline.blloc
    FROM bomline,   
         items  
   WHERE ( bomline.blramcode = items.itcode ) and  
         ( ( bomline.blcode = :Selected_item ) AND  
         ( bomline.bltype = :Selected_type ) )   
ORDER BY bomline.blline ASC   

```

## Colonnes
| Colonne |
|---------|
| blline |
| bomline_blramcode |
| items_itname |
| bomline_blramqty |
| items_itum |
| bomline_blramtype |
| bomline_blstartdat |
| bomline_blstopdat |
| items_ittyp |
| bomline_blpalloctyp |
| bomline_blloc |

