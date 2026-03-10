# d_salhead_histo_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shstatus,   
         salhead.shlastline,   
         adresses.adname,   
         choices.chname,   
         salhead.shcurr,   
         adresses.adshipdays,   
         salhead.shcustref,   
         salhead.shdatreq,   
         adresses.adgrading,   
         salhead.shdatcrea,   
         salhead.shautho,   
         salhead.shtype,   
         adresses.adlang,   
         adresses.adordinfo,   
         salhead.shdlvt,   
         salhead.shdlvtplace,   
         salhead.shprinted,   
         salhead.shcmnt ,
		(select count(*) from salline where salhead.shcode = salline.slcode ) as count ,
			( Select First truckref.trdesc
				 From truckref  ,
						truckhead ,
						truckline
				Where truckref.trtyp      = truckhead.thtyp  And
						truckhead.thcode    = truckline.tlcode And
						truckline.tlsalhead = salhead.shcode       ) As Transport,
			( Select First truckline.tlcode
				 From truckline
				Where truckline.tlsalhead = salhead.shcode       ) As TransportCode,
			adresses.adcreditctrl,  
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2573*/
				isnull(salhead.shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') 
			ENDIF as mcdo
    FROM salhead,   
         adresses,   
         choices  
   WHERE ( adresses.adcode = salhead.shcust ) and  
         ( salhead.shstatus = choices.chcode ) and  
         ( ( salhead.shdatcrea between :Sel_date_Min and :Sel_date_Max) AND  
         ( choices.chtype = 'CUSS' ) )   
ORDER BY salhead.shcode DESC   

```

## Colonnes
| Colonne |
|---------|
| shcode |
| shust |
| shstatus |
| shlastline |
| adresses_adname |
| choices_chname |
| shcurr |
| adshipdays |
| salhead_shcustref |
| salhead_shdatreq |
| adresses_adgrading |
| salhead_shdatcrea |
| salhead_shautho |
| salhead_shtype |
| adresses_adlang |
| adresses_adordinfo |
| salhead_shdlvt |
| salhead_shdlvtplace |
| salhead_shprinted |
| salhead_shcmnt |
| ccount |
| transport |
| transportcode |
| adresses_adcreditctrl |
| cmcdo |

