# d_workflow_line

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT workflowline.wlline,   
         workflowline.wlseq,   
         workflowline.wlname,   
         workflowline.wloperationtype,   
         workflowline.wlhead,   
         workflowline.wldesc,   
         workflowline.wltable,   
         workflowline.wlfield,   
         workflowline.wlvalue  
    FROM workflowline 
   WHERE ( workflowline.wlhead = :whid ) 
ORDER BY workflowline.wlseq ASC   

```

## Colonnes
| Colonne |
|---------|
| wlline |
| wlseq |
| wlname |
| wloperationtype |
| wlhead |
| wldesc |
| wltable |
| wlfield |
| wlvalue |

