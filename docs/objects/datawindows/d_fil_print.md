# d_fil_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhdesc,   
         fileline.fldesc,   
         filehead.fhcode,
			filehead.fhstat1,
			filehead.fhadid,
			filehead.fhresp,
			( Select users.usname From users Where users.uscode = filehead.fhresp ) As Resp,
			( Select adresses.adname From adresses Where adresses.adcode = filehead.fhadid ) As AdName ,   
         fileline.flline 
    FROM filehead,   
         fileline  
   WHERE fileline.flcode = filehead.fhcode    
		AND filehead.fhstatus < '8'
Order by filehead.fhcode, fileline.flline

```

## Colonnes
| Colonne |
|---------|
| fhdesc |
| fileline_fldesc |
| fhcode |
| fhstat1 |
| fhadid |
| fhresp |
| resp |
| adname |
| fileline_flline |

