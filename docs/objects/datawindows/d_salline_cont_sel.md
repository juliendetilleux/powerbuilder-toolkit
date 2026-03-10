# d_salline_cont_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline,   
         salline.slitem,   
         salline.slqtyreq,   
         salline.sldatship,   
         items.itname,   
         salline.slqtyreal,   
         salline.slcustref,   
         salline.slstatus,   
		
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN /*os1438*/
	         round(salline.slqtyinv / isnull(salline.sluomconv,1),3)
		ELSE
			salline.slqtyinv
		ENDIF as slqtyinv,   

         salline.sluomord,   
         salline.slqtyord,   
         salline.slcontst,   
         salline.slqtyres,   
         salline.slqtyalloc,
		salline.sluomconv
    FROM salline,   
         items  
   WHERE ( items.itcode = salline.slitem ) and  
         ( ( salline.slcode = :Selected_orders ) )   
ORDER BY salline.slitem ASC,   
         salline.sldatship ASC   

```

## Colonnes
| Colonne |
|---------|
| slline |
| salline_slitem |
| salline_slqtyreq |
| salline_sldatship |
| items_itname |
| salline_slqtyreal |
| salline_slcustref |
| salline_slstatus |
| salline_slqtyinv |
| salline_sluomord |
| salline_slqtyord |
| salline_slcontst |
| salline_slqtyres |
| salline_slqtyalloc |
| salline_sluomconv |

