# d_routing_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT distinct routline.rlline,   
         routline.rlwccode,   
         workcenters.wcname,   
         routline.rlmacrun,   
         routline.rllabrun,   
         routline.rloffset,   
         routline.rlsetup,   
         routline.rloper,   
         routline.rllabval,   
         routline.rllabfix,   
         routline.rlmacval,   
         workoper.woopdesc,
		routline.rlctrl,
		isnull((select ppvalue from progparam where ppcode = 'STDSPC'),'') as STDSPC,
		routline.rlsubc,
		routline.rlsuppid,
		(select adname from adresses where adcode = routline.rlsuppid) as adname
    FROM routline,   
         workcenters,   
         workoper   
   WHERE ( workcenters.wccode = routline.rlwccode ) and  
         ( routline.rlwccode = workoper.wowcid ) and  
         ( routline.rltask = workoper.woopid ) and 
         ( ( routline.rlcode = :Selected_item ) AND  
         ( routline.rltype = :Selected_type ) )  
ORDER BY routline.rlline ASC   

```

## Colonnes
| Colonne |
|---------|
| rlline |
| routline_rlwccode |
| workcenters_wcname |
| routline_rlmacrun |
| routline_rllabrun |
| routline_rloffset |
| routline_rlsetup |
| routline_rloper |
| routline_rllabval |
| routline_rllabfix |
| routline_rlmacval |
| workoper_woopdesc |
| routline_rlctrl |
| stdspc |
| routline_rlsubc |
| routline_rlsuppid |
| adname |

