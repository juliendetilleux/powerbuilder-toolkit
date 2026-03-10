# d_salhead_prepare_one

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcustref,   
         salhead.shcurr,   
         salhead.shcmnt,   
         salhead.shdatcrea,   
         salhead.shdatreq,   
         salhead.shautho,   
         adresses.adname,   
         turnhead.thdesc,   
         salhead.shstatus,   
         choices.chname,
         cast( 1 as integer ) as checkbox ,
         salhead.shautho,
		adresses.adcode,
		adresses.adinvm,
		isnull(salhead.shdirectsal, 'N') as directsal,
		(select max(sldatreq) from salline where slcode = salhead.shcode and slstatus < '5') max_datreq,
		(select min(sldatreq) from salline where slcode = salhead.shcode and slstatus < '5') min_datreq,
		
		
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
			isnull(shmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########')
		ENDIF as mcdo,  

		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
			(SELECT adresses.adname 
				FROM adresses
			  WHERE adresses.adcode = isnull(shmccode, '##########'))
		ELSE
			isnull((SELECT adresses.adname
						FROM linkmcad, adresses
					WHERE linkmcad.lkadcode = salhead.shcust and
							adresses.adcode = linkmcad.lkadcode),(select adname from adresses where adcode = '##########')) 
		ENDIF as mcdoname,

		isnull ((SELECT first(shipto.stdesc || ', ' || isnull(shipto.stadr1, '' ) || ' ' || isnull(shipto.stzip, '' ) || ' ' || isnull(shipto.stloc, '' ) )
					FROM shipto, salline
					WHERE shipto.stcode = salhead.shcust AND
								salline.slstatus < '5' AND
								salline.slshipto = shipto.stseq AND
								shipto.stcode = salhead.shcust AND
								salline.slcode = salhead.shcode AND
								salline.slqtyreq - salline.slqtyreal - salline.slqtyalloc > 0 AND
					1 = (SELECT count (distinct(trim(shipto.stdesc))) 
							FROM shi
```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| shcustref |
| shcurr |
| shcmnt |
| shdatcrea |
| shdatreq |
| shautho |
| adresses_adname |
| turnhead_thdesc |
| salhead_shstatus |
| choices_chname |
| checkbox |
| shautho |
| adcode |
| adinvm |
| directsal |
| max_datreq |
| min_datreq |
| mcdo |
| mcdoname |
| adresse_livr |

