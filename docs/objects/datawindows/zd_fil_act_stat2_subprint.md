# zd_fil_act_stat2_subprint

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aatiming / 60 hours,   
         filehead.fhcode,   
         filehead.fhdesc,   
         adrsactions.aastatus,   
         adrsactions.aaadrid,   
         adresses.adname,
         adrsactions.aaaction,
			fileline.flline,
			fileline.fldesc,
			fileline.flbudget - ((SELECT sum(adrsact2.aarealtiming)
											FROM adrsactions as adrsact2 
											WHERE filehead.fhcode = adrsact2.aafileref AND
												fileline.flline = adrsact2.aafileline)/60) as tps_prest
    FROM adrsactions,
			filehead left outer join adresses on ( filehead.fhadid = adresses.adcode ), 
			fileline
   WHERE ( adrsactions.aafileref = filehead.fhcode ) and  
         ( adrsactions.aafileline = fileline.flline ) and  
         ( adrsactions.aaactiondate between :Start_date and :End_date )  and
         ( adrsactions.aatiming <> 0 ) and
			( adrsactions.aastatus < '4' ) and
			( fileline.flcode = filehead.fhcode) 

UNION ALL

  SELECT adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aatiming / 60,   
         0,   
         'Pas attaché à une affaire',   
         adrsactions.aastatus,   
         adrsactions.aaadrid,   
         '',
         adrsactions.aaaction,
			0,
			'',
			0    
    FROM adrsactions
   WHERE (( adrsactions.aafileref is null ) or ( adrsactions.aafileref < 1 )) and
         ( adrsactions.aaactiondate between :Start_date and :End_date )    and
         ( adrsactions.aatiming <> 0 ) and
			( adrsactions.aastatus < '4' )

ORDER BY 5 ASC, 2 ASC

```

## Colonnes
| Colonne |
|---------|
| adname |
| fhcode |
| fhdesc |
| fldesc |
| tps_prest |
| hours |

