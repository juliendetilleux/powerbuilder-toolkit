# d_totalsalvalcust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT isnull(salhead.shorigin,'M') as salhead_shorigin,   
         salhead.shcode,   
         salhead.shcust,            
         adresses.adname,   	
         salhead.shdatcrea,   
         salline.slitem,   
         salline.slline,   
         salline.slsalval,
         ( select smname from salesman where smcode = salhead.shsalesman) as salesman   
         
    FROM adresses,   
         salhead,   
         salline  

   WHERE salhead.shcust = adresses.adcode     
     AND salline.slcode = salhead.shcode    
     AND isnull(salhead.shorigin,'M') like upper(:as_salinputtype)    
     AND salhead.shdatcrea between :adt_start and :adt_stop
	AND salline.slstatus < '9'             

ORDER BY salhead_shorigin ASC ,    
         adresses.adname ASC     

```

## Colonnes
| Colonne |
|---------|
| salhead_shorigin |
| salhead_shcode |
| salhead_shcust |
| adresses_adname |
| salhead_shdatcrea |
| salline_slitem |
| salline_slline |
| salline_slsalval |
| salesman |

