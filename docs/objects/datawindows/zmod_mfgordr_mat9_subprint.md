# zmod_mfgordr_mat9_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfglallocs.mlline,   
         mfglallocs.mlitem,   
         items.itname,   
         mfglallocs.mlbomqty,   
         mfglallocs.mllallocqty,   
         mfglallocs.mlpallocqty,   
         items.itum,   
         mfglallocs.mlitemseq,   
         items.itlot,   
         isnull(mfglallocs.mlcomment,'') as mlcomment,   
         mfglallocs.mlissuedqty,   
         items.ittyp,
		IF items.ittyp = 'F' and mfglallocs.mllallocqty = 0  THEN
			isnull((select bomhead.bhcomment
					 from bomhead
					where bomhead.bhcode = items.itcode), '')
		ELSE 
			'' 
		ENDIF as cmntfant
    FROM mfglallocs,   
         items  
   WHERE mfglallocs.mlitem = items.itcode and  
         mfglallocs.mlcode = :Selected_order 
ORDER BY mfglallocs.mlline ASC  ,   if items.ittyp = 'F' and mfglallocs.mllallocqty = 0 then 0 else 1 endif asc, mfglallocs.mlitemseq

```

## Colonnes
| Colonne |
|---------|
| mfglallocs_mlline |
| mfglallocs_mlitem |
| items_itname |
| mfglallocs_mlbomqty |
| mfglallocs_mllallocqty |
| mfglallocs_mlpallocqty |
| items_itum |
| mfglallocs_mlitemseq |
| items_itlot |
| mfglallocs_mlcomment |
| mfglallocs_mlissuedqty |
| items_ittyp |
| cmntfant |

