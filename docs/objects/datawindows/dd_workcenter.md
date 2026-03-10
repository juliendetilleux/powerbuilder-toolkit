# dd_workcenter

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT workcenters.wccode,   
         workcenters.wcname 
    FROM workcenters  
   WHERE workcenters.wcactiv = 'Y'   
ORDER BY workcenters.wccode ASC,   
         workcenters.wcname ASC   

```

## Colonnes
| Colonne |
|---------|
| wccode |
| wcname |

