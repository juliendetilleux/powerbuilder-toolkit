# d_purcontract

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
			
		IF  purcnthead.chstatus > '9' THEN
			isnull( purcnthead.chmccode, '##########')
		ELSE
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2398*/
				isnull((select purhead.phmccode from purhead where purhead.phcode = purcnthead.chordid), '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purcnthead.chadid),'##########') 
			ENDIF 
		ENDIF as mcdo , 

		purcnthead.chcurr,
		purcnthead.chdlvt ,
		purcnthead.chdlvtplace,
		(select count(*) 
		   from purcntline
				join linkitad on linkitad.lkitem = purcntline.clitemid and
								linkitad.lkadcode = purcnthead.chadid and
								linkitad.lktyp = 'P'
		 where purcntline.clcode = purcnthead.chcode and
			(purcnthead.chexpqty  -  purcnthead.chusdqty) < linkitad.lkctrqtymin and
			isnull( linkitad.lkctrqtymin, 0 ) > 0 and
			purcnthead.chexptyp = '2' ) as tosignal
    FROM purcnthead left outer join adresses  ON adresses.adcode = purcnthead.chadid
   WHERE purcnthead.chstatus between :ras_minstatus and :ras_maxstatus 
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
| purcnthead_chcurr |
| purcnthead_chdlvt |
| purcnthead_chdlvtplace |
| tosignal |

