# d_jalons

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT jalons.jacode,   
         jalons.jadesc,   
         jalons.jatype,   
         jalons.jafileref,   
         jalons.jastatus, 
         jalons.jaintext, 
         jalons.jacreadate,   
         (select users.usname from users where uscode = jalons.jacreauser) as jacreauser,   
         jalons.jamoddate,   
         (select users.usname from users where uscode = jalons.jamoduser) as jamoduser,   
         jalons.jamoddate,   
         jalons.jafileline  
    FROM jalons  
   WHERE ( jalons.jatype = if :as_typ is null or trim(:as_typ) = '' then jalons.jatype else :as_typ endif)  OR
			( jalons.jatype = if :as_typ = 'R' then 'A' else '/' endif  )
 ORDER BY jalons.jasort

```

## Colonnes
| Colonne |
|---------|
| jacode |
| jadesc |
| jatype |
| jafileref |
| jastatus |
| jaintext |
| jacreadate |
| jacreauser |
| jamoddate |
| jamoduser |
| jamoddate |
| jafileline |

