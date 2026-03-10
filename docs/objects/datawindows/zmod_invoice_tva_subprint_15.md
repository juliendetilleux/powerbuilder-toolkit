# zmod_invoice_tva_subprint_15

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
 SELECT sum( iccurbasval) basval,   
         invoicecpt.ictva,   
         sum (invoicecpt.iccurtvaval) tvaval,  
         (select sum(ilsalval)-icbasval from invoiceline where invoiceline.ilcode=invoicecpt.iccode and iltype='I' group by icbasval) as triplenet
    FROM invoicecpt  
   WHERE invoicecpt.iccode = :ran_SelInv  
GROUP BY invoicecpt.ictva, iccode, icbasval  
ORDER BY invoicecpt.ictva ASC
```

## Colonnes
| Colonne |
|---------|
| basval |
| ictva |
| tvaval |
| triplenet |

