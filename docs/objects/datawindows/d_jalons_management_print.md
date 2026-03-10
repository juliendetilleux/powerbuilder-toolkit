# d_jalons_management_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT jalons.jacode,   
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
		filehead.fhdesc
    FROM jalons, filehead  
   WHERE ( jalons.jatype IN ('R','A') )  AND
         ( jalons.jaintext = ('E') ) AND
			( filehead.fhcode = jalons.jafileref ) and
			( jalons.jastatus = '0' )
 ORDER BY filehead.fhdesc, fileline, jalons.jasort

```

## Colonnes
| Colonne |
|---------|
| jalons_jacode |
| jalons_jaref |
| jalons_jadesc |
| jalons_jatype |
| jalons_jastatus |
| jalons_jastate |
| jalons_jasort |
| jalons_jastock |
| jalons_jaexpdate |
| jalons_jacreadate |
| cjacreauser |
| jalons_jamoddate |
| cjamoduser |
| jalons_jafileref |
| jalons_jafileline |
| cfileline |
| jalons_jaclotdate |
| cjaclotuser |
| filehead_fhdesc |
| jalons_jastate |
| jalons_jasort |
| jalons_jastock |
| jalons_jaexpdate |
| jalons_jacreadate |
| cjacreauser |
| jalons_jamoddate |
| cjamoduser |
| jalons_jafileref |
| jalons_jafileline |
| cfileline |
| jalons_jaclotdate |
| cjaclotuser |
| filehead_fhdesc |
| cfileline |
| jalons_jaclotdate |
| cjaclotuser |
| filehead_fhdesc |
| jalons_jastate |
| jalons_jasort |
| jalons_jastock |
| jalons_jaexpdate |
| jalons_jacreadate |
| cjacreauser |
| jalons_jamoddate |
| cjamoduser |
| jalons_jafileref |
| jalons_jafileline |
| cfileline |
| jalons_jaclotdate |
| cjaclotuser |
| filehead_fhdesc |
| cjacreauser |
| jalons_jamoddate |
| cjamoduser |
| jalons_jafileref |
| jalons_jafileline |
| cfileline |
| jalons_jaclotdate |
| cjaclotuser |
| filehead_fhdesc |

