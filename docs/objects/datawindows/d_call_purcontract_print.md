# d_call_purcontract_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT purcnthead.chcode,   
         purcnthead.chadid,   
         adresses.adname,   
         purcnthead.chdesc,   
         purcnthead.chadref,   
         purcnthead.chcurr,   
         purcnthead.chordid,   
         purcnthead.chexptyp,   
         purcnthead.chexpdat,   
         purcnthead.chexpqty,   
         purcnthead.chcmnt,   
         purcnthead.chuomord,   
         purcnthead.chappdat  
    FROM purcnthead left outer join adresses on purcnthead.chadid = adresses.adcode 
   WHERE purcnthead.chcode = :Sel_contract  

```

## Colonnes
| Colonne |
|---------|
| purcnthead_chcode |
| purcnthead_chadid |
| adresses_adname |
| purcnthead_chdesc |
| purcnthead_chadref |
| purcnthead_chcurr |
| purcnthead_chordid |
| purcnthead_chexptyp |
| purcnthead_chexpdat |
| purcnthead_chexpqty |
| purcnthead_chcmnt |
| purcnthead_chuomord |
| purcnthead_chappdat |

