# d_speed_sal_histo_det

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  Select salhead.shcode,   
         salline.slline,   
         salline.slitem,   
         items.itname,   
         salline.slqtyreq,   
         salline.slqtyreal,
         salline.slqtyinv,
         salline.sldatship,
         salhead.shcust,
         adresses.adname,
         adresses.adcountrid,
         adresses.adgrcust,
			items.itstat1,
			items.itstat2,
			items.itactiv,  
         salhead.shsalesman,
         salhead.shdatcrea, 
         salline.slshipto,
         shipto.stdesc,
         salline.slunitprice PU,
         salline.slcustref
    From salhead,   
         salline,   
         items,
         adresses, 
         shipto   
   Where ( salline.slcode = salhead.shcode ) And  
         ( items.itcode = salline.slitem ) And  
         ( salline.slstatus >= '1' ) And
         ( salline.slstatus < '9' ) And
         ( salhead.shcust = adresses.adcode ) And 
         ( shipto.stcode= salhead.shcust ) And 
         ( shipto.stseq= salline.slshipto ) And 
			( salhead.shcode = :ran_shcode)
Order By salhead.shcode, salline.slline



```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salline_slline |
| salline_slitem |
| items_itname |
| salline_slqtyreq |
| salline_slqtyreal |
| salline_slqtyinv |
| salline_sldatship |
| salhead_shcust |
| adresses_adname |
| adresses_adcountrid |
| adresses_adgrcust |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| salhead_shsalesman |
| salhead_shdatcrea |
| salline_slshipto |
| shipto_stdesc |
| cpu |
| salline_slcustref |

