# d_pur_rap_print_old

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT purhead.phsupp,   
         purhead.phcode,   
         purline.plline,   
         items.itname,   
         purline.pldatsup ,
			purline.plqtyord,
			purline.pluomord,
			purline.pluomconv,
			purline.plqtyrec
    FROM purhead,   
         purline,   
         items  
   WHERE ( purhead.phsupp = :adcode ) and 
 			( purline.plcode = purhead.phcode ) and  
         ( items.itcode = purline.plitem ) and
			( purline.pldatsup   < :seldate	) and
			( purline.plstatus   < '6'	) 
UNION all 
	SELECT purghead.phsupp,
			 purghead.phcode,
			 purgline.plline,
			 substr(purgline.pldesc,1,30),
			 purgline.pldatreq,
			 purgline.plqty,
          '',
          1,
			purgline.plqtyrec
	FROM  purghead,
			purgline
	WHERE ( purghead.phsupp = :adcode ) and
			( purgline.plcode = purghead.phcode ) and
			( purgline.plstatus   < '6'	)  and
			( purgline.pldatreq < :seldate)
Order by 5,2

```

## Colonnes
| Colonne |
|---------|
| purhead_phsupp |
| purhead_phcode |
| purline_plline |
| items_itname |
| purline_pldatsup |
| purline_plqtyord |
| uom2 |
| purline_pluomconv |
| purline_plqtyrec |

