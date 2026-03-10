# d_condline_update

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
         condline.cljalon,   
         condline.clsort,
			cast( null as numeric(4,0)) as fileline  
    FROM condline  
   WHERE ( condline.clcode = :ran_code ) AND  
         ( condline.clline = :ran_line )    

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
| cljalon |
| clsort |
| fileline |

