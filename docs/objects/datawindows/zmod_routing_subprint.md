# zmod_routing_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT routline.rlline,   
         routline.rlwccode,   
         workcenters.wcname,   
         routline.rloffset,   
         routline.rlmacrun,   
         routline.rllabrun,   
         routline.rllabval,   
         routline.rlsetup,   
         routline.rloper,   
         routline.rllabfix,   
         routline.rlmacval  ,
		isnull(routline.rltest,0) as rltest,
         ( select workoper.woopdesc from workoper where routline.rlwccode = workoper.wowcid and routline.rltask = workoper.woopid ) as taches ,
			bomhead.bhcoeff ,
			bomhead.bhcoeff_calc 
			
    FROM routline,   
         workcenters,
			bomhead   
   WHERE ( workcenters.wccode = routline.rlwccode ) and  
         ( routline.rlcode = :Selected_item ) AND  
         ( routline.rltype = :Selected_type ) AND
			( bomhead.bhcode = routline.rlcode ) AND
			( bomhead.bhtype = routline.rltype ) 
ORDER BY routline.rlline ASC   

```

## Colonnes
| Colonne |
|---------|
| routline_rlline |
| routline_rlwccode |
| workcenters_wcname |
| routline_rloffset |
| routline_rlmacrun |
| routline_rllabrun |
| routline_rllabval |
| routline_rlsetup |
| routline_rloper |
| routline_rllabfix |
| routline_rlmacval |
| rltest |
| ctaches |
| bomhead_bhcoeff |
| bomhead_bhcoeff_calc |

