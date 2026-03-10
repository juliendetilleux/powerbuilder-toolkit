# d_item_cmnt1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         choices.chname,   
         comments.coprlbl,   
         comments.coprpur,   
         comments.coprmfg,   
         comments.coprsa1,   
         comments.coprsa2,   
         comments.coprinv,   
         comments.cotab,   
         items.itactiv,   
         comments.cocmnt  
    FROM items,   
         choices,   
         comments  
   WHERE ( items.itcode = comments.cokey ) and  
         ( choices.chcode = comments.cotab ) and  
         ( comments.cokey = items.itcode ) and  
         ( choices.chtype = 'ICMT' ) AND  
         ( items.itcode = :Selected_item )   
ORDER BY items.itcode ASC,   
         comments.cotab ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| choices_chname |
| itcomm_icprlbl |
| itcomm_icprpur |
| itcomm_icprmfg |
| itcomm_icprsa1 |
| itcomm_icprsa2 |
| itcomm_icprinv |
| itcomm_ictab |
| items_itactiv |
| comments_cocmnt |

