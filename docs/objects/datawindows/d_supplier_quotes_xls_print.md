# d_supplier_quotes_xls_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses_a.adcode,   
         adresses_a.adname,   
         linkitad.lkadref,   
         linkitad.lkadref2,   
         items.itcode,   
         items.itname,   
         items.itum,   
         linkitad.lkum,   
         linkitad.lkcode,   
         quotes.qoprice,   
         quotes.qominqty,   
         linkitad.lkcurr,   
         items.itbascost,   
         adresses_b.adcurr  
    FROM adresses adresses_a,   
         linkitad left outer join quotes on ( linkitad.lkcode = quotes.qocode ),   
         items,   
         adresses adresses_b  
   WHERE ( linkitad.lkadcode = adresses_a.adcode ) and  
         ( items.itcode = linkitad.lkitem ) and  
         ( adresses_a.adcode = :as_adsupp ) AND  
         ( linkitad.lktyp = 'P' ) AND  
         ( adresses_a.adsupp = 'Y' ) AND  
         ( adresses_a.adactiv = 'Y' ) AND  
         ( linkitad.lkactiv = 'Y' ) AND  
         ( items.itactiv = 'Y' ) AND  
         ( adresses_b.adcode = '##########' ) 
ORDER BY items.itcode ASC,   
         quotes.qominqty ASC   
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| linkitad_lkadref |
| linkitad_lkadref2 |
| items_itcode |
| items_itname |
| items_itum |
| linkitad_lkum |
| linkitad_lkcode |
| quotes_qoprice |
| quotes_qominqty |
| linkitad_lkcurr |
| items_itbascost |
| adresses_adcurr |

