# d_crm_stat_noaction

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc,
         ( select count() from adrsactions where adrsactions.aaadrid = adresses.adcode and adrsactions.aastatus < '3' ) nbactions , 
         ( select max(aastsdat) from adrsactions where adrsactions.aaadrid = adresses.adcode ) lastaction 
    FROM adresses  
   WHERE adresses.adactiv = 'Y' and 
         nbactions = 0 AND  
         adresses.adcode not in ('#########C','#########R','#########S') 
order by lastaction, adresses.adname asc

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adadr1 |
| adzip |
| adloc |
| nbactions |
| lastaction |

