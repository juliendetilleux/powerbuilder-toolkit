# d_qry_sales_open_1ad_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline,   
         salline.slitem,   
         items.itname,   
         salline.slqtyord,   
         salline.sluomord,  
			(if isnull(salline.slvalsddisc,0) <> 0 then 
				salline.slvalsddisc 
			else 
				salline.slstdval
			endif) as slstdval,   
         salline.slsalval,   
         salline.sldatship,   
         salhead.shcode,   
         salline.slstatus,   
         salline.slqtyreq,   
         salline.slqtyreal,   
         salline.sluomconv,   
         items.itactiv,   
         items.itstat1,   
         items.itstat2  
    FROM salhead,   
         salline,   
         items  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( items.itcode = salline.slitem ) and  
         ( ( salhead.shcust = :acust ) AND  
         ( salline.slstatus < '6' ) )   
ORDER BY salline.sldatship ASC,   
         salline.slitem ASC   

```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| salline_slitem |
| items_itname |
| salline_slqtyord |
| salline_sluomord |
| salline_slstdval |
| salline_slsalval |
| salline_sldatship |
| salhead_shcode |
| salline_slstatus |
| salline_slqtyreq |
| salline_slqtyreal |
| salline_sluomconv |
| items_itactiv |
| items_itstat1 |
| items_itstat2 |

