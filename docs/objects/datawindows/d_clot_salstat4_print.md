# d_clot_salstat4_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imcode,   
         itstat1.imdesc,   
         ztmp_cs3.ztit,   
         items.itname,   
         items.itumusr,   
         items.itconvusr,   
         ztmp_cs3.ztqtys1,   
         ztmp_cs3.ztqtys2,   
         ztmp_cs3.ztvals1,   
         ztmp_cs3.ztvals2,   
         ztmp_cs3.ztvals3,   
         ztmp_cs3.ztqtyr1,   
         ztmp_cs3.ztqtyr2,   
         ztmp_cs3.ztvalr1,   
         ztmp_cs3.ztvalr2,   
         ztmp_cs3.ztad,   
         adresses.adname,   
         ztmp_cs3.ztvals4,
			adresses.adsalesman  
    FROM itstat1,   
         ztmp_cs3,   
         items,   
         adresses  
   WHERE ( ztmp_cs3.ztit = items.itcode ) and  
         ( ztmp_cs3.ztst1 = itstat1.imcode ) and  
         ( ztmp_cs3.ztad = adresses.adcode ) and  
         ( ( ztmp_cs3.ztqtys1 <> 0 ) OR  
         ( ztmp_cs3.ztqtyr1 <> 0 ) )   
ORDER BY ztmp_cs3.ztad ASC,   
         itstat1.imcode ASC,   
         ztmp_cs3.ztit ASC   

```

## Colonnes
| Colonne |
|---------|
| itstat1_imcode |
| itstat1_imdesc |
| ztmp_cs3_ztit |
| items_itname |
| items_itumusr |
| items_itconvusr |
| ztmp_cs3_ztqtys1 |
| ztmp_cs3_ztqtys2 |
| ztmp_cs3_ztvals1 |
| ztmp_cs3_ztvals2 |
| ztmp_cs3_ztvals3 |
| ztmp_cs3_ztqtyr1 |
| ztmp_cs3_ztqtyr2 |
| ztmp_cs3_ztvalr1 |
| ztmp_cs3_ztvalr2 |
| ztmp_cs3_ztad |
| adresses_adname |
| ztmp_cs3_ztvals4 |
| salesman |

