# d_param_i_formdvi

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT parameters.pmcode,   
         parameters.pmname,   
         parameters.pmtype,   
         parameters.pmcval,   
         parameters.pmival,   
         parameters.pmnval,   
         parameters.pmdval  
    FROM parameters 
   WHERE ( parameters.pmcode= :Selected_param ) 

```

## Colonnes
| Colonne |
|---------|
| pmcode |
| pmname |
| pmtype |
| pmcval |
| pmival |
| pmnval |
| pmdval |

