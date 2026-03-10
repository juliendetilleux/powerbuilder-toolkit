# d_salhead_lacks

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         adresses.adname,   
         salhead.shcustref,   
         salhead.shdatreq,   
         ( select turnhead.thdesc from turnhead where turnhead.thid = salhead.shturnid ) thdesc ,   
         choices.chname,
          (select sum(if salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc < 0 then 0 
						else salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc endif)
			from salline 
              where salline.slcode = salhead.shcode AND
 				salline.slstatus < '6') as prep_salline,
         if prep_salline is null then 0 else prep_salline endif as toprepare  ,
         salhead.shautho,
         adresses.adcode,
         salhead.shcust,   
         salhead.shcurr,   
         salhead.shstatus,    
         salhead.shlastline, 
         salhead.shdlvt,   
         salhead.shcustpay,   
         salhead.shtype,   
         salhead.shsalesman,   
         salhead.shshipcost,   
         salhead.shdlvtplace,   
         salhead.shcmnt,   
         salhead.shfileref,   
         salhead.shfileline,   
         salhead.shstdcondition,
         salhead.shturnid,
         salhead.shdatcrea,
		isnull(salhead.shpreparator, '-' ) as preparator,
			salhead.shcons 
    FROM salhead,   
         adresses,
         choices 
   WHERE adresses.adcode = salhead.shcust AND
         choices.chcode = salhead.shautho AND
         choices.chtype = 'SALA' AND
         salhead.shstatus < '6' AND
			salhead.shautho > '0' And
         date(salhead.shdatreq) <= :adt_datreq 
  GROUP BY salhead.shcode,   
         adresses.adname,   
         salhead.shcustref,   
         salhead.shdatreq,   
         choices.chname,
         salhead.shautho,
         adresses.adcode,
         salhead.shcust,   
         salhead.shcurr,   
         salhead.shstatus,    
         salhead.shlastline, 
         salhead.shdlvt,   
         salhead.shcustpay,   
         salhead.shtype,   
         salhead.shsalesm
```

## Colonnes
| Colonne |
|---------|
| shcode |
| adresses_adname |
| shcustref |
| shdatreq |
| turnhead_thdesc |
| choices_chname |
| cprep_salline |
| salhead_toprepare |
| shautho |
| adcode |
| shcust |
| shcurr |
| shstatus |
| shlastline |
| shdlvt |
| shcustpay |
| shtype |
| shsalesman |
| shshipcost |
| shdlvtplace |
| shcmnt |
| shfileref |
| shfileline |
| shstdcondition |
| shturnid |
| shdatcrea |
| preparator |
| shcons |

