# dd_condition_salhead

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
   WHERE ( condhead.chlevel = 'A' ) AND  
         ( condhead.chactiv = 'Y' ) AND  
         ( condhead.chvalid = 'Y' ) AND
		( condhead.chfileref = :al_fileref ) 
 ORDER BY condhead.chdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chdesc |
| chfileline |

