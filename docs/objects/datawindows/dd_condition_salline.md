# dd_condition_salline

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
   WHERE ( condhead.chlevel = 'A' OR (condhead.chlevel = 'S' AND condhead.chsalcode = :al_salcode ) ) AND  
         ( condhead.chactiv = 'Y' ) AND  
         ( condhead.chvalid = 'Y' ) AND
			( condhead.chfileref = :al_fileref ) AND   
         ( if :as_stock = 'S' then condhead.chstock else 'N' endif <> 'Y' )
 ORDER BY condhead.chdesc ASC   


```

## Colonnes
| Colonne |
|---------|
| chcode |
| chdesc |
| chlevel |
| chfileline |

