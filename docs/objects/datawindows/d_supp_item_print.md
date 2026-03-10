# d_supp_item_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         adresses.adcode,   
         adresses.adname,   
         linkitad.lkadref,   
         linkitad.lkadref2,
         linkitad.lkum,   
         linkitad.lkumconv,   
         linkitad.lkmain,   
         items.itstat1,   
         items.itstat2,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adcountrid  
    FROM adresses,   
         items,   
         linkitad  
   WHERE ( linkitad.lkitem = items.itcode ) and  
         ( linkitad.lkadcode = adresses.adcode ) and  
         ( ( linkitad.lktyp = 'P' ) AND  
         ( linkitad.lkactiv = 'Y' ) AND  
         ( items.itactiv = 'Y' ) )   
ORDER BY adresses.adcode ASC,   
         items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| adcode |
| adresses_adname |
| linkitad_lkadref |
| linkitad_lkadref2 |
| linkitad_lkum |
| linkitad_lkumconv |
| linkitad_lkmain |
| items_itstat1 |
| items_itstat2 |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adcountrid |

