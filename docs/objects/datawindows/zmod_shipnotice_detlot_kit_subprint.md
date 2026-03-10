# zmod_shipnotice_detlot_kit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  Select 1 																	As clineid		,
			shipline.slcode 												As slcode		,
			shipline.slline 												As slline		,
			shipline.slsalorder 											As slsalorder	,
			shipline.slsalline					 						As slsalline	,
			shipline.slitem 												As slitem		,
			shipline.slitcustnam 										As slitcustnam	,
			if trim(isnull( (select loorgcode from lots where locode = shipline.sllot) ,'')) = '' then shipline.sllot else (select loorgcode from lots where locode = shipline.sllot) endif	 As sllot			,
			shipline.slqty 												As slqty			,
			shipline.slinv 												As slinv			,
			shipline.slinvno 												As slinvno		,
			shipline.slcomment 											As slcomment	,
			shipline.slqcip 												As slqcip		,
			shipline.sltransfered 										As sltransfered,
			items.itname 													As itname		,
			items.itdesc2 													As itdesc2		,
			items.itdefaultlot 											As itdefaultlot,
			salhead.shcode 												As shcode		,
			salhead.shcustref 											As shcustref	,
			salhead.shcurr 												As shcurr		,
			salline.sluomord 												As sluomord		,
			salline.slstdval 												As slstdval		,
			( Select yv_linkitad.lkadref
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'             And 
						yv_linkitad.lkitem   = items.itcode    And 
						yv_linkitad.lkadcode = shiphead.shcust And 
						yv_linkitad.lkactiv  = 'Y'                 )	As Lkadref		,
			( Select yv_linkitad.lkadref2
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_linkitad.lkadcode = shiphead.shcust And 
						yv_linkitad.lkactiv  = 'Y'						 ) As Lkadref2		,
			( Select itemlang.ildesc
				 From itemlang
				Where itemlang.ilitcode = shipline.slitem And 
						itemlang.illgcode = :as_Lang            ) As Translate	,
			1																	As CurrConv		,	
			0																	As AdRistCust 	,
			0																	As ValExclDisc	,
		
```

## Colonnes
| Colonne |
|---------|
| clineid |
| slcode |
| slline |
| slsalorder |
| slsalline |
| slitem |
| slitcustnam |
| sllot |
| slqty |
| slinv |
| slinvno |
| slcomment |
| slqcip |
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

