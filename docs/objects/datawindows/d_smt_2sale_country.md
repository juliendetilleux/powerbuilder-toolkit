# d_smt_2sale_country

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         sum( (salline.slqtyreq - salline.slqtyreal) * smtlink.slcontent),   
         sum( salline.slsalval )  ,
         smtcode.scum,
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
         ( ( salline.slstatus < '5' ) AND  
         ( smtcode.sccode = :Sel_smt ) AND  
         ( salline.sldatship <= :Sel_datend ) AND  
         ( salline.sldatship >= :Sel_datstart ) )   
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
| compute_0003 |
| compute_0004 |
| smtcode_scum |
| adresses_adcountrid |

