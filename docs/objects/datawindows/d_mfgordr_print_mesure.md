# d_mfgordr_print_mesure

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname,   
         mfghead.mhreqqty,   
         items_a.itum,   
         mfghead.mhreqdat,   
         mfglallocs.mlline,   
         mfglallocs.mlitem,   
         items_b.itname,   
         mfglallocs.mlbomqty,   
         mfglallocs.mllallocqty,   
         mfglallocs.mlpallocqty,   
         items_b.itum,   
         mfglallocs.mlitemseq,   
         mfghead.mhcmntrel,   
         items_b.itlot,   
         mfglallocs.mlcomment  
    FROM items items_a,   
         mfghead,   
         mfglallocs,   
         items items_b  
   WHERE ( mfghead.mhitem = items_a.itcode ) and  
         ( mfglallocs.mlcode = mfghead.mhcode ) and  
         ( mfglallocs.mlitem = items_b.itcode ) and  
         ( ( mfghead.mhcode = :Selected_order ) )   
UNION all 
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname,   
         mfghead.mhreqqty,   
         items_a.itum,   
         mfghead.mhreqdat,   
         mfglallocs.mlline,   
         mfglallocs.mlitem,   
         items_b.itname,   
         mfglallocs.mlbomqty,   
         mfglallocs.mllallocqty,   
         mfglallocs.mlpallocqty,   
         items_b.itum,   
         mfglallocs.mlitemseq,   
         mfghead.mhcmntrel,   
         items_b.itlot,   
         mfglallocs.mlcomment  
    FROM items items_a,   
         mfghead,   
         mfglallocs,   
         items items_b  
   WHERE ( mfghead.mhitem = items_a.itcode ) and  
         ( mfglallocs.mlcode = mfghead.mhcode ) and  
         ( mfglallocs.mlitem = items_b.itcode ) and  
         ( ( mfghead.mhcode = :Selected_order ) )   
ORDER BY 7 ASC   

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| items_itum |
| mfghead_mhreqdat |
| mfglallocs_mlline |
| mfglallocs_mlitem |
| items_itname_1 |
| mfglallocs_mlbomqty |
| mfglallocs_mllallocqty |
| mfglallocs_mlpallocqty |
| items_itum |
| mfglallocs_mlitemseq |
| mfghead_mhcmntrel |
| items_itlot |
| mfglallocs_mlcomment |

