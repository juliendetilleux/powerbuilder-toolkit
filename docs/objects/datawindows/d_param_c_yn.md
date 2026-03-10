# d_param_c_yn

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  parameters.pmname ,           parameters.pmcode ,           parameters.pmcval ,           parameters.pmival ,           parameters.pmtype ,           parameters.pmnval ,           parameters.pmdval     
        FROM parameters      
        WHERE ( parameters.pmcode= :Selected_param )   
```

## Colonnes
| Colonne |
|---------|
| pmname |
| pmcode |
| pmcval |
| pmival |
| pmtype |
| pmnval |
| pmdval |

