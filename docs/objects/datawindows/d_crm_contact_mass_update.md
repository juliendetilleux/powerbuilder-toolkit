# d_crm_contact_mass_update

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adzip,   
         adresses.adloc,   
         contacts.ctadcode,   
         contacts.ctline,   
         contacts.ctname,   
         contacts.ctfirstname,   
         contacts.ctfunction,   
         contacts.cttel,   
         contacts.ct_tel2,
         contacts.ctfax,   
         contacts.ctcomm,   
         contacts.ctmail,    
         contacts.ctgsm,   
         contacts.ctciv1,   
         contacts.ctservice,   
         contacts.ctlangue,   
         contacts.ctinteret,   
         contacts.ctcmnt,   
         contacts.ctlogin,   
         contacts.ctpassword,   
         contacts.ctactiv,   
         contacts.ctmain,    
         contacts.ctsort,   
         contacts.ctfunc,   
         isnull(contacts.ctmulti, 'N') as ctmulti,
			contacts.ctcrmuf01,
			contacts.ctcrmuf02,
			contacts.ctcrmuf03,
			contacts.ctcrmuf04,
			contacts.ctcrmuf05,
			contacts.ctcrmuf06,
			contacts.ctcrmuf07,
			contacts.ctcrmuf08,
			contacts.ctcrmuf09,
			contacts.ctcrmuf10,
			contacts.ctcrmuf11,
			contacts.ctcrmuf12,
			contacts.ctcrmuf13,
			contacts.ctcrmuf14,
			contacts.ctcrmuf15,
		contacts.ctwebcallview
    FROM adresses,   
         contacts  
   WHERE ( adresses.adcode not like '#########%' ) AND  
         adresses.adcode = contacts.ctadcode   
ORDER BY adresses.adcode ASC,   
         contacts.ctname ASC,   
         contacts.ctfirstname ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adzip |
| adloc |
| contacts_ctadcode |
| contacts_ctline |
| contacts_ctname |
| contacts_ctfirstname |
| contacts_ctfunction |
| contacts_cttel |
| contacts_ct_tel2 |
| contacts_ctfax |
| contacts_ctcomm |
| contacts_ctmail |
| contacts_ctgsm |
| contacts_ctciv1 |
| contacts_ctservice |
| contacts_ctlangue |
| contacts_ctinteret |
| contacts_ctcmnt |
| contacts_ctlogin |
| contacts_ctpassword |
| contacts_ctactiv |
| contacts_ctmain |
| contacts_ctsort |
| contacts_ctfunc |
| contacts_ctmulti |
| contacts_ctcrmuf01 |
| contacts_ctcrmuf02 |
| contacts_ctcrmuf03 |
| contacts_ctcrmuf04 |
| contacts_ctcrmuf05 |
| contacts_ctcrmuf06 |
| contacts_ctcrmuf07 |
| contacts_ctcrmuf08 |
| contacts_ctcrmuf09 |
| contacts_ctcrmuf10 |
| contacts_ctcrmuf11 |
| contacts_ctcrmuf12 |
| contacts_ctcrmuf13 |
| contacts_ctcrmuf14 |
| contacts_ctcrmuf15 |
| contacts_ctwebcallview |

