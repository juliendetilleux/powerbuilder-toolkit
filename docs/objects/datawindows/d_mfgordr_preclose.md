# d_mfgordr_preclose

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT 'I' linetype,
			items.itcode,   
         items.itname,
         mfglallocs.mlbomqty * IF ITUMTRF = '2' AND isumtarif = 'Y' THEN isnull(items.itumtarifconv,0) ELSE 1 ENDIF as mlbomqty,
         mfglallocs.mllallocqty * IF ITUMTRF = '2' AND isumtarif = 'Y' THEN isnull(items.itumtarifconv,0) ELSE 1 ENDIF as mllallocqty,   
         IF ITUMTRF = '2' AND isumtarif = 'Y' THEN 
			isnull( (select sum(  isnull(maissued_trf,0) )
					  from matallocs
					 where matyp = 'M' AND
						macode = mfglallocs.mlcode AND
						maitemseq = mfglallocs.mlitemseq ) ,0) 
		ELSE 
			mfglallocs.mlissuedqty 
		ENDIF as mlissuedqty,   
         IF ITUMTRF = '2' AND isumtarif = 'Y' THEN 
			items.itumtbascost + isnull( items.itumtxtrcost , 0 )
		ELSE
			items.itstdpur
		ENDIF as itstdpur,
         mfglallocs.mlitemseq,
         IF ITUMTRF = '2' AND isumtarif = 'Y' THEN 
			isnull( items.itumtarif, 'KG' )
		ELSE
         		items.itum
		ENDIF as itum,
         mfglallocs.mlline,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		isnull( items.itisumtarif, 'N' ) as isumtarif
    FROM items,   
         mfglallocs  
   WHERE ( mfglallocs.mlitem = items.itcode ) AND  
         ( mfglallocs.mlcode = :sel_mfg )  AND
         ( items.ittyp <> 'F' ) AND mlpalloctyp  <> 'G' 

  UNION ALL 
  SELECT 'I' linetype,
			items.itcode,   
         items.itname,
         mfglallocs.mlbomqty * IF ITUMTRF = '2' AND isumtarif = 'Y' THEN isnull(items.itumtarifconv,0) ELSE 1 ENDIF as mlbomqty,
         mfglallocs.mllallocqty * IF ITUMTRF = '2' AND isumtarif = 'Y' THEN isnull(items.itumtarifconv,0) ELSE 1 ENDIF as mllallocqty,
            
		if EXISTS ( SELECT * 
			FROM matallocs 
			WHERE matyp = 'M' AND macode = mfglallocs.mlcode AND maitem = items.itcode  AND maissuedqty = -1    )  then
						IF ITUMTRF = '2' AND isumtarif = 'Y' THEN
							isnull( (select sum(  isnull(maissued_trf,0) )
									  from matallocs
					
```

## Colonnes
| Colonne |
|---------|
| clinetype |
| items_itcode |
| items_itname |
| mfglallocs_mlbomqty |
| mfglallocs_mllallocqty |
| mfglallocs_mlissuedqty |
| items_itstdpur |
| mfglallocs_mlitemseq |
| items_itum |
| mfglallocs_mlline |
| itumtrf |
| isumtarif |

