# d_stat_biannual_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
SELECT distinct clotfmain.cdadid,
	adresses.adname,
	left(:as_date,4) as period1,
	CAST( (CAST(left(:as_date,4) as numeric(4,0)) + 1) as char(4)) as period2,	

	isnull((SELECT sum(closal.cdqty)
			FROM clotfinitad closal
			WHERE closal.cdperiod = period1 + '01'
				AND closal.cdadid = clotfmain.cdadid /*and clotfmain.cditem = closal.cditem */
				AND closal.cdtyp = 'S'),0) as P1_01qty,
	isnull((select sum(clotfinitad.cdval)
			 from clotfinitad
		 where clotfinitad.cdadid = clotfmain.cdadid and
				clotfinitad.cdperiod = period1 + '01' and /*clotfmain.cditem = clotfinitad.cditem and*/
				clotfinitad.cdtyp = 'S' ),0) as P1_01val,	
	(select (if sum(if sales.cdqty is null or sales.cdqty = 0 or P1_01qty  = 0 then 
						0 
					else 
						(sales.cdqty / P1_01qty
				) * (sales.cdval / sales.cdqty) endif) = 0 then avg(IF sales.cdqty = 0 THEN 0 ELSE sales.cdval / sales.cdqty ENDIF)
			else
				sum(if sales.cdqty is null or sales.cdqty = 0 or P1_01qty = 0 then 0 
						else 
							(sales.cdqty / 	P1_01qty		) * (sales.cdval / sales.cdqty) endif)
			endif	//as sale_stdval 
		-
			if sum(if sales.cdqty is null or sales.cdqty = 0 or P1_01qty = 0 then
						0 
					else 
						(sales.cdqty / P1_01qty) 	* 	isnull(( select stock.cistdconf
																											from clotfinit as stock
																											where stock.ciitem = sales.cditem and
																												stock.ciperiod = sales.cdperiod and 
																												stock.cityp = 'I'), 0 ) 
					endif) = 0 then 
				avg(isnull(( select stock.cistdconf
									from clotfinit as stock
									where stock.ciitem = sales.cditem and
										stock.ciperiod = sales.cdperiod and 
											stock.cityp = 'I'), 0 ))
			else
				sum(if sales.cdqty is null or sales.cdqty = 0 or P1_01qty = 0 then 
							0 
						else (sales.cdqty / P1_01qty) 	* isnull(( select stock.cistdconf
																										from clotfinit as stock
																										where stoc
```

## Colonnes
| Colonne |
|---------|
| clotfinitad_cdadid |
| adresses_adname |
| period1 |
| period2 |
| p1_01qty |
| p1_01val |
| p1_01marge |
| p1_02qty |
| p1_02val |
| p1_02marge |
| p1_03qty |
| p1_03val |
| p1_03marge |
| p1_04qty |
| p1_04val |
| p1_04marge |
| p1_05qty |
| p1_05val |
| p1_05marge |
| p1_06qty |
| p1_06val |
| p1_06marge |
| p1_07qty |
| p1_07val |
| p1_07marge |
| p1_08qty |
| p1_08val |
| p1_08marge |
| p1_09qty |
| p1_09val |
| p1_09marge |
| p1_10qty |
| p1_10val |
| p1_10marge |
| p1_11qty |
| p1_11val |
| p1_11marge |
| p1_12qty |
| p1_12val |
| p1_12marge |
| p2_01qty |
| p2_01val |
| p2_01marge |
| p2_02qty |
| p2_02val |
| p2_02marge |
| p2_03qty |
| p2_03val |
| p2_03marge |
| p2_04qty |
| p2_04val |
| p2_04marge |
| p2_05qty |
| p2_05val |
| p2_05marge |
| p2_06qty |
| p2_06val |
| p2_06marge |
| p2_07qty |
| p2_07val |
| p2_07marge |
| p2_08qty |
| p2_08val |
| p2_08marge |
| p2_09qty |
| p2_09val |
| p2_09marge |
| p2_10qty |
| p2_10val |
| p2_10marge |
| p2_11qty |
| p2_11val |
| p2_11marge |
| p2_12qty |
| p2_12val |
| p2_12marge |

