# d_invremind_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT distinct invoicehead.ihcust, 
         adresses.adinvattention,  
			adresses.adname, 
         adresses.adlang,
		0 as recall_type  ,
		invoicehead.ihmccode as mcdo 
    FROM invoicehead, adresses
   WHERE adresses.adcode = invoicehead.ihcust and 
 			invoicehead.ihpaidamount <> invoicehead.ihtotval and
         invoicehead.ihexpiry <= :adt_date and  
         invoicehead.ihcust = :asa_cust and
		isnull(invoicehead.ihremindnb,0 ) = 0 
UNION ALL 
  SELECT distinct invoicehead.ihcust, 
         adresses.adinvattention,  
			adresses.adname, 
         adresses.adlang,
		1 , 
		invoicehead.ihmccode as mcdo
    FROM invoicehead, adresses
   WHERE adresses.adcode = invoicehead.ihcust and 
 			invoicehead.ihpaidamount <> invoicehead.ihtotval and
         invoicehead.ihexpiry <= :adt_date and  
         invoicehead.ihcust = :asa_cust and
		isnull(invoicehead.ihremindnb,0 ) > 0 

  ORDER BY 3, 5 


```

## Colonnes
| Colonne |
|---------|
| ihcust |
| adresses_adinvattention |
| adresses_adname |
| adresses_adlang |
| recall_type |
| invoicehead_mcdo |

