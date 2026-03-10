# d_pur2inv_anal_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,   
         imputcpt.icref,   
         purline.pldatreq,   
         purline.plpurval,   
         ((
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			purline.plqtyrectarif
		ELSE
			purline.plqtyrec
		ENDIF	/*os1437*/
		) * (purline.plpurval / purline.plqtyord) ) sreceived,   
         ((purline.plqtyinv) * (purline.plpurval / purline.plqtyord) ) sinvoiced,   
         ((purline.plqtyord - purline.plqtyinv ) * (purline.plpurval / purline.plqtyord) ) solde2binv,   
         (purline.plitem + ', ' + items.itname) item  
    FROM purline,   
         {oj items  LEFT OUTER JOIN imputcpt  ON items.itcptanal = imputcpt.iccode}  
   WHERE ( items.itcode = purline.plitem ) and  
         ( ( purline.plqtyinv < purline.plqtyord ) AND  
         ( purline.plstatus < '7' ) )
UNION all 
  SELECT purgline.plcode,   
         purgline.plline,   
         purgline.plcptanal,   
         purgline.pldatreq,   
         purgline.plpurval,   
         ((purgline.plqtyrec) * (purgline.plpurval / purgline.plqty) ) sreceived,   
         ((purgline.plqtyinv) * (purgline.plpurval / purgline.plqty) ) sinvoiced,   
         ((purgline.plqty - purgline.plqtyinv ) * (purgline.plpurval / purgline.plqty) ) solde2binv,   
         (purgline.pldesc) item  
    FROM purgline
   WHERE ( purgline.plqtyinv < purgline.plqty ) AND  
         ( purgline.plstatus < '7' )
ORDER BY 3 ASC, 4 ASC   

```

## Colonnes
| Colonne |
|---------|
| purline_plcode |
| purline_plline |
| imputcpt_icref |
| purline_pldatreq |
| purline_plpurval |
| csreceived |
| csinvoiced |
| csolde2binv |
| citem |

