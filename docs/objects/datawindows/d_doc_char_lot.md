# d_doc_char_lot

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
   WHERE ( docref.drtyp like :Selected_typ ) AND  
         ( docref.drrefc like :Selected_char ) AND
 	    ( isnull(docref.drgroup2,0) <> -99 )          
  
 UNION ALL  
  
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
    FROM docref, qcctrlhead  
   WHERE docref.drtyp = 'Q' AND  
/*os1673	    docref.drrefn IN (select losampleid
								from lots
							  where locode like :Selected_char) */
		docref.drrefn = qcctrlhead.qhctrlid AND 	/*os1673*/
		qcctrlhead.qhlot like :Selected_char AND	/*os1673*/
 	    isnull(docref.drgroup2, 0) <> -99       
  
ORDER BY 1 DESC   

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

