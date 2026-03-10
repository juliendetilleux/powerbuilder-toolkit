# zd_call_purcontract_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT purcntline.clitemid,   
         items.itname,   
         purcntline.cladref,   
         purcntline.clleadtime,   
         purcntline.cluomord,   
         purcntline.cluomconv,   
         purcntline.clstdcost
    FROM purcntline,
         items,   
         purcnthead  
   WHERE  purcntline.clitemid = items.itcode  and  
         purcntline.clcode = purcnthead.chcode  and  
         purcntline.clcode = :Sel_contract 
ORDER BY purcntline.clitemid ASC

```

## Colonnes
| Colonne |
|---------|
| purcntline_clitemid |
| items_itname |
| purcntline_cladref |
| purcntline_clleadtime |
| purcntline_cluomord |
| purcntline_cluomconv |
| purcntline_clstdcost |

