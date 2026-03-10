# d_salline_services

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline,   
         salline.slitem,   
         salline.slqtyord,   
         salline.sluomord,   
         salline.sluomconv,   
         salline.sldatreq,   
         salline.slsalval,   
         salline.slqtyreal,   
         salline.slstatus,   
         1 as enabled,   
         salline.slcode,   
         salline.slfileref,   
         salline.slfileline,   
         salline.slcomment,   
         items.itname,   
         salline.slqtyinv,   
         salline.slqtyreq,   
         items.itum,
         if salline.slstdcondition > 0 then 1 else 0 endif as condcount,
			salline.slstdcondition,
			salline.slrist,
			IF salline.slstdcondition > 0 AND
				isnull((select max(jalons.jastatus) 
							from condline, jalons 
							where condline.clinvclot = 'N' 
								and condline.clactiv = 'Y'
								and condline.clratio > 0
								and condline.clcode = salline.slstdcondition
								and jalons.jacode = condline.cljalon),'8') = '8' AND
			 	isnull((select min(jalons.jastatus) 
							from condline, jalons 
							where condline.clinvclot = 'N' 
								and condline.clactiv = 'Y'
								and condline.clratio > 0
								and condline.clcode = salline.slstdcondition
								and jalons.jacode = condline.cljalon),'8') = '8' THEN
				'Y'
			ELSE
				'N'
			ENDIF as factcond 
    FROM salline,   
         items  
   WHERE items.itcode = salline.slitem  and  
         salline.slcode = :ran_code  AND  
         items.ittyp = 'S'  AND  
         salline.slstatus < '6' 


```

## Colonnes
| Colonne |
|---------|
| slline |
| slitem |
| slqtyord |
| sluomord |
| sluomconv |
| sldatreq |
| slsalval |
| slqtyreal |
| slstatus |
| salline_enabled |
| salline_slcode |
| salline_slfileref |
| salline_slfileline |
| salline_slcomment |
| items_itname |
| salline_slqtyinv |
| salline_slqtyreq |
| items_itum |
| ccondcount |
| salline_slstdcondition |
| salline_slrist |
| cfactcond |

