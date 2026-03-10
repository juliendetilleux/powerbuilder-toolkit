# d_monitline_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT monitplanline.mlcode,   
         monitplanline.mlline,   
         monitplanline.mltyp,   
         monitplanline.mllocal,   
         monitplanline.mlequipmnt,   
         monitplanline.mlsamplepoint,   
         monitplanline.mltemp,   
         monitplanline.mlwarninglimit,   
         monitplanline.mlactionlimit,    
         monitplanline.mlopprod,
	    monitplan.mpcmnt 
    FROM monitplanline,  
		monitplan,
		items
   WHERE monitplanline.mlcode = :al_mhcode AND
		monitplanline.mlcode = monitplan.mpcode AND
		monitplanline.mltyp = items.itcode 
 
ORDER BY monitplanline.mlcode,   
         monitplanline.mlline

```

## Colonnes
| Colonne |
|---------|
| mlcode |
| mlline |
| mltyp |
| mllocal |
| mlequipmnt |
| mlsamplepoint |
| mltemp |
| mlwarninglimit |
| mlactionlimit |
| mlopprod |
| mpcmnt |

