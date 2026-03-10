# dd_preparator

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT users.uscode,   
         users.usname,
	    users.usactiv
    FROM users  
   WHERE users.uscode = '########' OR
	isnull(users.usprep, 'N') = 'Y'  
ORDER BY users.usname ASC   

```

## Colonnes
| Colonne |
|---------|
| uscode |
| usname |
| usactiv |

