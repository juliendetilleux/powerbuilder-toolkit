# d_purcontract_launch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purcnthead.chcode,   
         purcnthead.chstatus,   
         purcnthead.chadid,   
         purcnthead.chdesc,   
         adresses.adname,   
         purcnthead.chexpdat,   
         purcnthead.chusdqty,   
         purcnthead.chexpqty,   
         purcnthead.chexptyp,   
         purcnthead.chadref,   
         purcnthead.chordid,
		isnull( purcnthead.chmccode, '##########') as mcdo  
    FROM purcnthead left outer join adresses ON adresses.adcode = purcnthead.chadid
   WHERE  purcnthead.chstatus between :ras_minstatus and :ras_maxstatus 
ORDER BY purcnthead.chcode DESC   

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chstatus |
| chadid |
| chdesc |
| adresses_adname |
| purcnthead_chexpdat |
| purcnthead_chusdqty |
| purcnthead_chexpqty |
| purcnthead_chexptyp |
| purcnthead_chadref |
| purcnthead_chordid |
| mcdo |

