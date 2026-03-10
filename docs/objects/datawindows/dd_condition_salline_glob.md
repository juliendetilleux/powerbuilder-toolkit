# dd_condition_salline_glob

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT condhead.chcode,   
			condhead.chdesc,
			condhead.chlevel,
			condhead.chfileline  
    FROM condhead  
   WHERE ( condhead.chlevel = 'G' OR (condhead.chlevel = 'S' AND condhead.chsalcode = :al_salcode ) ) AND  
         ( condhead.chactiv = 'Y' ) AND  
         ( condhead.chvalid = 'Y' ) AND
	    ( isnull(condhead.chfileref,0) = 0 ) AND   
         ( if :as_stock = 'S' then condhead.chstock else 'N' endif <> 'Y' ) AND
		NOT EXISTS (SELECT condline.clcode
							 FROM condline
						  WHERE condline.clcode = condhead.chcode AND
									condline.cljalon IN (3,4) and
									condline.clactiv = 'Y')
 ORDER BY condhead.chdesc ASC   


```

## Colonnes
| Colonne |
|---------|
| chcode |
| chdesc |
| chlevel |
| chfileline |

