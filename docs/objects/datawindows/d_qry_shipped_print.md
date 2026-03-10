# d_qry_shipped_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
			salline.slunitprice,  
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2573*/
				isnull(shiphead.shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########') 
			ENDIF as mcdo , 
         adressesmcdo.adname   
    FROM shipline,   
         lots,   
         items,   
         shiphead,   
         salline,   
         adresses,   
         salhead,
         shipto , 
         adresses as adressesmcdo   
   WHERE ( shipline.sllot = lots.locode ) and  
         ( shiphead.shcode = shipline.slcode ) and  
         ( salline.slitem = items.itcode ) and  
         ( salline.slcode = shipline.slsalorder ) and  
         ( salline.slline = shipline.slsalline ) and  
         ( shiphead.shcust = adresses.adcode ) and  
         ( shipto.stcode = shiphead.shcust ) and  
         ( shipto.stseq = shiphead.shshipto ) and  
         ( salhead.shcode = salline.slcode ) and  
         ( ( shiphead.shdate >= :alimit ) AND  
         ( shiphead.shdate < :anow  ) )    
     AND adressesmcdo.adcode = mcdo  
ORDER BY mcdo ASC , shiphead.shdate ASC   

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
| salline_slunitprice |
| cmcdo |
| adresses_adname |

