# dd_adresses_interim

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT adresses.adcode,   
         adresses.adname,   
         adresses.adgrading  
    FROM adresses,   
         workers  
   WHERE ( ( workers.wkadid = adresses.adcode ) and  
         (  workers.wkactiv = 'Y' )   ) or 
         ( adresses.adcode = '##########' ) 
ORDER BY adresses.adname ASC,   
         adresses.adcode ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adgrading |

