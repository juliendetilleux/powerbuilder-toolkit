# d_email_list_from_users

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
select uscode, usname, usmail from users where usmail IN (SELECT limacode from linkmaus
where liuscode = :as_uscode ORDER BY limain DESC)
AND users.usactiv = 'Y'
```

## Colonnes
| Colonne |
|---------|
| uscode |
| usname |
| usmail |

