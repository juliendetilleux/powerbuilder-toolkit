# zmod_shiptruck_dettot_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT 1 as lineid , 
		tvalvl_country.tclvl  as tvalvl ,
		adresses.adcurr,
		round ( if isnull(items.itisumtarif, 'N') = 'N' then  shipline.slqty else shipline.slcustpc endif * (if isnull(salline.slvalsddisc,0) <> 0 then /*os1658*/
												salline.slvalsddisc * salline.sluomconv 
											else 
												salline.slunitprice
											endif) , 2 )  as stdval , 
		adresses.adristcust
	FROM shipline,
		shiphead,
		salline,
		adresses,
		tvalvl_country ,
		items,
		truckhead,
		truckline 
	WHERE truckhead.thcode = :an_truc
		AND truckhead.thcode = truckline.tlcode
		AND truckline.tlshiphead = shiphead.shcode 
          AND truckline.tlshiphead = shipline.slcode 
          AND truckline.tlshipline = shipline.slline
		AND shiphead.shcode = shipline.slcode
		AND shipline.slitem = items.itcode
		AND shiphead.shcust = adresses.adcode
		AND shipline.slsalorder = salline.slcode
		AND shipline.slsalline = salline.slline
		AND tvalvl_country.tccode = items.ittvalvl
		AND tvalvl_country.tccountry = (select adcountrid from adresses
												where adcode = IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2552*/
																		isnull(shiphead.shmccode, '##########')
																	ELSE
																		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########') 
																	ENDIF)
		AND salline.slsample <> 'Y'
		AND (shipline.slinvno = 0 or shipline.slinvno is null)

UNION ALL 
select	2, 
		0,
		adresses.adcurr,
		shippack.spqty *  packings.pkstdcost ,
		0 
	FROM shippack,
		shiphead,
		adresses,
		packings
	WHERE shippack.spcode = shiphead.shcode
		and shippack.sppackid = packings.pkcode
		and shiphead.shcode in ( select distinct tlshiphead from truckline where tlcode = :an_truc  ) 
		AND shiphead.shcust = adresses.adcode

UNION ALL 
  Select 3																		As LineType	,
			( Select tvalvl_country.tclvl
				 From	choic
```

## Colonnes
| Colonne |
|---------|
| shipline_lineid |
| tvalvl_country_tvalvl |
| adresses_adcurr |
| cstdval |
| adresses_adristcust |

