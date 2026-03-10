# d_clot_stock_evol_print

- **Type**: DataWindow
- **Style**: Group
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT sum(clotfinit.cival) stock_value,   
         clotfinit.ciperiod period 
    FROM clotfinit  
   WHERE clotfinit.ciperiod between :Start_period and :Stop_period  and clotfinit.cityp = 'I'  
GROUP BY clotfinit.ciperiod  
ORDER BY clotfinit.ciperiod ASC   

```

## Colonnes
| Colonne |
|---------|
| stock_value |
| period |

