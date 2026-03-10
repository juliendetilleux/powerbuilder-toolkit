# d_itstat1web_items_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1web.iwcode,  
         itstat1web.iwdesc  
    FROM itstat1web
   WHERE ( itstat1web.iwlang = :ras_lang ) 

```

## Colonnes
| Colonne |
|---------|
| iwcode |
| itstat1web_iwdesc |

