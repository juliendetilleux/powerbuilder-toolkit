# d_smt_ordered_country_print

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
         sum( salline.slsalval ),
         adresses.adcountrid  
    FROM salhead,
         salline,
         items,   
         smtcode,   
         smtlink,
         adresses  
   WHERE ( items.itcode = salline.slitem ) and  
         ( smtlink.slitemid = items.itcode ) and  
         ( salhead.shcust = adresses.adcode ) and  
         ( salhead.shcode = salline.slcode ) and  
         ( smtlink.slsmtid = smtcode.sccode ) and  
         ( ( salline.slstatus < '9' ) AND  
         ( smtcode.sccode = :Sel_smt ) AND  
         ( salhead.shdatcrea <= :Sel_datend ) AND  
         ( salhead.shdatcrea >= :Sel_datstart ) )   
GROUP BY items.itcode,   
         items.itname,   
         smtcode.scum,   
         adresses.adcountrid  
ORDER BY adresses.adcountrid ASC,   
         1 DESC      

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| smtcode_scum |
| compute_0004 |
| compute_0005 |
| adresses_adcountrid |

