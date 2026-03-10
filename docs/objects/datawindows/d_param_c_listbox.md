# d_param_c_listbox

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT parameters.pmname , 
         parameters.pmcode ,  
         parameters.pmcval ,  
         parameters.pmival ,  
         parameters.pmtype ,  
         parameters.pmnval ,  
         parameters.pmdval     
    FROM parameters      
   WHERE ( parameters.pmcode= :ras_SelParam )
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

