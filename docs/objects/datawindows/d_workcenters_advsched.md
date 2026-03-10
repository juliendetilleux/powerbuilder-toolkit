# d_workcenters_advsched

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  workcenters.wccode ,
           workcenters.wcname ,
           workcenters.wcactiv ,
           workcenters.wccolor ,
			  workcenters.wcdptid     
        FROM workcenters      
        WHERE ( workcenters.wccode <> '########' )  AND
			workcenters.wcadvsched = 'Y'
        ORDER BY workcenters.wccode          ASC  
```

## Colonnes
| Colonne |
|---------|
| wccode |
| wcname |
| wcactiv |
| wccolor |
| wcdptid |

