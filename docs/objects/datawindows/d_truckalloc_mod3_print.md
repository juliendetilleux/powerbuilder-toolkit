# d_truckalloc_mod3_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT truckline.tlcode,   
         truckline.tlline,   
         truckline.tlsalhead,   
         truckline.tlsalline,   
         truckline.tlshiphead,   
         truckline.tlshipline,   
         truckline.tlweight,   
         truckline.tlpack,   
         truckline.tlqty,   
         items.itname,   
         items.itconvusr,   
         items.itumusr,   
         salhead.shcust,   
         adresses.adname,   
         items.itum,   
         truckhead.thdat,   
         truckref.trdesc,   
         salline.slshipto,   
         shipto.stdesc,   
         items.itcode  ,
		items.itlocpic
    FROM truckline,   
         salhead,   
         items,   
         adresses,   
         truckhead,   
         truckref,   
         salline,   
         shipto  
   WHERE ( truckline.tlsalhead = salhead.shcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( truckline.tlcode = truckhead.thcode ) and  
         ( truckhead.thtyp = truckref.trtyp ) and  
         ( truckline.tlsalhead = salline.slcode ) and  
         ( truckline.tlsalline = salline.slline ) and  
         ( salline.slshipto = shipto.stseq ) and  
         ( shipto.stcode = salhead.shcust ) and  
         ( salline.slitem = items.itcode ) and  
         (truckhead.thdat >= :date_from )   and
		(truckhead.thdat <= :date_to )
ORDER BY truckline.tlsort,
		items.itlocpic,   
          items.itcode    

```

## Colonnes
| Colonne |
|---------|
| tlcode |
| tlline |
| tlsalhead |
| tlsalline |
| tlshiphead |
| tlshipline |
| tlweight |
| tlpack |
| tlqty |
| items_itname |
| items_itconvusr |
| items_itumusr |
| salhead_shcust |
| adresses_adname |
| items_itum |
| truckhead_thdat |
| truckref_trdesc |
| salline_slshipto |
| shipto_stdesc |
| items_itcode |
| items_itlocpic |

