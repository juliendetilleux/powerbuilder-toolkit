# d_jalons_management

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT distinct jalons.jacode,   
		jalons.jaref , 
      jalons.jadesc,   
      jalons.jatype,      
      jalons.jastatus, 
		jalons.jastate, 
 		jalons.jasort,
		jalons.jastock,
      jalons.jaexpdate,    
      jalons.jacreadate,   
      (select users.usname from users where uscode = jalons.jacreauser) as jacreauser,   
		jalons.jamoddate, 
      (select users.usname from users where uscode = jalons.jamoduser) as jamoduser,   
      jalons.jafileref,
		jalons.jafileline,
      (SELECT fileline.fldesc FROM fileline WHERE fileline.flcode = jalons.jafileref and fileline.flline = jalons.jafileline) fileline,
		jalons.jaclotdate,
		(select users.usname from users where uscode = jalons.jaclotuser) as jaclotuser,
		filehead.fhdesc,
		jalons.jaintext,
		jalons.jaclotuser,
	 IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
			  isnull((select list(linkmcad2.lkmccode)
						 from linkmcad2 join adresses on linkmcad2.lkadcode = adresses.adcode 
						where adresses.adcode = filehead.fhadid And
								linkmcad2.lkactiv = 'Y' ), '##########' )
	 ELSE
			  isnull((select linkmcad.lkmccode 
						 from linkmcad join adresses on linkmcad.lkadcode = adresses.adcode 
						where adresses.adcode = filehead.fhadid ), '##########' )
	 ENDIF as mccode
    FROM jalons, filehead, condline, salline
   WHERE jalons.jatype IN ('R','A') AND
			filehead.fhcode = jalons.jafileref and
			jalons.jastatus = '0' and
			condline.cljalon = jalons.jacode and
			condline.clactiv = 'Y' and
			salline.slstdcondition = condline.clcode and
			(salline.slstatus < '6' OR (salline.slstatus = '6' and EXISTS ( select shipline.slline
																						  from shipline
																						where shipline.slsalorder = salline.slcode and
																								shipline.slsalline = salline.slline and
																								shipline.slinv = 'A'))) and /*os1753*/
			jalons.jafileref > 0 
 
UNION ALL
  
   SELECT distinct jalo
```

## Colonnes
| Colonne |
|---------|
| jacode |
| jaref |
| jadesc |
| jatype |
| jastatus |
| jastate |
| jasort |
| jastock |
| jaexpdate |
| jacreadate |
| jacreauser |
| jamoddate |
| jamoduser |
| jafileref |
| jafileline |
| fileline |
| jaclotdate |
| jaclotuser |
| filehead_fhdesc |
| jalons_jaintext |
| jalons_jaclotuser |
| mccode |

