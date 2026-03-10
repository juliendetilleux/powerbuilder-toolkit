# d_bomaudit_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT bomaudit.balncode,   
         items.itname,
         items.itum, 
         methode.itname,      
         bomaudit.baline,   
         bomaudit.badate,   
         bomaudit.bauser,   
         users.usname,   
         bomaudit.baaction,   
         bomaudit.bacomment  
    FROM bomaudit,   
         items, 
         items as methode,    
         users  
   WHERE ( bomaudit.balncode = items.itcode ) and 
         ( methode.itcode = :item ) and 
         ( bomaudit.bauser = users.uscode ) and  
         ( ( bomaudit.babhcode = :item  ) AND  
         ( bomaudit.babhtype = :type ) ) AND
         ( bomaudit.badate >= :datestart AND 
           bomaudit.badate <= :datestop )

  UNION

  SELECT bomaudit.balncode,   
         'Entête de la méthode', 
         '',    
         methode.itname,
         bomaudit.baline,   
         bomaudit.badate,   
         bomaudit.bauser,   
         users.usname,   
         bomaudit.baaction,   
         bomaudit.bacomment  
    FROM bomaudit,   
         items as methode,  
         users  
   WHERE ( bomaudit.balncode = '' ) and 
         ( methode.itcode = :item ) and  
         ( bomaudit.bauser = users.uscode ) and  
         ( ( bomaudit.babhcode = :item  ) AND  
         ( bomaudit.babhtype = :type ) ) AND 
         ( bomaudit.badate >= :datestart AND 
           bomaudit.badate <= :datestop )  
ORDER BY 6 DESC
```

## Colonnes
| Colonne |
|---------|
| bomaudit_balncode |
| itname |
| itum |
| items_itname |
| bomaudit_baline |
| bomaudit_badate |
| bomaudit_bauser |
| users_usname |
| bomaudit_baaction |
| bomaudit_bacomment |

