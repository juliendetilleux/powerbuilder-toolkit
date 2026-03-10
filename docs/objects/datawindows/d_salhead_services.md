# d_salhead_services

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcurr,   
         salhead.shstatus,   
         1 as enabled,   
         ( select count(salline.slcode) 
			from salline, items 
				where salline.slcode = salhead.shcode 
					and salline.slitem = items.itcode 
					and items.ittyp = 'S' 
					and salline.slstatus < '6') as services_count,   
         adresses.adname,
			salhead.shfileref,
			salhead.shfileline,
			(select first count(*)
				from salline,
					items
				where salline.slcode = salhead.shcode and
					salline.slstatus < '6' and
					items.itcode = salline.slitem  and  
         		items.ittyp = 'S'  and 
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
					ENDIF = 'Y'
			) as factcond, 
			(select fhdesc from filehead where fhcode = shfileref) as filehead,
			(select fldesc from fileline where flcode = shfileline and flline = shfileline) as fileline,
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
			  isnull((select list(linkmcad2.lkmccode)
						 from linkmcad2
						where linkmcad2.lkadcode = adresses.adcode And
								linkmcad2.lkactiv = 'Y' ), '##########' )
		ELSE
			  isnull((select linkmcad.lkmccode 
						 from linkmcad 
						where linkmcad.lkadcode = adresses.adcode ), '##########' )
		ENDIF as mccode
   
```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| shcurr |
| shstatus |
| enabled |
| services_count |
| adresses_adname |
| salhead_shfileref |
| salhead_shfileline |
| cfactcond |
| filehead |
| fileline |
| mccode |

