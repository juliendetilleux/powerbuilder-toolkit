# d_qry_noninvoiced_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
/* jm012 Ajout argument multiCo. Pas encore utilisé */
  SELECT 
         shiphead.shcust,   
         adresses.adname,   
         salline.slitem,   
         items.itname,   
         shipline.slqty,   
         shiphead.shdate,   
         items.itum,   
         items.itstdsal as stdsal,   
         items.itstdpur as stdpur,   
         salline.slunitprice as salunitprice  ,
		shiphead.shcode as NEnum,
		shipline.slline as NElin,
		shipline.slcode as CmdNum,
		shipline.slsalline as CmdLin 
    FROM 
         salhead,   
         salline,   
         adresses,   
         items,
		shipline,
		shiphead    
   WHERE 
         ( shiphead.shcode = shipline.slcode ) and
         ( shipline.slsalorder = salline.slcode ) and 
         ( shipline.slsalline = salline.slline ) and 
         ( salline.slcode = salhead.shcode ) and  
         ( adresses.adcode = shiphead.shcust ) and  
         ( items.itcode = salline.slitem ) and  
         ( isnull(salline.slsample, 'N') <> 'Y' ) and 
         ( shipline.slinv = 'Y' ) and 
         ( shipline.slinvno = 0 ) and 
		( shipline.slqty <> 0 ) and 
         ( isnull(salhead.shcons, 'N') <> 'Y' ) and 
         ( shiphead.shdate between :Start_date and :Stop_date ) 
ORDER BY 
         shiphead.shcust ASC,   
shipline.slcode, 
         salline.slitem ASC   

```

## Colonnes
| Colonne |
|---------|
| shiphead_shcust |
| adresses_adname |
| salline_slitem |
| items_itname |
| shipline_slqty |
| shiphead_shdate |
| items_itum |
| items_stdsal |
| items_stdpur |
| salline_salunitprice |
| shiphead_nenum |
| shipline_nelin |
| shipline_cmdnum |
| shipline_cmdlin |

