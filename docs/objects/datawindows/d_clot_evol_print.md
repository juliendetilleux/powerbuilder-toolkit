# d_clot_evol_print

- **Type**: DataWindow
- **Style**: Group
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT clotfinhead.chperiod,   
         clotfinhead.chpur,
         'Achats' 
    FROM clotfinhead  
   WHERE clotfinhead.chperiod between :start and :stop   
UNION  all 
  SELECT clotfinhead.chperiod,   
         clotfinhead.chstkend  ,
         'Stocks' 
    FROM clotfinhead  
   WHERE clotfinhead.chperiod between :start and :stop   
UNION  all 
  SELECT clotfinhead.chperiod,   
         clotfinhead.chsal,
         'Ventes' 
    FROM clotfinhead  
   WHERE clotfinhead.chperiod between :start and :stop   
ORDER BY 1 ASC   


```

## Colonnes
| Colonne |
|---------|
| chperiod |
| chpur |
| compute_0003 |

