# d_invoiceextraction_invoicehead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT 
			invoicehead.ihcode,   
         invoicehead.ihdate,   
         invoicehead.ihcurr,   
         invoicehead.ihstatus,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcomment,   
         invoicehead.ihexpiry,   
         invoicehead.ihcurconv,
         invoicehead.ihprint,
	    invoicehead.ihcodemc,
		isnull((select ppvalue from progparam where ppcode = 'ADINVTO' ),'') as ADINVTO  
    FROM invoicehead 
   WHERE (	( invoicehead.ihcurr = ( select sh1.shcurr from salhead as sh1 where sh1.shcode = :ras_order ) 
								and  invoicehead.ihcust = ( select if isnull(adresses.adinvadid, '') = '' or isnull((select ppvalue from progparam where ppcode = 'ADINVTO' ),'') <> '1' then adresses.adcode else adresses.adinvadid endif 
																	  from salhead as sh2, adresses 
																	where sh2.shcode = :ras_order and sh2.shcust = adresses.adcode) ) OR 
				( invoicehead.ihcust = if ADINVTO = '1' and isnull((select adinvadid 
																					from adresses
																					where adcode = :as_shcust),'') <> '' then (select adinvadid 
																																					from adresses
																																					where adcode = :as_shcust) else :as_shcust endif )   ) 
				AND  
			         ( invoicehead.ihstatus < '7' ) AND  
			         ( invoicehead.ihtypinv = '1' ) AND
						( invoicehead.ihdate >= datetime(today() -(  isnull( (SELECT pmnval FROM Parameters WHERE pmcode = 'LASTINV'), 0 ))) ) AND
			isnull(invoicehead.ihmccode, '##########') = IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN
																			isnull(:as_mcdo, '##########') 
																		ELSE
																			isnull(invoicehead.ihmccode, '##########')
																		ENDIF 
 ORDER BY invoicehead.ihdate DESC   //5383
```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihdate |
| ihcurr |
| ihstatus |
| ihsalval |
| ihtvaval |
| ihtotval |
| ihcomment |
| ihexpiry |
| ihcurconv |
| invoicehead_ihprint |
| ihcodemc |
| adinvto |

