# zd_qry_tictrlmfg_detail_subprint

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         workcenters.wcname,   
         workline.wldat,   
		(((left(wlend,2) * 100) + (right(wlend,2) / 0.6)) / 100) - (((left(wlstart,2) * 100) + (right(wlstart,2) / 0.6)) / 100) as wlwrktime,
         items.itname,
			( select sum(mwreqlab) from mfgwcreqs as req2 where req2.mwcode = mfghead.mhcode and mfgwcreqs.mwcode = req2.mwcode ) as forecast,
			'' as mfgstatus
    FROM mfghead,   
         mfgwcreqs,   
         workcenters,   
         workline,   
         items  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( items.itcode = mfghead.mhitem ) and  
         ( mfghead.mhcode = mfgwcreqs.mwcode ) AND  
         ( mfghead.mhstatus < '8' ) AND  
         ( workline.wlmfgid = mfghead.mhcode ) AND  
         ( workline.wlwcid = workcenters.wccode ) 
UNION ALL 
  SELECT mfghead.mhcode,   
         workcenters.wcname,   
         workline.wldat,   
		(((left(wlend,2) * 100) + (right(wlend,2) / 0.6)) / 100) - (((left(wlstart,2) * 100) + (right(wlstart,2) / 0.6)) / 100) as wlwrktime,
         items.itname,
			mcqalloc,
			'*'  
    FROM mfghead,   
         mfgcosts,   
         workcenters,   
         workline,   
         items  
   WHERE ( workcenters.wccode = mfgcosts.mcitem ) and
			( mfgcosts.mctype = 'L' ) and 
         ( items.itcode = mfghead.mhitem ) and  
         ( mfghead.mhcode = mfgcosts.mccode ) AND  
         ( mfghead.mhstatus = '8' ) AND  
         ( mfghead.mhclosdat >= :dat_clot ) AND  
         ( workline.wlmfgid = mfghead.mhcode ) AND  
         ( workline.wlwcid = workcenters.wccode ) 

order by 3 asc
  
```

## Colonnes
| Colonne |
|---------|
| mhcode |
| mfgstatus |
| itname |
| wcname |
| forecast |
| wlwrktime |

