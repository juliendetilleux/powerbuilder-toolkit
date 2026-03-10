# d_bcd_tictrll_update2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT workline.wlwkcode,   
         workline.wldat,   
         workline.wlstart,   
         workline.wlend,   
         workline.wlwrktime,   
         workline.wltyp,   
         workline.wlmfgid,   
         workline.wlwcid,   
         workline.wlopid,   
         workline.wlstatus,   
         workoper.woopdesc,   
         workline.wlfileline,   
         progparam.ppvalue,   
         workline.wlseq,
 
         if workline.wltyp <> '4' then
				( select sum(mfgwcreqs.mwreqlab)
				from mfgwcreqs
				where mfgwcreqs.mwline = workline.wlwcreqsline and
					mfgwcreqs.mwcode = workline.wlmfgid ) 
			else
				isnull((SELECT fileline.flbudget
					FROM fileline
					WHERE fileline.flcode = workline.wlmfgid AND
						fileline.flline = workline.wlfileline),0)
			endif as timetot,
 
			if workline.wltyp <> '4' then
				(select sum(wkl.wlwrktime) 
					from workline as wkl
					where ( if workline.wlwcreqsline is null OR wkl.wlwcreqsline is null then workline.wlwcid else string(workline.wlwcreqsline) endif
							= if workline.wlwcreqsline is null OR wkl.wlwcreqsline is null then wkl.wlwcid else string(wkl.wlwcreqsline) endif) and
						( wkl.wlwkcode = if workline.wltyp = '1' then wkl.wlwkcode else workline.wlwkcode endif ) and
						( if workline.wlmfgid is null then 0 else workline.wlmfgid endif = if wkl.wlmfgid is null then 0 else wkl.wlmfgid endif ) and
								 ( if workline.wlwcreqsline is null and workline.wlmfgid is null then workline.wlopid else '0' endif
								= if workline.wlwcreqsline is null and workline.wlmfgid is null then wkl.wlopid else '0' endif) and
								  ( wkl.wldat = if workline.wltyp = '1' then wkl.wldat else workline.wldat endif ) ) 
			else
				isnull((select sum(isnull(wkl.wlwrktime,0)) 
							from workline as wkl
							where
								workline.wlmfgid = wkl.wlmfgid AND
								wkl.wltyp = '4' AND
								wkl.wlfileline = workline.wlfileline),0) 
			endif as timeprest,
 
         workope
```

## Colonnes
| Colonne |
|---------|
| wlwkcode |
| workline_wldat |
| workline_wlstart |
| workline_wlend |
| workline_wlwrktime |
| workline_wltyp |
| workline_wlmfgid |
| workline_wlwcid |
| workline_wlopid |
| workline_wlstatus |
| opidname |
| workline_wlfileline |
| progparam_ppvalue |
| workline_wlseq |
| ctimetot |
| ctimeprest |
| workoper_woopdesc |
| citem |
| workline_wlwcreqsline |
| cfilehead_text |
| cfileline_text |
| nbdoc_of |
| pdcfinish |

