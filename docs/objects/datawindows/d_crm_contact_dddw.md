# d_crm_contact_dddw

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT contacts.ctadcode,   
         contacts.ctline,   
         contacts.ctname as ctname,
         contacts.ctfirstname as firstname 
    FROM contacts  
   WHERE contacts.ctadcode = :ra_adrid  
			AND contacts.ctactiv = 'Y'
ORDER BY contacts.ctmain DESC,   
         contacts.ctname ASC   

```

## Colonnes
| Colonne |
|---------|
| ctadcode |
| ctline |
| ctname |
| firstname |

