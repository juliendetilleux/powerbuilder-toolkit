# d_salhead_ship_prepare_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT
	    salhead.shcode,   
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
			adresses.adcreditctrl,
			salhead.shstdcondition,  
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN 
				isnull(shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') 
			ENDIF as mcdo,   
		isnull(salhead.shcons, 'N') as shcons ,
			(  SELECT modules.mdactiv FROM modules  WHERE modules.mdcode = 'MultiCo'  ) as Multico,
	shipto.stdesc,
	salhead.shbeeingmod
    FROM  salhead,   
  			adresses,   
         		choices,
	  		salline,
			shipto
   WHERE ( adresses.adcode = salhead.shcust ) AND 
			 ( salhead.shcode = salline.slcode ) and
			 ( salline.slshipto = shipto.stseq) and
                ( adresses.adcode = shipto.stcode) and
         		 ( salhead.shstatus = choices.chcode ) AND
        		 ( choices.chtype = 'CUSS' ) AND
		     	salhead.shstatus < '5' AND
			EXISTS (select * from salline 
						where slcode = salhead.shcode and
						slstatus < '5' and
						slqtyreq - isnull(slqtyalloc,0)  > 0)
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
| adresses_adcreditctrl |
| salhead_shstdcondition |
| cmcdo |
| shcons |
| multico |
| shipto_stdesc |
| salhead_shbeeingmod |

