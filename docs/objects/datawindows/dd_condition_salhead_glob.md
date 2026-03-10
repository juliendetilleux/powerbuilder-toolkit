# dd_condition_salhead_glob

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT condhead.chcode,   
         condhead.chdesc,
		condhead.chfileline  
    FROM condhead  
   WHERE condhead.chlevel  = 'G' AND
         condhead.chactiv = 'Y' AND  
         condhead.chvalid = 'Y' AND
		NOT EXISTS (SELECT condline.clcode
							 FROM condline
						  WHERE condline.clcode = condhead.chcode AND
									condline.cljalon IN (3,4) AND
									condline.clactiv = 'Y' )
 ORDER BY condhead.chdesc ASC   


```

## Colonnes
| Colonne |
|---------|
| chcode |
| chdesc |
| chfileline |

