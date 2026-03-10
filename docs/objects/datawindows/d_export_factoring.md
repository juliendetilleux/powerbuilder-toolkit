# d_export_factoring

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         invoicehead.ihcust,   
         adresses.adname,   
         invoicehead.ihdate,   
         invoicehead.ihcurr,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihexpiry,   
         invoicehead.ihtypinv, 
			cast(null as varchar(1)) , 
         ihpaid , 
         chname ,
         invoicehead.ihfactoring,
			invoicehead.ihcodemc 
    FROM adresses,   
         invoicehead, 
         choices  
   WHERE ( invoicehead.ihcust = adresses.adcode ) 
	  AND choices.chtype='invt' 
     AND choices.chcode=invoicehead.ihtypinv 
     AND isnull(ihfactoring, 'N') like :done 
	  AND adfactoring like :active 
	  AND isnull(ihpaid,'0') like CASE :payment 	 
								          WHEN 'all'  THEN '%' 
                     	          WHEN 'open' THEN '[^2]' 
							          END 

ORDER BY invoicehead.ihcodemc ASC 

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihcust |
| adresses_adname |
| invoicehead_ihdate |
| invoicehead_ihcurr |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| invoicehead_ihexpiry |
| invoicehead_ihtypinv |
| cnull |
| invoicehead_ihpaid |
| choices_chname |
| invoicehead_ihfactoring |
| invoicehead_ihcodemc |

