# d_techdata_cmnt_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
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
   WHERE ( comments.cotype = :Selected_typ ) AND  
         ( comments.cokey = :Selected_key ) AND  
         ( comments.coline = :Selected_line ) AND  
         ( comments.cotab = :Selected_tab )    

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
| comments_cocmnt |
| comments_cotype |
| comments_cokey |
| comments_coline |
| comments_cotab |

