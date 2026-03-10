# d_salord_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adcmnt,   
         adresses.adtel,   
         adresses.adfax,   
         salhead.shcustref,   
         salhead.shcode,   
         salline.slitem,   
         items.itname,   
         salline.sldatreq,   
         salline.slqtyreq,   
         items.itum,   
         salline.slstatus,   
         salhead.shcmnt,   
         salline.slsalval,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         salhead.shdlvt,   
         salhead.shcustpay,   
         salhead.shdlvtplace,   
         salhead.shfileref,   
         salhead.shfileline,   
         salline.slstdval,   
         salline.slshipto,   
         shipto.stdesc,   
         salhead.shcurr,   
         salline.sluomord  
    FROM salhead,   
         salline,   
         adresses,   
         items,   
         shipto  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( items.itcode = salline.slitem ) and  
         ( salhead.shcust = shipto.stcode ) and  
         ( salline.slshipto = shipto.stseq ) and  
		( salline.slstatus < '9') and
			( salline.slprintghost <> 'N' or salline.slprintghost is null ) and
         ( ( salhead.shcode = :Selected_order ) )   
 
UNION ALL 
 
 SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adcmnt,   
         adresses.adtel,   
         adresses.adfax,   
         salhead.shcustref,   
         salhead.shcode,   
         '',   
         salaux.sadesc,   
         null,   
         salaux.saqty,   
         salaux.saum,   
         salaux.sastatus,   
         salhead.shcmnt,   
         salaux.sasalval,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adcmnt |
| adresses_adtel |
| adresses_adfax |
| salhead_shcustref |
| salhead_shcode |
| salline_slitem |
| items_itname |
| salline_sldatreq |
| salline_slqtyreq |
| items_itum |
| salline_slstatus |
| salhead_shcmnt |
| salline_slsalval |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| salhead_shdlvt |
| salhead_shcustpay |
| salhead_shdlvtplace |
| salhead_shfileref |
| salhead_shfileline |
| salline_slstdval |
| salline_slshipto |
| shipto_stdesc |
| salhead_shcurr |
| salline_sluomord |

