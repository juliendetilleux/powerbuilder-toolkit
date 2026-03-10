# d_cmnt_lang_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT comments_lang.coprlbl,   
         comments_lang.coprpur,   
         comments_lang.coprmfg,   
         comments_lang.coprsa1,   
         comments_lang.coprsa2,   
         comments_lang.coprinv,   
         comments_lang.cocmnt,   
         comments_lang.cotype,   
         comments_lang.cokey,   
         comments_lang.colang,   
         comments_lang.cotab  
    FROM comments_lang  
   WHERE ( comments_lang.cotype = :Selected_type ) AND  
         ( comments_lang.cokey = :Selected_key ) AND  
         ( comments_lang.colang = :Selected_lang ) AND  
         ( comments_lang.cotab = :Selected_tab )    

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
| colang |
| cotab |

