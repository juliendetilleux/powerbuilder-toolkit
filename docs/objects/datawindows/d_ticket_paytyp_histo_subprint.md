# d_ticket_paytyp_histo_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clname,   
         histocash.hhval  
    FROM histocash,   
         choiceline  
   WHERE histocash.hhpaytyp = choiceline.clline and  
         choiceline.clcode = 'CPTY' AND  
         histocash.hhseq = :ran_Order  
```

## Colonnes
| Colonne |
|---------|
| choiceline_clname |
| histocash_hhval |

