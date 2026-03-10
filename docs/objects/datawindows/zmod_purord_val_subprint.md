# zmod_purord_val_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT purline.plcode,
		purline.plline,
		purline.plitem,
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			purline.plqtyreq
		ELSE
			purline.plqtyord 
		ENDIF as plqtyord,
		purline.plqtyreq,
		purline.pluomord,
		purline.pluomconv,
		purline.pldatreq,
		purline.pldatsup,		
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			purline.plstdval * pluomconv
		ELSE
			purline.plstdval
		ENDIF as plstdval,
		purline.plpurval,
		purline.plqtyrec,
		purline.plstatus,
		purline.pladref,
		purline.plshipto,
		purline.plqtyinv,
		purline.plrapnb,
		purline.pllastrap,
		purline.plsalhead,
		purline.plsalline,
		purline.plinvclot,
		purline.pldatrec,
		purline.pltransfered,
		purhead.phcurr,
		shipto.stdesc,   
		shipto.stadr1,   
		shipto.stadr2,   
		shipto.stzip,   
		shipto.stloc,   
		shipto.stcountr,
		items.itname,
		items.itdesc2,
		(SELECT linkitad.lkadref2
			FROM linkitad
			WHERE linkitad.lktyp = 'P'
				AND linkitad.lkitem = items.itcode
				AND linkitad.lkadcode = purhead.phsupp
				AND linkitad.lkactiv = 'Y') AS lkadref2,
		(SELECT linkitad.lkadref
			FROM linkitad
			WHERE linkitad.lktyp = 'P'
				AND linkitad.lkitem = items.itcode
				AND linkitad.lkadcode = purhead.phsupp
				AND linkitad.lkactiv  = 'Y') AS lkadref ,
         ( select ildesc from itemlang where ilitcode = purline.plitem and illgcode = :as_lang ) translate, 
		purline.plcmnt,
		( SELECT comments.cocmnt  
			 FROM comments  
			WHERE ( comments.cotype = 'ICMT' ) AND  
					( comments.cokey = plitem ) AND  
					( comments.cotab = '1' ) AND  
					( comments.coprpur = 'Y' )     ) as commentitem,
		isnull(shipto.sttype,'') as sttype,
			isnull(stshipadcode,'') as stshipadcode,
			isnull(shipto.stshipseq,'') as stshipseq,
			isnull((SELECT progparam.ppvalue  
					
```

## Colonnes
| Colonne |
|---------|
| plcode |
| plline |
| plitem |
| plqtyord |
| plqtyreq |
| pluomord |
| pluomconv |
| pldatreq |
| pldatsup |
| plstdval |
| plpurval |
| plqtyrec |
| plstatus |
| pladref |
| plshipto |
| plqtyinv |
| plrapnb |
| pllastrap |
| plsalhead |
| plsalline |
| plinvclot |
| pldatrec |
| pltransfered |
| purhead_phcurr |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| items_itname |
| items_itdesc2 |
| clkadref2 |
| clkadref |
| ctranslate |
| purline_plcmnt |
| ccommentitem |
| csttype |
| cstshipadcode |
| cstshipseq |
| cshipdeliv |
| shipto_stcode |
| purline_plrist |
| purline_plval |
| commentitem2 |
| commentitem3 |
| commentitem4 |

