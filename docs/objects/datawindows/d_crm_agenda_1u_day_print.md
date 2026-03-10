# d_crm_agenda_1u_day_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT distinct users.usname
    FROM users
   WHERE ( users.uscode = :user_code )

```

## Colonnes
| Colonne |
|---------|
| usname |

