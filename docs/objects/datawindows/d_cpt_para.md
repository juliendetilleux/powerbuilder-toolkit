# d_cpt_para

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
         ifcpt.icvalc,
			ifcpt.icmccocode,
			ifcpt.icvalc  
    FROM ifcpt  
   WHERE ifcpt.ictyp			= :as_CptId		And
			ifcpt.icmccocode	= :as_McCoCode  
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
| icmccocode |
| icvalc |

