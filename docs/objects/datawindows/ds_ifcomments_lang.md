# ds_ifcomments_lang

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: comments_lang

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
   WHERE ( comments_lang.cokey = :ls_itcode ) AND  
         ( comments_lang.cotype = 'ICMT' )    

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

