# d_pur_proj_fup

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
         purline.plqtyreq - purline.plqtyrec,   
         items.itum,
			'#',
         0
    FROM purhead,   
         purline,   
         adresses,   
         items  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( items.itcode = purline.plitem ) and  
         ( ( purline.plsalhead = :sel_salhead ) AND (purline.plsalline = :sel_salline) )   
UNION  all 
SELECT purghead.phcode,   
         purghead.phsupp,   
         adresses.adname,   
         purgline.plline,   
         chname,   
         substr(pldesc,1,30),   
         purgline.pldatreq,   
         purgline.plqty - purgline.plqtyrec,   
         '  ',
         purghead.phtype,
         purgline.plrefnum
    FROM adresses,   
         purgline,   
         purghead,   
         choices  
   WHERE ( purghead.phsupp = adresses.adcode ) and  
         ( purgline.plcode = purghead.phcode ) and  
         ( choices.chcode = purghead.phtype )  and  
         ( ( purgline.plsalhead = :sel_salhead ) AND (purgline.plsalline = :sel_salline) )   and  
         ( ( choices.chtype = 'PMGS') )    
ORDER BY 7 ASC   

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
| solde |
| items_itum |
| flag |
| compute_0011 |

