# d_custordalloc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         matallocs.maitem,   
         matallocs.malot,   
         matallocs.maloc,   
         matallocs.maallocqty,   
         items.itname,   
         items.itum,   
         salhead.shcode,   
         salhead.shcust,   
         salline.slcustref,   
         salline.sldatreq,   
         salline.sldatship,   
         salline.slline,   
         salline.slqtyreq,   
         salhead.shcustpay,   
         salhead.shdlvt,   
         lots.lolotctrl,   
         salline.slallocprinted,  
			salline.slcode
    FROM matallocs,   
         adresses,   
         items,   
         salhead,   
         salline,   
         lots  
   WHERE ( salhead.shcust = adresses.adcode ) and  
         ( salline.slcode = salhead.shcode ) and  
         ( salline.slitem = items.itcode ) and  
         ( matallocs.macode = salline.slcode ) and  
         ( matallocs.maitemseq = salline.slline ) and  
         ( lots.locode = matallocs.malot ) and  
         ( ( matallocs.matyp = 'X' ) )   
ORDER BY salhead.shcust ASC,   
         matallocs.maitem ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| matallocs_maitem |
| matallocs_malot |
| matallocs_maloc |
| matallocs_maallocqty |
| items_itname |
| items_itum |
| salhead_shcode |
| salhead_shcust |
| salline_slcustref |
| salline_sldatreq |
| salline_sldatship |
| salline_slline |
| salline_slqtyreq |
| salhead_shcustpay |
| salhead_shdlvt |
| lots_lolotctrl |
| salline_slallocprinted |
| salline_slcode |

