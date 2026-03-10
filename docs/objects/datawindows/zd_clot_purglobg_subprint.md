# zd_clot_purglobg_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT substr(clotfinhead.chperiod,1,4) an,   
         substr(clotfinhead.chperiod,5,2) mon,   
         clotfinhead.chpur
    FROM clotfinhead
   WHERE ( substr(clotfinhead.chperiod,1,4) = :Sel_period ) OR  
         ( substr(clotfinhead.chperiod,1,4) = :Ref_period )

```

## Colonnes
| Colonne |
|---------|
| an |
| mon |
| chpur |

