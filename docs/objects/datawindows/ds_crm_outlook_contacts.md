# ds_crm_outlook_contacts

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         contacts.ctline,   
         contacts.ctname,   
         contacts.cttel,   
         contacts.ctfax,   
         contacts.ctgsm,   
         contacts.ctlangue,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adlang,   
         contacts.ctfunction,   
         contacts.ctfirstname,   
         contacts.ctmail,   
         adresses.adadr2  
    FROM adresses,   
         contacts  
   WHERE ( contacts.ctadcode = adresses.adcode ) and  
         ( ( adresses.adactiv = 'Y' ) AND  
         ( contacts.ctactiv = 'Y' ) )         
ORDER BY adresses.adcode ASC,   
         contacts.ctline ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| contacts_ctline |
| contacts_ctname |
| contacts_cttel |
| contacts_ctfax |
| contacts_ctgsm |
| contacts_ctlangue |
| adresses_adname |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |
| adresses_adlang |
| contacts_ctfunction |
| contacts_ctfirstname |
| contacts_ctmail |
| adresses_adadr2 |

