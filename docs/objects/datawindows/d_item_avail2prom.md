# d_item_avail2prom

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT 1 typ,
         (items.itstock - items.italloc - ( Select Isnull( Sum( lots.lostock - lots.loalloc), 0)
															 From lots
															Where lots.loitem = itcode And
																	( lots.lostatus not in ( 'A', 'P', 'Q' ) Or lots.loexpdat < Now() ) ) )
		-  isnull (( SELECT sum(stocks.stqty - stocks.stalloc) /*os1448*/
					 FROM lots, stocks, locations
					WHERE stocks.stlot = lots.locode and  
							stocks.stitem = items.itcode and 
							stocks.stqty <> 0 and 
							locations.lccode = stocks.stloc and 
							( locations.lcmrpexcl = 'Y' OR lots.loexcmrp = 'Y' /*os2641*/)  and
							lots.lostatus <> 'R' and 
							lots.loexpdat > today() ), 0 ) as qty,
         date('2000-1-1') datep,
         0 ordno,
         0 ordlin,
         1 coeff
    FROM items  
   WHERE items.itcode = :Sel_item 
UNION ALL 
  SELECT 2,
         (salline.slqtyreq - salline.slqtyreal - salline.slqtyalloc),
         salline.sldatship,
         salline.slcode,
         salline.slline,
         -1
    FROM salline, salhead  
   WHERE ( salline.slitem = :sel_item ) AND  
         ( salline.slcode = salhead.shcode ) and 
         ( salline.slstatus < '6' ) and 
         ( salhead.shautho > '0' ) and
		salhead.shstatus < 6  //EC0239
UNION ALL 
  SELECT 3,
			(mfghead.mhreqqty - mfghead.mhmfgqty),
         mfghead.mhreqdat,
         mfghead.mhcode,
         0,
         1
    FROM mfghead  
   WHERE ( mfghead.mhitem = :sel_item ) AND  
         ( mfghead.mhstatus < '8' ) AND  
         ( mfghead.mhtype in ( 'R', 'M' , 'S' ) ) and
			(mfghead.mhreqqty - mfghead.mhmfgqty) > 0
UNION ALL 
  SELECT 3,
         (mfgcoitem.mcreqty - mfgcoitem.mcmfgqty),
         mfghead.mhreqdat,
         mfghead.mhcode,
         0,
         1
    FROM mfgcoitem,   
         mfghead  
   WHERE ( mfgcoitem.mccode = mfghead.mhcode ) and  
         ( mfgcoitem.mcitem = :Sel_item ) AND  
         ( mfghead.mhstatus < '8' ) AND  
         ( mfg
```

## Colonnes
| Colonne |
|---------|
| typ |
| qty |
| datep |
| ordno |
| ordlin |
| coeff |

