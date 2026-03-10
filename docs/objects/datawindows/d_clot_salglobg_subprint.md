# d_clot_salglobg_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT substr(clotfinhead.chperiod,1,4) an,   
         substr(clotfinhead.chperiod,5,2) mon,   
         clotfinhead.chsal
    FROM clotfinhead
   WHERE ( substr(clotfinhead.chperiod,1,4) = :Sel_period ) OR  
         ( substr(clotfinhead.chperiod,1,4) = :Ref_period ) 	AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinhead.chmccode,'##########')) /*jm012 */

```

## Colonnes
| Colonne |
|---------|
| an |
| mon |
| chsal |

