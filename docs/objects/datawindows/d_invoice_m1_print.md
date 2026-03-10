# d_invoice_m1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode, 
         invoicehead.ihcust, 
         invoicehead.ihdate, 
         invoicehead.ihtvaref,
         invoicehead.ihtypinv,
         invoicehead.ihexpiry,
			invoicehead.ihcomment
    FROM invoicehead
   WHERE invoicehead.ihcode = :Selected_invoice

```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihcust |
| ihdate |
| ihtvaref |
| ihtypinv |
| ihexpiry |
| ihcomment |

