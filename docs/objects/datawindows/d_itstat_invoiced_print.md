# d_itstat_invoiced_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imdesc , 
         itstat2.isdesc ,  
			itstat2.iscode2,
         items.itcode ,  
         items.itname , 
         items.itum , 
         invoicehead.ihcust , 
         adresgroup.agdesc ,
         adresses.adcode ,    
         adresses.adname ,
         adresses.adgrcust ,
         sum(invoiceline.ilqty * invoicehead.ihfacnot )     as totalqty , 
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as total , 
         ( SELECT sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) 
             FROM invoiceline ,  
			         invoicehead 
            WHERE invoiceline.ilitem = items.itcode 
              AND invoiceline.ilcode = invoicehead.ihcode  
              AND invoicehead.ihdate >= :adt_start   
              AND invoicehead.ihdate <= :adt_stop    
         ) as total4item  
 	
    FROM items ,  
         itstat1 , 
         itstat2 , 
         invoiceline ,  
         invoicehead , 
         adresses , 
         adresgroup   
 
   WHERE invoiceline.ilitem = items.itcode 
     AND items.itstat1 = itstat1.imcode  
     AND items.itstat2 = itstat2.iscode2  
     AND itstat1.imcode = itstat2.iscode
     AND invoiceline.ilcode = invoicehead.ihcode  
     AND adresses.adcode = invoicehead.ihcust
     AND adresses.adgrcust = adresgroup.agcode
     AND items.itstat1 like :as_imcode  
     AND items.itstat2 like :as_iscode2  
     AND items.itcode  like :as_itcode
     AND invoicehead.ihdate >= :adt_start   
     AND invoicehead.ihdate <= :adt_stop    

GROUP BY itstat1.imdesc , 
         itstat2.isdesc , 
			itstat2.iscode2, 
         items.itcode ,  
         items.itname ,
         items.itum ,  
         invoicehead.ihcust ,
         adresgroup.agdesc ,
         adresses.adcode ,    
         adresses.adname ,
         adresses.adgrcust 
         
ORDER BY itstat1.imdesc , 
         itstat2.iscode2 ,  
         total4item desc ,
       
```

## Colonnes
| Colonne |
|---------|
| itstat1_imdesc |
| itstat2_isdesc |
| itstat2_iscode2 |
| items_itcode |
| items_itname |
| items_itum |
| invoicehead_ihcust |
| adresgroup_agdesc |
| adresses_adcode |
| adresses_adname |
| adresses_adgrcust |
| ctotalqty |
| ctotal |
| ctotal4item |

