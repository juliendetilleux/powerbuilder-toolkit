# d_condtemplate_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT  condtemplate.ctcode ,
			 condtemplate.ctdesc  , 
          condtemplate.cttarget ,
          condtemplate.ctsyntax ,
          condtemplate.ctcomment     
        FROM condtemplate      
        WHERE ( condtemplate.ctcode = :ran_code )   
```

## Colonnes
| Colonne |
|---------|
| ctcode |
| ctdesc |
| cttarget |
| ctsyntax |
| ctcomment |

