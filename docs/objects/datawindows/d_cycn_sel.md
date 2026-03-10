# d_cycn_sel

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
         cycnthead.chstatus,   
         isnull((select clotperiod.cpdesc from clotperiod where clotperiod.cpid = cycnthead.chclot),'') as chclot
    FROM cycnthead,   
         users,   
         choices  
   WHERE ( cycnthead.chuscode = users.uscode ) and  
         ( cycnthead.chstatus = choices.chcode ) and  
         ( ( choices.chtype = 'CYCT' ) AND  
         ( choices.chactiv = 'Y' ) AND  
         ( cycnthead.chstatus <> '8' ) AND  
         ( cycnthead.chstatus <> '9' ) )   
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
| chclot |

