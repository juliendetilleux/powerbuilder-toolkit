# d_salline_cmnt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT  salline.slcode ,
           salline.slline ,

           salline.slcomment
      FROM salline
     WHERE salline.slcode = :Selected_order and
           salline.slline = :Selected_line
```

## Colonnes
| Colonne |
|---------|
| slcode |
| slline |
| slcomment |

