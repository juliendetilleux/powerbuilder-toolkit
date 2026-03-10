# dd_techdata

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT techdata.tdcode,   
         techdata.tdum,   
         techdata.tdtype,   
         techdata.tddesc  
    FROM techdata  
   WHERE techdata.tdactiv = 'Y'   
ORDER BY  techdata.tdpriority,
	techdata.tddesc  

```

## Colonnes
| Colonne |
|---------|
| tdcode |
| tdum |
| tdtype |
| tddesc |

