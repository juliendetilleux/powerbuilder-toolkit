# ds_bomline_item

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
SELECT bomline.blramcode,
			bomline.blramqty,
			bomhead.bhcoeff,
			bomline.blramqty / if bomline.blramtype = '1' then 1 else bomhead.bhcoeff endif as qty,
			bomline.blramtype
		FROM bomline,
			bomhead
	WHERE bomline.blcode = :as_item AND
		bomline.blcode = bomhead.bhcode AND
		  bomline.bltype = '0' AND  
		bomline.blstartdat <= :adt_matplan_mpplduedat AND  
		bomline.blstopdat >= :adt_matplan_mpplduedat AND  
		EXISTS (select bh.bhcode 
					 from bomhead as bh,
						items
					where bh.bhcode = bomline.blramcode and
						items.itcode = bh.bhcode and
						items.ittyp <> 'F') 
```

## Colonnes
| Colonne |
|---------|
| bomline_blramcode |
| bomline_blramqty |
| bomhead_bhcoeff |
| qty |
| bomline_blramtype |

