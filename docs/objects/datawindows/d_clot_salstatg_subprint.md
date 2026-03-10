# d_clot_salstatg_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT ztmp_cs1.ztst1,
         'Principale',   
         ztmp_cs1.ztvals1  
    FROM ztmp_cs1 
UNION all 
  SELECT ztmp_cs1.ztst1,
         'Comparaison',   
         ztmp_cs1.ztvalr1  
    FROM ztmp_cs1

```

## Colonnes
| Colonne |
|---------|
| ztst1 |
| compute_0002 |
| ztvals1 |

