# d_qry_sales_open_statum_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline,   
         salline.slitem,   
         items.itname,   
			(if isnull(salline.slvalsddisc,0) <> 0 then 
				salline.slvalsddisc 
			else 
				salline.slstdval
			endif) as slstdval,   
         salline.slsalval,   
         salline.sldatship,   
         salhead.shcode,   
         salline.slstatus,   
         salhead.shcurr,   
         salhead.shcust,   
         adresses.adname,   
         items.itum,   
         salline.slqtyreq,   
         salline.slqtyreal,   
         (salline.slqtyreq - salline.slqtyreal) * (salline.slsalval / salline.slqtyreq ) solde_cost,   
         adresses.adgrcust,   
         salhead.shautho,
			items.itstat1,
			items.itstat2,
			items.itactiv,
			adresses.adgrcust,   
         items.itconvusr,   
         items.itumusr     
    FROM salhead,   
         salline,   
         items,   
         adresses  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( items.itcode = salline.slitem ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( ( salline.slstatus < '6' ) AND  
         ( salline.slqtyreq <> 0 ) )   
ORDER BY salhead.shcode ASC,   
         salline.sldatship ASC,   
         salline.slitem ASC   

```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| salline_slitem |
| items_itname |
| salline_slstdval |
| salline_slsalval |
| salline_sldatship |
| salhead_shcode |
| salline_slstatus |
| salhead_shcurr |
| salhead_shcust |
| adresses_adname |
| items_itum |
| salline_slqtyreq |
| salline_slqtyreal |
| csolde_cost |
| adresses_adgrcust |
| salhead_shautho |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| adresses_adgrcust |
| items_itconvusr |
| items_itumusr |

