# d_crm_agenda_week

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aadesc,   
         adrsactions.aaactiondate,   
         adrsactions.aatiming ,
         adrsactions.aaadrid,
         adrsactions.aacode,
         adresses.adname,
         (select contacts.ctname 
			from contacts 
			where adrsactions.aacontactid = contacts.ctline and
				adresses.adcode = contacts.ctadcode) as ontacts_ctname
    FROM adrsactions  , adresses, activities
   WHERE ( adrsactions.aaactiondate >= :adt_startdate ) and
         ( adrsactions.aaactiondate < :adt_enddate ) and
         ( adrsactions.aarespons = :as_users ) AND  
         ( adrsactions.aaactiondate <> datetime(date(adrsactions.aaactiondate)) )   and
         ( adresses.adcode = adrsactions.aaadrid ) and
			adrsactions.aaaction NOT IN (-6, -7) AND  
         ( isnull(adrsactions.aagrouptyp,'') <> 'M' OR isnull(adrsactions.aagroup,0) = 0 ) AND
		(activities.accode = adrsactions.aaaction) AND
		(activities.acagenda = 'Y')  AND
		(activities.acrh >= 0)  
  
UNION ALL 
  
  SELECT max(adrsactions.aadesc),   
         max(adrsactions.aaactiondate),   
         max(adrsactions.aatiming),
         '',
         max(adrsactions.aacode),
         '+++',
         ''
    FROM adrsactions  , adresses, activities
   WHERE ( adrsactions.aaactiondate >= :adt_startdate ) and
         ( adrsactions.aaactiondate < :adt_enddate ) and
         ( adrsactions.aarespons = :as_users ) AND  
         ( adrsactions.aaactiondate <> datetime(date(adrsactions.aaactiondate)) )   and
         ( adresses.adcode = adrsactions.aaadrid ) and
			adrsactions.aaaction NOT IN (-6, -7) and  
         ( isnull(adrsactions.aagrouptyp,'') = 'M' AND isnull(adrsactions.aagroup,0) > 0 )  AND
		(activities.accode = adrsactions.aaaction) AND
		(activities.acagenda = 'Y')  AND
		(activities.acrh >= 0)     
GROUP BY aagroup  
  
ORDER BY 2 
```

## Colonnes
| Colonne |
|---------|
| adrsactions_aadesc |
| adrsactions_aaactiondate |
| adrsactions_aatiming |
| aaadrid |
| aacode |
| adresses_adname |
| contacts_ctname |

