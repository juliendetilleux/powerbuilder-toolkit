# d_crm_adresses_mail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adtype,   
         9  position,   
         0 available,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,
			adresses.adtype  
    FROM adresses  
   WHERE adresses.adactiv = 'Y'   AND
         adresses.adcode not in ('#########C','#########R','#########S') 
ORDER BY adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adtype |
| position |
| available |
| adcust |
| adsupp |
| adactiv |
| adtype |

