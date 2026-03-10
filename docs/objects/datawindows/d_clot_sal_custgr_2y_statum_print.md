# d_clot_sal_custgr_2y_statum_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adname,
		adresses.adcode,
		adresses.adgrcust,
		items.itname,
		items.itcode,

	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_a,4) AND
			01 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode),0) as aca01,
	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_b,4) AND
			01 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode),0) as bca01,

	isnull((SELECT sum(clotfinitad.cdqty) 
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_a,4) AND
			01 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode) * isnull(itconvusr,1),0) as auvc01,
	isnull((SELECT sum(clotfinitad.cdqty)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_b,4) AND
			01 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode) * isnull(itconvusr,1),0) as buvc01,

	
	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_a,4) AND
			02 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode),0) as aca02,
	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_b,4) AND
			02 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode),0) as bca02,

	isnull((SELECT sum(clotfinitad.cdqty) 
		 FROM clotfinita
```

## Colonnes
| Colonne |
|---------|
| adname |
| adresses_adcode |
| adresses_adgrcust |
| items_itname |
| items_itcode |
| aca01 |
| bca01 |
| cauvc01 |
| cbuvc01 |
| aca02 |
| bca02 |
| cauvc02 |
| cbuvc02 |
| aca03 |
| bca03 |
| cauvc03 |
| cbuvc03 |
| aca04 |
| bca04 |
| cauvc04 |
| cbuvc04 |
| aca05 |
| bca05 |
| cauvc05 |
| cbuvc05 |
| aca06 |
| bca06 |
| cauvc06 |
| cbuvc06 |
| aca07 |
| bca07 |
| cauvc07 |
| cbuvc07 |
| aca08 |
| bca08 |
| cauvc08 |
| cbuvc08 |
| aca09 |
| bca09 |
| cauvc09 |
| cbuvc09 |
| aca10 |
| bca10 |
| cauvc10 |
| cbuvc10 |
| aca11 |
| bca11 |
| cauvc11 |
| cbuvc11 |
| aca12 |
| bca12 |
| cauvc12 |
| cbuvc12 |
| yeara |
| yearb |

