# d_bomaudit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomaudit.balncode,   
         items.itname,   
         bomaudit.baline,   
         bomaudit.badate,   
         bomaudit.bauser,   
         users.usname,   
         bomaudit.baaction,   
         bomaudit.bacomment  
    FROM bomaudit,   
         items,   
         users  
   WHERE ( bomaudit.balncode = items.itcode ) and  
         ( bomaudit.bauser = users.uscode ) and  
         ( ( bomaudit.babhcode = :item  ) AND  
         ( bomaudit.babhtype = :type ) ) AND
         ( bomaudit.badate >= :datestart AND 
           bomaudit.badate <= :datestop )

  UNION

  SELECT bomaudit.balncode,   
         '',   
         bomaudit.baline,   
         bomaudit.badate,   
         bomaudit.bauser,   
         users.usname,   
         bomaudit.baaction,   
         bomaudit.bacomment  
    FROM bomaudit,   
         users  
   WHERE ( bomaudit.balncode = '' ) and  
         ( bomaudit.bauser = users.uscode ) and  
         ( ( bomaudit.babhcode = :item  ) AND  
         ( bomaudit.babhtype = :type ) ) AND 
         ( bomaudit.badate >= :datestart AND 
           bomaudit.badate <= :datestop )  
ORDER BY 4 DESC
```

## Colonnes
| Colonne |
|---------|
| bomaudit_balncode |
| items_itname |
| bomaudit_baline |
| bomaudit_badate |
| bomaudit_bauser |
| users_usname |
| bomaudit_baaction |
| bomaudit_bacomment |

