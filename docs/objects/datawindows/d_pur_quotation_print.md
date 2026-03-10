# d_pur_quotation_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT matplan.mpitem,   
         matplan.mpplqty,   
         matplan.mpplduedat,   
         linkitad.lkadcode,   
         linkitad.lkadref,   
         linkitad.lkmain,   
         items.itname,   
         adresses.adname,   
         adresses.adzip,   
         adresses.adadr1,   
         adresses.adadr2,   
         items.itum,   
         linkitad.lkum,   
         linkitad.lkumconv,   
         adresses.adloc,   
         adresses.adcountr  
    FROM matplan,
         linkitad,
         items,   
         adresses  
   WHERE ( matplan.mpitem = linkitad.lkitem) and
         ( items.itcode = linkitad.lkitem ) and  
         ( items.itcode = matplan.mpitem ) and  
         ( adresses.adcode = linkitad.lkadcode ) and  
         ( ( matplan.mpuse = 'P' ) AND  
         ( linkitad.lkactiv = 'Y' ) AND  
         ( linkitad.lktyp = 'P' ) )   
ORDER BY linkitad.lkadcode ASC,   
         matplan.mpitem ASC   

```

## Colonnes
| Colonne |
|---------|
| mpitem |
| mpplqty |
| matplan_mpplduedat |
| linkitad_lkadcode |
| linkitad_lkadref |
| linkitad_lkmain |
| items_itname |
| adresses_adname |
| adresses_adzip |
| adresses_adadr1 |
| adresses_adadr2 |
| items_itum |
| linkitad_lkum |
| linkitad_lkumconv |
| adresses_adloc |
| adresses_adcountr |

