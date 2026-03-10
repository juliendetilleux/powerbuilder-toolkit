# d_transreason

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT transreason.ticode,   
         transactions.trname,   
         transreason.tiimp,   
         transreason.tidesc,   
         transreason.tiactiv  
    FROM transactions,   
         transreason  
   WHERE ( transactions.trcode = transreason.ticode )   
ORDER BY transreason.ticode ASC,   
         transreason.tiimp ASC   

```

## Colonnes
| Colonne |
|---------|
| transreason_ticode |
| transactions_trname |
| transreason_tiimp |
| transreason_tidesc |
| transreason_tiactiv |

