# d_prepcmd_etiq_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT isnull((select max(truckline.tlcode) from truckline where truckline.tlsalhead = salline.slcode and truckline.tlsalline = salline.slline),0) as thcode,   
         (select max(truckhead.thdat)
			from truckhead, truckline
		where truckline.tlsalhead = salline.slcode and 
				truckline.tlsalline = salline.slline and
				truckline.tlcode = truckhead.thcode) as thdat,    
         salline.slitem,    
         adresses.adname,   
         shipto.stdesc,   
         shipto.stzip,   
         shipto.stcmnt,   
         shipto.stcode,   
         shipto.stseq,   
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
		(select first truckref.trdesc from truckref, truckhead as tch where tch.thtyp = truckref.trtyp and tch.thcode = thcode) as trdesc
    FROM salhead,   
		salline,
         adresses,   
         shipto
   WHERE salhead.shcode = salline.slcode and  
         adresses.adcode = salhead.shcust and  
         adresses.adcode = shipto.stcode and  
         shipto.stseq = salline.slshipto and  
         salline.slcode = :al_slcode and
	    salline.slline = :al_slline 

```

## Colonnes
| Colonne |
|---------|
| truckhead_thcode |
| truckhead_thdat |
| salline_slitem |
| adresses_adname |
| shipto_stdesc |
| shipto_stzip |
| shipto_stcmnt |
| shipto_stcode |
| shipto_stseq |
| truckhead_thdriver |
| adresses_adcode |
| shipto_stloc |
| turnhead |
| trdesc |

