# zd_mfgordr_dvi_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname itnamea,   
         items_a.itdesc2 itname2a,   
         mfghead.mhreqqty,   
         items_a.itum ituma,   
         mfghead.mhreqdat,   
         mfglallocs.mlline,   
         mfglallocs.mlitem,   
         items_b.itname itnameb,   
         mfglallocs.mlbomqty,   
         mfglallocs.mllallocqty,   
         mfglallocs.mlpallocqty,   
         items_b.itum itumb,   
         mfglallocs.mlitemseq,   
         mfghead.mhcmntrel,   
         mfglallocs.mlcomment,   
         mfghead.mhsalhead,   
         mfghead.mhsalline,   
         mfghead.mhlotmfg,
         mfghead.mhcmntrel,
         items_a.itloc
    FROM mfglallocs,   
         mfghead,   
         items items_a,   
         items items_b  
   WHERE ( mfghead.mhitem = items_a.itcode ) and  
         ( mfglallocs.mlcode = mfghead.mhcode ) and  
         ( mfglallocs.mlitem = items_b.itcode ) and  
         ( ( mfghead.mhcode = :Selected_order ) )   
ORDER BY mfglallocs.mlline ASC   

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itnamea |
| items_itname2a |
| mfghead_mhreqqty |
| items_ituma |
| mfghead_mhreqdat |
| mfglallocs_mlline |
| mfglallocs_mlitem |
| items_itnameb |
| mfglallocs_mlbomqty |
| mfglallocs_mllallocqty |
| mfglallocs_mlpallocqty |
| items_itumb |
| mfglallocs_mlitemseq |
| mfghead_mhcmntrel |
| mfglallocs_mlcomment |
| mfghead_mhsalhead |
| mfghead_mhsalline |
| mfghead_mhlotmfg |
| mfghead_mhcmntrel |
| items_itloc |

