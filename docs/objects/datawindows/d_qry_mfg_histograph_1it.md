# d_qry_mfg_histograph_1it

- **Type**: DataWindow
- **Style**: Group
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhmfgdat,   
         (mfghead.mhmreal + mfghead.mhlreal + mfghead.mhereal) / mfghead.mhmfgqtyqty,   
         mfghead.mhcode  
    FROM mfghead  
   WHERE ( mfghead.mhstatus >= '7' ) AND  
         ( mfghead.mhmfgdat >= :Start_date ) AND  
         ( mfghead.mhmfgdat <= :End_date ) AND  
         ( mfghead.mhitem = :Sel_Item ) AND  
         mfghead.mhmfgqty > 0   
ORDER BY mfghead.mhcode ASC   

```

## Colonnes
| Colonne |
|---------|
| mhmfgdat |
| compute_0002 |
| mhcode |

