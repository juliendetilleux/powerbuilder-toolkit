# zd_workflowline_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT workflowline.wlline,   
         workflowline.wlseq,   
         workflowline.wlname,   
         workflowline.wloperationtype,   
         workflowline.wllinkclose,   
         workflowline.wllinkmodif,   
         workflowline.wllinkcreate,   
         workflowline.wlcreadate,   
         workflowline.wlmoddate,   
         users_a.usname as usc,   
         users_b.usname as usm
    FROM ( workflowline   
          left outer join users users_a on  ( users_a.uscode = workflowline.wlcreator )  )
		left outer join users users_b on  ( workflowline.wlmoduser = users_b.uscode )
   WHERE ( workflowline.wlhead = :ai_arghead )     
   ORDER BY workflowline.wlseq ASC

```

## Colonnes
| Colonne |
|---------|
| workflowline_wlline |
| workflowline_wlseq |
| workflowline_wlname |
| workflowline_wloperationtype |
| workflowline_wllinkclose |
| workflowline_wllinkmodif |
| workflowline_wllinkcreate |
| workflowline_wlcreadate |
| workflowline_wlmoddate |
| usc |
| usm |

