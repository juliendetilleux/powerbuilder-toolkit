# d_workflowline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT workflowline.wlseq,   
         workflowline.wlname,   
         workflowline.wloperationtype,   
         workflowline.wllinkclose,   
         workflowline.wllinkmodif,   
         workflowline.wllinkcreate,   
         workflowline.wlline,   
         workflowline.wlhead,   
         workflowline.wlcreator,   
         workflowline.wlcreadate,   
         workflowline.wlmoddate,   
         workflowline.wlmoduser,   
         workflowline.wlactiontype,   
         workflowline.wldesc,   
         workflowline.wloffsetdays,   
         workflowline.wltiming,   
         workflowline.wlusertype,   
         workflowline.wluser,   
         workflowline.wlchoicedate,   
         workflowline.wltable,   
         workflowline.wlfield,   
         workflowline.wlvalue,   
         workflowline.wlsql,   
         workflowline.wlexecuteimmediate ,        
	   datetime(null) as timing_string,
			workflowline.wlitem , 
			workflowline.wlquoteval,
			workflowline.wllinkfail 
    FROM workflowline  
   WHERE ( workflowline.wlhead = :numhead ) AND  
         ( workflowline.wlline = :numline )    

```

## Colonnes
| Colonne |
|---------|
| wlseq |
| wlname |
| wloperationtype |
| wllinkclose |
| wllinkmodif |
| wllinkcreate |
| wlline |
| wlhead |
| wlcreator |
| wlcreadate |
| wlmoddate |
| wlmoduser |
| wlactiontype |
| wldesc |
| wloffsetdays |
| wltiming |
| wlusertype |
| wlusers |
| wlchoicedat |
| wltable |
| wlfield |
| wlvalue |
| wlsql |
| wledit |
| timing_string |
| wlitem |
| wlquoteval |
| wllinkfail |

