# d_qry_sal_histo2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  Select salhead.shcode,   
         salline.slline,   
         salline.slitem,   
         items.itname,   
         salline.slqtyreq,   
         salline.slqtyreal,
         salhead.shdatreq,
         salhead.shcust,
         adresses.adname
    From salhead,   
         salline,   
         items,
         adresses  
   Where ( salline.slcode = salhead.shcode ) And  
         ( items.itcode = salline.slitem ) And  
         ( salline.slstatus >= '3' ) And
         ( salline.slstatus < '9' ) And
         ( salhead.shcust = adresses.adcode ) And 
         ( salhead.shdatreq >= :radt_startdat ) And  
         ( salhead.shdatreq <= :radt_stopdate )
Order by 1,2


```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salline_slline |
| salline_slitem |
| items_itname |
| salline_slqtyreq |
| salline_slqtyreal |
| salhead_shdatreq |
| salhead_shcust |
| adresses_adname |

