# zd_mfg_item_subprint

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
         mfghead.mhcmntrel,   
         mfghead.mhmfgqty,   
         mfghead.mhlotmfg,   
         mfghead.mhtype,
         mfghead.mhexpdat  
    FROM items items_a,   
         mfghead  
   WHERE ( mfghead.mhitem = items_a.itcode ) and  
         ( mfghead.mhcode = :Selected_order )    

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
| mfghead_mhcmntrel |
| mfghead_mhmfgqty |
| mfghead_mhlotmfg |
| mfghead_mhtype |
| mfghead_mhexpdat |

