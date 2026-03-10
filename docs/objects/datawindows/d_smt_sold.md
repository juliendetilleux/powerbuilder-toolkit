# d_smt_sold

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT sum(invoiceline.ilqty * smtlink.slcontent * invoicehead.ihfacnot),   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv),   
         items.itcode,   
         items.itname,   
         smtcode.scum  
    FROM invoicehead,   
         invoiceline,   
         smtcode,   
         smtlink,   
         items  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( items.itcode = smtlink.slitemid ) and  
         ( invoiceline.ilitem = smtlink.slitemid ) and  
         ( smtlink.slsmtid = smtcode.sccode ) and  
         ( ( invoicehead.ihdate between :start_dat and :end_dat ) AND  
         ( smtcode.sccode = :sel_smt ) )   
GROUP BY items.itcode,   
         items.itname,   
         smtcode.scum  
ORDER BY 1 DESC   

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| compute_0002 |
| items_itcode |
| items_itname |
| smtcode_scum |

