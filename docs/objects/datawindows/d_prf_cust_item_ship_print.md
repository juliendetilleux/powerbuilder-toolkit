# d_prf_cust_item_ship_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcust as cust_code,   
         adresses.adname as cust_name,   
         salline.slitem as item_code,   
         items.itname as item_name,   
         salline.slqtyreal as qty_shipped,   
         salline.sldatreal as dat_shipped,   
         items.itum as um,   
         salline.slqtyreq as qty_req,   
         salline.sldatship as dat_reqshipped,   
         salline.sldatcrea as dat_order,   
         salline.slcode as order_num,   
         salline.slline as order_line,   
         salline.sldatcustreq as dat_custreq,   
         salline.sldatreq as dat_custcfrm,
			days( date(salline.sldatship) , date(salline.sldatreq) ) as ship_time,
			days( date(salline.sldatreal) , ship_time ) as dat_estimarrival
    FROM salhead,   
         salline,   
         adresses,   
         items  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( items.itcode = salline.slitem ) and  
         ( ( salline.sldatreal between :Start_date and :Stop_date ) )   
ORDER BY salhead.shcust ASC,   
         salline.slitem ASC,   
         salline.sldatreal ASC   

```

## Colonnes
| Colonne |
|---------|
| salhead_cust_code |
| adresses_cust_name |
| salline_item_code |
| items_item_name |
| salline_qty_shipped |
| salline_dat_shipped |
| items_um |
| salline_qty_req |
| salline_dat_reqshipped |
| salline_dat_order |
| salline_order_num |
| salline_order_line |
| salline_dat_custreq |
| salline_dat_custcfrm |
| cship_time |
| cdat_estimarrival |

