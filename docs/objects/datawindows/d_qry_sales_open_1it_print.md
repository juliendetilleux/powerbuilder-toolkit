# d_qry_sales_open_1it_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline,   
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
         adresses.adname,   
         salhead.shcust,
         salline.slqtyreq,
         salline.slqtyreal,
         salline.sluomconv,
			adresses.adgrcust  
    FROM salhead,   
         salline,   
         adresses  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( ( salline.slitem = :aitem ) AND  
         ( salline.slstatus < '6' ) )   
ORDER BY salline.sldatship ASC   
    
```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| salline_slqtyord |
| salline_sluomord |
| salline_slstdval |
| salline_slsalval |
| salline_sldatship |
| salhead_shcode |
| salline_slstatus |
| adresses_adname |
| salhead_shcust |
| salline_slqtyreq |
| salline_slqtyreal |
| salline_sluomconv |
| adresses_adgrcust |

