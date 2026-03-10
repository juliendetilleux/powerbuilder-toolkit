# d_mfgordr_subwc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname,   
         mfghead.mhreqqty,   
         mfghead.mhmfgqty,   
         mfghead.mhmfgdat,   
         histostock.hsitem,   
         items_b.itname as ithistoname,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsdatim,   
         histostock.hscode,   
         transactions.trname,   
         items_a.itum,   
         lots.lolotctrl,   
         transactions.trsign,
		mfgwcreqs.mwsuppid,
		workcenters.wcname,
		mfgwcreqs.mwline,
		adresses.adname    
    FROM histostock,   
         mfghead,   
         items items_a,   
         items items_b,   
         transactions,   
         lots,
		mfgwcreqs,
		adresses,
		Workcenters
   WHERE transactions.trcode = histostock.hscode AND
         mfghead.mhcode = histostock.hsordno AND
         items_a.itcode = mfghead.mhitem AND
         items_b.itcode = histostock.hsitem AND
         histostock.hslot = lots.locode AND
         histostock.hsordtyp = 'M' AND  
		histostock.hscode IN ('RCMO', 'DLMO', 'RTMO') AND
         histostock.hsordno = :Selected_order AND
		mfgwcreqs.mwcode = histostock.hsordno AND
		mfgwcreqs.mwsubc = 'Y' AND
		mfgwcreqs.mwsuppid = adresses.adcode AND
		mfgwcreqs.mwline = IF histostock.hscode = 'RCMO' THEN 
										IF isnull(histostock.hsordlin,0) = 0 THEN 
											(select max(mfgw2.mwline) 
																	 from mfgwcreqs as mfgw2
																	where mfgw2.mwcode = histostock.hsordno and
																			mfgw2.mwsubc = 'Y' )
										ELSE
											histostock.hsordlin
										ENDIF
 									ELSE 
										IF isnull(histostock.hsord2lin, 0) = 0 THEN
												(select min(mfgw2.mwline) 
													 from mfgwcreqs as mfgw2
													where mfgw2.mwcode = histostock.hsordno and
															mfgw2.mwsubc = 'Y' )
										ELSE
											histostock.hs
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| mfghead_mhmfgqty |
| mfghead_mhmfgdat |
| histostock_hsitem |
| items_ithistoname |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsdatim |
| histostock_hscode |
| transactions_trname |
| items_itum |
| lots_lolotctrl |
| transactions_trsign |
| mfgwcreqs_mwsuppid |
| workcenters_wcname |
| mfgwcreqs_mwline |
| adresses_adname |

