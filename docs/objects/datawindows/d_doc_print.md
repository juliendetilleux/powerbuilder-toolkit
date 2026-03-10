# d_doc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT docref.drcode,   
         docref.drfile,   
         docref.drrefc,   
         docref.drmod,   
         docref.drcomment,   
         docref.drdatecrea  
    FROM docref  
   WHERE ( docref.drtyp = :Selected_typ OR  
         docref.drtyp = 'A' ) AND  
         ( docref.drrefc = :Selected_char )   AND
	    ( docref.drdatecrea >= :datestart ) AND
	    ( docref.drdatecrea <= :dateend )
ORDER BY docref.drcode DESC   

```

## Colonnes
| Colonne |
|---------|
| drcode |
| drfile |
| drrefc |
| drmod |
| drcomment |
| drdatecrea |

