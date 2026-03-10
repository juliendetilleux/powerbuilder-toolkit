# zd_fil_act_stat1_subprint

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
         adrsactions.aaaction  
    FROM adrsactions,
			filehead, 
         adresses  
   WHERE ( adresses.adcode = adrsactions.aaadrid ) and  
         ( adrsactions.aafileref = filehead.fhcode ) and   
			( adresses.adcode = adrsactions.aaadrid ) and  
         ( adrsactions.aaactiondate between :Start_date and :End_date )  and
         ( adrsactions.aatiming <> 0 ) and
			( adrsactions.aastatus < '4' )  

UNION ALL

  SELECT adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aatiming / 60,   
         0,   
         'Pas attaché à une affaire',   
         adrsactions.aastatus,   
         adrsactions.aaadrid,   
         adresses.adname,
         adrsactions.aaaction    
    FROM adrsactions,
         adresses  
   WHERE ( adresses.adcode = adrsactions.aaadrid ) and  
			(( adrsactions.aafileref is null ) or ( adrsactions.aafileref < 1 )) and
         ( adrsactions.aaactiondate between :Start_date and :End_date )    and
         ( adrsactions.aatiming <> 0 ) and
			( adrsactions.aastatus < '4' )

ORDER BY 5 ASC, 2 ASC

```

## Colonnes
| Colonne |
|---------|
| fhcode |
| fhdesc |
| hours |

