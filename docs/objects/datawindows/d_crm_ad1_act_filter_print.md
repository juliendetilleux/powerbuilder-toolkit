# d_crm_ad1_act_filter_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT 'CURR' as grouptype,
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adactivite,   
         adresses.adsalesman,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adurl,   
         adresses.adcode,  
         adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aacomment,   
         adrsactions.aacode, 
         activities.acdesc actionname ,
         ( select ctname from contacts where ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) contactname,
         ( select ctfirstname from contacts where ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) contactfirstname,
		adrsactions.aafileref,
		adrsactions.aafileline
    FROM adrsactions, activities, adresses   
   WHERE ( adrsactions.aaadrid = :adid ) AND  
         ( adresses.adcode = adrsactions.aaadrid) and 
         ( adrsactions.aaaction = activities.accode  ) and
         ( adrsactions.aastatus between '1' and '2' )   and
	      ( adrsactions.aaactiondate > :datestart ) and
			( adrsactions.aaactiondate < :dateend ) 
/*UNION ALL 

  SELECT 'HIST', 
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adactivite,   
         adresses.adsalesman,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adurl,   
         adresses.adcode,
  			adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aaresp
```

## Colonnes
| Colonne |
|---------|
| cgrouptype |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adactivite |
| adresses_adsalesman |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |
| adresses_adurl |
| adresses_adcode |
| aacontactid |
| aaaction |
| aacreator |
| aarespons |
| aaactiondate |
| aadesc |
| aacomment |
| aacode |
| actionname |
| contactname |
| ccontactfirstname |
| aafileref |
| aafileline |

