# d_bom_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
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
         items.ittyp,   
         bomline.blpalloctyp,   
         (SELECT Routline.rlwccode FROM Routline WHERE Routline.rlcode = Bomline.blcode AND Routline.rltype = Bomline.bltype AND Bomline.blroutline = Routline.rlline) AS Wccode,   
         bomline.blroutline,   
         bomline.bloneemp,   
         case bloneemp 
			when 'N' then ''
			when 'Y' then bomline.blloc
			when 'G' then (select clname from choiceline where clcode = 'LOCG' and clline = bomline.blloc)+ '(G)'
		end as bomline_blloc,   
         items.itpol,   
         bomline.bl_ismain,   
         bomline.blcode,   
         bomline.bltype  
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
| cwccode |
| bomline_blroutline |
| bomline_bloneemp |
| bomline_blloc |
| items_itpol |
| bomline_bl_ismain |
| bomline_blcode |
| bomline_bltype |

