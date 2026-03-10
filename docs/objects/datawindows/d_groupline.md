# d_groupline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT distgrline.dlcode,   
         distgrline.dladcode,   
         distgrline.dlctcode,   
         distgrline.dluscode,   
         contacts.ctname,   
         contacts.ctfirstname,   
         contacts.ctfunc,   
         adresses.adname,     
         adresses.adactiv,   
         contacts.ctactiv,   
         ''   
    FROM adresses ,  
			distgrline ,  
         contacts  

   WHERE distgrline.dladcode = adresses.adcode 
     and adresses.adcode = contacts.ctadcode 
     and distgrline.dlctcode = contacts.ctline
     AND distgrline.dlcode = :dhcode    


UNION ALL

  SELECT distgrline.dlcode,   
         distgrline.dladcode,   
         distgrline.dlctcode,   
         distgrline.dluscode,   
         '',   
         '',   
         '',   
         adresses.adname,     
         adresses.adactiv,   
         '',   
         ''     
    FROM adresses ,  
			distgrline
        

   WHERE distgrline.dladcode = adresses.adcode 
     AND distgrline.dlctcode IS NULL
	  AND distgrline.dladcode <> '##########'   
     AND distgrline.dlcode = :dhcode    

UNION ALL

  SELECT distgrline.dlcode,   
         distgrline.dladcode,   
         distgrline.dlctcode,   
         distgrline.dluscode,   
         users.usname,   
         '',
         '',
         adresses.adname,     
         adresses.adactiv,   
         '',   
         users.usactiv     
    FROM distgrline,   
         adresses,   
         users    
   WHERE distgrline.dladcode = adresses.adcode 
     AND distgrline.dluscode = users.uscode 
     AND adresses.adcode = '##########'    
     AND distgrline.dlcode = :dhcode  

order by 8 , 5  
```

## Colonnes
| Colonne |
|---------|
| dlcode |
| dladcode |
| dlctcode |
| dluscode |
| contacts_ctname |
| contacts_ctfirstname |
| contacts_ctfunc |
| adresses_adname |
| adresses_adactiv |
| contacts_ctactiv |
| users_usactiv |

