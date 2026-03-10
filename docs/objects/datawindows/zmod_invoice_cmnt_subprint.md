# zmod_invoice_cmnt_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcomment
    FROM invoicehead
   WHERE invoicehead.ihcode = :Selected_invoice

```

## Colonnes
| Colonne |
|---------|
| ihcomment |

