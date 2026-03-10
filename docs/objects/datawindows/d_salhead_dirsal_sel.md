# d_salhead_dirsal_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
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
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') as mcdo ,
			salhead.shdirectsal,
			salhead.shdirsalrate,
			salhead.shdirsalinv
    FROM salhead,   
         adresses,   
         choices  
   WHERE ( adresses.adcode = salhead.shcust ) and  
         ( salhead.shstatus = choices.chcode ) and  
         ( ( salhead.shstatus between :Sel_Status_Min and :Sel_Status_Max) AND  
         ( choices.chtype = 'CUSS' ) )  and
			( salhead.shdirectsal = 'Y') 
ORDER BY salhead.shcode DESC   

```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
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
| salhead_shdirectsal |
| salhead_shdirsalrate |
| salhead_shdirsalinv |

