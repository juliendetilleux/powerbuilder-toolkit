# d_bcd_palette_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT clpallet,
		clsalhead,
		sum(clqty) as clqty
    FROM colisage
   WHERE (clsalhead = :al_sale OR isnull(:al_sale,0) = 0) 
 GROUP BY clpallet,
		clsalhead   
 ORDER BY clpallet,
		clsalhead




```

## Colonnes
| Colonne |
|---------|
| clpallet |
| clsalhead |
| clqty |

