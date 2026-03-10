# zd_adresses_backpage_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
			adresses.adlegalform,
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc  
    FROM adresses   
 WHERE adcode = '##########'
```

## Colonnes
| Colonne |
|---------|
| adname |
| adlegalform |
| adadr1 |
| adzip |
| adloc |

