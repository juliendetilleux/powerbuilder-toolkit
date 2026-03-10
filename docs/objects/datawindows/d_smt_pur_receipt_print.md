# d_smt_pur_receipt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         smtcode.scum,   
         sum( histostock.hsqty  * smtlink.slcontent * transactions.trsign),
			smtcode.scdesc  
    FROM histostock,   
         items,   
         smtcode,   
         smtlink,   
         transactions  
   WHERE ( items.itcode = histostock.hsitem ) and  
         ( smtlink.slitemid = items.itcode ) and  
         ( smtlink.slsmtid = smtcode.sccode ) and  
         ( histostock.hscode = transactions.trcode ) and  
         ( histostock.hscode in ('RCPO', 'RTPO' ) AND  
         ( smtcode.sccode = :Sel_smt ) AND  
         ( histostock.hsdatim <= :Sel_datend ) AND  
         ( histostock.hsdatim >= :Sel_datstart ) )   
GROUP BY items.itcode,   
         items.itname,   
         smtcode.scum,
			smtcode.scdesc   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| smtcode_scum |
| compute_0004 |
| smtcode_scdesc |

