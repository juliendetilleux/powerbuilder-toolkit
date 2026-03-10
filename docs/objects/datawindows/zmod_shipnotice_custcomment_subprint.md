# zmod_shipnotice_custcomment_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT comments.coprlbl,   
         comments.coprpur,   
         comments.coprmfg,   
         comments.coprsa1,   
         comments.coprsa2,   
         comments.coprinv,   
         comments.cocmnt,   
         comments.cotype,   
         comments.cokey,   
         comments.coline,   
         comments.cotab  
    FROM comments  
   WHERE ( comments.cotype = 'CMAD' ) AND  
         comments.cokey =  :cokey AND 
         comments.coline  = 1  	AND 
         comments.cotab  = 'C' 
  
```

## Colonnes
| Colonne |
|---------|
| coprlbl |
| coprpur |
| coprmfg |
| coprsa1 |
| coprsa2 |
| coprinv |
| cocmnt |
| cotype |
| cokey |
| coline |
| cotab |

