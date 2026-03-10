# d_purlinelimite_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purlinelimite.pllline,   
         purlinelimite.pllitem,   

	   IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' THEN /*os1435*/
			purlinelimite.pllqtyreq
	    ELSE
			purlinelimite.pllqtyord 
	    ENDIF as pllqtyord,   

         purlinelimite.plluomord,   
         purlinelimite.plldatsup,   
         items.itname,   
         purlinelimite.pllstatus,   
         IF purlinelimite.pllstatus = '2' and purlinelimite.pllenvoy = 'Y' THEN
				(select chname from choices where chtype = 'PUS2' and chcode = purlinelimite.pllenvoy)
			ELSE
				choices.chname 
			ENDIF as chname,   
         purlinelimite.pllqtyreq,   
         purlinelimite.plluomconv,
         items.itweight,   
         items.itvol,   
         items.itqtypal,   
         purlinelimite.pllcmnt,
	    purlinelimite.pllcode,
		purheadlimite.phlcurr,
			purlinelimite.pllqtyord As pllqtyord4val,  /*HA2158 sert pour calculer la valeur total de la ligne dans compute_6*/
		purlinelimite.pllenvoy,
		purlinelimite.pllcontract
    FROM purlinelimite,   
         items,   
         choices,
	    purheadlimite
   WHERE ( items.itcode = purlinelimite.pllitem ) and  
         ( purlinelimite.pllstatus = choices.chcode ) and  
         ( purlinelimite.pllcode = :Selected_orders ) and
         ( choices.chtype = 'PURS' )	and
	    ( purlinelimite.pllcode = purheadlimite.phlcode )
ORDER BY purlinelimite.pllline ASC   

```

## Colonnes
| Colonne |
|---------|
| purlinelimite_pllline |
| purlinelimite_pllitem |
| pllqtyord |
| purlinelimite_plluomord |
| purlinelimite_plldatsup |
| items_itname |
| purlinelimite_pllstatus |
| choices_chname |
| purlinelimite_pllqtyreq |
| purlinelimite_plluomconv |
| items_itweight |
| items_itvol |
| items_itqtypal |
| purlinelimite_pllcmnt |
| purlinelimite_pllcode |
| purheadlimite_phlcurr |
| purlinelimite_pllqtyord4val |
| purlinelimite_pllenvoy |
| purlinelimite_pllcontract |

