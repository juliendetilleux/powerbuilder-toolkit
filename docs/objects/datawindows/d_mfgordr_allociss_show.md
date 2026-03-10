# d_mfgordr_allociss_show

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfglallocs.mlitemseq,   
         mfglallocs.mlline,   
         mfglallocs.mlstatus,   
         mfglallocs.mlitem,   
         items_b.itname,   
         mfglallocs.mllallocqty,   
         mfglallocs.mlpallocqty,   
         items_b.itum,   
         mfglallocs.mlpallocseq,   
         mfglallocs.mlpalloctyp,   
         items_b.ittyp,   
         mfglallocs.mlissuedqty,   
         mfglallocs.mldelalloc  ,
		isnull( items_b.itumtarif, 'KG' ) as umtarif,
		isnull( items_b.itisumtarif, 'N' ) as isumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		  IF ITUMTRF = '2' AND isumtarif = 'Y' THEN 
			isnull( (select sum(  isnull(maissued_trf,0) )
					  from matallocs
					 where matyp = 'M' AND
						macode = mfglallocs.mlcode AND
						maitemseq = mfglallocs.mlitemseq ) ,0) 
		ELSE
			0
		ENDIF as mlissuedqty_trf
    FROM mfglallocs,   
         items items_b  
   WHERE ( mfglallocs.mlitem = items_b.itcode ) and  
         ( ( mfglallocs.mlcode = :Selected_of ) )   
ORDER BY mfglallocs.mlline ASC, mfglallocs.mlitemseq ASC   

```

## Colonnes
| Colonne |
|---------|
| mfglallocs_mlitemseq |
| mfglallocs_mlline |
| mfglallocs_mlstatus |
| mfglallocs_mlitem |
| items_itname |
| mfglallocs_mllallocqty |
| mfglallocs_mlpallocqty |
| items_itum |
| mfglallocs_mlpallocseq |
| mfglallocs_mlpalloctyp |
| items_ittyp |
| mfglallocs_mlissuedqty |
| mfglallocs_mldelalloc |
| umtarif |
| isumtarif |
| itumtrf |
| mlissuedqty_trf |

