# d_crm_stat_actions_detail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacreadate,   
         adrsactions.aaactiondate,   
         adresses.adname, 
         adrsactions.aaadrid,   
         adrsactions.aadesc,   
         adrsactions.aarespons,   
         adrsactions.aacomment, 
         adrsactions.aatiming, 
			adrsactions.aastatus, 
			lower(trim(adrsactions.aadesc)) as lowdesc,
			adrsactions.aacode 
    FROM adrsactions,   
         adresses  
   WHERE ( adresses.adcode = adrsactions.aaadrid )  


```

## Colonnes
| Colonne |
|---------|
| adrsactions_aacreadate |
| adrsactions_aaactiondate |
| adresses_adname |
| adrsactions_aaadrid |
| adrsactions_aadesc |
| adrsactions_aarespons |
| adrsactions_aacomment |
| adrsactions_aatiming |
| adrsactions_aastatus |
| clowdesc |
| adrsactions_aacode |

