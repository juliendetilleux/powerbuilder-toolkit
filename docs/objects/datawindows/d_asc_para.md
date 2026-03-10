# d_asc_para

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
  SELECT ifcpt.ictyp,   
         ifcpt.icpara,   
         ifcpt.icdesc,   
         ifcpt.icvalc,   
         ifcpt.icvali,   
         ifcpt.icsort,
         ifcpt.icvalc 
    FROM ifcpt  
   WHERE ifcpt.ictyp = :Sel_type   
ORDER BY ifcpt.icsort ASC   

```

## Colonnes
| Colonne |
|---------|
| ictyp |
| icpara |
| icdesc |
| icvalc |
| icvali |
| icsort |
| icvalc |

