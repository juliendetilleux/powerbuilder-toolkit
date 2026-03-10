# d_doc_of

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT docref.drcode,    
         docref.drrefc,   
         docref.drmod,   
         isnull( docref.drgroup1, 0 ) as drgroup1 ,   
         isnull( docref.drgroup2, 0 ) as drgroup2 ,   
         docref.drfilelineid,   
         docref.drfileid,   
         docref.drcreauser,   
         docref.drcontactid,   
         docref.drdatecrea,   
         docref.drcomment,   
         docref.drfile,
		docref.drtyp  
    FROM docref  
   WHERE ( docref.drtyp like :Selected_typ ) AND  
         ( docref.drrefn like :Selected_num ) AND
 	    ( isnull(docref.drgroup2,0) <> -99 )         
UNION ALL  
  SELECT docref.drcode,   
         docref.drrefc,   
         docref.drmod,   
         isnull( docref.drgroup1, 0 ) as drgroup1 ,   
         isnull( docref.drgroup2, 0 ) as drgroup2 ,   
         docref.drfilelineid,   
         docref.drfileid,   
         docref.drcreauser,   
         docref.drcontactid,   
         docref.drdatecrea,   
         docref.drcomment,   
         docref.drfile,
		docref.drtyp  
    FROM docref  
   WHERE docref.drtyp = 'R' AND  
         docref.drrefc = (select mhitem/*+'/0'*/
							   from mfghead
							where mfghead.mhcode = :Selected_num) AND
 	    isnull(docref.drgroup2,0) <> -99          
ORDER BY 1 DESC   

```

## Colonnes
| Colonne |
|---------|
| drcode |
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
| drfile |
| drtyp |

