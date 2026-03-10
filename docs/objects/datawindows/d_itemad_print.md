# d_itemad_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT linkitad.lkitem,   
         items.itname,   
         linkitad.lkadcode,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         linkitad.lkadref,   
         linkitad.lkum,   
         linkitad.lkumconv,   
         items.itum,   
         linkitad.lkmain,   
         items.ittyp  
    FROM adresses,   
         items,   
         linkitad  
   WHERE ( linkitad.lkitem = items.itcode ) and  
         ( linkitad.lkadcode = adresses.adcode ) and  
         ( ( adresses.adactiv = 'Y' ) AND  
         ( linkitad.lktyp = :Selected_type ) )   
ORDER BY linkitad.lkitem ASC,   
         adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| linkitad_lkitem |
| items_itname |
| linkitad_lkadcode |
| adresses_adcode |
| adresses_adname |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| linkitad_lkadref |
| linkitad_lkum |
| linkitad_lkumconv |
| items_itum |
| linkitad_lkmain |
| items_ittyp |

