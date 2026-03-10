# d_pur_rap

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,   
         purhead.phsupp,   
         adresses.adname,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         purline.pldatsup,   
         purline.plqtyreq,
			purline.plqtyrec,   
         items.itum,
			'#',
			purline.plrapnb,
			'N',
			purline.pllastrap,
         0,
			purline.plstatus, 
         adresses.adlang,
			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2435*/
				isnull(purhead.phmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purhead.phsupp),'##########') 
			ENDIF as mcdo 
    FROM purhead,   
         purline,   
         adresses,   
         items  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( items.itcode = purline.plitem ) and  
         ( ( purline.plstatus < '5' ) )   and
			(purline.pldatsup   <:datejour	) 
UNION  all 
SELECT purghead.phcode,   
         purghead.phsupp,   
         adresses.adname,   
         purgline.plline,   
         chname,   
         substr(pldesc,1,30),   
         purgline.pldatreq,   
         purgline.plqty,
			purgline.plqtyrec,   
         '  ',
         purghead.phtype,
			purgline.plrapnb,
			'N',
			purgline.pllastrap,
         purgline.plrefnum,
			purgline.plstatus, 
         adresses.adlang,
			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2435*/
				isnull(purghead.phmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purghead.phsupp),'##########') 
			ENDIF as mcdo  
    FROM adresses,   
         purgline,   
         purghead,   
         choices  
   WHERE ( purghead.phsupp = adresses.adcode ) and  
         ( purgline.plcode = purghead.phcode ) and  
         ( choices.chcode = purghead.phtype )  and  
 
```

## Colonnes
| Colonne |
|---------|
| phcode |
| purhead_phsupp |
| adresses_adname |
| plline |
| plitem |
| items_itname |
| purline_pldatsup |
| purline_plqtyreq |
| purline_plqtyrec |
| items_itum |
| flag |
| purline_plrapnb |
| rappel |
| purline_pllastrap |
| compute_0015 |
| purline_plstatus |
| adresses_adlang |
| mcdo |

