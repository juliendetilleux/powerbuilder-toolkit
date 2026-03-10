# d_com_salhead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT 'C' as origin, 
         comsalhead.cshcode,   
         comsalhead.cshcust,   
         comsalhead.cshcustref,   
         comsalhead.cshcurr,   
         comsalhead.cshcurr,   
         comsalhead.cshdatcrea,   
         comsalhead.cshdatreq,   
         comsalhead.cshcomid,
			comsalhead.cshcmnt,
			'N' Selected,
			comsalhead.cshautho, 
         comsalhead.cshsalesman, 
         adresses.adname, 
         adresses.adordinfo, 
         adresses.addefturn as turnid,
		isnull((select smname from salesman where smcode = comsalhead.cshsalesman ),'')  as smname 
    FROM comsalhead , adresses   
   WHERE comsalhead.cshstatus < '3'   
     AND comsalhead.cshcust = adresses.adcode     

UNION

  SELECT 'W', 
         websalhead.wshcode,   
         websalhead.wshcust,   
         websalhead.wshcustref,   
         websalhead.wshcurr,   
         websalhead.wshcurr,   
         websalhead.wshdatcrea,   
         websalhead.wshdatreq,   
         websalhead.wshwebid,
			websalhead.wshcmnt,
			'N' Selected,
			websalhead.wshautho, 
         NULL , 
         adresses.adname, 
         adresses.adordinfo,       
         adresses.addefturn,
		''       
    FROM websalhead , adresses   
   WHERE websalhead.wshstatus < '3' 
     AND websalhead.wshcust = adresses.adcode    
  
UNION 
 
  SELECT 'X', 
         filesalhead.fhsalorder,   
         filesalhead.fhidcust,   
         filesalhead.fhcustref,   
         'EUR',   
         'EUR',   
         filesalhead.fhdatcrea,   
		if isnull((select min(fldatreq) from filesalline where flfilid = fhfilid and fldatreq is not null and fldatreq > '1901/01/01'), filesalhead.fhdatcrea +1) < '1901/01/01' then 
			today() +1 
		else 
	         	isnull((select min(fldatreq) from filesalline where flfilid = fhfilid and fldatreq is not null and fldatreq > '1901/01/01'), filesalhead.fhdatcrea +1) 
		endif,   
         filesalhead.fhfilid, 
	    (select max(flcomment) from files
```

## Colonnes
| Colonne |
|---------|
| comsalhead_corigin |
| comsalhead_cshcode |
| comsalhead_cshcust |
| comsalhead_cshcustref |
| comsalhead_cshcurr |
| cshcurr |
| comsalhead_cshdatcrea |
| comsalhead_cshdatreq |
| comsalhead_cshcomid |
| cshcmnt |
| selected |
| cshautho |
| comsalhead_cshsalesman |
| adresses_adname |
| adresses_adordinfo |
| cturnid |
| smname |

