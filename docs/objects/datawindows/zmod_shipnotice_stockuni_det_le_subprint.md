# zmod_shipnotice_stockuni_det_le_subprint

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
  
			 if trim( isnull( (select loorgcode from lots where locode = shipline.sllot) , '') ) = '' then
				shipline.sllot
			else
				(select loorgcode from lots where locode = shipline.sllot)
			endif  												As sllot			,

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
						itemlang.illgcode = :ras_Lang           ) As Translate	,
			1																	As CurrConv		,	
			0																	As AdRistCust 	,
			0																	As
```

## Colonnes
| Colonne |
|---------|
| shipline_clineid |
| shipline_slcode |
| shipline_slline |
| shipline_slsalorder |
| shipline_slsalline |
| shipline_slitem |
| shipline_slitcustnam |
| shipline_sllot |
| shipline_slqty |
| shipline_slinv |
| shipline_slinvno |
| shipline_slcomment |
| shipline_slqcip |
| shipline_sltransfered |
| items_itname |
| items_itdesc2 |
| items_itdefaultlot |
| salhead_shcode |
| salhead_shcustref |
| shcurr |
| salline_sluomord |
| salline_slstdval |
| lkadref |
| lkadref2 |
| ctranslate |
| shipline_currconv |
| shipline_adristcust |
| shipline_valexcldisc |
| salline_umconv |
| lotexpiry |
| salline_unitprice |
| items_itum |
| salhead_shiptocmnt |
| salline_ghost |
| salline_printghost |
| ckit |
| salline_sample |
| cshowkit |
| ccust |
| calcdluo |
| lkcalcdluo |
| salline_sldatship |
| lkremval |
| remref |

