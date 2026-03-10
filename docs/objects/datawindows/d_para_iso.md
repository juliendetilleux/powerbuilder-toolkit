# d_para_iso

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  parameters.pmcval ,           parameters.pmival ,           parameters.pmcode ,           parameters.pmname ,           parameters.pmtype ,           parameters.pmnval ,           parameters.pmdval     
        FROM parameters      
        WHERE ( parameters.pmcode= 'ISOREF' )   
```

## Colonnes
| Colonne |
|---------|
| pmcval |
| pmival |
| pmcode |
| pmname |
| pmtype |
| pmnval |
| pmdval |

