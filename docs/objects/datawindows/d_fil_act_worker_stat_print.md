# d_fil_act_worker_stat_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT distinct adrsactions.aarespons,
         users.usname, 
         sum(adrsactions.aatiming) as timing   
    FROM adrsactions, users 
   WHERE (adrsactions.aarespons = users.uscode ) and 
         ( adrsactions.aaactiondate between :Start_date and :End_date ) and  
         ( adrsactions.aatiming <> 0 ) and
		   ( adrsactions.aarespons like :u ) and
			( adrsactions.aastatus = '3' )
group by adrsactions.aarespons ,users.usname 
ORDER BY 1 ASC

```

## Colonnes
| Colonne |
|---------|
| adrsactions_aarespons |
| users_usname |
| ctiming |

