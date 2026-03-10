# d_invremind_custlist

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
SELECT DISTINCT(invoicehead.ihcust) ,    
       adresses.adname , 
		 adresses.adlang ,     
       ( 
         SELECT isnull(sum(cnt.ihremindnb * cnt.ihfacnot) ,0)
           FROM invoicehead AS cnt 
          WHERE cnt.ihcust=invoicehead.ihcust 
            AND cnt.ihexpiry <= :adt_date
				AND IsNull( cnt.ihpaid, '0') < '2'
       ) AS TotNbReminder ,  
       (
         SELECT isnull(sum(cnt.ihtotval * cnt.ihfacnot) ,0)
           FROM invoicehead AS cnt 
          WHERE cnt.ihcust=invoicehead.ihcust 
				AND cnt.ihexpiry <= :adt_date
				AND IsNull( cnt.ihpaid, '0') in ( '0', '1')
       ) AS TotValEchu,  
       ( SELECT isnull(sum(cnt.ihpaidamount * cnt.ihfacnot) ,0) 
           FROM invoicehead AS cnt 
          WHERE cnt.ihcust=invoicehead.ihcust 
            AND cnt.ihexpiry <= :adt_date
				AND IsNull( cnt.ihpaid, '0') in ( '0', '1')
       ) AS TotPaidEchu, 
	
       (
         SELECT isnull(sum(cnt.ihtotval * cnt.ihfacnot),0)
           FROM invoicehead AS cnt 
          WHERE cnt.ihcust=invoicehead.ihcust 
				AND cnt.ihexpiry > :adt_date
				AND IsNull( cnt.ihpaid, '0') < '2'
       ) AS TotValNonEchu,   
       ( SELECT isnull(sum(cnt.ihpaidamount * cnt.ihfacnot) ,0)
           FROM invoicehead AS cnt 
          WHERE cnt.ihcust=invoicehead.ihcust 
            AND cnt.ihexpiry > :adt_date
				AND IsNull( cnt.ihpaid, '0') < '2'
       ) AS TotPaidNonEchu, 
       
       ihcurr , 
          
       cast(null as varchar(1)) 
  FROM invoicehead,  
       adresses   
 WHERE invoicehead.ihcust=adresses.adcode   
   AND IsNull( ihpaid, '0') in ( '0', '1')
   AND invoicehead.ihexpiry <= :adt_date   
 ORDER BY adresses.adname
```

## Colonnes
| Colonne |
|---------|
| cihcust |
| adresses_adname |
| adresses_adlang |
| ctotnbreminder |
| ctotvalechu |
| ctotpaidechu |
| ctotvalnonechu |
| ctotpaidnonechu |
| invoicehead_ihcurr |
| cnull |

