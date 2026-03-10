# d_smt_ordered_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         smtcode.scum,   
         sum( salline.slqtyreq  * smtlink.slcontent),   
         sum( salline.slsalval )  
    FROM salline,   
         items,   
         smtcode,   
         smtlink,
         salhead  
   WHERE ( items.itcode = salline.slitem ) and  
         ( smtlink.slitemid = items.itcode ) and  
         ( smtlink.slsmtid = smtcode.sccode ) and  
         ( salhead.shcode = salline.slcode ) and  
         ( ( salline.slstatus < '9' ) AND  
         ( smtcode.sccode = :Sel_smt ) AND  
         ( salhead.shdatcrea <= :Sel_datend ) AND  
         ( salhead.shdatcrea >= :Sel_datstart ) )   
GROUP BY items.itcode,   
         items.itname,   
         smtcode.scum   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| smtcode_scum |
| compute_0004 |
| compute_0005 |

