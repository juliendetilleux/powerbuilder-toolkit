# d_ean13_ctrl2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT 1 as diff, yv_ean_info.eancode,   
         yv_ean_info.eanunit,   
         yv_ean_info.eanitcode,   
         yv_ean_info.eanum,   
         yv_ean_info.eanumconv,   
         yv_ean_info.eanitum,   
         yv_ean_info.eancustomer,   
         adresses.adname,   
         items.itname,   
         items.itactiv,   
         items.itsale  
    FROM yv_ean_info,   
         adresses,   
         items  
   WHERE ( yv_ean_info.eanitcode = items.itcode ) and  
         ( yv_ean_info.eancustomer = adresses.adcode )    

UNION ALL 

  select 2, items.itplu,
		'PLU' ,
		items.itcode,
		items.itum,
		1,
		items.itum,
		'##########',
		'', 
         items.itname,   
         items.itactiv,   
         items.itsale  
	
 from items where isnull(items.itplu, '') > '' and items.itcode not like '###%'  

```

## Colonnes
| Colonne |
|---------|
| diff |
| yv_ean_info_eancode |
| yv_ean_info_eanunit |
| yv_ean_info_eanitcode |
| yv_ean_info_eanum |
| yv_ean_info_eanumconv |
| yv_ean_info_eanitum |
| yv_ean_info_eancustomer |
| adresses_adname |
| items_itname |
| items_itactiv |
| items_itsale |

