# dd_users_actif

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT users.uscode,   
         users.usname  
    FROM users  
   WHERE ( users.usactiv = 'Y' ) OR  
         ( users.uscode = '########' )   
ORDER BY users.usname ASC   

```

## Colonnes
| Colonne |
|---------|
| uscode |
| usname |

