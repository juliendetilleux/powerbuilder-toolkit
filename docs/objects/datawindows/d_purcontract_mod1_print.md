# d_purcontract_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
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
         purcnthead.chappdat,   
         purcnthead.chcreadat,   
         purcnthead.chdlvt,   
         purcnthead.chdlvtplace,   
         purcnthead.chusdqty,   
         purhead.phpurchaser,
		 
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2568*/
			isnull(chmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purcnthead.chadid),'##########')
		ENDIF as mcdo 	  
    FROM adresses,   
         purcnthead,   
         purhead  
   WHERE ( purcnthead.chadid = adresses.adcode ) and  
         ( purcnthead.chordid = purhead.phcode ) and  
         ( ( purcnthead.chcode = :Sel_contract ) )    

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
| purcnthead_chcreadat |
| purcnthead_chdlvt |
| purcnthead_chdlvtplace |
| purcnthead_chusdqty |
| purhead_phpurchaser |
| mcdo |

