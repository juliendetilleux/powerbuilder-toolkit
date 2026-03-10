# d_item_supp_print

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
         linkitad.lkadref2  
    FROM adresses,   
         items,   
         linkitad  
   WHERE ( linkitad.lkitem = items.itcode ) and  
         ( linkitad.lkadcode = adresses.adcode ) and  
         ( ( linkitad.lktyp in ( 'P' , 'C' ) ) AND  
         ( linkitad.lkactiv = 'Y' ) AND  
         ( items.itactiv = 'Y' ) )   
ORDER BY items.itcode ASC,   
         adresses.adcode ASC   

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
| linkitad_lkadref2 |

