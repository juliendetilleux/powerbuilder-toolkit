# d_shipline_return_sel

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
         lots.lolotctrl,   
         items.itum,   
         items.itlot,   
         items.itstock,   
         lots.locode,   
         items.itloc,   
         lots.lostock,   
         items.itstdpur,   
         shipline.slsalorder,   
         shipline.slsalline,   
         shipline.slinv,   
         items.itname,   
         shipline.slinvno,   
         items.itqc,   
         items.itval,   
         lots.loexpdat,   
         lots.loorgcode,
			(SELECT salline.slprintghost
				FROM salline
				WHERE salline.slcode = shipline.slsalorder 
					AND salline.slline = shipline.slsalline ) as slprintghost,
			items.ittyp ,
		items.itdefaultlot,
		(SELECT salline.slcustref
				FROM salline
				WHERE salline.slcode = shipline.slsalorder 
					AND salline.slline = shipline.slsalline ) ,
		if (select count(*) from ssccline where slin = 'N' and sllot = shipline.sllot and 
			( isnull(slshiphead, shipline.slcode) = shipline.slcode and isnull(slshipline, shipline.slline) = shipline.slline ) ) = 1 THEN
			(select first ssccline.slcode from ssccline where slin = 'N' and sllot = shipline.sllot and 
				( isnull(slshiphead, shipline.slcode) = shipline.slcode and isnull(slshipline, shipline.slline) = shipline.slline ) )
		ELSE
			''
		ENDIF as sscc,
		shipline.slcustpc
    FROM shipline,   
         lots,   
         items  
   WHERE ( shipline.sllot = lots.locode ) and  
         ( shipline.slitem = items.itcode ) and  
         ( shipline.slcode = :Selected_ship ) and
 	   ( slprintghost is null or slprintghost <> 'N') 
order by shipline.slline

```

## Colonnes
| Colonne |
|---------|
| slline |
| slitem |
| sllot |
| slqty |
| lots_lolotctrl |
| items_itum |
| items_itlot |
| items_itstock |
| lots_locode |
| items_itloc |
| lots_lostock |
| items_itstdpur |
| shipline_slsalorder |
| shipline_slsalline |
| shipline_slinv |
| items_itname |
| shipline_slinvno |
| items_itqc |
| items_itval |
| lots_loexpdat |
| lots_loorgcode |
| cslprintghost |
| items_ittyp |
| items_itdefaultlot |
| slcustref |
| sscc |
| shipline_slcustpc |

