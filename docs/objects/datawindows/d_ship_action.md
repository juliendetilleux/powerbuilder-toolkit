# d_ship_action

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcode,
			adresses.adname,
			shipline.slline,   
         shipline.slitem,   
         shipline.sllot,   
         shipline.slqty,   
         lots.lolotctrl,   
         items.itum,   
         shipline.slsalorder,   
         shipline.slsalline,   
         items.itname,   
         shipline.slqcip,   
         lots.losampleid,   
         lots.loorgcode,
			(SELECT FIRST salline.slsalghost
				FROM salline
				WHERE salline.slcode = shipline.slsalorder AND
					salline.slline = shipline.slsalline AND
					salline.slprintghost = 'N') as linekit ,
			(SELECT FIRST salline.slsalghost
				FROM salline
				WHERE salline.slcode = shipline.slsalorder AND
					salline.slline = shipline.slsalline) as slsalghost,
			items.ittyp 
    FROM shipline,   
			shiphead,
			adresses,
         lots,   
         items  
   WHERE ( shipline.sllot = lots.locode ) and  
         ( shipline.slitem = items.itcode ) and  
         ( shipline.slcode = shiphead.shcode ) and  
			( shiphead.shcust = adresses.adcode ) and
         ( shipline.slaction = :Selected_action )   
ORDER BY shiphead.shcode,
			shipline.slline ASC   

```

## Colonnes
| Colonne |
|---------|
| shiphead_shcode |
| adresses_adname |
| slline |
| slitem |
| sllot |
| slqty |
| lots_lolotctrl |
| items_itum |
| shipline_slsalorder |
| shipline_slsalline |
| items_itname |
| shipline_slqcip |
| lots_losampleid |
| lots_loorgcode |
| clinekit |
| cslsalghost |
| items_ittyp |

