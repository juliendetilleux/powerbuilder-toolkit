# d_factoring_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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
   WHERE invoicehead.ihcust = adresses.adcode 
	  AND choices.chtype='invt' 
     AND choices.chcode=invoicehead.ihtypinv 

ORDER BY invoicehead.ihcodemc ASC 

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihcust |
| adname |
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

