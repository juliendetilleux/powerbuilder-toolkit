# d_sales_shipable_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT lots.lostatus,   
         stocks.stqty,   
         stocks.stalloc,   
         items.itname,   
         stocks.stlot,   
         stocks.stloc,   
         items.itum,   
         salline.slcode,   
         salhead.shcust,   
         salline.slitem,   
         salline.slqtyreq,   
         salline.sldatship,   
         salline.slqtyalloc,   
         salline.slqtyreal,   
         salline.slline,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr  
    FROM stocks,   
         lots,   
         items,   
         salhead,   
         salline,   
         shipto  
   WHERE ( stocks.stlot = lots.locode ) and  
         ( items.itcode = lots.loitem ) and  
         ( salline.slcode = salhead.shcode ) and  
         ( salline.slitem = items.itcode ) and  
         ( shipto.stcode = salhead.shcust ) and  
         ( shipto.stseq = salline.slshipto ) and  
         ( ( salline.slstatus < '5' ) AND  
         ( salline.sldatship < :selected_Date ) AND  
         ( stocks.stqty > 0 ) )    

```

## Colonnes
| Colonne |
|---------|
| lots_lostatus |
| stocks_stqty |
| stocks_stalloc |
| items_itname |
| stocks_stlot |
| stocks_stloc |
| items_itum |
| salline_slcode |
| salhead_shcust |
| salline_slitem |
| salline_slqtyreq |
| salline_sldatship |
| salline_slqtyalloc |
| salline_slqtyreal |
| salline_slline |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |

