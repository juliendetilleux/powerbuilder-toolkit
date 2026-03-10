# d_invent_modif

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _monthclot
- **Table principale**: 0

## SQL
```sql
  SELECT clotstocks.csitem,   
         items.itname,   
         clotstocks.cslot,   
         clotstocks.csloc,   
         clotstocks.csqtyorig,   
         clotstocks.csqtycorr,   
         lots.lolotctrl,   
         items.itum,   
         items.itdefaultlot,
			isnull((select sum(matallocs.maallocqty - matallocs.maissuedqty) 
						from matallocs 
					  where matallocs.maitem = clotstocks.csitem and
							  matallocs.malot = clotstocks.cslot and
							  matallocs.maloc = clotstocks.csloc and
							  matallocs.maallocqty - matallocs.maissuedqty > 0 and
							matallocs.maallocdat <= IF isnull( (select ppvalue from progparam where ppcode = 'REALDATCLOT'), '') <> 'Y' then
																matallocs.maallocdat
															ELSE
																datetime( dateformat(  isnull((Select cplaunchdat from clotperiod
 																										Where clotperiod.cpid = 
																											(select pmival  from parameters where pmcode = 'LASTCLOT')
																									 ), now()), 'YYYY-MM-01' ))
															ENDIF 
					 ),0) as alloc  
    FROM clotstocks,   
         items,   
         lots  
   WHERE ( clotstocks.csitem = items.itcode ) and  
         ( clotstocks.cslot = lots.locode )    




 



```

## Colonnes
| Colonne |
|---------|
| clotstocks_csitem |
| items_itname |
| clotstocks_cslot |
| clotstocks_csloc |
| clotstocks_csqtyorig |
| clotstocks_csqtycorr |
| lots_lolotctrl |
| items_itum |
| items_itdefaultlot |
| calloc |

