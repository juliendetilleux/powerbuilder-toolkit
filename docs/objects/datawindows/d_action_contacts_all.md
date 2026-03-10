# d_action_contacts_all

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         contacts.ctadcode,   
			contacts.ctline,   
         contacts.ctname,   
         contacts.ctfirstname,   
         contacts.ctfunc,   
         contacts.ctlangue,   
         contacts.ctactiv,   
         contacts.ctmain,    
         isnull(contacts.ctmulti, 'N') as ctmulti , 
         adresses.adactiv   
	 FROM adresses left outer join contacts on adresses.adcode = contacts.ctadcode     

   WHERE adresses.adcode not like '#########%' and adresses.adcode=:ls_adcode  and contacts.ctline not in (select afctine from adrformation where adrformation.afctadcode= :ls_adcode and adrformation.afaacode=:ll_aaacode)
   
   
/*
UNION    
 
  SELECT adresses.adcode,    
         adresses.adname,  
         users.uscode,  
         0 ,  
         users.usname,   
         '',  
         '',  
         adresses.adlang, 
         users.usactiv,  
         '',  
         '' , 
         adresses.adactiv     
    FROM adresses,   
         users, 
   WHERE adresses.adcode = '##########'   and adresses.adcode=:ls_adcode   and contacts.ctline not in (select afctine from adrformation where adrformation.afaacode= :ls_adcode and afaacode=:ll_aaacode)

*/
 

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| contacts_ctadcode |
| contacts_ctline |
| contacts_ctname |
| contacts_ctfirstname |
| contacts_ctfunc |
| contacts_ctlangue |
| contacts_ctactiv |
| contacts_ctmain |
| cctmulti |
| adresses_adactiv |

