# d_qry_mfg_period

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
         mfghead.mhmfgqty,   
         items.itum,   
         mfghead.mhmalloc,   
         mfghead.mhmreal,   
         mfghead.mhlalloc,   
         mfghead.mhlreal,   
         mfghead.mhreqqty  
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( mfghead.mhstatus = '8' ) AND  
         mfghead.mhclosdat >= :Start_dat AND  
         mfghead.mhclosdat <= :Stop_dat   
ORDER BY mfghead.mhcode DESC   

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

