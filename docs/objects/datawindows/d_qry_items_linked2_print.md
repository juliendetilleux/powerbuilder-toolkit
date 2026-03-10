# d_qry_items_linked2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
 SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.ittyp,   
         linkitad.lkcode,   
         linkitad.lkcurr,   
         linkitad.lkum,   
         linkitad.lkactiv,   
         linkitad.lktyp,
         adresses.adname  
    FROM items,   
         linkitad,
         adresses  
   WHERE ( linkitad.lkitem = items.itcode ) AND  
         ( linkitad.lkadcode = :codesoc ) AND  
         ( linkitad.lkactiv = 'Y' ) AND  
         ( adresses.adcode = linkitad.lkadcode )
ORDER BY  linkitad.lktyp ASC,
         items.itstat1 ASC, 
         items.itstat2 ASC 
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| items_ittyp |
| linkitad_lkcode |
| linkitad_lkcurr |
| linkitad_lkum |
| linkitad_lkactiv |
| linkitad_lktyp |
| adresses_adname |

