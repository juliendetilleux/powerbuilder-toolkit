# d_get_command

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
SELECT salline.slitem as 'slitem',
				 salline.slqtyreq - salline.slqtyreal - salline.slqtyalloc as 'qtyalloc',
				 salline.slshipto as 'slshipto',
				 salline.slcustref as 'slcustref',
				 salline.slstatus as 'slstatus',
				 salhead.shcust as 'shcust',
				 salhead.shautho as 'shautho',
				 adresses.adname as 'adname',
				 items.itname as 'itname',
				 items.itum as 'itum',
				 items.itbcauto as 'itbcauto',
				 items.itbcqty as 'itbcqty',
				 items.itstock as 'itstock',
				 (select (sum(isnull(stalloc,0)))  from stocks,locations where stitem = slitem and stloc = lccode and lcexp = 'Y' and lcactiv ='Y' and stqty <> 0) as 'italloc',
				 items.itbackflushexp as 'itbackflushexp',
				 items.itcat as 'itcat',
				 items.itdefaultlot as 'itdefaultlot',
				 items.itisumtarif as 'itisumtarif', 		/*os2691*/
				 items.itumtarif	as 'itumtarif',
                (select (sum(stqty)- sum(isnull(stalloc,0)))  from stocks,locations where stitem = itcode and stloc = lccode and lcexp = 'Y' and lcactiv ='Y' and stqty <> 0) as sum_dispo_total,
				slqtyalloc as qty_deja_alloc,
				items.itlot as itlot,
				 ( SELECT   progparam.ppvalue   from progparam    where ppcode   = 'BCDXCTRL1') as param_BCDXCTRL1,
 				(SELECT         ppdesc from progparam    where ppcode   = 'BCDXCTRL1') as param_BCDXCTRL1_cmnt

			
			FROM salline,
				  salhead,
				  adresses,
				  items
			WHERE items.itcode = salline.slitem AND
					adresses.adcode = salhead.shcust AND
					salhead.shcode = salline.slcode AND
					salline.slcode = :al_slcode AND
					salline.slline = :al_slline and
					shautho = 9
```

## Colonnes
| Colonne |
|---------|
| slitem |
| qtyalloc |
| slshipto |
| slcustref |
| slstatus |
| shcust |
| shautho |
| adname |
| itname |
| itum |
| itbcauto |
| itbcqty |
| itstock |
| italloc |
| itbackflushexp |
| itcat |
| itdefaultlot |
| itisumtarif |
| itumtarif |
| sum_dispo_total |
| salline_qty_deja_alloc |
| items_itlot |
| param_bcdxctrl1 |
| param_bcdxctrl1_cmnt |

