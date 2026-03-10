# d_doc_all

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
         docref.drcomment,   
         isnull( docref.drgroup1, 0 ) as drgroup1 ,   
         isnull( docref.drgroup2, 0 ) as drgroup2 ,   
         docref.drdatecrea,   
         docref.drcreauser,   
         docref.drcontactid,   
         docref.drfileid,   
         docref.drfilelineid,  
         docref.drmailunread,   
         docref.drmailattach,  
		   docref.drmailfrom    
    FROM docref   
 WHERE  ( isnull(docref.drgroup2, 0 ) <> -99 )      
ORDER BY docref.drdatecrea DESC   

```

## Colonnes
| Colonne |
|---------|
| drcode |
| drfile |
| drrefc |
| drmod |
| drcomment |
| drgroup1 |
| drgroup2 |
| drdatecrea |
| drcreauser |
| drcontactid |
| drfileid |
| drfilelineid |
| drmailunread |
| drmailattach |
| drmailfrom |

