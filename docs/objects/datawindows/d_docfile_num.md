# d_docfile_num

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT docref.drcode,   
         docref.drfile,   
         docref.drrefc,   
         docref.drmod,   
         isnull( docref.drgroup1, 0 ) as drgroup1 ,   
         isnull( docref.drgroup2, 0 ) as drgroup2 ,   
         docref.drfilelineid,   
         docref.drfileid,   
         docref.drcreauser,   
         docref.drcontactid,   
         docref.drdatecrea,    
         docref.drcomment  
    FROM docref   
   WHERE (( docref.drtyp = 'F' ) AND  
         ( docref.drrefn = :Selected_num )) OR
         ( docref.drfileid = :Selected_num ) AND
 	    ( isnull(docref.drgroup2,0) <> -99 )     
ORDER BY docref.drcode DESC   

```

## Colonnes
| Colonne |
|---------|
| drcode |
| drfile |
| drrefc |
| drmod |
| drgroup1 |
| drgroup2 |
| drfilelineid |
| drfileid |
| drcreauser |
| drcontactid |
| drdatecrea |
| drcomment |

