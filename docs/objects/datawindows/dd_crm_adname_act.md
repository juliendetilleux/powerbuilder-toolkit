# dd_crm_adname_act

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname  
    FROM adresses  
   WHERE ( adresses.adactiv = 'Y' ) AND  
         ( adcode not in ('#########C','#########R','#########S') )   
ORDER BY adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |

