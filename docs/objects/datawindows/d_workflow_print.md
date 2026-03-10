# d_workflow_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
SELECT workflowhead.whid,   
         workflowhead.whname,   
         workflowhead.whcmnt,   
         workflowhead.whactive,   
         workflowhead.whcreadate,   
         workflowhead.whmoddate,   
         users_b.usname as usb,   
         users_a.usname as usc 
    FROM ( workflowhead 	
		left outer join users users_a on  ( users_a.uscode = workflowhead.whcreator )  )
		left outer join users users_b on  ( workflowhead.whmoduser = users_b.uscode )
   WHERE
         ( workflowhead.whid = :ai_headid )     
```

## Colonnes
| Colonne |
|---------|
| whid |
| whname |
| whcmnt |
| whactive |
| whcreadate |
| whmoddate |
| usb |
| usc |

