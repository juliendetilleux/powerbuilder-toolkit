# d_locations

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT locations.lccode,   
         locations.lcactiv,   
         locations.lcmrpexcl,   
         locations.lcautoalloc,   
         locations.lcintext,   
         locations.lcadcode,   
         locations.lcifdefault,   
         locations.lcpriority,   
         locations.lctypbuffer,
         (select clname from choiceline where clcode = 'LOCG' and clline = locations.lcgroup ) as lcgroup,
	    (select stdesc from shipto where stcode = locations.lcadcode and stseq = locations.lcseq) as stdesc ,
		locations.lcdesc 
    FROM locations  
	Where locations.lccode <> '########'  
ORDER BY locations.lccode ASC   

```

## Colonnes
| Colonne |
|---------|
| lccode |
| lcactiv |
| lcmrpexcl |
| lcautoalloc |
| lcintext |
| lcadcode |
| lcifdefault |
| lcpriority |
| lctypbuffer |
| lcgroup |
| stdesc |
| lcdesc |

