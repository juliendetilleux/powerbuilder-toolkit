# d_trf_lotitem

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
SELECT 
	stocks.stitem,   
   stocks.stlot,   
   stocks.stloc,   
   stocks.stqty,   
   stocks.stalloc,   
   stocks.stctrl, 
	items.itname,
	items.itstat1,
	items.itstat2,
	itstat1.imdesc,
	itstat2.isdesc,
	isnull (lots.lostatus, '?') as statuslot,
	Cast (0 as decimal (12,3) ) as qty2Bmoved,
	items.itum,
	items.itstdpur,
	lots.loorgcode,
	lots.loexpdat,
	locations.lcdesc
FROM 
	stocks
Left outer join items on stocks.stitem = items.itcode
Left outer join locations on stocks.stloc = locations.lccode
Left outer join itstat1 on itstat1.imcode = items.itstat1
Left outer join itstat2 on	itstat2.iscode = items.itstat1 AND itstat2.iscode2 = items.itstat2 
Left outer join lots on stocks.stlot = lots.locode
where
	items.itactiv = 'Y' AND
	locations.lcactiv = 'Y' AND
	stocks.stqty - stocks.stalloc > 0 AND
	items.itcode = :as_item AND
	locations.lccode <> :as_loc
	


```

## Colonnes
| Colonne |
|---------|
| stocks_stitem |
| stocks_stlot |
| stocks_stloc |
| stocks_stqty |
| stocks_stalloc |
| stocks_stctrl |
| items_itname |
| items_itstat1 |
| items_itstat2 |
| itstat1_imdesc |
| itstat2_isdesc |
| statuslot |
| qty2bmoved |
| items_itum |
| items_itstdpur |
| lots_loorgcode |
| lots_loexpdat |
| locations_lcdesc |

