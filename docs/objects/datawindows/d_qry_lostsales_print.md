# d_qry_lostsales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
/* jm012 ajout argument MultiCo */
  SELECT adresses.adcode,   
         adresses.adname,   
         items.itcode,   
         items.itname,   
         salline.slcode,   
         salline.slline,   
         salline.slitem,   
         salline.slqtyreq,   
         salline.sldatship,   
         salline.slqtyreal,   
         salline.slsalval,
			items.itum ,
			if salline.slqtyreq > 0 then 
			( salline.slqtyreq -  salline.slqtyreal ) * (  salline.slsalval /  salline.slqtyreq   ) else 0 endif as notsold,
			adresses.adgrcust  /*HA2320 : Ajout pour pouvoir être filtrée*/,
			salhead.shsalesman   /*HA2320 : Ajout pour pouvoir être filtrée*/
    FROM adresses,   
         items,   
         salhead,   
         salline  
   WHERE ( salhead.shcust = adresses.adcode ) and  
         ( salline.slcode = salhead.shcode ) and  
         ( salline.slitem = items.itcode ) and  
         ( ( salline.slstatus = '6' ) AND  
         ( salline.sldatship between :ad_start and :ad_stop ) )  and
			notsold > 0 and
			salline.slqtyreq > 0 and salline.slsalval > 0
ORDER BY items.itcode , salline.sldatship , salline.slcode

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| items_itcode |
| items_itname |
| salline_slcode |
| salline_slline |
| salline_slitem |
| salline_slqtyreq |
| salline_sldatship |
| salline_slqtyreal |
| salline_slsalval |
| items_itum |
| cnotsold |
| adresses_adgrcust |
| salhead_shsalesman |

