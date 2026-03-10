# d_detail_intrastat_sales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihtypinv,   
         invoicehead.ihcode,   
         invoicehead.ihcust,   
         adresses.adname,   
         invoiceline.illine,   
         invoiceline.ilitem,   
         items.itname,    
         invoiceline.ilqty,   
         invoicehead.ihcurconv,   
         invoicehead.ihcptper,   
         items.itintrastat,   
         intrastat.isref,   
         invoiceline.ilnetval,   
         adresses.adcountrid,   
         invoicehead.ihfacnot,   
         items.itwistat  
    FROM adresses,   
         intrastat,   
         invoicehead,   
         invoiceline,   
         items,   
         country  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( adresses.adcode = invoicehead.ihcust ) and  
         ( intrastat.iscode = items.itintrastat ) and  
         ( items.itcode = invoiceline.ilitem ) and  
         ( adresses.adcountrid = country.cocode ) and  
         ( ( invoicehead.ihcptper in (:Periode) ) AND  
         ( country.cointrastat = 'Y' ) AND  
         ( invoiceline.iltype in ( 'I' , 'C','R') ) ) 

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihtypinv |
| invoicehead_ihcode |
| invoicehead_ihcust |
| adresses_adname |
| invoiceline_illine |
| invoiceline_ilitem |
| items_itname |
| invoiceline_ilqty |
| invoicehead_ihcurconv |
| invoicehead_ihcptper |
| items_itintrastat |
| intrastat_isref |
| invoiceline_ilnetval |
| adresses_adcountrid |
| invoicehead_ihfacnot |
| items_itwistat |

