# d_qry_pur_cthead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT Distinct purcnthead.chcode,   
         purcnthead.chstatus,   
         purcnthead.chdesc,   
         purcnthead.chadref,   
         purcnthead.chcurr,   
         purcnthead.chexptyp,   
         purcnthead.chexpdat,   
         purcnthead.chexpqty,   
         purcnthead.chordid,   
         purcnthead.chuomord,   
         adresses.adname,   
         purcnthead.chcreadat,  
         purcnthead.chadid
    FROM purcnthead,   
         adresses,   
         purcntline
   WHERE ( adresses.adcode = purcnthead.chadid ) and  
         ( purcnthead.chcode = purcntline.clcode ) and  
         ( purcntline.clitemid like :ras_Item ) and
		purcnthead.chstatus >= '0' and
         ( ( purcnthead.chstatus < :ras_Status ) )   

```

## Colonnes
| Colonne |
|---------|
| purcnthead_chcode |
| purcnthead_chstatus |
| purcnthead_chdesc |
| purcnthead_chadref |
| purcnthead_chcurr |
| purcnthead_chexptyp |
| purcnthead_chexpdat |
| purcnthead_chexpqty |
| purcnthead_chordid |
| chuomord |
| adresses_adname |
| purcnthead_chcreadat |
| purcnthead_chadid |

