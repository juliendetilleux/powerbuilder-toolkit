# d_item_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         adresses.adcode,   
         adresses.adname,   
         linkitad.lkadref,   
         linkitad.lkum,   
         linkitad.lkumconv,   
         linkitad.lkmain,   
         items.itstat1,   
         items.itstat2,   
         adresses.adgrcust,   
         linkitad.lkadref2  
    FROM adresses,   
         items,   
         linkitad  
   WHERE ( linkitad.lkitem = items.itcode ) and  
         ( linkitad.lkadcode = adresses.adcode ) and  
         ( ( linkitad.lktyp = 'S' ) AND  
         ( linkitad.lkactiv = 'Y' ) )   
ORDER BY adresses.adcode ASC,   
         items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| adresses_adcode |
| adresses_adname |
| linkitad_lkadref |
| linkitad_lkum |
| linkitad_lkumconv |
| linkitad_lkmain |
| items_itstat1 |
| items_itstat2 |
| adresses_adgrcust |
| linkitad_lkadref2 |

