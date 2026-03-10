# zmod_shipnotice_det_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  Select 1 																	As clineid		,
			shipline.slcode 												As slcode		,
			shipline.slsalorder 											As slsalorder	,
			shipline.slsalline					 						As slsalline	,
			shipline.slitem 												As slitem		,
			shipline.slitcustnam 										As slitcustnam	,

			sum(
			IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
				shipline.slcustpc
			ELSE
				shipline.slqty
			ENDIF) 												As slqty			,

			shipline.slinv 												As slinv			,
			shipline.slinvno 												As slinvno		,
			shipline.slcomment 											As slcomment	,
			shipline.sltransfered 										As sltransfered,
			items.itname 													As itname		,
			items.itdesc2 													As itdesc2		,
			items.itdefaultlot 											As itdefaultlot,
			salhead.shcode 												As shcode		,
			salhead.shcustref 											As shcustref	,
			salhead.shcurr 												As shcurr		,

			IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
				items.itumtarif
			ELSE
				salline.sluomord
			ENDIF  												As sluomord		,

			salline.slstdval 												As slstdval		,
			( Select yv_linkitad.lkadref
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'             And 
						yv_linkitad.lkitem   = items.itcode    And 
						yv_linkitad.lkadcode = cust And 
						yv_linkitad.lkactiv  = 'Y'                 )	As Lkadref		,
			( Select yv_linkitad.lkadref2
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_linkitad.lkadcode = cust And 
						yv_linkitad.lkactiv  = 'Y'						 ) As Lkadref2		,
			( Select itemlang.ildesc
				 From itemlang
				Where itemlang.ilitcode = shipline.slitem And 
						itemlang.illgcode = :as_Lang            ) As Translate	,
			1																	As CurrConv		,	
			0							
```

## Colonnes
| Colonne |
|---------|
| clineid |
| slcode |
| slsalorder |
| slsalline |
| slitem |
| slitcustnam |
| slqty |
| slinv |
| slinvno |
| slcomment |
| sltransfered |
| itname |
| itdesc2 |
| itdefaultlot |
| shcode |
| shcustref |
| shcurr |
| sluomord |
| slstdval |
| lkadref |
| lkadref2 |
| translate |
| currconv |
| adristcust |
| valexcldisc |
| salline_unitprice |
| salline_umconv |
| salhead_shiptocmnt |
| salline_ghost |
| salline_printghost |
| ckit |
| salline_sample |
| cshowkit |
| ccust |

