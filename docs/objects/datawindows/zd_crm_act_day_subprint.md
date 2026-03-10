# zd_crm_act_day_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
SELECT ( SELECT contacts.ctname    
           FROM contacts    
          WHERE adrsactions.aaadrid = contacts.ctadcode    
            AND adrsactions.aacontactid = contacts.ctline ) AS contact,   
       ( SELECT contacts.ctfirstname    
           FROM contacts    
          WHERE adrsactions.aaadrid = contacts.ctadcode    
            AND adrsactions.aacontactid = contacts.ctline)  AS contactfirstname,   
       adrsactions.aaactiondate,      
       adrsactions.aatiming,     
       adrsactions.aadesc,    
       ( IF adrsactions.aastatus = 3    
            THEN 2    
            ELSE 1    
         ENDIF )                                            AS tri2,   
       aarespons ,   
       aamoddat,   
       ( IF adrsactions.aaactiondate  = datetime(date(adrsactions.aaactiondate))    
            THEN 2    
            ELSE 1    
         ENDIF )                                            AS tri    
 
  FROM adrsactions     

 WHERE ( aarespons like :a_user )    
   AND ( date(adrsactions.aaactiondate) = date(:a_date)  ) 
   AND ( adrsactions.aaactiondate <> datetime(string(date(adrsactions.aaactiondate))) )  

 ORDER by tri,    
          adrsactions.aaactiondate,    
          tri2 asc   
```

## Colonnes
| Colonne |
|---------|
| contact |
| contactfirstname |
| aaactiondate |
| aatiming |
| aadesc |
| tri2 |
| aarespons |
| aamoddat |
| tri |

