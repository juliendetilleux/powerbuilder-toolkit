# d_qry_shipped

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slline,   
         shipline.slitem,   
         shipline.sllot,   
         shipline.slqty,   
         lots.lolotctrl,   
         items.itum,   
         shiphead.shdate,   
         shiphead.shcode,   
         items.itname,   
         salline.slcustref,   
         shipline.slsalorder,   
         salline.slqtyord,   
         salline.slqtyreq,   
         salline.slsalval,   
         shipline.slinv,   
         shiphead.shcust,   
         adresses.adname,   
         adresses.adgrcust,   
         items.itstat1,   
         items.itstat2,   
         salhead.shsalesman,   
         shiphead.shshipto,   
         shipto.stdesc,   
         ( select List ( String (truckline.tlcode) + ' ' + Char(13))   //HA2209
					from truckline
				  where shipline.slline = truckline.tlshipline
					 AND shipline.slcode = truckline.tlshiphead) as truckcode ,   
         shipline.slsalline,   
         salline.slunitprice,   
         salline.slcomment,
			(SELECT sum(invoiceline.ilqty)
				FROM invoiceline
				WHERE invoiceline.ilsalorder = salline.slcode
					AND invoiceline.ilsalline = salline.slline
					AND invoiceline.iltype = 'A') as qty_antinvoice,
			(select count(*) 
				from shipline as ship 
				where ship.slsalorder = shipline.slsalorder 
					and ship.slsalline = shipline.slsalline) as nb_antinvoice ,
			salline.slsalghost,
			items.ittyp ,  
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2573*/
				isnull(shiphead.shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########') 
			ENDIF as mcdo
    FROM shipline,
         lots,   
         items,   
         shiphead,   
         salline,   
         salhead,   
         adresses,   
         shipto  
   WHERE ( shipline.sllot = lots.locode ) and  
         ( shiphead.shcode = shipline.slcode ) and  
         ( salline.s
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
| shiphead_shdate |
| shiphead_shcode |
| items_itname |
| salline_slcustref |
| shipline_slsalorder |
| salline_slqtyord |
| salline_slqtyreq |
| salline_slsalval |
| shipline_slinv |
| shiphead_shcust |
| adresses_adname |
| adresses_adgrcust |
| items_itstat1 |
| items_itstat2 |
| salhead_shsalesman |
| shiphead_shshipto |
| shipto_stdesc |
| ctruckcode |
| shipline_slsalline |
| salline_slunitprice |
| salline_slcomment |
| cqty_antinvoice |
| cnb_antinvoice |
| salline_slsalghost |
| items_ittyp |
| cmcdo |

