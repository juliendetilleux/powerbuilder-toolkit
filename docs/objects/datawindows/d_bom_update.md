# d_bom_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomline.blcode,   
         bomline.bltype,   
         bomline.blline,   
         bomline.blramcode,   
         bomline.blramqty,   
         bomline.blramtype,   
         bomline.blstartdat,   
         bomline.blstopdat,   
         bomline.blramval,   
         bomline.blscrap,   
         bomline.blpalloctyp,   
         bomline.blcomment,   
         bomline.bloneemp,   
         bomline.blloc,
			items.ittyp,
			bomline.bltdmoddate  ,
			bomline.bltdqty ,
	bomline.bl_ismain
    FROM bomline,
			items  
   WHERE ( bomline.blcode = :Selected_item ) AND  
         ( bomline.bltype = :Selected_type ) AND  
         ( bomline.blline = :Selected_line ) AND  
         ( bomline.blramcode = items.itcode )    

```

## Colonnes
| Colonne |
|---------|
| blcode |
| bltype |
| blline |
| blramcode |
| blramqty |
| blramtype |
| blstartdat |
| blstopdat |
| blramval |
| blscrap |
| blpalloctyp |
| blcomment |
| bloneemp |
| blloc_g |
| items_ittyp |
| bltdmoddate |
| bltdqty |
| bomline_bl_ismain |

