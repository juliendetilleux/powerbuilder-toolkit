# d_techdata_cmntlang_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT comments_lang.cotype,   
         comments_lang.cokey,   
         comments_lang.colang,   
         comments_lang.cotab,   
         comments_lang.coprlbl,   
         comments_lang.coprpur,   
         comments_lang.coprmfg,   
         comments_lang.coprsa1,   
         comments_lang.coprsa2,   
         comments_lang.coprinv,   
         comments_lang.cocmnt  
    FROM comments_lang  
   WHERE ( comments_lang.cotype like :Selected_typ ) AND  
         ( comments_lang.cokey like :Selected_key ) AND  
         ( comments_lang.colang like :Selected_lang ) AND  
         ( comments_lang.cotab like :Selected_tab )    

```

## Colonnes
| Colonne |
|---------|
| cotype |
| cokey |
| colang |
| cotab |
| coprlbl |
| coprpur |
| coprmfg |
| coprsa1 |
| coprsa2 |
| coprinv |
| cocmnt |

