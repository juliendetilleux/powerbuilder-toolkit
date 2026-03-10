# d_qry_sal_histo_statum_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  Select salhead.shcode,   
         salline.slline,   
         salline.slitem,   
         items.itname,   
         salline.slqtyreq,   
         salline.slqtyreal,
         salline.sldatship,
         salhead.shcust,
         adresses.adname,
         adresses.adcountrid,
         adresses.adgrcust,
			items.itstat1,
			items.itstat2,
			items.itactiv,   
         items.itconvusr,   
         items.itumusr,    
         (Select sum(invoiceline.ilqty) 
           From  invoiceline  
          Where ( invoiceline.ilsalorder = salhead.shcode ) And 
                ( invoiceline.ilsalline = salline.slline ))
    From salhead,   
         salline,   
         items,
         adresses  
   Where ( salline.slcode = salhead.shcode ) And  
         ( items.itcode = salline.slitem ) And  
         ( salline.slstatus >= '3' ) And
         ( salline.slstatus < '9' ) And
         ( salhead.shcust = adresses.adcode ) And 
         ( salline.sldatship >= :radt_startdat ) And  
         ( salline.sldatship <= :radt_stopdate )
Order By salhead.shcode


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
| salline_sldatship |
| salhead_shcust |
| adresses_adname |
| adresses_adcountrid |
| adresses_adgrcust |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| items_itconvusr |
| items_itumusr |
| compute_0017 |

