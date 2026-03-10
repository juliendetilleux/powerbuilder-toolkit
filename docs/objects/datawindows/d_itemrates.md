# d_itemrates

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,
		ratehead.rhdesc,
         	items.itname,   
         	rateline.rlitem,   

         	IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' THEN
			items.itumtarif
		ELSE
			items.itum
		ENDIF as itum,
 
		rateline.rlval,
		IF items.ittyp IN ('C', 'D', 'P') THEN
			IF (isnull((select progparam.ppvalue from progparam where progparam.ppcode = 'RATEMARGC'),'') = '1' AND items.itsale = 'Y') OR
					(SELECT first Quotes.qoprice * linkitad.lkumconv / ( If lkcurr <> :SysCurr Then
																						( Select currencies.cuconv 
																							 From currencies 
																							Where currencies.cucode = linkitad.lkcurr ) 
																					 Else 1 EndIf )
					 FROM linkitad, Quotes
					WHERE linkitad.lkitem = items.itcode AND  
							linkitad.lktyp = 'P' AND
							linkitad.lkmain = 'Y' AND
							Linkitad.lkcode = Quotes.qocode AND
							Quotes.qominqty = (select min(Quotes.qominqty)
														from linkitad, Quotes
													  where linkitad.lkitem = items.itcode AND  
															linkitad.lktyp = 'P' AND
															linkitad.lkmain = 'Y' AND
															Linkitad.lkcode = Quotes.qocode)) is null THEN
				IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' THEN
					isnull(items.itumtbascost,0) + isnull(itumtxtrcost,0)
				ELSE
					isnull(items.itstdpur,0)
				ENDIF
			ELSE
				(SELECT first Quotes.qoprice * linkitad.lkumconv / ( If lkcurr <> :SysCurr Then
																						( Select currencies.cuconv 
																							 From currencies 
																							Where currencies.cucode = linkitad.lkcurr ) 
																					 Else 1 EndIf )
					 FROM linkitad, Quotes
					WHERE linkitad.lkitem = items.itcode AND  
							linkitad.lktyp = 'P' AND
							linkitad.lkmain = 'Y' AND
							Linkitad.lkcode = Quotes.q
```

## Colonnes
| Colonne |
|---------|
| ratehead_rhcode |
| ratehead_rhdesc |
| items_itname |
| rateline_rlitem |
| items_itum |
| rateline_rlval |
| stdpur |
| tvalvl |
| marge |

