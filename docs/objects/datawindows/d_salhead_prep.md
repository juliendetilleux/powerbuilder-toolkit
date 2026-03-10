# d_salhead_prep

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
			
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
			isnull(shmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########')
		ENDIF as mcdo
 
    FROM salhead left outer join turnhead on salhead.shturnid = turnhead.thid ,   
         adresses,   
         choices  
   WHERE ( adresses.adcode = salhead.shcust ) AND
         ( salhead.shstatus = choices.chcode ) AND  
         ( choices.chtype = 'CUSS' ) AND
         ( salhead.shcode = :il_salhead ) 

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
| mcdo |

