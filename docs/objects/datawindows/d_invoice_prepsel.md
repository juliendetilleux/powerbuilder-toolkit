# d_invoice_prepsel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode as shcust,   
         adresses.adname,
         adresses.adloc,   
         salhead.shcurr,
         adresses.adinvm,
			adresses.adinvattention ,  
			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
				isnull(shiphead.shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = adresses.adcode),'##########')
			ENDIF as mcdo,

		isnull((select ppvalue from progparam where ppcode = 'ADINVTO' ),'') as ADINVTO ,
		adresses.adinvtyp  
    FROM salhead,   
         salline,   
         shiphead,   
         shipline,   
         adresses  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( shipline.slcode = shiphead.shcode ) and  
         ( shipline.slsalorder = salline.slcode ) and  
         ( salline.slline = shipline.slsalline ) and  
         ( adresses.adcode = if ADINVTO = '1' and isnull((select adinvadid 
																		from adresses
																		where adcode = shiphead.shcust),'') <> '' then (select adinvadid 
																																		from adresses
																																		where adcode = shiphead.shcust) else (if isnull((select shapbinvoice from salhead where shcode = salline.slcode),'')<>''then 
(select adcode from adresses where adapbcode = salhead.shapbinvoice )  
 else shiphead.shcust endif) endif ) and  
         ( ( shipline.slinv = 'N' ) )   
GROUP BY adresses.adcode,   
         adresses.adname,
         adresses.adloc,    
         salhead.shcurr,
         adresses.adinvm  ,
			adresses.adinvattention,
			mcdo,
		adresses.adinvtyp
UNION all 
  SELECT adresses.adcode as shcust,   
         adresses.adname, 
         adresses.adloc ,  
         salhead.shcurr  ,
         adresses.adinvm,
			adresses.adinvattention ,  

			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
				isnull(shiphead.shmccode, '#
```

## Colonnes
| Colonne |
|---------|
| shiphead_shcust |
| adresses_adname |
| adresses_adloc |
| salhead_shcurr |
| adresses_adinvm |
| adresses_adinvattention |
| cmcdo |
| adinvto |
| adresses_adinvtyp |

