# d_crm_action_gr

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaaction,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aaprojet,   
         adrsactions.aafileref,   
         adrsactions.aafileline,   
         datetime(null) as timing_string,   
         adrsactions.aainvstatus,   
         adrsactions.aaactiondate,   
         adrsactions.aacontactid, 
			CAST(null as numeric(6)) as preavi,   
         adrsactions.aasalorder,   
         adrsactions.aasalline
    FROM adrsactions   

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaaction |
| aacomment |
| aadesc |
| aaprojet |
| aafileref |
| aafileline |
| timing_string |
| aainvstatus |
| aaactiondate |
| aacontactid |
| preavi |
| aasalorder |
| aasalline |

