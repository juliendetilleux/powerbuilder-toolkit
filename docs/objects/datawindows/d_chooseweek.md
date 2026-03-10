# d_chooseweek

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
SELECT 

  isnull((SELECT sum(aatiming) 
    FROM adrsactions   
	WHERE date(adrsactions.aaactiondate) = (date(:adt_date) - 3) AND
/*			minute(adrsactions.aaactiondate) = 0 AND
			hour(adrsactions.aaactiondate) = 0 AND	*/
			adrsactions.aarespons = users.uscode ),0)  as actiondate1, 

  isnull((SELECT sum(aatiming)
    FROM adrsactions   
	WHERE date(adrsactions.aaactiondate) = (date(:adt_date) - 2) AND
/*			minute(adrsactions.aaactiondate) = 0 AND
			hour(adrsactions.aaactiondate) = 0 AND	*/
			adrsactions.aarespons = users.uscode ),0)  as actiondate2, 

  isnull((SELECT sum(aatiming)
    FROM adrsactions   
	WHERE date(adrsactions.aaactiondate) = (date(:adt_date) - 1) AND
/*			minute(adrsactions.aaactiondate) = 0 AND
			hour(adrsactions.aaactiondate) = 0 AND	*/
			adrsactions.aarespons = users.uscode ),0)  as actiondate3, 

  isnull((SELECT sum(aatiming)
    FROM adrsactions   
	WHERE date(adrsactions.aaactiondate) = date(:adt_date) AND
/*			minute(adrsactions.aaactiondate) = 0 AND
			hour(adrsactions.aaactiondate) = 0 AND	*/
			adrsactions.aarespons = users.uscode ),0)  as actiondate4, 

  isnull((SELECT sum(aatiming)
    FROM adrsactions   
	WHERE date(adrsactions.aaactiondate) = (date(:adt_date) + 1) AND
/*			minute(adrsactions.aaactiondate) = 0 AND
			hour(adrsactions.aaactiondate) = 0 AND	*/
			adrsactions.aarespons = users.uscode ),0)  as actiondate5, 

  isnull((SELECT sum(aatiming)
    FROM adrsactions   
	WHERE date(adrsactions.aaactiondate) = (date(:adt_date) + 2) AND
/*			minute(adrsactions.aaactiondate) = 0 AND
			hour(adrsactions.aaactiondate) = 0 AND	*/
			adrsactions.aarespons = users.uscode ),0)  as actiondate6, 
 
  isnull((SELECT sum(aatiming)
    FROM adrsactions   
	WHERE date(adrsactions.aaactiondate) = (date(:adt_date) + 3) AND
/*			minute(adrsactions.aaactiondate) = 0 AND
			hour(adrsactions.aaactiondate) = 0 AND	*/
			adrsactions.aarespons = users.uscode ),0)  as actiondate7,
  
   datetime
```

## Colonnes
| Colonne |
|---------|
| actiondate1 |
| actiondate2 |
| actiondate3 |
| actiondate4 |
| actiondate5 |
| actiondate6 |
| actiondate7 |
| weekdate |

