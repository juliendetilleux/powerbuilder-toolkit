# d_mfg_of

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT distinct mfgcosts.mccode  
    FROM mfgcosts 

UNION ALL

SELECT distinct mfgwcreqs.mwcode
from mfgwcreqs

```

## Colonnes
| Colonne |
|---------|
| mccode |

