# d_qry_supp2it

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,    
         adresses.adname     
    FROM adresses     
   WHERE adresses.adsupp = 'Y'
     AND adresses.adcode not in ('#########C','#########R','#########S') 
ORDER BY adresses.adname   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adresses_adname |

