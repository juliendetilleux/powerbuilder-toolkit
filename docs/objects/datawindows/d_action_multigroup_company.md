# d_action_multigroup_company

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         isnull(adrsactions.aacontactid,0) as aacontactid,   
         adrsactions.aarespons,   
         adresses.adname,   
         contacts.ctname,   
         users.usname  
    FROM adresses,      
         users,   
         adrsactions LEFT OUTER JOIN contacts ON
				 	adrsactions.aaadrid = contacts.ctadcode AND
					adrsactions.aacontactid = contacts.ctline  
   WHERE adrsactions.aaadrid = adresses.adcode and  
         users.uscode = adrsactions.aarespons and  
         adrsactions.aagroup = :al_group    
 
ORDER BY adrsactions.aaadrid,   
         adrsactions.aarespons,   
         adrsactions.aacontactid 
  

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| aacontactid |
| aarespons |
| adname |
| ctname |
| usname |

