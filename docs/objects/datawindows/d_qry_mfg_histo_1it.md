# d_qry_mfg_histo_1it

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items.itname,   
         mfghead.mhmfgdat,   
         isnull(mfghead.mhmfgqty,0) as mhmfgqty,   
         items.itum,   
         isnull(mfghead.mhmalloc,0) as mhmalloc,   
         isnull(mfghead.mhmreal,0) as mhmreal,   
         isnull(mfghead.mhlalloc,0) as mhlalloc,   
         isnull(mfghead.mhlreal,0) as mhlreal,   
         isnull(mfghead.mhreqqty,0) as mhreqqty,   
         isnull(mfghead.mhqcip,0) as mhqcip,   
         isnull(mfghead.mhealloc,0) as mhealloc,   
         isnull(mfghead.mhereal,0) as mhereal,   
         mfghead.mhclosdat as mhclosdat,
		mfghead.mhrefint   
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( ( mfghead.mhstatus = '8'  ) AND  
         ( mfghead.mhclosdat >= :aStart ) AND  
         ( mfghead.mhclosdat <= :aStop ) AND  
         ( mfghead.mhitem = :aItem ) )   
ORDER BY mfghead.mhcode ASC   

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mhitem |
| items_itname |
| mfghead_mhmfgdat |
| mfghead_mhmfgqty |
| items_itum |
| mfghead_mhmalloc |
| mfghead_mhmreal |
| mfghead_mhlalloc |
| mfghead_mhlreal |
| mfghead_mhreqqty |
| mfghead_mhqcip |
| mfghead_mhealloc |
| mfghead_mhereal |
| mfghead_mhclosdat |
| mfghead_mhrefint |

