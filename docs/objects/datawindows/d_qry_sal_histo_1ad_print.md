# d_qry_sal_histo_1ad_print

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
			items.itstat1,
			items.itstat2,
			items.itactiv, 
         (Select sum(invoiceline.ilqty) 
           From  invoiceline  
          Where ( invoiceline.ilsalorder = salhead.shcode ) And 
                ( invoiceline.ilsalline = salline.slline ))
    From salhead,   
         salline,   
         items  
   Where ( salline.slcode = salhead.shcode ) And  
         ( items.itcode = salline.slitem ) And  
         ( salline.slstatus >= '3' ) And 
         ( salline.sldatship >= :radt_startdat ) And  
         ( salline.sldatship <= :radt_stopdate ) And
         ( salhead.shcust = :ras_custid ) 

Order By 1  


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
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| compute_0011 |

