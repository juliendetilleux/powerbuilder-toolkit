# d_purline_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plline,   
         purline.plitem,   

	   IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' THEN /*os1435*/
			purline.plqtyreq
	    ELSE
			purline.plqtyord 
	    ENDIF as plqtyord,   

         purline.pluomord,   
         purline.pldatsup,   
         items.itname,   
         purline.plstatus,   
         IF purline.plstatus = '2' and purline.plenvoy = 'Y' THEN
				(select chname from choices where chtype = 'PUS2' and chcode = purline.plenvoy)
			ELSE
				choices.chname 
			ENDIF as chname,   
         purline.plqtyreq,   
         purline.pluomconv,   
         purline.plqtyrec,   
         purline.plpurval,   
         items.itweight,   
         items.itvol,   
         items.itqtypal,   
         purline.plcmnt,
	    purline.plcode,
		purline.plstdval,
		purhead.phcurr,
			purline.plqtyord As plqtyord4val,  /*HA2158 sert pour calculer la valeur total de la ligne dans compute_6*/
		purline.plenvoy,
		purline.plqtyinv,
		purline.plcontract
    FROM purline,   
         items,   
         choices,
	    purhead
   WHERE ( items.itcode = purline.plitem ) and  
         ( purline.plstatus = choices.chcode ) and  
         ( purline.plcode = :Selected_orders ) and
         ( choices.chtype = 'PURS' )	and
	    ( purline.plcode = purhead.phcode )
ORDER BY purline.plline ASC   

```

## Colonnes
| Colonne |
|---------|
| plline |
| purline_plitem |
| purline_plqtyord |
| purline_pluomord |
| purline_pldatsup |
| items_itname |
| purline_plstatus |
| choices_chname |
| purline_plqtyreq |
| purline_pluomconv |
| purline_plqtyrec |
| purline_plpurval |
| items_itweight |
| items_itvol |
| items_itqtypal |
| purline_plcmnt |
| purline_plcode |
| purline_plstdval |
| purhead_phcurr |
| purline_plqtyord4val |
| plenvoy |
| purline_plqtyinv |
| purline_plcontract |

