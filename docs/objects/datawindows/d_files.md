# d_files

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhcode,   
         filehead.fhdesc,   
         filehead.fhcreadate,   
         filehead.fhlastmoddate,   
         filehead.fhstatus,   
         filehead.fhprogress,   
         filehead.fhresp,   
         ( select adname from adresses where adresses.adcode = filehead.fhadid  ),
			filehead.fhstat1,
			( Select usname From users Where users.uscode = filehead.fhresp ) As Resp
    FROM filehead  
   WHERE ( filehead.fhstatus < '8' )    
order by Filehead.fhcode

```

## Colonnes
| Colonne |
|---------|
| fhcode |
| fhdesc |
| fhcreadate |
| fhlastmoddate |
| fhstatus |
| fhprogress |
| fhresp |
| adname |
| fhstat1 |
| resp |

