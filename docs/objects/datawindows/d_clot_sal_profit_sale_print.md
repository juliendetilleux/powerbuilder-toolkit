# d_clot_sal_profit_sale_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT isnull((SELECT sum(closal.cdqty)
						FROM clotfinitad closal
						WHERE closal.cditem = items.itcode
							AND closal.cdperiod >= :Sel_period
							AND closal.cdperiod <= :Sel_period2
							AND closal.cdadid = sales.cdadid 
							AND closal.cdtyp = 'S'),0) as vclosal,
			isnull((SELECT sum(clot.cdqty)
								FROM clotfinitad clot
								WHERE clot.cditem = items.itcode
									AND clot.cdperiod >= :Sel_period
									AND clot.cdperiod <= :Sel_period2
									AND clot.cdadid = sales.cdadid
									AND clot.cdtyp = 'T'),0) as vclot,
			isnull((SELECT sum(cloext.ciqty)
							FROM clotfinit cloext
							WHERE cloext.ciitem = items.itcode
								AND cloext.ciperiod >= :Sel_period
								AND cloext.ciperiod <= :Sel_period2
								AND cloext.cityp in ('X', 'L')),0) as vcloext,
			sales.cditem item,   
         items.itname item_name, 
         items.itstat1 item_stat1, 
			adresses.adname custname, 
         ( select imdesc from itstat1 where imcode = items.itstat1 ) item_itstat1_name, 
         items.itstat1 item_stat2, 
         ( select isdesc from itstat2 where iscode = items.itstat1 and iscode2 = items.itstat2 ) item_itstat2_name, 
         sales.cdadid  customer_id, 
         sum(sales.cdqty) sale_qty,   
         sum(sales.cdval)  sale_val,   
			
			if sum(if sales.cdqty is null or sales.cdqty = 0 or vclosal = 0 then 0 else (sales.cdqty / 
					vclosal
				) * (sales.cdval / sales.cdqty) endif) = 0 then avg((sales.cdval / sales.cdqty))
			else
				sum(if sales.cdqty is null or sales.cdqty = 0 or vclosal = 0 then 0 else (sales.cdqty / 
					vclosal
				) * (sales.cdval / sales.cdqty) endif)
			endif as sale_stdval, 

         if sum(if sales.cdqty is null or sales.cdqty = 0 or vclosal = 0 then 0 else (sales.cdqty / 
					vclosal
				) 
				* 
				isnull(( select stock.cistdconf
							from clotfinit as stock
							where stock.ciitem = items.itcode and
								stock.ciperiod = sales.cdperiod a
```

## Colonnes
| Colonne |
|---------|
| cvclosal |
| cvclot |
| cvcloext |
| clotfinitad_item |
| items_item_name |
| items_item_stat1 |
| adresses_custname |
| citem_itstat1_name |
| items_item_stat2 |
| citem_itstat2_name |
| clotfinitad_customer_id |
| clotfinitad_sale_qty |
| clotfinitad_sale_val |
| clotfinitad_sale_stdval |
| clotfinit_item_stdval |
| ctruck_stdval |
| clotfinit_xtra_stdval |
| adresses_adsalesman |
| csalesmaname |

