# d_qry_sal_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
         salline.slcustref,
salline.sluomconv,  
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2573*/
			isnull(salhead.shmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') 
		ENDIF as mcdo,
			salline.slsample 
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
         ( salhead.shdatcrea >= :radt_startdat ) And  
         ( salhead.shdatcrea <= :radt_stopdate )
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
| salline_pu |
| salline_slcustref |
| salline_sluomconv |
| cmcdo |
| salline_slsample |

