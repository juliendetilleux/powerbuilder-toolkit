# d_invremind_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT distinct(invoicehead.ihcust), 
         adresses.adinvattention,  
			adresses.adname, 
         adresses.adlang    ,
		invoicehead.ihmccode as mcdo
    FROM invoicehead, adresses
   WHERE adresses.adcode = invoicehead.ihcust and 
 			invoicehead.ihpaidamount <> invoicehead.ihtotval and
         invoicehead.ihexpiry <= :adt_date and  
         invoicehead.ihcust = :asa_cust 
  ORDER BY adresses.adname 
```

## Colonnes
| Colonne |
|---------|
| ihcust |
| adresses_adinvattention |
| adresses_adname |
| adresses_adlang |
| invoicehead_mcdo |

