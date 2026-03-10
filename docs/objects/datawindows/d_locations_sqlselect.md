# d_locations_sqlselect

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT locations.lccode,   
         locations.lcactiv,   
         locations.lcseq,   
         locations.lcifdefault,   
         locations.lcadcode,   
         locations.lcintext,   
         locations.lcautoalloc,   
         locations.lcmrpexcl,
         (select adresses.adname 
			from adresses 
			where adresses.adcode = locations.lcadcode) as adname
    FROM locations
   WHERE locations.lcactiv = 'Y'    And
			locations.lccode <> '########'

```

## Colonnes
| Colonne |
|---------|
| lccode |
| lcactiv |
| lcseq |
| lcifdefault |
| lcadcode |
| lcintext |
| lcautoalloc |
| lcmrpexcl |
| adname |

