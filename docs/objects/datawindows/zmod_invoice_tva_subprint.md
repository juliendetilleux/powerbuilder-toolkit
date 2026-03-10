# zmod_invoice_tva_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT sum( iccurbasval) basval,   
         invoicecpt.ictva,   
         sum (invoicecpt.iccurtvaval) tvaval  
    FROM invoicecpt  
   WHERE invoicecpt.iccode = :ran_SelInv   
GROUP BY invoicecpt.ictva  
ORDER BY invoicecpt.ictva ASC   

```

## Colonnes
| Colonne |
|---------|
| basval |
| ictva |
| tvaval |

