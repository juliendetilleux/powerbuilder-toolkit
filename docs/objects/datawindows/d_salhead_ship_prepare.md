# d_salhead_ship_prepare

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
			adresses.adcreditctrl,
			salhead.shstdcondition,  
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
				isnull(shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') 
			ENDIF as mcdo,   
		isnull(salhead.shcons, 'N') as shcons ,
		(  SELECT modules.mdactiv FROM modules  WHERE modules.mdcode = 'MultiCo'  ) as Multico,
		(select sum(slqtyreq) from salline where slcode = salhead.shcode and slstatus < '5') as totqtyreq
    FROM salhead,   
         adresses,   
         choices  
   WHERE ( adresses.adcode = salhead.shcust ) and  
         ( salhead.shstatus = choices.chcode ) and  
         ( choices.chtype = 'CUSS' ) AND
			salhead.shcode = :al_salorder    
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
| totqtyreq |

