# d_imput_ventilstock

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT imputcpt.iccode,   
         imputcpt.icactiv,   
         imputcpt.ictyp,   
         imputcpt.icref,   
         imputcpt.icdesc,   
         imputcpt.icesct,   
         imputcpt.icfrais  
    FROM imputcpt  
   WHERE imputcpt.ictyp in ('A', 'C', 'O')  
ORDER BY imputcpt.ictyp ASC,   
         imputcpt.icref ASC 

```

## Colonnes
| Colonne |
|---------|
| iccode |
| icactiv |
| ictyp |
| icref |
| icdesc |
| icesct |
| icfrais |

