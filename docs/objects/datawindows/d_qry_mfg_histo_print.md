# d_qry_mfg_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         mfghead.mhcode,   
         mfghead.mhitem,   
         mfghead.mhmreal,   
         mfghead.mhlreal,   
         mfghead.mhereal,   
         mfghead.mhmfgqty,
         (select min(locode) from lots where loitem = mfghead.mhitem and loorder = mfghead.mhcode ) lot   
    FROM items,   
         mfghead  
   WHERE ( mfghead.mhitem = items.itcode ) and  
         ( mfghead.mhstatus = '8' ) AND  
         (  mfghead.mhclosdat  between :date_debut and :date_fin  )    //S6116
ORDER BY mfghead.mhcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| mhcode |
| mfghead_mhitem |
| mhmreal |
| mhlreal |
| mhereal |
| mfghead_mhmfgqty |
| clot |

