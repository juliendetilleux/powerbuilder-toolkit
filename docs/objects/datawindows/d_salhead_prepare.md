# d_salhead_prepare

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcustref,   
         salhead.shcurr,   
         salhead.shcmnt,   
         salhead.shdatcrea,   
         (select min(salline.sldatship)
			from salline 
			where salline.slcode = salhead.shcode and
				salline.slstatus < '5' ) as shdatreq,   
         salhead.shautho,   
         adresses.adname,   
         (select turnhead.thdesc from turnhead where IF isnull(salhead.shturnid,0) = 0 THEN 
																		adresses.addefturn 
																	ELSE 
																		salhead.shturnid 
																	ENDIF = turnhead.thid) as thdesc,   
         salhead.shstatus,   
         choices.chname,
         (select choices.chname 
			from choices 
			where choices.chtype = 'SALA' 
				and choices.chcode = salhead.shautho ) as autorisation,
		salhead.shcustref,
		(select list(distinct string(truckhead.thcode) + ' ('+ truckref.trdesc+')') 
			from truckline, truckref, truckhead 
			where truckhead.thcode = truckline.tlcode and
				truckref.trtyp = truckhead.thtyp and
				truckline.tlsalhead = salhead.shcode) as trdesc, 
		(select count(*) 
			from salline 
			where salline.slcode = salhead.shcode and
				salline.slstatus < '5' ) as nblines, 
		(select sum(salline.slqtyreq)
			from salline 
			where salline.slcode = salhead.shcode and
				salline.slstatus < '5' ) as nbqty,
		(select sum(ceiling(salline.slqtyreq / 
							IF isnull(items.iteanref,'') = '2' THEN
									1
								ELSE
									IF isnull(items.itean2ref,'') = '2' THEN
										IF isnull(itean2conv,0) = 0 THEN 
													1 
										ELSE 
											IF itean2conv < 0 THEN
												1 / itean2conv
											ELSE
												itean2conv
											ENDIF
										ENDIF
									ELSE
										IF isnull(items.itean3ref,'') = '2' THEN
											IF isnull(itean3conv,0) = 0 THEN 
												1 
											ELSE 
												IF itean3conv < 0 THEN
													1 / itean3conv 
	
```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| shcustref |
| shcurr |
| shcmnt |
| shdatcrea |
| shdatreq |
| shautho |
| adresses_adname |
| turnhead_thdesc |
| salhead_shstatus |
| choices_chname |
| autorisation |
| shcustref |
| trdesc |
| nblines |
| nbqty |
| nbqtycust |
| salhead_shpriority |
| salhead_shpreparator |
| cmcdo |
| mcdoname |
| mdactiv |
| nballoc |
| stdesc |

