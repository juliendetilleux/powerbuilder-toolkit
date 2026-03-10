# d_qry_salinv_statum_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcurr,   
         invoicehead.ihcode,   
         invoicehead.ihtypinv,   
         invoiceline.iltype,   
         invoiceline.ilitem,   
         items.itname,   
         invoiceline.ilqty,   
         invoicehead.ihfacnot,   
         invoiceline.ilnetval,   
         invoicehead.ihdate,   
         invoicehead.ihcurconv,   
         adresses.adname,   
         invoicehead.ihcust,   
         adresses.adgrcust,   
         items.itstat1,   
         items.itstat2,   
         items.itactiv,   
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         items.itconvusr,   
         items.itumusr  
    FROM invoicehead,   
         invoiceline,   
         items,   
         adresses  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( invoicehead.ihcust = adresses.adcode ) and  
         ( ( invoicehead.ihdate >= :alimit ) AND  
         ( invoicehead.ihdate <= :anow ) )   
ORDER BY invoicehead.ihcode ASC   

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcurr |
| invoicehead_ihcode |
| invoicehead_ihtypinv |
| invoiceline_iltype |
| invoiceline_ilitem |
| items_itname |
| invoiceline_ilqty |
| invoicehead_ihfacnot |
| invoiceline_ilnetval |
| invoicehead_ihdate |
| invoicehead_ihcurconv |
| adresses_adname |
| invoicehead_ihcust |
| adresses_adgrcust |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| items_itconvusr |
| items_itumusr |

