# d_qry_stock_slow_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode itcode,   
         items.itname itname,   
         items.itstock currstok,   
         items.itum um,   
         items.itstock * items.itstdpur itcurrstokval,   
         items.itlastissue itlastused,
         (  SELECT max(histostock.hsdatim)  FROM histostock  
			   WHERE ( histostock.hsitem = items.itcode ) AND  
         			( histostock.hscode in ('RCPO', 'RCMO') )  ) itlastreceipt , 
         items.itstkavg itstockavg, 
         items.itstkused itstockused,
         items.itstkrot itstockrotation,
         items.itstkavg * items.itstdpur itavgstockval,
			items.itstdpur,
			items.itstat1,
			items.itstat2, 
         items.itstkused2 as itstockused2, 
         items.itstkused2 * items.itstdpur * 30.4 / nb_day2 as itstockusedval2,
		(select imdesc from itstat1 where imcode = items.itstat1) as imdesc,
		(select isdesc from itstat2 where iscode = items.itstat1 and iscode2 = items.itstat2) as isdesc,
		CAST((SELECT pmival
					FROM parameters
				WHERE pmcode = 'STOCKROT') as numeric(6,0)) as nb_day1,
		CAST((SELECT pmnval
					FROM parameters
				WHERE pmcode = 'STOCKROT') as numeric(6,0)) as nb_day2,
		items.itactiv
    FROM items  
   WHERE ( items.itcons = 'N' ) and (items.itactiv = 'Y' ) and (items.ittyp not in  ( 'U' ) )
order by items.itstat1,
			items.itstat2,
			itavgstockval desc
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| currstok |
| um |
| itcurrstokval |
| itlastused |
| itlastreceipt |
| itstockavg |
| itstockused |
| itstockrotation |
| itavgstockval |
| itstdpur |
| itstat1 |
| itstat2 |
| itstockused2 |
| itstockusedval2 |
| imdesc |
| isdesc |
| nb_day1 |
| nb_day2 |
| itactiv |

