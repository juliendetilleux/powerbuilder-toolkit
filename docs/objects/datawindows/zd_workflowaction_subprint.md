# zd_workflowaction_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT activities.acdesc,     
         workflowline.wlusertype,   
         workflowline.wldesc,   
         workflowline.wloffsetdays,   
         workflowline.wltiming,   
         users.usname
    FROM activities, workflowline left outer join users  on  users.uscode = workflowline.wluser 
   WHERE     ( ( workflowline.wlhead = :ai_head ) AND  
         ( workflowline.wlline = :ai_line ) )    AND
	    (  workflowline.wlactiontype = activities.accode )     

```

## Colonnes
| Colonne |
|---------|
| acdesc |
| wlusertype |
| wldesc |
| wloffsetdays |
| wltiming |
| users_usname |

