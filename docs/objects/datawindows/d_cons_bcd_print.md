# d_cons_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT packings.pkcode,   
         packings.pkname,   
         packings.pkactiv  
    FROM packings  
  WHERE packings.pkactiv = 'Y' 
ORDER BY packings.pkcode ASC   

```

## Colonnes
| Colonne |
|---------|
| pkcode |
| pkname |
| pkactiv |

