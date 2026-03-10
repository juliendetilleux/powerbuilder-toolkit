# zd_invoice_m1_subtotal_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode, 
         invoicehead.ihcust, 
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         invoicehead.ihtypinv, 
         invoicehead.ihtyptva,
         paymode.pmdescext,
         invoicehead.ihexpiry
    FROM invoicehead,
         paymode
   WHERE ( invoicehead.ihcode = :Selected_invoice ) and
         ( paymode.pmcode = invoicehead.ihpaymode )

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihcust |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| invoicehead_ihcurr |
| invoicehead_ihtypinv |
| invoicehead_ihtyptva |
| paymode_pmdescext |
| invoicehead_ihexpiry |

