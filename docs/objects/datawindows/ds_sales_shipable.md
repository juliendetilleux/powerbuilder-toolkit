# ds_sales_shipable

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salline.slline,   
         salline.slshipto,   
         salline.slqtyreq,   
         salline.slqtyalloc,   
         salline.slqtyreal, 
         salline.sldatship, 
         adresses.adname,   
         shipto.stdesc,   
         salhead.shdatreq,   
         salhead.shcust,
			(  SELECT first truckhead.thtyp  
				 FROM truckline,   
						truckhead  
				WHERE ( truckline.tlsalhead = salline.slcode ) and  
						( truckline.tlsalline = salline.slline ) and  
						( truckline.tlcode = truckhead.thcode )  ) ,
			(  SELECT first truckref.trdesc  
				 FROM truckline,   
						truckref,   
						truckhead  
				WHERE ( truckline.tlsalhead = salline.slcode ) and  
						( truckline.tlsalline = salline.slline ) and  
						( truckline.tlcode = truckhead.thcode ) and  
						( truckhead.thtyp = truckref.trtyp ) )	,
			(  SELECT first truckhead.thcode    
				 FROM truckline,   
						truckhead  
				WHERE ( truckline.tlsalhead = salline.slcode ) and  
						( truckline.tlsalline = salline.slline ) and  
						( truckline.tlcode = truckhead.thcode )  ) as truckid  ,
			(  SELECT first truckhead.thdat    
				 FROM truckline,   
						truckhead  
				WHERE ( truckline.tlsalhead = salline.slcode ) and  
						( truckline.tlsalline = salline.slline ) and  
						( truckline.tlcode = truckhead.thcode )  ) as truckdat ,
			isnull((  SELECT first truckhead.thdriver    
				 FROM truckline,   
						truckhead  
				WHERE ( truckline.tlsalhead = salline.slcode ) and  
						( truckline.tlsalline = salline.slline ) and  
						( truckline.tlcode = truckhead.thcode )  ), '' ) as truckdriver ,
			salhead.shautho,
			salhead.shpreparator 				
    FROM adresses,   
         salhead,   
         salline,   
         shipto  
   WHERE ( salhead.shcust = adresses.adcode ) and  
         ( salline.slcode = salhead.shcode ) and  
         ( shipto.stcode = salhead.shcust ) and  
         ( shipto.
```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salline_slline |
| salline_slshipto |
| salline_slqtyreq |
| salline_slqtyalloc |
| salline_slqtyreal |
| salline_sldatship |
| adresses_adname |
| shipto_stdesc |
| salhead_shdatreq |
| salhead_shcust |
| cthtyp |
| ctrdesc |
| truckid |
| truckdat |
| truckdriver |
| salhead_shautho |
| salhead_shpreparator |

