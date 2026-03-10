# d_shipline_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slline,   
         shipline.slitem,   
         shipline.sllot,   
         shipline.slqty,   
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
			items.ittyp,
			isnull(shipline.slinv, 'N' ) as slinv ,
			( if  isnull(shipline.slinvno, 0 ) = 0 then 0 else ( select ihcodemc from invoicehead where ihcode = shipline.slinvno    )  endif )   as slinvno ,
		items.itdefaultlot
 
    FROM shipline,   
         lots,   
         items  
   WHERE ( shipline.sllot = lots.locode ) and  
         ( shipline.slitem = items.itcode ) and  
         ( shipline.slcode = :Selected_ship )   
ORDER BY shipline.slline ASC   

```

## Colonnes
| Colonne |
|---------|
| slline |
| slitem |
| sllot |
| slqty |
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
| cslinv |
| cslinvno |
| items_itdefaultlot |

