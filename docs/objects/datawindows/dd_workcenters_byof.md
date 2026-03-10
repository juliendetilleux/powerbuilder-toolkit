# dd_workcenters_byof

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT distinct workcenters.wccode,   
         workcenters.wcname,   
         workcenters.wccost  
    FROM workcenters, mfgwcreqs  
   WHERE workcenters.wcactiv = 'Y'   and
         mfgwcreqs.mwcode = :al_of and 
         mfgwcreqs.mwwccode = workcenters.wccode  
 ORDER BY workcenters.wccode ASC,   
         workcenters.wcname ASC   

```

## Colonnes
| Colonne |
|---------|
| wccode |
| wcname |
| wccost |

