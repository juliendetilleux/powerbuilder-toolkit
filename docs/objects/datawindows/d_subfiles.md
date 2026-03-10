# d_subfiles

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT fileline.flcode,   
         fileline.fldesc,   
         fileline.fldesc2,   
         fileline.flstatus,   
         fileline.flbudgetmat,   
         fileline.flbudgetlabour,   
         fileline.flbudgetother,   
         choices.chname,   
         fileline.flbudget,   
         fileline.flline,
         fileline.flresp,
			if fileline.flline = 1 then 1 else 2 endif as orderby 
    FROM fileline,   
         choices  
   WHERE
fileline.flstatus<>8 and
 ( choices.chcode = fileline.flstatus ) and  
         ( ( choices.chtype = 'FLST' ) AND  
         ( choices.chactiv = 'Y' ) AND  
         ( fileline.flcode = :ran_filecode ) )  
  ORDER BY orderby, fileline.fldesc   
```

## Colonnes
| Colonne |
|---------|
| flcode |
| fldesc |
| fldesc2 |
| flstatus |
| flbudgetmat |
| flbudgetlabour |
| flbudgetother |
| choices_chname |
| fileline_flbudget |
| flline |
| fileline_flresp |
| corderby |

