# zd_workflowupdate_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT workflowline.wltable,   
         workflowline.wlfield,   
         workflowline.wlvalue,   
         workflowline.wlsql , 
		( select choiceline.clname from choiceline where choiceline.clcode = workflowline.wlfield and choiceline.clline = workflowline.wlvalue ) as valeur
    FROM workflowline  
   WHERE ( workflowline.wlhead = :ai_head ) AND  
         ( workflowline.wlline = :ai_line )    

 
```

## Colonnes
| Colonne |
|---------|
| wltable |
| wlfield |
| wlvalue |
| wlsql |
| valeur |

