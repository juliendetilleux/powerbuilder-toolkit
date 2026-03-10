# d_fil_act_project_stat_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT distinct filehead.fhcode,  filehead.fhdesc ,
         sum(adrsactions.aatiming) as timing   
    FROM adrsactions, filehead
   WHERE (adrsactions.aafileref = filehead.fhcode ) and 
         ( adrsactions.aaactiondate between :Start_date and :End_date ) and  
         ( adrsactions.aatiming <> 0 ) and
			( adrsactions.aastatus < '4' )
group by  filehead.fhdesc , filehead.fhcode 
ORDER BY 1 ASC

```

## Colonnes
| Colonne |
|---------|
| filehead_fhcode |
| filehead_fhdesc |
| ctiming |

