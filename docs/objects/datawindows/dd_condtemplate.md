# dd_condtemplate

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT  condtemplate.ctcode ,
           condtemplate.ctdesc ,
           condtemplate.cttarget ,
           ( select choices.chname 
			  from choices 
			  where choices.chactiv = 'Y' and choices.chtype = 'CTTA' and choices.chcode = condtemplate.cttarget ) as target_desc
	FROM condtemplate   
        ORDER BY condtemplate.ctdesc          ASC  
```

## Colonnes
| Colonne |
|---------|
| ctcode |
| ctdesc |
| cttarget |
| target_desc |

