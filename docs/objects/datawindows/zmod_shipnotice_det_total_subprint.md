# zmod_shipnotice_det_total_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  Select 1																						As LineType	,
			0																						As PkVal		, 
			Sum( (if isnull(salline.slvalsddisc,0) <> 0 then /*os1658*/
						salline.slvalsddisc * salline.sluomconv 
					else 
						salline.slunitprice 
					endif) * 
				IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
					shipline.slcustpc
				ELSE
					shipline.slqty
				ENDIF ) 								As Val		,
			tvalvl_country.tclvl 																		As TVA		,
			salhead.shcurr																						,
			1																						As CurConv	,
			adresses.adristcust																				,
			adresses.adtvatyp																	As TvaType	,
			salline.slsample																	As sample	
	 From salline	,
			salhead,
			shipline,
			items,
			tvalvl_country,
			shiphead,
			adresses
	Where salhead.shcode  = shipline.slsalorder	And 
			salline.slcode  = salhead.shcode			And 
			salline.slline  = shipline.slsalline	And 
			items.itcode    = salline.slitem			And 
			tvalvl_country.tccode   = items.ittvalvl			And				
			tvalvl_country.tccountry = (select adcountrid from adresses
												where adcode = IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2552*/
																		isnull(shiphead.shmccode, '##########')
																	ELSE
																		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########') 
																	ENDIF) And 
			shiphead.shcust = adresses.adcode		And
			shipline.slcode = shiphead.shcode		And
			( salline.slprintghost <> 'N' or salline.slprintghost is null ) And
			shiphead.shcode = :an_ShipHead       
Group By LineType					,
			TVA						,
			salhead.shdatcrea		,
			salhead.shcust			,
			salline.slitem			,
			salhead.shcurr			,
			adresses.adristcust  ,
			TvaType       			,
			salline.slsample		

Union All

  Select 2																		As LineType	,
			0									
```

## Colonnes
| Colonne |
|---------|
| salline_linetype |
| salline_pkval |
| cval |
| tvalvl_country_tva |
| salhead_shcurr |
| salline_curconv |
| adresses_adristcust |
| adresses_tvatype |
| salline_sample |

