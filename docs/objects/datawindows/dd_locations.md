# dd_locations

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT locations.lccode,   
         		locations.lcautoalloc,
			locations.lcdesc  
    FROM locations  
   WHERE  locations.lcactiv = 'Y'  AND  
        		  locations.lccode <> '########'
ORDER BY locations.lccode ASC   

```

## Colonnes
| Colonne |
|---------|
| lccode |
| lcautoalloc |
| lcdesc |

