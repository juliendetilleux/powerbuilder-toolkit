# ds_bom_check

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
SELECT bomline.blramcode,   
         bomline.blramqty,   
         bomline.blramtype,   
         bomline.blscrap,
			items.ittyp,
			items.itname,
		bomline.blline,
		bomline.blpalloctyp,
		bomline.blloc
    FROM bomline,   
         items  
   WHERE ( bomline.blramcode = items.itcode ) and  
         ( bomline.blcode = :as_bomcode ) AND  
         ( bomline.bltype = :as_bomtype ) AND  
         ( items.ittyp in ( 'M', 'P', 'C', 'F' )) and
         ( bomline.blstartdat <= :as_reqdat ) AND  
         ( bomline.blstopdat >= :as_reqdat )   
```

## Colonnes
| Colonne |
|---------|
| bomline_blramcode |
| bomline_blramqty |
| bomline_blramtype |
| bomline_blscrap |
| items_ittyp |
| items_itname |
| bomline_blline |
| bomline_blpalloctyp |
| bomline_blloc |

