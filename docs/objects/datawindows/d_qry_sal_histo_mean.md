# d_qry_sal_histo_mean

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT invoiceline.ilitem,   
         invoicehead.ihcust,   
         invoiceline.ilqty,   
         invoiceline.ilnetval,   
         adresses.adname,   
         items.itname,   
         items.itum,   
         invoicehead.ihdate,   
         invoicehead.ihcurconv,   
         invoicehead.ihcurr,   
         invoicehead.ihcodemc,   
         invoicehead.ihtypinv,   
         invoicehead.ihfacnot,   
         items.itstat1,   
         items.itstat2,   
         adresses.adgrcust,   
         items.itactiv  
    FROM invoiceline,   
         invoicehead,   
         adresses,   
         items  
   WHERE ( invoicehead.ihcode = invoiceline.ilcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( invoicehead.ihcust = adresses.adcode ) and  
         ( ( invoicehead.ihdate >= :date_start ) AND  
         ( invoicehead.ihdate <= :date_stop ) )   
ORDER BY invoiceline.ilitem ASC,   
         invoicehead.ihcust ASC,   
         invoicehead.ihdate ASC   

```

## Colonnes
| Colonne |
|---------|
| invoiceline_ilitem |
| invoicehead_ihcust |
| invoiceline_ilqty |
| invoiceline_ilnetval |
| adresses_adname |
| items_itname |
| items_itum |
| invoicehead_ihdate |
| invoicehead_ihcurconv |
| invoicehead_ihcurr |
| invoicehead_ihcodemc |
| invoicehead_ihtypinv |
| invoicehead_ihfacnot |
| items_itstat1 |
| items_itstat2 |
| adresses_adgrcust |
| items_itactiv |

