# zmod_salline_comment_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcomment  
    FROM salline 
   WHERE salline.slcode = :ran_Order   AND
		salline.slline = :ran_line 

```

## Colonnes
| Colonne |
|---------|
| slcomment |

