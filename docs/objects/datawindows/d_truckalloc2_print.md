# d_truckalloc2_print

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
         shipto.stadr1,   
         shipto.stzip,    
         shipto.stloc,   
         items.itcode,
	    truckref.trtyp,
	    items.itweight * truckline.tlqty as weight,
	    salhead.shcustref,
	    salline.sldatship    
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
         ( truckline.tlcode = :Selected_truck )   
ORDER BY truckline.tlsort,
		salhead.shcust ASC,   
         salline.slshipto ASC   

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
| shipto_stadr1 |
| shipto_stzip |
| shipto_stloc |
| items_itcode |
| trtyp |
| weight |
| salhead_shcustref |
| salline_sldatship |

