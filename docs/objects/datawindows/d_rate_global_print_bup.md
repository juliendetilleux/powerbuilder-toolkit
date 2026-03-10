# d_rate_global_print_bup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,
         adresses.adname,
			adresses.adristcust,
			adresses.adristrate,
			adresses.adsalesman,
			salesman.smname  
    FROM adresses,
			salesman 
	WHERE adresses.adsalesman = salesman.smcode and
			adresses.adactiv = 'Y' AND  
         adresses.adcode not in ('#########C','#########R','#########S') 
ORDER BY salesman.smname, adresses.adname

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adristcust |
| adresses_adristrate |
| adresses_adsalesman |
| salesman_smname |

