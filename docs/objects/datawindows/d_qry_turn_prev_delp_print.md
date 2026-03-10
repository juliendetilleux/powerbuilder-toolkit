# d_qry_turn_prev_delp_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT list( dateformat( turn_prev.tpdate , ' DD/MM/YYYY' ) order by turn_prev.tpdate ),
			turnhead.thid,
			turnhead.thdesc,
			adresses.adcode,
			adresses.adname,
			adresses.adsalesman,
			adresses.adgrcust,
			shipto.stdesc,
			turnline.tlsort,
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
			  isnull((select list(linkmcad2.lkmccode)
						 from linkmcad2 
						where linkmcad2.lkadcode = adresses.adcode And
								linkmcad2.lkactiv = 'Y' ), '##########' )
			ELSE
			  isnull((select linkmcad.lkmccode 
						 from linkmcad 
						where linkmcad.lkadcode = adresses.adcode ), '##########' )
			ENDIF as mcdo,
			shipto.stzip ,
			shipto.stloc,
			shipto.stadr1,
			shipto.stadr2
   FROM turn_prev 
			JOIN turnhead ON turnhead.thid = turn_prev.tpturnhead
			JOIN turnline ON turnline.tlid = turnhead.thid
			JOIN adresses ON adresses.adcode = turnline.tladcode
			JOIN shipto ON shipto.stcode = turnline.tladcode AND
								shipto.stseq = turnline.tlshipto
 WHERE turn_prev.tpdate BETWEEN :start_date AND :stop_date
GROUP BY turnhead.thid,
			turnhead.thdesc,
			adresses.adcode,
			adresses.adname,
			adresses.adsalesman,
			adresses.adgrcust,
			shipto.stdesc,
			turnline.tlsort,
			mcdo  ,
			shipto.stzip ,
			shipto.stloc,
			shipto.stadr1,
			shipto.stadr2
ORDER BY turnhead.thdesc,
			turnhead.thid,
			turnline.tlsort,
			adresses.adcode,
			shipto.stdesc



```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| turnhead_thid |
| turnhead_thdesc |
| adresses_adcode |
| adresses_adname |
| adresses_adsalesman |
| adresses_adgrcust |
| shipto_stdesc |
| turnline_tlsort |
| mcdo |
| shipto_stzip |
| shipto_stloc |
| shipto_stadr1 |
| shipto_stadr2 |

