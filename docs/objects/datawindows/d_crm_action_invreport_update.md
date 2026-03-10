# d_crm_action_invreport_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aalimitdate,   
         adrsactions.aatiming,   
         adrsactions.aaparcode,   
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aaprojet,   
         adrsactions.aaread,   
         adrsactions.aareaddate,   
         adrsactions.aastsdat,   
         adrsactions.aamoddat,   
         adrsactions.aamoduser,   
         adrsactions.aafileref,   
         adrsactions.aafileline,   
         '' as timing_string,   
         adrsactions.aawccost,   
         adrsactions.aauscost,   
         adrsactions.aarealcost,   
         adrsactions.aainvstatus,   
         adrsactions.aarealtiming,   
         adrsactions.aaextratiming,   
         datetime(null) as realtiming_string,   
         datetime(null) as extratiming_string,   
         adrsactions.aasalorder,   
         adrsactions.aasalline,   
         adrsactions.aawfhead,   
         adrsactions.aawfline,   
         adrsactions.aawffinish,   
         adrsactions.aawfsuccess,   
         adrsactions.aaquoteval,   
         adrsactions.aaitem,   
         adrsactions.aainvoicehead,   
         adrsactions.aainvoiceline,   
         adrsactions.aapriority,
			adrsactions.aapersuccess,
       	adrsactions.aauserddlb,
			(SELECT chname from choicehead where chcode = 'AAUS') chname,
			adrsactions.aafrcstdate, 
         adrsactions.aadocref  
    FROM adrsactions
   WHERE ( adrsactions.aacode = :a_aacode )  

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| aacontactid |
| aaaction |
| aacreator |
| aarespons |
| aaactiondate |
| aalimitdate |
| aatiming |
| aaparcode |
| aastatus |
| aacomment |
| aadesc |
| aacreadate |
| aaprojet |
| aaread |
| aareaddate |
| aastsdat |
| aamoddat |
| aamoduser |
| aafileref |
| aafileline |
| timing_string |
| aawccost |
| aauscost |
| aarealcost |
| aainvstatus |
| aarealtiming |
| aaextratiming |
| realtiming_string |
| extratiming_string |
| aasalorder |
| aasalline |
| aawfhead |
| aawfline |
| aawffinish |
| aawfsuccess |
| aaquoteval |
| aaitem |
| aainvoicehead |
| aainvoiceline |
| aapriority |
| aapersuccess |
| aauserddlb |
| chname |
| aafrcstdate |
| aadocref |

