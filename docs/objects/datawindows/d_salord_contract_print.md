# d_salord_contract_print

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
         salhead.shcurr,   
         salline.slline,   
         salline.slitem,   
         items.itname,   
         salline.sldatreq,   
         salline.sldatship,   
         salline.slqtyreq,   
         items.itum,   
         salline.slqtyreal,  
 
   		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN /*os1438*/
	         round(salline.slqtyinv / isnull(salline.sluomconv,1),3)
		ELSE
			salline.slqtyinv
		ENDIF as slqtyinv, 

         salline.slcontst,   
         salline.slqtyord,   
         salline.sluomord,   
         salhead.shcmnt,   
         salline.slstdval,   
         salline.slcustref 
    FROM salhead,   
         salline,   
         adresses,   
         items  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( items.itcode = salline.slitem ) and  
         ( ( salhead.shcode = :Selected_order ) AND  
         ( salline.slstatus < '9' ) )   
ORDER BY salline.slitem ASC,   
         salline.sldatreq ASC   

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
| salhead_shcurr |
| salline_slline |
| salline_slitem |
| items_itname |
| salline_sldatreq |
| salline_sldatship |
| salline_slqtyreq |
| items_itum |
| salline_slqtyreal |
| salline_slqtyinv |
| salline_slcontst |
| salline_slqtyord |
| salline_sluomord |
| salhead_shcmnt |
| salline_slstdval |
| salline_slcustref |

