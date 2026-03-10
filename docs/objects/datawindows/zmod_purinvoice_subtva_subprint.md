# zmod_purinvoice_subtva_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT sum( purinvcpt.pccurbasval) basval,   
         purinvcpt.pctva,   
         sum (purinvcpt.pccurtvaval) tvaval  
    FROM purinvcpt  
   WHERE purinvcpt.pccode = :ran_PurInvoice  
GROUP BY purinvcpt.pctva  
ORDER BY purinvcpt.pctva ASC   
```

## Colonnes
| Colonne |
|---------|
| basval |
| pctva |
| ctvaval |

