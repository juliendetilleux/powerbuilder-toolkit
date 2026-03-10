# d_pur3inv_anal_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,
         purhead.phsupp,   
         imputcpt.icref,   
         purline.pldatreq,   
         purline.plpurval,   
         (( 
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			purline.plqtyrectarif
		ELSE
			purline.plqtyrec
		ENDIF /*os1437*/
		) * (purline.plpurval / purline.plqtyord) ) sreceived,   
         ((purline.plqtyinv) * (purline.plpurval / purline.plqtyord) ) sinvoiced,   
         ((
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			purline.plqtyrectarif
		ELSE
			purline.plqtyrec
		ENDIF	/*os1437*/
		 - purline.plqtyinv ) * (purline.plpurval / purline.plqtyord) ) solde2binv,   
         (purline.plitem + ', ' + items.itname) item  
    FROM purline,
         purhead,   
         {oj items  LEFT OUTER JOIN imputcpt  ON items.itcptanal = imputcpt.iccode}  
   WHERE ( items.itcode = purline.plitem ) and 
         ( purline.plcode = purhead.phcode) and
			( sreceived <> sinvoiced) and 
         ( purline.plqtyinv < purline.plqtyord ) and 
         ( isnull(purline.plinvclot, 'N') <> 'Y') and  
         ( purline.plstatus < '7' ) and
		(:MultiCo = '*' OR :MultiCo = coalesce(purhead.phmccode ,'##########')) /*PHBO0058*/ 
UNION all 
  SELECT purgline.plcode,   
         purgline.plline,   
         purghead.phsupp,   
         purgline.plcptanal,   
         purgline.pldatreq,   
         purgline.plpurval,   
         ((purgline.plqtyrec) * (purgline.plpurval / purgline.plqty) ) sreceived,   
         ((purgline.plqtyinv) * (purgline.plpurval / purgline.plqty) ) sinvoiced,   
         ((purgline.plqtyrec - purgline.plqtyinv ) * (purgline.plpurval / purgline.plqty) ) solde2binv,   
         (purgline.pldesc) item  
    FROM purgline,
         purghead
   WHERE ( purgline.plqtyinv < purgli
```

## Colonnes
| Colonne |
|---------|
| purline_plcode |
| purline_plline |
| purhead_phsupp |
| imputcpt_icref |
| purline_pldatreq |
| purline_plpurval |
| csreceived |
| csinvoiced |
| csolde2binv |
| citem |

