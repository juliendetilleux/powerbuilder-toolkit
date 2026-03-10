# d_purinv_clean

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT 'L',
         purline.plqtyinv,   
         purline.plcode,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         purline.plqtyrec,
         purline.plqtyreq,
		adresses.adcode,
		adresses.adname   
    FROM purline,   
         items,
		purhead,
		adresses  
   WHERE ( items.itcode = purline.plitem ) and    
			( purline.plqtyinv <> purline.plqtyrec) and  
         ( isnull(purline.plinvclot, 'N') <> 'Y') and
		purhead.phcode = purline.plcode and
		purhead.phsupp = adresses.adcode  
   
UNION ALL  
  
  SELECT 'G',
         purgline.plqtyinv,   
         purgline.plcode,   
         purgline.plline,   
         '',
         purgline.pldesc,   
         purgline.plqtyrec,
         0,
		adresses.adcode,
		adresses.adname    
    FROM purgline,
		purghead,
		adresses
   WHERE ( purgline.plqtyrec <> purgline.plqtyinv )  and  
         ( isnull(purgline.plinvclot, 'N') <> 'Y') and
		purghead.phcode = purgline.plcode and
		purghead.phsupp = adresses.adcode  
  
 order by 3 asc, 4 asc


```

## Colonnes
| Colonne |
|---------|
| ordertype |
| purline_plqtyinv |
| purline_plcode |
| purline_plline |
| purline_plitem |
| items_itname |
| purline_plqtyrec |
| purline_plqtyreq |
| adresses_adcode |
| adresses_adname |

