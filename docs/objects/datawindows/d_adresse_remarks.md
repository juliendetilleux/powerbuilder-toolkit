# d_adresse_remarks

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT ad_crm_rem.reid,   
         ad_crm_rem.readcode,   
         ad_crm_rem.recmnt,   
         ad_crm_rem.redate  
    FROM ad_crm_rem  
   WHERE ad_crm_rem.readcode = :adcode and    
			ad_crm_rem.redate between :ran_datestart and :ran_dateend    
ORDER BY ad_crm_rem.redate DESC   

```

## Colonnes
| Colonne |
|---------|
| reid |
| readcode |
| recmnt |
| redate |

