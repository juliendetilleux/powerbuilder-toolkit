# ds_crm_import_updatect

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT first(contacts.ctadcode),   
         contacts.ctline,   
         contacts.ctname,   
         contacts.cttel,   
         contacts.ctfax,   
         contacts.ctcomm,   
         contacts.ctmail,   
         contacts.ctgsm,   
         contacts.ctciv1, 
         contacts.ctservice,   
         contacts.ctlangue,   
         contacts.ctinteret,   
         contacts.ctcmnt,   
         contacts.ctactiv,    
         contacts.ctmain,   
         contacts.ctsort,   
         contacts.ctfirstname,            
         contacts.ctfunction  
    FROM contacts
	WHERE contacts.ctname=:ls_ctname
     AND contacts.ctfirstname=:ls_ctfirstname   
	  AND contacts.ctadcode=:ls_adcode       


```

## Colonnes
| Colonne |
|---------|
| ctadcode |
| ctline |
| ctname |
| cttel |
| ctfax |
| ctcomm |
| ctmail |
| ctgsm |
| ctciv1 |
| ctservice |
| ctlangue |
| ctinteret |
| ctcmnt |
| ctactiv |
| ctmain |
| ctsort |
| ctfirstname |
| ctfunction |

