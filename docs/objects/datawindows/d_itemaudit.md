# d_itemaudit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT itemaudit.iaitcode,   
         itemaudit.iaaudit,   
         itemaudit.iauser,   
         itemaudit.iadate,   
         users.usname  
    FROM itemaudit,   
         users   
  WHERE itemaudit.iaitcode = :as_item AND
		itemaudit.iauser = users.uscode
 ORDER BY itemaudit.iadate desc
```

## Colonnes
| Colonne |
|---------|
| itemaudit_iaitcode |
| itemaudit_iaaudit |
| itemaudit_iauser |
| itemaudit_iadate |
| users_usname |

