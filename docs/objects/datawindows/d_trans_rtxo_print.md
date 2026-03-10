# d_trans_rtxo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hsseq,   
         histostock.hscode,   
         histostock.hsordtyp,   
         histostock.hsordno,   
         histostock.hsordlin,   
         histostock.hsitem,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsval,   
         histostock.hsuser,   
         histostock.hsdatim,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         histostock.hsord2no,   
         histostock.hsord2lin,   
         items.itname,   
         adresses.adname,   
         shiphead.shcust,   
         shiphead.shshipto,   
         shipto.stdesc ,  
         shipto.stadr1 ,
			shipto.stadr2 ,
			shipto.stzip ,
			shipto.stloc ,
			shipto.stcountr ,
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = adresses.adcode),'##########') as mcdo,
		isnull((select lots.loorgcode from lots where lots.locode = histostock.hslot ),'')  as loorgcode,
		IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/  and isnull(items.itisumtarif,'') = 'Y' and LOCATE(histostock.hsprgcmnt, ', -') > 0 THEN
 			SUBSTRING(histostock.hsprgcmnt, LOCATE(histostock.hsprgcmnt, ', -') + 3, 10)
		ELSE 
			''
		ENDIF as histostock,
		(SELECT salline.slcustref
				FROM salline
				WHERE salline.slcode = shipline.slsalorder 
					AND salline.slline = shipline.slsalline ) ,
			(select lots.loexpdat from lots where lots.locode = histostock.hslot)
    FROM adresses,   
         histostock,   
         items,   
         shipto,   
         shiphead,   
         shipline 
   WHERE ( histostock.hsitem = items.itcode ) and  
         ( shipline.slcode = shiphead.shcode ) and  
         ( histostock.hsord2no = shiphead.shcode ) and  
         ( histostock.hsord2lin = shipline.slline ) and  
         ( shiphead.shcust = adresses.adcode ) and  
         ( shiphead.shcust = shipto.stcode 
```

## Colonnes
| Colonne |
|---------|
| histostock_hsseq |
| histostock_hscode |
| histostock_hsordtyp |
| histostock_hsordno |
| histostock_hsordlin |
| histostock_hsitem |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsval |
| histostock_hsuser |
| histostock_hsdatim |
| histostock_hscomment |
| histostock_hsprgcmnt |
| histostock_hsord2no |
| histostock_hsord2lin |
| items_itname |
| adresses_adname |
| shiphead_shcust |
| shiphead_shshipto |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| cmcdo |
| loorgcode |
| histostock |
| slcustref |
| loexpdat |

