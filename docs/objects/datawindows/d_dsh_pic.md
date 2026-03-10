# d_dsh_pic

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
SELECT docref.drfile
FROM docref
WHERE docref.drrefc = :as_itcode
and drgroup2=-99

```

## Colonnes
| Colonne |
|---------|
| drfile |

