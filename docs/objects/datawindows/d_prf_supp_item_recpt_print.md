# d_prf_supp_item_recpt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
 SELECT purhead.phsupp as supp_code,   
         adresses.adname as supp_name,   
         purline.plitem as item_code,   
         items.itname as item_name,   
         purline.plqtyrec as qty_received,   
         purline.pldatrec as dat_received,   
         items.itum as um,   
         purline.plqtyreq as qty_req,   
         purline.pldatsup as dat_reqshipped,   
         purhead.phdatcrea as dat_order,   
         purline.plcode as order_num,   
         purline.plline as order_line,   
			days( date(purhead.phdatcrea) , date(purline.pldatsup) ) as theo_time,
			days( date(purhead.phdatcrea) , date(purline.pldatrec) ) as real_time,
			days( date(purline.pldatsup) , date(purline.pldatrec) ) as delay_time

    FROM purhead,   
         purline,   
         adresses,   
         items  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( items.itcode = purline.plitem ) and  
         ( ( purline.pldatrec between :Start_date and :Stop_date ) )   
ORDER BY purhead.phsupp ASC,   
         purline.plitem ASC,   
         purline.pldatrec ASC 
```

## Colonnes
| Colonne |
|---------|
| purhead_supp_code |
| adresses_supp_name |
| purline_item_code |
| items_item_name |
| purline_qty_received |
| purline_dat_received |
| items_um |
| purline_qty_req |
| purline_dat_reqshipped |
| purhead_dat_order |
| purline_order_num |
| purline_order_line |
| ctheo_time |
| creal_time |
| cdelay_time |

