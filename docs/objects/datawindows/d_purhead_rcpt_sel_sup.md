# d_purhead_rcpt_sel_sup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phsupp,
        adresses.adname   
   FROM purhead,   
         adresses   
   WHERE adresses.adcode = purhead.phsupp 
     AND exists(select 1 from purline where purline.plstatus < '6' and purline.plcode = purhead.phcode)
     AND purhead.phstatus < '6'  
	 AND ( isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') <> 'Y' OR isnull(purhead.phaut,'') = 'A' ) 

UNION  

  SELECT purghead.phsupp,   
         adresses.adname
    FROM adresses,   
         purghead,   
         choices  
   WHERE purghead.phsupp = adresses.adcode  
     AND choices.chcode = purghead.phtype 
     AND exists(select 1 from purgline where purgline.plstatus < '6' and purgline.plcode = purghead.phcode)
     AND purghead.phstatus < '6' 
     AND choices.chtype = 'PMGS'
     AND ( isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') <> 'Y' OR isnull(purghead.phaut,'') = 'A' )      
ORDER BY 1 ASC   
```

## Colonnes
| Colonne |
|---------|
| purhead_phsupp |
| adresses_adname |

