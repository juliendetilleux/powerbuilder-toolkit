# d_jalons_sqlselect

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT jalons.jacode,   
		jalons.jaref , 
         jalons.jadesc,   
         jalons.jatype,      
         jalons.jastatus, 
		jalons.jastate, 
		jalons.jaintext,
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
		(select users.usname from users where uscode = jalons.jaclotuser) as jaclotuser
    FROM jalons  
 ORDER BY jalons.jasort

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
| jaintext |
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

