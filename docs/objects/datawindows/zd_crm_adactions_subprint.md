# zd_crm_adactions_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT 'CURR' as grouptype, 
         adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aacomment,   
         adrsactions.aacode, 
         activities.acdesc actionname ,
         ( select ctname from contacts where ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) contactname ,
         ( select ctfirstname from contacts where ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) contactfirstname 
    FROM adrsactions, activities  
   WHERE ( adrsactions.aaadrid = :adid ) AND  
         ( adrsactions.aaaction = activities.accode  ) and
         ( adrsactions.aastatus between '1' and '2' )   and
	      ( adrsactions.aaactiondate > :datestart ) and
			( adrsactions.aaactiondate < :dateend ) 
UNION ALL 

  SELECT 'HIST', 
			adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aacomment,   
         adrsactions.aacode, 
         activities.acdesc actionname ,
         ( select ctname from contacts where ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) contactname ,
         ( select ctfirstname from contacts where ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) contactfirstname 
    FROM adrsactions, activities  
   WHERE ( adrsactions.aaadrid = :adid ) AND  
         ( adrsactions.aaaction = activities.accode  ) and
         ( adrsactions.aastatus between '3' and '4' )   and
	      ( adrsactions.aaactiondate > :datestart ) and
			( adrsactions.aaactiondate < :dateend )
ORDER BY 1 asc , 6 DESC , 9   

```

## Colonnes
| Colonne |
|---------|
| cgrouptype |
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

