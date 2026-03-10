# d_caden

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
SELECT 	items.itcode as art_code,
		items.itname as art_nom,
		(select itstat1.imdesc from itstat1 where items.itstat1 = itstat1.imcode) as art_grp,
		(select itstat2.isdesc from itstat2 where items.itstat1 = itstat2.iscode and items.itstat2 = itstat2.iscode2 ) as art_ssgrp,
		items.itsale as art_vendu,
		(select adresses.adname from linkitad JOIN adresses on adresses.adcode = linkitad.lkadcode where items.itcode =  linkitad.lkitem and linkitad.lktyp = 'P' and linkitad.lkmain = 'Y')as four_pref,
		(select choices.chname from choices where choices.chtype = 'ITYP' and choices.chcode = items.ittyp) as obt_mode,
		items.itleadtime as obt_delai,
		(select isnull(sum(foqty),0)
            from forecasts 
            where foitem = art_code 
              and dateformat(fodate, 'YYYYMM') = dateformat( dateadd( MONTH, 1, today()), 'YYYYMM')) as evol,
		items.itstock - isnull((select sum(lostock) from lots where loitem = items.itcode and lots.lost = 'Y'),0) as art_stk,		
		art_stk - (isnull (( SELECT sum(stocks.stqty - stocks.stalloc) 
             FROM lots, stocks  
            WHERE ( stocks.stlot = lots.locode ) and  
                  ( stocks.stitem = items.itcode ) and 
                  ( stocks.stqty <> 0 ) and 
				( lots.lost <> 'Y' ) and
                  ( ( lots.lostatus = 'R' ) OR 
                  ( lots.loexpdat <= today() ) ) ), 0 )
		+  isnull (( SELECT sum(stocks.stqty - stocks.stalloc)
					 FROM lots, stocks, locations
					WHERE stocks.stlot = lots.locode and  
							stocks.stitem = items.itcode and 
							stocks.stqty <> 0 and 
							locations.lccode = stocks.stloc and 
							( locations.lcmrpexcl = 'Y' OR lots.loexcmrp = 'Y') and
							lots.lostatus <> 'R' and 
							lots.lost <> 'Y' and
							lots.loexpdat > today() ), 0 )) as art_dispo,
		items.itum as art_unit,
		if evol <> 0 then round(art_dispo/evol, 2) else 0 end if as ratio,
		(select isnull(sum(hsqty*-trsign), 0) from histostock join transactions on hi
```

## Colonnes
| Colonne |
|---------|
| art_code |
| art_nom |
| art_grp |
| art_ssgrp |
| art_vendu |
| four_pref |
| obt_mode |
| obt_delai |
| evol |
| art_stk |
| art_dispo |
| art_unit |
| ratio |
| srt_m |
| srt_m1 |
| srt_m2 |
| srt_m3 |
| srt_m4 |
| srt_m5 |
| srt_m6 |
| srt_m7 |
| srt_m8 |
| srt_m9 |
| srt_m10 |
| srt_m11 |
| srt_m12 |
| prx_stk |
| prx_vt_std |
| art_tva |
| prx_vt_cons |
| marge_bio |
| marge_det |

