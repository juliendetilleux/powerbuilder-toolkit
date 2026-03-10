# d_sscc_infos

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT ssccline.slcode,   
         ssccline.sllot,   
         ssccline.slqty,   
         ssccline.slloc,   
         ssccline.slin,   
         ssccline.sl_lastmod,   
         lots.lostatus,   
         lots.lorecdat,   
         lots.loorgcode,   
         items.itname,   
         items.itum,   
         lots.loitem  
    FROM ssccline   
        left outer join  lots on ( ssccline.sllot = lots.locode )   
        left outer join items on   ( lots.loitem = items.itcode )
   --WHERE isnull(items.itactiv,'Y') = 'Y'
ORDER BY ssccline.slcode ASC,   
         ssccline.slloc ASC,   
         ssccline.sllot ASC,   
         ssccline.slqty DESC,   
         ssccline.sl_lastmod DESC   

```

## Colonnes
| Colonne |
|---------|
| ssccline_slcode |
| ssccline_sllot |
| ssccline_slqty |
| ssccline_slloc |
| ssccline_slin |
| ssccline_sl_lastmod |
| lots_lostatus |
| lots_lorecdat |
| lots_loorgcode |
| items_itname |
| items_itum |
| lots_loitem |

