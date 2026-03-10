# d_truckef_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adlegalform,
	    adresses.adname,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc
    FROM adresses,   
         truckref   
  WHERE adresses.adcode = truckref.tradcode AND
	    truckref.trinout = 'O' AND
  	    truckref.trtyp = :as_trtyp  
```

## Colonnes
| Colonne |
|---------|
| adresses_adlegalform |
| adresses_adname |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |

