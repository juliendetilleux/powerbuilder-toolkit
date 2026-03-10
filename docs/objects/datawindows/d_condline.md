# d_condline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT condline.clcode,   
         condline.clline,   
         condline.clratio,   
         condline.cltemplate,   
         condline.clinvclot,   
         condline.clactiv,   
         condline.clbalance ,
		condline.clsort,
		CAST(null as char(80)) as cttemp
    FROM condline  
   WHERE condline.clcode = :ran_code   
ORDER BY condline.clsort ASC   

```

## Colonnes
| Colonne |
|---------|
| clcode |
| clline |
| clratio |
| cltemplate |
| clinvclot |
| clactiv |
| clbalance |
| clsort |
| cttemp |

