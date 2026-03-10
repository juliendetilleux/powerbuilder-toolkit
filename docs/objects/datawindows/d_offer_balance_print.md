# d_offer_balance_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         users.usname,     
         users.uscode,   
         adrsactions.aaactiondate,   
         adrsactions.aaquoteval
    FROM adresses,   
         adrsactions,   
         users  
   WHERE ( adrsactions.aaadrid = adresses.adcode ) and  
         ( users.uscode = adrsactions.aarespons ) and
			( adrsactions.aaaction = -2 ) and
			( adrsactions.aaactiondate >= :adat_start ) and 
			( adrsactions.aaactiondate <= :adat_end ) and
			( adrsactions.aaquoteval is not null) and
			( adrsactions.aastatus = 1 ) 
 ORDER BY adrsactions.aaactiondate,
			adresses.adname
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| users_usname |
| users_uscode |
| adrsactions_aaactiondate |
| adrsactions_aaquoteval |

