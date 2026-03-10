# d_etiq_bps_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
 SELECT first isnull((select max(truckline.tlcode) from truckline where truckline.tlsalhead = salline.slcode and truckline.tlsalline = salline.slline),0) as thcode,   
         (select max(truckhead.thdat)
			from truckhead, truckline
		where truckline.tlsalhead = salline.slcode and 
				truckline.tlsalline = salline.slline and
				truckline.tlcode = truckhead.thcode) as thdat,    
         salline.slitem,    
         adresses.adname,   
         IF trim( isnull( shipto.stdesc, '') ) = '' THEN adresses.adname ELSE shipto.stdesc ENDIF as shipto_desc ,   
         shipto.stzip,   
         shipto.stcmnt,   
         shipto.stcode,   
         shipto.stseq,    
         shipto.stadr1,    
         shipto.stadr2,   
         isnull((select max(truckhead.thdriver)
				from truckhead, truckline
			where truckline.tlsalhead = salline.slcode and 
					truckline.tlsalline = salline.slline and
					truckline.tlcode = truckhead.thcode),'') as thdriver,   
         adresses.adcode,   
         shipto.stloc,
		isnull((select first turnhead.thdesc 
				from turnhead, truckturn 
			where truckturn.ttturncode = turnhead.thid and 
					truckturn.tttruck = thcode),'') as turnhead,
		(select first truckref.trdesc from truckref, truckhead as tch where tch.thtyp = truckref.trtyp and tch.thcode = thcode) as trdesc,
		salhead.shdatreq,
		salline.sldatship,
		salline.sldatcrea,
		IF trim( isnull( shipto.sttel, '' ) ) = '' THEN adresses.adtel ELSE shipto.sttel ENDIF as shipto_tel,
		curr_adres.adname,
		curr_adres.adadr1,
		curr_adres.adadr2,
		curr_adres.adzip,
		curr_adres.adloc,
		salhead.shcurr,
		isnull( adresses.admail, '' ) as cust_mail,
		isnull( adresses.adtel, '' ) as cust_tel
    FROM salhead,   
		salline,
         adresses,   
         shipto,
		adresses as curr_adres
   WHERE salhead.shcode = salline.slcode and  
         adresses.adcode = salhead.shcust and  
         adresses.adcode = shipto.stcode and  
         shipto.stseq =
```

## Colonnes
| Colonne |
|---------|
| truckhead_thcode |
| truckhead_thdat |
| salline_slitem |
| adresses_adname |
| shipto_desc |
| shipto_stzip |
| shipto_stcmnt |
| shipto_stcode |
| shipto_stseq |
| shipto_stadr1 |
| shipto_stadr2 |
| truckhead_thdriver |
| adresses_adcode |
| shipto_stloc |
| turnhead |
| trdesc |
| salhead_shdatreq |
| salline_sldatship |
| salline_sldatcrea |
| shipto_tel |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| salhead_shcurr |
| cust_mail |
| cust_tel |

