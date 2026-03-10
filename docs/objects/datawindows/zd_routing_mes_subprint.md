# zd_routing_mes_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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
         isnull(routline.rloper, '' ) as  rloper ,   
         routline.rllabfix,   
         routline.rlmacval  ,
         ( select workoper.woopdesc from workoper where routline.rlwccode = workoper.wowcid and routline.rltask = workoper.woopid ) as taches ,
			bomhead.bhcoeff ,
			bomhead.bhcoeff_calc, 
		isnull(routline.rlblocmes,'N') as rlblocmes,
		isnull(routline.rlblocqty,'N') as rlblocqty,
		routline.rltest, 
		routline.rlcoeff,
		routline.rlum,
		isnull(routline.rlctrl,'N') as rlctrl
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
| rloper |
| routline_rllabfix |
| routline_rlmacval |
| ctaches |
| bomhead_bhcoeff |
| bomhead_bhcoeff_calc |
| routline_rlblocmes |
| rlblocqty |
| routline_rltest |
| routline_rlcoeff |
| routline_rlum |
| rlctrl |

