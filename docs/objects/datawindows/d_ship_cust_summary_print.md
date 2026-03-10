# d_ship_cust_summary_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slitem,   
			( Select adresses.adlang 
				 From adresses
				Where adresses.adcode = :ras_Cust ) As AdrLang,
			IsNull(( Select linkitad.lkadref
				 		 From linkitad
						Where linkitad.lktyp = 'S' And
								linkitad.lkitem = salline.slitem And
								linkitad.lkadcode = :ras_Cust  ), '')  As ItCustCode ,
			IsNull(( Select linkitad.lkadref2
				 		 From linkitad
						Where linkitad.lktyp = 'S' And
								linkitad.lkitem = salline.slitem And
								linkitad.lkadcode = :ras_Cust  ), '') As ItCustName ,						
         salline.sluomord,   
         salline.slqtyord,
			salline.slqtyreq,   
         salline.sluomconv,   
         salline.slqtyreal,    
			salline.sldatreq,  //HA2393
			If Date( :radt_DateShip) = '2999-12-31' Then '%' Else String( Date(:radt_DateShip)) EndIf DateRef,
			salline.slcomment,
			items.itname,
			items.itum,
			items.itdesc2,
			( Select itemlang.ildesc
				 From itemlang
				Where itemlang.ilitcode = salline.slitem and
						itemlang.illgcode = AdrLang ) As Translate,
		   If ItCustCode = '' Then salline.slitem Else ItCustCode EndIf As ItCodeRef,
			salhead.shcustref	,
			Left( salhead.shcustref,( If Locate( salhead.shcustref, '-') = 0 
													Then Length ( salhead.shcustref ) 
													Else Locate( salhead.shcustref, '-') - 1 EndIf ))	As CustReference	,
			If IsNull( items.itisumtarif, '') = 'Y' And IsNull( ( Select progparam.ppvalue 
																					  From progparam 
																					 Where progparam.ppcode = 'ITUMTRF'), '') = '1' 
					Then 'Y'
					Else 'N' EndIf As IsUmTarif,
			IsNull( items.itumtarif, '') As UmTarif,
			IsNull( ( Select Sum ( shipline.slcustpc)
							From shipline
						  Where shipline.slsalorder = salline.slcode And
								  shipline.slsalline = salline.slline		 ), 0) as QtyTarif	
    FROM salline,   
         items,   
         salhead
   WHERE items.itcode = salline.slitem and  
         salhead.shcode = salline.slcode 
```

## Colonnes
| Colonne |
|---------|
| salline_slitem |
| adrlang |
| itcustcode |
| itcustname |
| salline_sluomord |
| salline_slqtyord |
| salline_slqtyreq |
| salline_sluomconv |
| salline_slqtyreal |
| salline_sldatreq |
| dateref |
| salline_slcomment |
| items_itname |
| items_itum |
| items_itdesc2 |
| translate |
| itcoderef |
| salhead_shcustref |
| custreference |
| isumtarif |
| umtarif |
| qtytarif |

