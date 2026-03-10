# d_qry_item_order

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT 1 typ,
         (select sum(lostock - loalloc) from lots where lots.loitem = items.itcode and lots.lost like :as_lotwc)  qty,
         date('2000-1-1') datep,
         0 ordno,
         0 ordlin,
         1 coeff,
         '' adname
    FROM items  
   WHERE items.itcode = :Sel_item
	UNION all 
  SELECT 2,
         (salline.slqtyreq - salline.slqtyreal - salline.slqtyalloc),
         salline.sldatship,
         salline.slcode,
         salline.slline,
         -1,
         ( select adname from adresses where adcode = salhead.shcust ) 
    FROM salline, salhead  
   WHERE ( salline.slitem = :sel_item ) AND  
         ( salline.slcode = salhead.shcode ) and 
         ( salline.slstatus < '6' ) and 
         ( salhead.shautho > '0' )
UNION all 
  SELECT 3,
			(mfghead.mhreqqty - mfghead.mhmfgqty),
         mfghead.mhreqdat,
         mfghead.mhcode,
         0,
         1,
         ''
    FROM mfghead  
   WHERE ( mfghead.mhitem = :sel_item ) AND  
         ( mfghead.mhstatus < '8' ) AND  
         ( mfghead.mhtype in ( 'R', 'M' , 'S' ) )
UNION all 
  SELECT 3,
         (mfgcoitem.mcreqty - mfgcoitem.mcmfgqty),
         mfghead.mhreqdat,
         mfghead.mhcode,
         0,
         1,
         ''
    FROM mfgcoitem,   
         mfghead  
   WHERE ( mfgcoitem.mccode = mfghead.mhcode ) and  
         ( mfgcoitem.mcitem = :Sel_item ) AND  
         ( mfghead.mhstatus < '8' ) AND  
         ( mfghead.mhtype = 'G' ) 
UNION all 
  SELECT 4,
         (purline.plqtyreq - purline.plqtyrec),
         purline.pldatsup,
         purline.plcode,
         purline.plline,
         1,
         ( select adname from adresses where adcode = purhead.phsupp ) 
    FROM purline, purhead  
   WHERE ( purline.plitem = :Sel_item ) AND  
         ( purhead.phcode = purline.plcode ) and 
         ( purline.plstatus < '6' ) 
ORDER BY 3 asc

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
| adname |

