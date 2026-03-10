# d_smt_sal_shipped

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         smtcode.scum,   
         sum( histostock.hsqty  * smtlink.slcontent)
    FROM histostock,   
         items,   
         smtcode,   
         smtlink  
   WHERE ( items.itcode = histostock.hsitem ) and  
         ( smtlink.slitemid = items.itcode ) and  
         ( smtlink.slsmtid = smtcode.sccode ) and  
         ( histostock.hscode in ('DLXO', 'DLST' ) AND  
         ( smtcode.sccode = :Sel_smt ) AND  
         ( histostock.hsdatim <= :Sel_datend ) AND  
         ( histostock.hsdatim >= :Sel_datstart ) )   
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

