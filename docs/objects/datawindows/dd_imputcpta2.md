# dd_imputcpta2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT imputcpt.icref,   
         imputcpt.icdesc,   
         imputcpt.iccode  
    FROM imputcpt  
   WHERE ( imputcpt.icactiv = 'Y' ) AND  
         ( imputcpt.ictyp = 'A' )
ORDER BY imputcpt.icref ASC   
```

## Colonnes
| Colonne |
|---------|
| icref |
| icdesc |
| iccode |

