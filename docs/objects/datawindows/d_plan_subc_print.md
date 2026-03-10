# d_plan_subc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT ( SELECT bomhead.bhsubc 
             FROM bomhead     
            WHERE bomhead.bhcode = matplan.mpitem     
              AND bomhead.bhtype='0'     
         ) as subc , 
         ( SELECT  bomhead.bhsuppid 
             FROM bomhead     
            WHERE bomhead.bhcode = matplan.mpitem     
              AND bomhead.bhtype='0'     
         ) as suppid 
         
    FROM matplan,     
         items     
   WHERE items.itcode = matplan.mpitem
     AND matplan.mpuse = 'M'
     AND items.ittyp <> 'F'
     AND subc = 'Y'   
group by suppid , mpitem   
 
UNION 
 
  SELECT routline.rlsubc as subc , 
         routline. rlsuppid as suppid          
    FROM matplan,     
         items,
		routline      
   WHERE items.itcode = matplan.mpitem
     AND matplan.mpuse = 'M'
     AND items.ittyp <> 'F'
     AND isnull(routline.rlsubc, 'N') = 'Y' 
	AND routline.rlcode = matplan.mpitem    
	AND routline.rltype = '0'
group by suppid , mpitem, routline.rlsubc   

ORDER BY suppid ASC     

```

## Colonnes
| Colonne |
|---------|
| csubc |
| csuppid |

