# d_bcd_cycn_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT cycnthead.chnumcc,   
         cycnthead.chdate,   
         choices.chname,   
         users.usname,   
         cycnthead.chnamec,   
         cycnthead.chstatus  
    FROM cycnthead,   
         users,   
         choices  
   WHERE ( cycnthead.chuscode = users.uscode ) and  
         ( cycnthead.chstatus = choices.chcode ) and  
         ( choices.chtype = 'CYCT' ) AND  
         ( choices.chactiv = 'Y' ) AND  
         ( cycnthead.chstatus = '1' ) 
ORDER BY cycnthead.chnumcc ASC   

```

## Colonnes
| Colonne |
|---------|
| cycnthead_chnumcc |
| cycnthead_chdate |
| choices_chname |
| users_usname |
| cycnthead_chnamec |
| cycnthead_chstatus |

