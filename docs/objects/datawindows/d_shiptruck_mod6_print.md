# d_shiptruck_mod6_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT 1 as clineid, 
		Truckhead.thcode,
		Truckhead.thdat,
		(SELECT first turnhead.thdesc 
			FROM truckturn, turnhead
			WHERE truckturn.ttturncode = turnhead.thid AND
				truckturn.tttruck = Truckhead.thcode) as turn,
		(SELECT first turnhead.thid
			FROM truckturn, turnhead
			WHERE truckturn.ttturncode = turnhead.thid AND
				truckturn.tttruck = Truckhead.thcode) as idturn,
      shipline.slcode as shcode, 
		Truckhead.thcmnt,
		Truckhead.thdriver,
		Shipto.stcode,
		Shipto.stcontact,
		Shipto.stloc,
		Adresses.adcode,
		Adresses.adname,
		shiphead.shprseq as print_order,
		shiphead.shpalnbr	,
		salline.slunitprice											As UnitPrice,
		salline.slsample												As sample,
		if isnull(items.itisumtarif, 'N') = 'N' then  
						( Select sum (sl_2.slqty) from shipline sl_2 where sl_2.slsalline = salline.slline and sl_2.slsalorder = salline.slcode ) 
															 else 
						( Select sum (sl_2.slcustpc) from shipline sl_2 where sl_2.slsalline = salline.slline and sl_2.slsalorder = salline.slcode )
															 endif As slqty,  
		1																	As CurrConv	,	
		isnull(AdRistCust,0)											As AdRistCust 	,
		0																	As ValExclDisc , 
		if adresses.adtvatyp = '3' or adresses.adtvatyp = '4' then 0 else tvalvl_country.tclvl endif as ttlvl,
		adresses.adesctcust,
		shiphead.shgroweight,
		salhead.shcurr,
		(select count(*)
		    from shipgrhead
		 where shipgrhead.ghshipid = shiphead.shcode and
				shipgrhead.ghlevel = 1)  as nbpal
	FROM Shiphead,
		Shipline,
		Truckhead,
		Truckline,
		Adresses,
		Shipto,
		salhead	,
		salline	,
		items,
		tvalvl_country
	WHERE truckhead.thcode = truckline.tlcode
		AND truckline.tlshiphead = shiphead.shcode
		AND truckline.tlshiphead = shipline.slcode
		AND truckline.tlshipline = shipline.slline
		AND adresses.adcode = shiphead.shcust
		AND adresses.adcode = shipto.stcode
		AND shipto.stseq = shiphead.shshipto
		AND truckhead.thcode = :Selected_truck
```

## Colonnes
| Colonne |
|---------|
| shiphead_clineid |
| truckhead_thcode |
| truckhead_thdat |
| cturn |
| cidturn |
| shipline_shcode |
| truckhead_thcmnt |
| truckhead_thdriver |
| shipto_stcode |
| shipto_stcontact |
| shipto_stloc |
| adresses_adcode |
| adresses_adname |
| shiphead_print_order |
| shiphead_shpalnbr |
| salline_unitprice |
| salline_sample |
| shipline_slqty |
| shiphead_currconv |
| shiphead_adristcust |
| shiphead_valexcldisc |
| tvalvl_ttlvl |
| adresses_adesctcust |
| shiphead_shgroweight |
| salhead_shcurr |
| nbpal |

