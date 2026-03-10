# zd_purcontract_subprint

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
         purcntline.clstdcost,   
         purline.plline,   
         purline.plitem,   
         purline.plqtyreq,   
         purline.pldatreq,   
         purline.plqtyrec,   
         purline.plqtyinv,   
         purline.plinvclot  
    FROM {oj purcntline LEFT OUTER JOIN purline ON purcntline.clitemid = purline.plitem},   
         items,   
         purcnthead  
   WHERE ( purcntline.clitemid = items.itcode ) and  
         ( purcntline.clcode = purcnthead.chcode ) and  
         ( purcnthead.chordid = purline.plcode ) and  
         ( ( purcntline.clcode = :Sel_contract ) )   and
		( purline.plstatus < '9' )   
ORDER BY purcntline.clitemid ASC,   
         purline.plline ASC   

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
| purline_plline |
| purline_plitem |
| purline_plqtyreq |
| purline_pldatreq |
| purline_plqtyrec |
| purline_plqtyinv |
| purline_plinvclot |

