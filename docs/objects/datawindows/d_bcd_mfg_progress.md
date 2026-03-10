# d_bcd_mfg_progress

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreqs.mwline,   
         mfgwcreqs.mwwccode,   
         workcenters.wcname,   
         mfgwcreqs.mwstartdat,   
         mfgwcreqs.mwreqmac,   
         mfgwcreqs.mwreqlab,   
         mfgwcreqs.mwoper,   
         workoper.woopdesc,
			mfgwcreqs.mwcode,
			mfgwcreqs.mwfinish,  
			mfgwcreqs.mwdatefinish,
			workline.wldat,
			workers.wkname, 
			mfgwcreqs.mwreqlab as timetot,
			(select sum(workline.wlwrktime) 
					from workline
					where mfgwcreqs.mwline = workline.wlwcreqsline AND
							workline.wltyp = '1' AND
							workline.wlmfgid = mfgwcreqs.mwcode) as timeprest,
		( select sum( maduration )
		    from mfgwcreqs_advsc 
		 where mfgwcreqs_advsc.mamachine is null AND
				mfgwcreqs_advsc.maschednum = (select cast( pmnval as integer ) from parameters where pmcode = 'ADVSCHDT' ) and
				mfgwcreqs_advsc.mamwcode = mfgwcreqs.mwcode and
				mfgwcreqs_advsc.mamwline = mfgwcreqs.mwline ) as timenoassign,
		( select sum( maduration )
		    from mfgwcreqs_advsc 
		 where mfgwcreqs_advsc.mamachine is not null AND
				mfgwcreqs_advsc.maschednum = (select cast( pmnval as integer ) from parameters where pmcode = 'ADVSCHDT' ) and
				mfgwcreqs_advsc.mamwcode = mfgwcreqs.mwcode and
				mfgwcreqs_advsc.mamwline = mfgwcreqs.mwline /*and
				mfgwcreqs_advsc.mastart >= now()*/ ) as timeassigned,
		
		dateformat( dateadd(mi, timeassigned, convert(time, '00:00')), 'hh:mm' )  as timeassigned_time,
		dateformat( dateadd(mi, timenoassign, convert(time, '00:00')), 'hh:mm' )  as timenoassign_time,

		( select ppvalue from progparam where ppcode = 'ADVANCSCHED' ) as ADVANCSCHED,
		items.itcode,
		items.itname
    FROM mfgwcreqs
		JOIN mfghead ON mfghead.mhcode =  mfgwcreqs.mwcode
		JOIN items ON items.itcode = mfghead.mhitem,
         workcenters left outer join workline ON workcenters.wccode = workline.wlwcid and
				workline.wlmfgid = :Selected_order and
				workline.wltyp = 'X' and
				workline.wldat = (select max(wl.wlda
```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwline |
| mfgwcreqs_mwwccode |
| workcenters_wcname |
| mfgwcreqs_mwstartdat |
| mfgwcreqs_mwreqmac |
| mfgwcreqs_mwreqlab |
| mfgwcreqs_mwoper |
| workoper_woopdesc |
| mfgwcreqs_mwcode |
| mfgwcreqs_mwfinish |
| mfgwcreqs_mwdatefinish |
| workline_wldat |
| workers_wkname |
| mfgwcreqs_timetot |
| timeprest |
| timenoassign |
| timeassigned |
| timeassigned_time |
| timenoassign_time |
| advancsched |
| items_itcode |
| items_itname |

