# d_inv_followup_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT salhead.shcust,   
         adresses.adname  
    FROM salhead,   
         salline,   
         adresses  
   WHERE ( adresses.adcode = salhead.shcust ) and  
         ( salhead.shcode = salline.slcode ) and  
         ( ( salline.slfileref is not null ) AND  
         ( salline.slfileline is not null ) ) and
			( salline.slstatus < '9' )   
ORDER BY adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| salhead_shcust |
| adname |

