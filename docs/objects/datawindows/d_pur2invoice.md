# d_pur2invoice

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,
         purhead.phsupp,   
         imputcpt.icref,   
         purline.pldatreq,   
         purline.plpurval,   
         ((purline.plqtyrec) * (purline.plpurval / purline.plqtyord) ) sreceived,   
         ((purline.plqtyinv) * (purline.plpurval / purline.plqtyord) ) sinvoiced,   
         ((purline.plqtyord - purline.plqtyinv ) * (purline.plpurval / purline.plqtyord) ) solde2binv,   
         (purline.plitem + ', ' + items.itname) item  
    FROM purline,
         purhead,   
         {oj items  LEFT OUTER JOIN imputcpt  ON items.itcptanal = imputcpt.iccode}  
   WHERE ( items.itcode = purline.plitem ) and 
         ( purline.plcode = purhead.phcode) and
			( sreceived <> sinvoiced) and 
         ( ( purline.plqtyinv < purline.plqtyord ) AND  
         ( purline.plstatus < '7' ) )
UNION all 
  SELECT purgline.plcode,   
         purgline.plline,   
         purghead.phsupp,   
         purgline.plcptanal,   
         purgline.pldatreq,   
         purgline.plpurval,   
         ((purgline.plqtyrec) * (purgline.plpurval / purgline.plqty) ) sreceived,   
         ((purgline.plqtyinv) * (purgline.plpurval / purgline.plqty) ) sinvoiced,   
         ((purgline.plqty - purgline.plqtyinv ) * (purgline.plpurval / purgline.plqty) ) solde2binv,   
         (purgline.pldesc) item  
    FROM purgline,
         purghead
   WHERE ( purgline.plqtyinv < purgline.plqty ) AND  
         ( purgline.plcode = purghead.phcode) and
			( sreceived <> sinvoiced) and 
         ( purgline.plstatus < '7' )
ORDER BY 3 ASC, 4 ASC
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

