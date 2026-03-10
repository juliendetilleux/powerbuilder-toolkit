# d_qry_pur_histo_1ad_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcurr,   
         items.itname,   
         purline.plqtyreq,   
         purline.plqtyrec,   
         purline.pldatreq,   
         purline.plstdval,   
         purhead.phcode,   
         purline.plitem,   
         purline.plline,
         0,
			items.itstat1,
			items.itstat2,
			items.itactiv  
    FROM purhead,   
         purline,   
         items  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( items.itcode = purline.plitem ) and  
         ( ( purhead.phsupp = :asupp ) AND  
         ( purline.plqtyrec > 0 ) AND  
         ( purline.pldatreq >= :alimit ) AND  
         ( purline.pldatreq < :anow ) )  

Union  all 

  SELECT purghead.phcurr,   
         substr(purgline.pldesc,1,30),   
         purgline.plqty,   
         purgline.plqtyrec,
         purgline.pldatreq,   
         purgline.plstdval,   
         purghead.phcode,   
         choices.chname,   
         purgline.plline,
         purgline.plrefnum,
			'',
			'',
			'Y'  
    FROM purghead,   
         purgline,   
         choices  
   WHERE ( purgline.plcode = purghead.phcode ) and  
         ( choices.chcode = purghead.phtype ) And  
         ( choices.chtype = 'PMGS' ) and  
         ( ( purgline.plqtyrec > 0 ) AND  
         ( purgline.pldatreq >= :alimit ) AND
         ( purghead.phsupp = :asupp ) and  
         ( purgline.pldatreq < :anow ) )      

ORDER BY 7   
   

```

## Colonnes
| Colonne |
|---------|
| purhead_phcurr |
| items_itname |
| purline_plqtyreq |
| purline_plqtyrec |
| purline_pldatreq |
| purline_plstdval |
| purhead_phcode |
| purline_plitem |
| purline_plline |
| cf_mfg |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |

