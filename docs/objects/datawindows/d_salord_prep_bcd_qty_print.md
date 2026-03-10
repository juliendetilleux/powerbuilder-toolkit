# d_salord_prep_bcd_qty_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
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
         salline.slline,   
         salline.slqtyalloc,   
         salhead.shcmnt,   
         salline.slqtyreal,   
         salline.slshipto,   
         shipto.stdesc,   
         salhead.shcust,
			isnull(items.itcratesweight,'N') as itcratesweight,
		isnull((select ppvalue from progparam where ppcode = 'EXPITUNAN'),'') as EXPITUNAN   , 
		salline.slsort   
    FROM salhead,   
         salline,   
         adresses,   
         items,   
         shipto  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( items.itcode = salline.slitem ) and  
         ( adresses.adcode = shipto.stcode ) and  
         ( shipto.stseq = salline.slshipto ) and  
         ( ( salline.slstatus < '5' ) AND  
         ( salline.slqtyreq - salline.slqtyreal > 0 ) )   
ORDER BY salhead.shcode ASC,   
         salline.slshipto ASC,   
		salline.slsort, 
         salline.slitem ASC   

```

## Colonnes
| Colonne |
|---------|
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
| salline_slline |
| salline_slqtyalloc |
| salhead_shcmnt |
| salline_slqtyreal |
| salline_slshipto |
| shipto_stdesc |
| salhead_shcust |
| itcratesweight |
| expitunan |
| salline_slsort |

