# zmod_salord_itemcmntall_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT comments.cotype,   
         comments.cokey,   
         comments.coline,   
         comments.cotab,   
         comments.coprlbl,   
         comments.coprpur,   
         comments.coprmfg,   
         comments.coprsa1,   
         comments.coprsa2,   
         comments.coprinv,   
         comments.cocmnt  
    FROM comments  
   WHERE ( comments.cotype = 'ICMT' ) AND  
         ( comments.cokey = :as_item ) AND  
         ( comments.coprsa1 = 'Y' )    

```

## Colonnes
| Colonne |
|---------|
| cotype |
| cokey |
| coline |
| cotab |
| coprlbl |
| coprpur |
| coprmfg |
| coprsa1 |
| coprsa2 |
| coprinv |
| cocmnt |

