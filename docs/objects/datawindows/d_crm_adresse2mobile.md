# d_crm_adresse2mobile

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   adresses.adzip,   adresses.adloc,   adresses.adtel,    adresses.adtel2, 
			 ( select chname from choices where chtype = 'CIV1' and chcode = contacts.ctciv1 ) , contacts.ctfirstname,   contacts.ctname,   contacts.cttel,   contacts.ctgsm 
	FROM {oj adresses LEFT OUTER JOIN contacts ON adresses.adcode = contacts.ctadcode} 
where adactiv = 'Y' and isnull( contacts.ctactiv , 'Y') = 'Y' and adcode not in ( '#########C'  ,  '#########R'  ,  '#########S'   )


```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adzip |
| adresses_adloc |
| adresses_adtel |
| adresses_adtel2 |
| chname |
| contacts_ctfirstname |
| contacts_ctname |
| contacts_cttel |
| contacts_ctgsm |

