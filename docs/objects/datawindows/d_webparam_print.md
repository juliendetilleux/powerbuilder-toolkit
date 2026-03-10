# d_webparam_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT webcmnt.cmcode,   
         webcmnt.cmexpl,   
         isnull(webcmnt.cmdesc,'') as cmdesc,   
         isnull(webcmnt.cmdesc_nl,'') as cmdesc_nl,   
         isnull(webcmnt.cmdesc_uk,'') as cmdesc_uk
    FROM webcmnt   

```

## Colonnes
| Colonne |
|---------|
| cmcode |
| cmexpl |
| cmdesc |
| cmdesc_nl |
| cmdesc_uk |

