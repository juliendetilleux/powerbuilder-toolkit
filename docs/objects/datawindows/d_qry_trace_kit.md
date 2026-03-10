# d_qry_trace_kit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
SELECT salhead.shdatreq,  
		salhead.shcode,  
		salhead.shcust,  
		adresses.adname,  
		salhead.shcustref,    
		shipline.sllot, 
		salline.slitem, 
		items.itname, 
		salline.slline, 
		salline.slqtyreq, 
		shipline.slqty,   
		lots.lolotctrl, 
		(Select first count(*)  
			From salline as sals  
			Where sals.slcode = shcode And  
				sals.slsalghost = salline.slline) As kit, 
		salline.slsalghost 
 FROM salhead,  
		salline,  
		shipline, 
		items, 
		adresses,   
		lots 
WHERE salline.slcode = salhead.shcode AND  
		shipline.slsalorder = salline.slcode AND 
		shipline.slsalline = salline.slline AND 
		items.itcode = salline.slitem AND 
		adresses.adcode = salhead.shcust AND 
		lots.locode = shipline.sllot AND 
		salline.slcode = :al_salhead AND
		salline.slsalghost = :al_salline AND
		shipline.slcode = :al_shiphead 
  
  ORDER BY salhead.shcustref,
			salhead.shcode,
			salline.slline


```

## Colonnes
| Colonne |
|---------|
| histostock_hsdatim |
| salhead_shcode |
| salhead_shcust |
| adresses_adname |
| salhead_shcustref |
| lot |
| histostock_hsitem |
| items_itname |
| salline_slline |
| histostock_hsqty |
| shipline_slqty |
| lots_lolotctrl |
| ckit |
| salline_slsalghost |

