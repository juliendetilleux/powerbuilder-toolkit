# d_param_c_ci

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  parameters.pmname ,           parameters.pmcode ,           parameters.pmcval ,           parameters.pmtype ,           parameters.pmival ,           parameters.pmnval ,           parameters.pmdval     
        FROM parameters      
        WHERE ( parameters.pmcode= :Selected_param )   
```

## Colonnes
| Colonne |
|---------|
| pmname |
| pmcode |
| pmcval |
| pmtype |
| pmival |
| pmnval |
| pmdval |

