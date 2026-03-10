# d_qry_samples_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
/* jm012 ajout de l'argument MultiCo. Pas encore utilisé dans ce contexte */
  SELECT salesman.smcode,   
         salesman.smname,   
         salhead.shcust,   
         adresses.adname,   
         salline.slitem,   
         items.itname,   
         salline.slqtyreal,   
         salline.sldatreal,   
         items.itum,   
         items.itstdsal,   
         items.itstdpur,   
         salline.slunitprice  
    FROM salesman,   
         salhead,   
         salline,   
         adresses,   
         items  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( salhead.shsalesman = salesman.smcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( items.itcode = salline.slitem ) and  
         ( ( salline.sldatreal between :Start_date and :Stop_date ) AND  
         ( salline.slsample = 'Y' ) )   
ORDER BY salesman.smcode ASC,   
         salhead.shcust ASC,   
         salline.slitem ASC   

```

## Colonnes
| Colonne |
|---------|
| salesman_smcode |
| salesman_smname |
| salhead_shcust |
| adresses_adname |
| salline_slitem |
| items_itname |
| salline_slqtyreal |
| salline_sldatreal |
| items_itum |
| items_itstdsal |
| items_itstdpur |
| salline_slunitprice |

