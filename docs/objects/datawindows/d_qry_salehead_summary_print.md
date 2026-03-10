# d_qry_salehead_summary_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,
			adresses.adname,
			salhead.shdatcrea,
			sum(salline.slsalval) +
				isnull((select sum(sasalval)
							from salaux
							where salaux.sacode = salhead.shcode),0) as ordervalue,             
         		salhead.shcurr,
			adresses.adgrcust,   
         		salhead.shcust,
			salhead.shsalesman,
			salhead.shcreauser,
			salhead.shdlvt,
			salhead.shdlvtplace,
			salhead.shcustpay,   
			salhead.shcurr,
			salhead.shdatreq,
			salhead.shturnid  ,
		salhead.shorigin,  
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2573*/
			isnull(salhead.shmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') 
		ENDIF as mcdo   

    FROM salhead,   
         salline,   
         adresses

   WHERE ( salline.slcode = salhead.shcode ) and 
         ( adresses.adcode = salhead.shcust ) and  
         ( salline.slstatus < '9' ) and
			( salline.slprintghost <> 'N' or salline.slprintghost is null ) and
			( salhead.shdatcrea > :firstdate and salhead.shdatcrea < :lastdate )
GROUP BY salhead.shcode,
			adresses.adname,
			salhead.shdatcrea,            
         		salhead.shcurr,
			adresses.adgrcust,
			salhead.shcust,
			salhead.shsalesman,
			salhead.shcreauser,
			salhead.shdlvt,
			salhead.shdlvtplace,
   		     salhead.shcustpay,   
	          salhead.shcurr,
			salhead.shdatreq,
			salhead.shturnid  ,
			salhead.shorigin,
			mcdo     
ORDER BY salhead.shcode ASC




```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| adresses_adname |
| salhead_shdatcrea |
| cordervalue |
| salhead_shcurr |
| adresses_adgrcust |
| salhead_shcust |
| salhead_shsalesman |
| salhead_shcreauser |
| salhead_shdlvt |
| salhead_shdlvtplace |
| salhead_shcustpay |
| salhead_shcurr |
| salhead_shdatreq |
| salhead_shturnid |
| salhead_shorigin |
| cmcdo |

