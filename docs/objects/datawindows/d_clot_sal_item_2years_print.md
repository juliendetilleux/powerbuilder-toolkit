# d_clot_sal_item_2years_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adname,
		adresses.adcode,
		items.itname,
		items.itcode,

	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_a,4) AND
			01 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode AND 
		(:MultiCo = '*' OR :MultiCo = coalesce(clotfinitad.cdmccode ,'##########')) /*PHBO0058*/),0) as aca01,
	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_b,4) AND
			01 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode AND 
		(:MultiCo = '*' OR :MultiCo = coalesce(clotfinitad.cdmccode ,'##########')) /*PHBO0058*/),0) as bca01,

	
	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_a,4) AND
			02 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode AND 
		(:MultiCo = '*' OR :MultiCo = coalesce(clotfinitad.cdmccode ,'##########')) /*PHBO0058*/),0) as aca02,
	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_b,4) AND
			02 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode AND 
		(:MultiCo = '*' OR :MultiCo = coalesce(clotfinitad.cdmccode ,'##########')) /*PHBO0058*/),0) as bca02,


	isnull((SELECT sum(clotfinitad.cdval)
		 FROM clotfinitad
		WHERE left(clotfinitad.cdperiod,4) = left(:ciperiod_a,4) AND
			03 = right(clotfinitad.cdperiod,2) AND
			clotfinitad.cdtyp = 'S' AND
			clotfinitad.cdadid = adresses.adcode AND
			clotfinitad.cditem = items.itcode AND 
		(:MultiCo = '*' OR :MultiCo = coalesce(clotf
```

## Colonnes
| Colonne |
|---------|
| adname |
| adresses_adcode |
| items_itname |
| items_itcode |
| aca01 |
| bca01 |
| aca02 |
| bca02 |
| aca03 |
| bca03 |
| aca04 |
| bca04 |
| aca05 |
| bca05 |
| aca06 |
| bca06 |
| aca07 |
| bca07 |
| aca08 |
| bca08 |
| aca09 |
| bca09 |
| aca10 |
| bca10 |
| aca11 |
| bca11 |
| aca12 |
| bca12 |
| yeara |
| yearb |

