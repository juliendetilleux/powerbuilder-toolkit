# d_ship_invcust_summary_print

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
			IsNull(( Select First linkitad.lkadref
				 		 From linkitad
						Where ( ( linkitad.lktyp = 'S' And linkitad.lkadcode = :ras_Cust 											) Or
								  ( linkitad.lktyp = 'A' And linkitad.lkadcode = ( Select adresses.adassort
																									  From adresses
																									 Where adresses.adcode = :ras_Cust )	)	/*HA2392*/ ) And 
								linkitad.lkitem = salline.slitem ), '')  As ItCustCode ,
			IsNull(( Select First linkitad.lkadref2
				 		 From linkitad
						Where ( ( linkitad.lktyp = 'S' And linkitad.lkadcode = :ras_Cust 											) Or
								  ( linkitad.lktyp = 'A' And linkitad.lkadcode = ( Select adresses.adassort
																									  From adresses
																									 Where adresses.adcode = :ras_Cust )	)	/*HA2392*/ ) And
								linkitad.lkitem = salline.slitem ), '') As ItCustName ,						
         salline.sluomord,   
         salline.slqtyord,     
         salline.slqtyreq,  
         salline.sluomconv,   
         salline.slqtyreal,  
			salline.sldatreq,  //HA2393
			If Date( :radt_DateShip) = '2999-12-31' Then '%' Else String( Date(:radt_DateShip)) EndIf DateRef,
			salline.slcomment,
			items.itum,
			items.itname,
			items.itdesc2,
			( Select itemlang.ildesc
				 From itemlang
				Where itemlang.ilitcode = salline.slitem and
						itemlang.illgcode = AdrLang				 ) As Translate,
		   If ItCustCode = '' Then salline.slitem Else ItCustCode EndIf As ItCodeRef,
			salhead.shcustref	,
			Left( salhead.shcustref,( If Locate( salhead.shcustref, '-') = 0 
													Then Length ( salhead.shcustref ) 
													Else Locate( salhead.shcustref, '-') - 1 EndIf ))	As CustReference	,
			If IsNull( items.itisumtarif, '') = 'Y' And IsNull( ( Select progparam.ppvalue 
																					  From progparam 
																					 Where progparam.ppcode = 'ITUMT
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
| items_itum |
| items_itname |
| items_itdesc2 |
| translate |
| itcoderef |
| salhead_shcustref |
| custreference |
| isumtarif |
| umtarif |
| qtytarif |

