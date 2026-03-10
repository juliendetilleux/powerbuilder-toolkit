# d_clot_sal_profit_stum_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
   SELECT isnull((SELECT sum(closal.ciqty)
						FROM clotfinit closal
						WHERE closal.ciitem = items.itcode
							AND closal.ciperiod >= :Sel_period
							AND closal.ciperiod <= :Sel_period2
							AND closal.cityp = 'S'),0) as vclosal,
			isnull((SELECT sum(clot.ciqty)
								FROM clotfinit clot
								WHERE clot.ciitem = items.itcode
									AND clot.ciperiod >= :Sel_period
									AND clot.ciperiod <= :Sel_period2
									AND clot.cityp = 'T'),0) as vclot,
			isnull((SELECT sum(cloext.ciqty)
							FROM clotfinit cloext
							WHERE cloext.ciitem = items.itcode
								AND cloext.ciperiod >= :Sel_period
								AND cloext.ciperiod <= :Sel_period2
								AND cloext.cityp in ( 'X', 'L')),0) as vcloext,
			sales.ciitem item,   
         items.itname item_name, 
         items.itstat1 item_stat1, 
         ( select imdesc from itstat1 where imcode = items.itstat1 ) item_itstat1_name, 
         items.itstat2 item_stat2, 
         ( select isdesc from itstat2 where iscode = items.itstat1 and iscode2 = items.itstat2 ) item_itstat2_name, 
         sum(sales.ciqty) sale_qty,   
         sum(sales.cival) sale_val,   
         if sum(if sales.ciqty is null or sales.ciqty = 0 or vclosal = 0 then 0 else (sales.ciqty / 
					vclosal
				) * sales.cistdconf endif) = 0 then avg(sales.cistdconf)
			else
				sum(if sales.ciqty is null or sales.ciqty = 0 or vclosal = 0 then 0 else (sales.ciqty / 
					vclosal
				) * sales.cistdconf endif)
			endif as	 sale_stdval, 

			if sum(if sales.ciqty is null or sales.ciqty = 0 or vclosal = 0 then 0 else (sales.ciqty / 
					vclosal
				) 
				* 
				isnull(( select stock.cistdconf
							from clotfinit as stock
							where stock.ciitem = items.itcode and
								stock.ciperiod = sales.ciperiod and 
								stock.cityp = 'I'), 0 ) endif) = 0 then 
														avg(isnull(( select stock.cistdconf
							from clotfinit as stock
							where stock.ciitem = items.itcode and
								sto
```

## Colonnes
| Colonne |
|---------|
| cvclosal |
| cvclot |
| cvcloext |
| clotfinit_item |
| items_item_name |
| items_item_stat1 |
| citem_itstat1_name |
| items_item_stat2 |
| citem_itstat2_name |
| clotfinit_sale_qty |
| clotfinit_sale_val |
| clotfinit_sale_stdval |
| clotfinit_item_stdval |
| ctruck_stdval |
| cxtra_stdval |
| itumusr |
| itconvusr |
| itumusrmax |
| itumusrmin |

