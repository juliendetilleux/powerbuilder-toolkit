# d_bcd_salhead_picking

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcustref,   
         salhead.shcurr,   
         salhead.shcmnt,   
         salhead.shdatcrea,   
         salhead.shdatreq,   
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
		(select list(distinct truckref.trdesc) 
			from truckline, truckref, truckhead 
			where truckhead.thcode = truckline.tlcode and
				truckref.trtyp = truckhead.thtyp and
				truckline.tlsalhead = salhead.shcode) as trdesc, 
		isnull(count(*),0) as nblines, 
		isnull(sum(salline.slqtyreq),0) as nbqty,
		isnull(sum(ceiling(salline.slqtyreq / 
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
												ELSE
													itean3conv 
												ENDIF
											ENDIF
										ELSE
											1
										ENDIF
									ENDIF
								ENDIF))
			,0) as nbqtycust,
		isnull(shpriority,99) as priority,
		shpreparator,
		isnull((SELECT linkmcad.lkmccode
				   FROM linkmcad 
				WHERE linkmcad.lkadcode = salhead.shcust ),
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
| priority |
| salhead_shpreparator |
| cmcdo |
| mcdoname |
| mdactiv |
| nballoc |
| sumslqtyalloc |
| salline_slshipto |
| stdesc |

