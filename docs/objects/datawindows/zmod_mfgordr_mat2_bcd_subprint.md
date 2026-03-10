# zmod_mfgordr_mat2_bcd_subprint

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
         mfglallocs.mlpalloctyp,  
         items.itum,    
         mfglallocs.mlitemseq,   
         items.itlot,   
         mfglallocs.mlcomment,   
         mfglallocs.mlissuedqty,   
         items.ittyp,
			mfghead.mhreqqty,
			( Select items.itum 
				 From items
				Where items.itcode = mfghead.mhitem ) As MfgItUm ,
			( Select items.itpsize
             From items
				Where items.itcode = mfghead.mhitem	)	As ItMasterQty	
    FROM mfglallocs,   
         items,
			mfghead  
   WHERE ( mfglallocs.mlitem = items.itcode ) and  
         ( ( mfglallocs.mlcode = :Selected_order ) ) and
			( mfghead.mhcode = mfglallocs.mlcode)  
ORDER BY mfglallocs.mlline ASC    ,   if items.ittyp = 'F' and mfglallocs.mllallocqty = 0 then 0 else 1 endif asc, mfglallocs.mlitemseq

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
| mfglallocs_mlpalloctyp |
| items_itum |
| mfglallocs_mlitemseq |
| items_itlot |
| mfglallocs_mlcomment |
| mfglallocs_mlissuedqty |
| items_ittyp |
| mfghead_mhreqqty |
| mfgitum |
| itmasterqty |

