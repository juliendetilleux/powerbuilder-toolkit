# d_mfgordr_mod8_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         items.itcode,   
         items.itname
    FROM items,   
         mfghead 
   WHERE mfghead.mhitem = items.itcode 
     AND mfghead.mhcode = :Selected_order 
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| items_itcode |
| items_itname |

