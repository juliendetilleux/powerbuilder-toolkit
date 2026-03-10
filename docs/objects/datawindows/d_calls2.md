# d_calls2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT distinct
           
         callhead.chadid,   
           
         (select adresses.adname from adresses where adresses.adcode=callhead.chadid) as adname_customer,
		count( callhead.chpriority ),   
		0 as selection,
		cast((callhead.chstatus/100)as integer) as hyperstatus,
		date(min(chcreadat)),
			date(max(chcreadat)),
		Date(IsNull(min(chfixenddat), '1900-01-01')) as chfixenddat,
         Sum(case chpriority WHEN 1 THEN 1 ELSE 0 END) as total_prior1,   
		Sum(case chpriority WHEN 2 THEN 1 ELSE 0 END) as total_prior2,
		Sum(case chpriority WHEN -1 THEN 1 ELSE 0 END) as total_prior_next
 	
	
   FROM callhead
where chstatus = :selected_status
and chid = IsNull(:al_chid, chid)
AND IsNull(chitem,'') = IsNull(:as_item,IsNull(chitem,'')) //PHBO0069

group by callhead.chadid,adname_customer, hyperstatus order by 2





```

## Colonnes
| Colonne |
|---------|
| callhead_chadid |
| adname_customer |
| compute_0003 |
| selection |
| hyperstatus |
| compute_0006 |
| compute_0007 |
| chfixenddat |
| total_prior1 |
| total_prior2 |
| total_prior_next |

