# d_itemstock_palloc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT matallocs.matyp,   
         matallocs.macode,   
         matallocs.maitemseq,   
         matallocs.maallocqty - matallocs.maissuedqty,   
         matallocs.malot,   
         matallocs.maloc,   
         lots.lolotctrl,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		IF ITUMTRF = '2' THEN
			IF isnull(macustalloc,0) - isnull(maissued_trf,0) < 0 THEN
				0
			ELSE
				isnull(macustalloc,0) - isnull(maissued_trf,0)
			ENDIF
		ELSE
			0
		ENDIF as maallocqty_trf
    FROM matallocs JOIN lots ON lots.locode = matallocs.malot
						JOIN items ON items.itcode = matallocs.maitem
   WHERE matallocs.maitem = :Selected_item AND  
         matallocs.maallocqty - matallocs.maissuedqty <> 0 
ORDER BY matallocs.macode ASC,   
         matallocs.maitemseq ASC   

```

## Colonnes
| Colonne |
|---------|
| matyp |
| macode |
| maitemseq |
| qty |
| malot |
| maloc |
| lots_lolotctrl |
| items_itum |
| itisumtarif |
| itumtarif |
| itumtrf |
| maallocqty_trf |

