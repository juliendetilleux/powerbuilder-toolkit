# d_fil_yield_fam_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhcode,

			filehead.fhdesc,

			yv_files_yield.Forecasted_sales as Forecasted_sales ,

			yv_files_yield.Invoiced_sales as Invoiced_sales,
	
			yv_files_yield.realcost as RealCost,

			filehead.fhcreadate as Crea_date,

			filehead.fhstartdate as Start_date,

			filehead.fhexpstartdate as ExpectStart_date,

			filehead.fhexpenddate as ExpectEnd_date,

			filehead.fhlastmoddate as LastMod_date,

			filehead.fhresp as RespId,

			( select usname from users where uscode = filehead.fhresp ) as RespName,


			filehead.fhstatus  as Project_status_Code ,

			( select chname from choices where chtype = 'FHST' and chcode = filehead.fhstatus)  as Project_status ,

			filehead.fhadid as CustCode,

			( select adname from adresses where adcode = filehead.fhadid ) as CustName,


			filefamily.ffcode,
			filefamily.ffdesc 
    FROM filehead LEFT OUTER JOIN mfghead ON
					( mfghead.mhfileref = filehead.fhcode ),
			filefamily ,
			yv_files_yield  
   WHERE ( filehead.fhstat1 = filefamily.ffcode ) and
			( filehead.fhcode = yv_files_yield.file_code ) and 
			( filehead.fhcreadate >= :date_debut ) and 
 			( filehead.fhcreadate <= :date_fin ) and
			( filehead.fhstatus > '0' ) and 
			( filehead.fhstatus < '9' ) 

      
ORDER BY filefamily.ffcode,
			filehead.fhcode
 
```

## Colonnes
| Colonne |
|---------|
| filehead_fhcode |
| filehead_fhdesc |
| forecasted_sales |
| invoiced_sales |
| crealcost |
| crea_date |
| start_date |
| expectstart_date |
| expectend_date |
| lastmod_date |
| respid |
| respname |
| project_status_code |
| project_status |
| custcode |
| custname |
| ffcode |
| ffdesc |

