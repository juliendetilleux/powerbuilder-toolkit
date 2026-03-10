# d_transreason_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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
   WHERE transactions.trcode = transreason.ticode AND 
		transreason.ticode IN ('AJST', 'AJDS', 'AJSM') AND
		transactions.tractiv = 'Y' AND
		transreason.tiactiv = 'Y' 

Union All /*HA2187*/

	Select transactions.trcode,
			 transactions.trname,
          'S',
			 transactions.trname,
			 transactions.tractiv
     From transactions
    Where transactions.trcode = 'OPBL' And
          transactions.tractiv = 'Y' 

 ORDER BY 1 ASC,   
          3 ASC   



```

## Colonnes
| Colonne |
|---------|
| transreason_ticode |
| transactions_trname |
| transreason_tiimp |
| transreason_tidesc |
| transreason_tiactiv |

