# d_purcontract_update

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
         purcnthead.chadref,   
         purcnthead.chcreadat,   
         purcnthead.chordid,   
         purcnthead.chappdat,   
         purcnthead.chexptyp,   
         purcnthead.chexpdat,   
         purcnthead.chexpqty,   
         purcnthead.chuomord,   
         purcnthead.chlastdat,   
         purcnthead.chusdqty,   
         purcnthead.chcmnt,   
         purcnthead.chcurr , 
			purcnthead.chdlvt , 
			purcnthead.chdlvtplace ,
	    CAST(null AS CHAR(8)) as purchaser,
			isnull((select purhead.phmccode from purhead where purhead.phcode = purcnthead.chordid),'##########') as phmccode, 
		purcnthead.chmccode 
    FROM purcnthead  
   WHERE purcnthead.chcode = :Selected_cont    

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chstatus |
| chadid |
| chdesc |
| chadref |
| chcreadat |
| chordid |
| chappdat |
| chexptyp |
| chexpdat |
| chexpqty |
| chuomord |
| chlastdat |
| chusdqty |
| chcmnt |
| chcurr |
| chdlvt |
| chdlvtplace |
| purchaser |
| phmccode |
| chmccode |

