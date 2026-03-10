# d_2per_saleman_compg2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select salesman.smcode,
		 salesman.smname,
		 adresses.adcode  
  from salesman,
		 adresses
 where adresses.adactiv = 'Y' and
		 adresses.adcust = 'Y' and
		adresses.adsalesman = salesman.smcode 
order by salesman.smcode,
		 adresses.adcode
		 



```

## Colonnes
| Colonne |
|---------|
| smcode |
| salesman_smname |
| adresses_adcode |

