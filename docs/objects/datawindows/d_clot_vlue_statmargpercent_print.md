# d_clot_vlue_statmargpercent_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
 SELECT distinct itstat1.imdesc,
			itstat2.isdesc,
			items.itname,
			
		(select if clotfinit.ciqty < 0 then 0 else clotfinit.cival endif
			from clotfinit
			where clotfinit.cityp = 'S' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(:tperiod1, 'YYYYMM')) as val0,
		(select if clotfinit.ciqty < 0 then 0 else clotfinit.ciqty endif
			from clotfinit
			where clotfinit.cityp = 'S' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(:tperiod1, 'YYYYMM')) as qty0,
		isnull((select clotfinit.cistdconf 
			from clotfinit 
			where clotfinit.cityp = 'I' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(:tperiod1, 'YYYYMM')),0) as stdconf0,
			
		(select if clotfinit.ciqty < 0 then 0 else clotfinit.cival endif
			from clotfinit
			where clotfinit.cityp = 'S' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(dateadd(month, 1, :tperiod1), 'YYYYMM')) as val1,
		(select if clotfinit.ciqty < 0 then 0 else clotfinit.ciqty endif
			from clotfinit
			where clotfinit.cityp = 'S' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(dateadd(month, 1, :tperiod1), 'YYYYMM')) as qty1,
		isnull((select clotfinit.cistdconf 
			from clotfinit 
			where clotfinit.cityp = 'I' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(dateadd(month, 1, :tperiod1), 'YYYYMM')),0) as stdconf1,
			
		(select if clotfinit.ciqty < 0 then 0 else clotfinit.cival endif
			from clotfinit
			where clotfinit.cityp = 'S' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(dateadd(month, 2, :tperiod1), 'YYYYMM')) as val2,
		(select if clotfinit.ciqty < 0 then 0 else clotfinit.ciqty endif
			from clotfinit
			where clotfinit.cityp = 'S' AND
				items.itcode = clotfinit.ciitem AND
				clotfinit.ciperiod = DATEFORMAT(dateadd(month, 2, :tperiod1), 'YYYYMM')) as qty2,
		is
```

## Colonnes
| Colonne |
|---------|
| itstat1_imdesc |
| itstat2_isdesc |
| items_itname |
| cval0 |
| cqty0 |
| cstdconf0 |
| cval1 |
| cqty1 |
| cstdconf1 |
| cval2 |
| cqty2 |
| cstdconf2 |
| cval3 |
| cqty3 |
| cstdconf3 |
| cval4 |
| cqty4 |
| cstdconf4 |
| cval5 |
| cqty5 |
| cstdconf5 |
| cval6 |
| cqty6 |
| cstdconf6 |
| cval7 |
| cqty7 |
| cstdconf7 |
| cval8 |
| cqty8 |
| cstdconf8 |
| cval9 |
| cqty9 |
| cstdconf9 |
| cval10 |
| cqty10 |
| cstdconf10 |
| cval11 |
| cqty11 |
| cstdconf11 |

