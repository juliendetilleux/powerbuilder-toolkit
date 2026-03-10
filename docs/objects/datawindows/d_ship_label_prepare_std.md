# d_ship_label_prepare_std

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adname,  
		items.itcode,   
		lots.locode,   
		shipline.slqty, 
		items.itname,   
		items.itum,   
		salhead.shcode,   
		salhead.shcust,   
		salline.sldatship,   
		salline.slline,   
		salline.sluomconv,   
		salline.sluomord,   
		items.itdefaultlot,   
		lots.loexpdat,   
		items.itean, 
		items.iteanref, 
		items.itean2, 
		items.itean2ref, 
		items.itean2conv, 
		items.itean3, 
		items.itean3ref, 
		items.itean3conv,
		cast(null as numeric(3,0)) as nb,
		isnull((SELECT parameters.pmcval
			FROM parameters
			WHERE parameters.pmcode = 'REMREF'),'R')			as remref,
		items.itshowetiq,
		shipline.slcode,
		shipline.slline 	   
 FROM shipline 
		JOIN salline ON salline.slcode = shipline.slsalorder AND
							salline.slline = shipline.slsalline
		JOIN salhead ON salline.slcode = salhead.shcode
		JOIN items ON salline.slitem = items.itcode
		JOIN adresses ON salhead.shcust = adresses.adcode
		JOIN lots ON lots.locode = shipline.sllot
WHERE shipline.slcode = :al_shiphead 
    
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| items_itcode |
| lots_locode |
| shipline_slqty |
| items_itname |
| items_itum |
| salhead_shcode |
| salhead_shcust |
| salline_sldatship |
| salline_slline |
| salline_sluomconv |
| salline_sluomord |
| items_itdefaultlot |
| lots_loexpdat |
| items_itean |
| items_iteanref |
| items_itean2 |
| items_itean2ref |
| items_itean2conv |
| items_itean3 |
| items_itean3ref |
| items_itean3conv |
| cnb |
| remref |
| itshowetiq |
| shipline_slcode |
| shipline_slline |

