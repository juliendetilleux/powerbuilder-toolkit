# zz_invoice_tva_af_fc_subprint_fr

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoicetva.ittva,   
         invoicetva.ittvaval  ,
			(select cuconv from currencies where cucode = 'CDF') as conversion

    FROM invoicetva  
   WHERE invoicetva.itcode = :Selected_invoice    

```

## Colonnes
| Colonne |
|---------|
| ittva |
| ittvaval |
| conversion |

