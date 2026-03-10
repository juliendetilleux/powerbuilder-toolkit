# d_crm_doc_char

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT docref.drcode,    
         docref.drfile,   
         docref.drrefc,   
         docref.drmod,   
         docref.drcomment,   
         docref.drdatecrea,   
         docref.drtyp,    
         docref.drcontactid,   
         docref.drcreauser,   
         isnull( docref.drgroup2, 0 ) as drgroup2 ,   
         isnull( docref.drgroup1, 0 ) as drgroup1 ,   
         docref.drfileid,   
         docref.drfilelineid,   
			docref.drmailunread,   
         docref.drmailattach,  
		   docref.drmailfrom,
			docref.drmailto      
    FROM docref  
   WHERE ( docref.drtyp like :Selected_typ OR  
         docref.drtyp in ( 'A', 'B' ) ) AND  
         ( docref.drrefc like :Selected_char ) AND
 	    ( isnull(docref.drgroup2, 0 ) <> -99 )     
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
| drdatecrea |
| drtyp |
| drcontactid |
| drcreauser |
| drgroup2 |
| drgroup1 |
| drfileid |
| drfilelineid |
| drmailunread |
| drmailattach |
| drmailfrom |
| drmailto |

