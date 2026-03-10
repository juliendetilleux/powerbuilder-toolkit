# d_salline_services_preinv

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode,   
         salline.slline,   
         salhead.shcust,   
         salline.slqtyinv,   
         items.itname,   
         salline.slstatus,   
         items.itcode,   
         items.itcptanal,   
         items.itcptsal,   
         salline.slorval,   
         salline.slrist,   
         salline.slqtyreq,   
         salline.slqtyord,   
         salline.sluomconv,   
         if isnull(slvalsddisc,0) = 0 then salline.slstdval else slvalsddisc endif as slstdval,   
         salline.sldatreq,   
         salline.sluomord,   
         salline.slfileref,   
         salline.slfileline  ,
		salline.slsddisc,
		salline.slshipto  
    FROM salhead,   
         salline,   
         items  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( items.itcode = salline.slitem ) and  
         ( salline.slqtyreq > salline.slqtyinv ) and  
         ( salhead.shcust = :as_SelCust ) AND  
         ( salline.slstatus < '6' ) AND  
         ( items.ittyp = 'S' )   
ORDER BY salline.slcode ASC,   
         salline.slline ASC   

```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_slline |
| salhead_shcust |
| salline_slqtyinv |
| items_itname |
| salline_slstatus |
| items_itcode |
| items_itcptanal |
| items_itcptsal |
| salline_slorval |
| salline_slrist |
| salline_slqtyreq |
| salline_slqtyord |
| salline_sluomconv |
| salline_slstdval |
| salline_sldatreq |
| salline_sluomord |
| salline_slfileref |
| salline_slfileline |
| salline_slsddisc |
| salline_slshipto |

