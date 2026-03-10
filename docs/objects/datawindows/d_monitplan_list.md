# d_monitplan_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT monitplan.mpcode,   
         monitplan.mpname,   
         monitplan.mpcmnt,   
         monitplan.mpactif,   
         monitplan.mpcreadate,   
         monitplan.mpcreauser,   
         monitplan.mpmodifdate,   
         monitplan.mpmodifuser  
    FROM monitplan   
  WHERE (select count(*)
			   from monitplanline
			where monitplanline.mlcode = monitplan.mpcode) > 0 and
		monitplan.mpactif = 'Y' 
  
ORDER BY monitplan.mpcode 
```

## Colonnes
| Colonne |
|---------|
| mpcode |
| mpname |
| mpcmnt |
| mpactif |
| mpcreadate |
| mpcreauser |
| mpmodifdate |
| mpmodifuser |

