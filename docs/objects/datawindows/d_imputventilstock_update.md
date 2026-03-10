# d_imputventilstock_update

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
         imputcpt.icfrais,
         imputcpt.ictvadec  
    FROM imputcpt  
   WHERE ( imputcpt.iccode = :Selected_imputcpt )    

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
| ictvadec |

