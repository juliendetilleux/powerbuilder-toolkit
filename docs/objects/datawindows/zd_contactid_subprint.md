# zd_contactid_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT contacts.ctname,   
         contacts.ctfunction,   
         contacts.cttel,   
         contacts.ctfax,   
         contacts.ctcomm,   
         contacts.ctmail,   
         contacts.ctgsm,   
         contacts.ctciv1,   
         contacts.ctservice,   
         contacts.ctlangue,   
         contacts.ctcmnt,    
         contacts.ctfirstname
    FROM contacts 
   WHERE contacts.ctline = :ran_contactID and
				contacts.ctadcode = :ras_adcode 
ORDER BY contacts.ctname ASC   

```

## Colonnes
| Colonne |
|---------|
| contacts_ctname |
| contacts_ctfunction |
| contacts_cttel |
| contacts_ctfax |
| contacts_ctcomm |
| contacts_ctmail |
| contacts_ctgsm |
| contacts_ctciv1 |
| contacts_ctservice |
| contacts_ctlangue |
| contacts_ctcmnt |
| contacts_ctfirstname |

