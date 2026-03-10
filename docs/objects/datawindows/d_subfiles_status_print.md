# d_subfiles_status_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhdesc,   
         fileline.fldesc,   
         fileline.flstatus,   
         adresses.adname,
			(select users.usname from users where users.uscode = fileline.flresp) as usname,
			isnull((SELECT sum(aarealtiming)
				FROM adrsactions 
				WHERE adrsactions.aafileref = fileline.flcode AND
					adrsactions.aafileline = fileline.flline  AND adrsactions.aastatus = '3') / 60,0) as tps_prest,
			isnull(fileline.flbudget,0) as flbudget ,
			fileline.flline
    FROM adresses,   
         filehead,   
         fileline
   WHERE ( filehead.fhadid = adresses.adcode ) and  
         ( fileline.flcode = filehead.fhcode ) and  
         ( filehead.fhstatus < '8' ) and
			( fileline.flstatus < '8' ) 
ORDER BY fileline.flstatus ASC,   
         filehead.fhdesc ASC,   
         fileline.fldesc   

```

## Colonnes
| Colonne |
|---------|
| filehead_fhdesc |
| fileline_fldesc |
| fileline_flstatus |
| adresses_adname |
| cusname |
| ctps_prest |
| fileline_flbudget |
| fileline_flline |

