# d_qry_pur_open_1ad_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcurr, 
         '',  
         items.itname,   
         purline.plqtyreq,   
         purline.plqtyrec,   
         purline.pldatreq,   
         purline.plstdval,   
         purhead.phcode,   
         purline.plitem,
			items.itstat1,
			items.itstat2,
			items.itactiv  
    FROM purhead,   
         purline,   
         items  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( items.itcode = purline.plitem ) and  
         ( ( purhead.phsupp = :asupp ) AND  
         ( purline.plstatus < '6' ) )  

Union  all 

  SELECT purghead.phcurr, 
         purghead.phtype,  
         substr(purgline.pldesc,1,30),   
         purgline.plqty,   
         purgline.plqtyrec, 
         purgline.pldatreq,  
         purgline.plstdval,   
         purghead.phcode,   
         choices.chname,
			'',
			'',
			'Y'
    FROM purghead,   
         purgline,   
         choices  
   WHERE ( purgline.plcode = purghead.phcode ) and  
         ( choices.chcode = purghead.phtype ) And  
         ( choices.chtype = 'PMGS' ) and  
         ( ( purgline.plstatus < '6' ) and
         ( purghead.phsupp = :asupp ) ) 
    
ORDER BY 8   

```

## Colonnes
| Colonne |
|---------|
| purhead_phcurr |
| pur_typ |
| items_itname |
| purline_plqtyreq |
| purline_plqtyrec |
| purline_pldatreq |
| purline_plstdval |
| purhead_phcode |
| purline_plitem |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |

