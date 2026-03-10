# d_purhead_rcpt_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode, 
         purhead.phstatus,   
         purhead.phsupp,
         purhead.phdatcrea,     
         adresses.adname,   
         '#' flag,
         purhead.phfileref,
         purhead.phfileline,  
         ( SELECT count(purline.plcode) 
             FROM purline 
            WHERE purline.plcode=purhead.phcode 
              AND purline.plstatus < '6' 
         ) AS cnt,
			purhead.phrcpocmnt,
		purhead.phrefint  
    FROM purhead,   
         adresses   
   WHERE adresses.adcode = purhead.phsupp 
     AND purhead.phstatus < '6'  
	  AND ( isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') <> 'Y' OR isnull(purhead.phaut,'') = 'A' ) 
     AND cnt > 0   

UNION  all 

  SELECT purghead.phcode,   
         purghead.phstatus, 
         purghead.phsupp,   
         purghead.phdatcrea,  
         adresses.adname,   
         purghead.phtype,
         purghead.phfileref,
         purghead.phfileline, 
         ( SELECT count(purgline.plcode) 
             FROM purgline 
            WHERE purgline.plcode=purghead.phcode 
              AND purgline.plstatus < '6' 
         ) AS cnt,
			' ',
		''
    FROM adresses,   
         purghead,   
         choices  
   WHERE purghead.phsupp = adresses.adcode  
     AND choices.chcode = purghead.phtype   
     AND purghead.phstatus < '6' 
     AND choices.chtype = 'PMGS'
     AND ( isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') <> 'Y' OR isnull(purghead.phaut,'') = 'A' )  
	  AND cnt > 0     

ORDER BY 1 ASC   
```

## Colonnes
| Colonne |
|---------|
| purhead_phcode |
| purhead_phstatus |
| purhead_phsupp |
| purhead_phdatcrea |
| adresses_adname |
| cflag |
| purhead_phfileref |
| purhead_phfileline |
| ccnt |
| purhead_phrcpocmnt |
| purhead_phrefint |

