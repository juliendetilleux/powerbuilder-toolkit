# d_mfgordr_issues

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
	SELECT matallocs.maitemseq,
			matallocs.maallocseq,
			matallocs.maitem,
			items.itname,
			items.itum,
			matallocs.malot,
			matallocs.maloc,
			matallocs.maallocqty,
			matallocs.maissuedqty,
			matallocs.macode,
			matallocs.ma2issueqty,
			matallocs.matyp,
			items.ittyp,
			lots.lolotctrl,
			mfglallocs.mllallocqty,
			items.itstdpur,
			0.000001/ 0.000001 multiplyer,
			mfglallocs.mlpalloctyp,   
       		lots.loorgcode,
			lots.lostock - lots.loalloc as dispo,
			items.itcat,
			mfglallocs.mlline,
			isnull( matallocs.macustalloc, 0 ) as macustalloc,
			isnull( matallocs.maissued_trf, 0 ) as maissued_trf,
			isnull( items.itisumtarif, 'N' ) as itisumtarif,
			isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
			CAST( 0 as numeric(12,3 )) as maissued_trf2,
			lots.loexpdat
		FROM items,
			matallocs,
			lots,
			mfglallocs
		WHERE items.itcode = matallocs.maitem
			AND matallocs.malot = lots.locode
			AND matallocs.macode = mfglallocs.mlcode
			AND matallocs.maitemseq = mfglallocs.mlitemseq
			AND matallocs.matyp = 'M'
			AND matallocs.macode = :Selected_order
			AND mfglallocs.mlpalloctyp <> 'B'
 
 UNION ALL

	SELECT mfglallocs.mlitemseq,
			ifnull(matallocs.maallocseq,0,matallocs.maallocseq),
			items.itcode,
			items.itname,
			items.itum,
			ifnull(matallocs.malot,'',matallocs.malot),
			ifnull(matallocs.maloc,'',matallocs.maloc),
			ifnull(matallocs.maallocqty,0,matallocs.maallocqty),
			ifnull(matallocs.maissuedqty,0,matallocs.maissuedqty),
			mfglallocs.mlcode,
			ifnull(matallocs.ma2issueqty,0,matallocs.ma2issueqty),
			mfghead.mhtype,
			items.ittyp,
			ifnull(matallocs.malot,'',(select lots.lolotctrl
													from lots
													where lots.locode = matallocs.malot)),
			mfglallocs.mllallocqty,
			items.itstdpur,
			0.000001/ 0.000001 multiplyer,
			mfglallocs.mlpalloctyp,   
        		 isnull( ( select lots.loorgcode from lots where lots.locode
```

## Colonnes
| Colonne |
|---------|
| matallocs_maitemseq |
| matallocs_maallocseq |
| matallocs_maitem |
| items_itname |
| items_itum |
| matallocs_malot |
| matallocs_maloc |
| maallocqty |
| maissuedqty |
| matallocs_macode |
| ma2issueqty |
| matallocs_matyp |
| items_ittyp |
| lots_lolotctrl |
| mfglallocs_mllallocqty |
| items_itstdpur |
| items_multiplyer |
| mfglallocs_mlpalloctyp |
| lots_loorgcode |
| dispo |
| items_itcat |
| mfglallocs_mlline |
| macustalloc |
| maissued_trf |
| itisumtarif |
| itumtrf |
| maissued_trf2 |
| lots_loexpdat |

