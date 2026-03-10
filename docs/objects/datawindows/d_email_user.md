# d_email_user

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
select  usname as 'Mon nom', usmail as 'Mon Email', uscode as 'Mon code', ustitle as 'Ma fonction'
from users
where users.uscode LIKE ISNULL(:as_uscode, '%%')



```

## Colonnes
| Colonne |
|---------|
| mon_nom |
| mon_email |
| mon_code |
| ma_fonction |

