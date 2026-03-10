# ds_bom_allocate

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT bomline.blramcode,   
         bomline.blline,   
         bomline.blramqty,   
         bomline.blramtype,   
         bomline.blscrap,
			bomline.blcomment,
			bomline.blpalloctyp,
			bomline.blroutline,
			items.ittyp,
			items.itname,
			items.itum,
			bomline.bloneemp,
			bomline.blloc 
    FROM bomline,   
         items  
   WHERE ( bomline.blramcode = items.itcode ) and  
         ( bomline.blcode = :as_Item ) AND  
         ( bomline.bltype = :as_para_bom ) AND  
         ( items.ittyp in ( 'P', 'M', 'U', 'C', 'F' )) and
         ( bomline.blstartdat <= :reqdat ) AND  
         ( bomline.blstopdat >= :reqdat )   
```

## Colonnes
| Colonne |
|---------|
| bomline_blramcode |
| bomline_blline |
| bomline_blramqty |
| bomline_blramtype |
| bomline_blscrap |
| bomline_blcomment |
| bomline_blpalloctyp |
| bomline_blroutline |
| items_ittyp |
| items_itname |
| items_itum |
| bomline_bloneemp |
| bomline_blloc |

