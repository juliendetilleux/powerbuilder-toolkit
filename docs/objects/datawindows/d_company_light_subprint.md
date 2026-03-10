# d_company_light_subprint

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
    FROM adresses
  WHERE adresses.adcode = '##########' 
```

## Colonnes
| Colonne |
|---------|
| adresses_adlegalform |
| adresses_adname |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |

