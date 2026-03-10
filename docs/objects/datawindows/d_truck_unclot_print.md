# d_truck_unclot_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
(SELECT truckline.tlsort,   
         truckhead.thcode,   
         truckhead.thtyp,   
         truckhead.thstatus,   
         truckhead.thdriver,   
         truckref.trinout,   
         truckref.tradcode,   
         truckref.trtyp,   
         adresses.adcode,   
         adresses.adname,   
         truckline.tlshiphead,   
         truckline.tlshipline,   
         truckline.tlsalhead,   
         truckline.tlsalline,   
         shipline.slitem,   
         shipline.slqty,   
         truckhead.thdat,   
         items.itcode,   
         items.itname,   
         items.itum  
    
        
        FROM shipline,   
         items,   
         truckhead,   
         truckline,   
         truckref,   
         adresses  
   
        
        WHERE ( truckhead.thcode = truckline.tlcode ) and  
         ( truckline.tlshiphead = shipline.slcode ) and  
         ( truckline.tlshipline = shipline.slline ) and  
         ( shipline.slitem = items.itcode ) and  
         ( truckhead.thtyp = truckref.trtyp ) and  
         ( adresses.adcode = truckref.tradcode ) AND  
         ( truckhead.thstatus < '7' ) and
			(truckref.trinout = 'O' ))

union all


  (SELECT truckline.tlsort,   
         truckhead.thcode,   
         truckhead.thtyp,   
         truckhead.thstatus,   
         truckhead.thdriver,   
         truckref.trinout,   
         truckref.tradcode,   
         truckref.trtyp,   
         '',   
         '',   
         truckline.tlshiphead,   
         truckline.tlshipline,   
         truckline.tlsalhead,   
         truckline.tlsalline,   
         shipline.slitem,   
         shipline.slqty,   
         truckhead.thdat,   
         items.itcode,   
         items.itname,   
         items.itum  
    FROM shipline,   
         items,   
         truckhead,   
         truckline,   
         truckref  
   WHERE ( truckhead.thcode = truckline.tlcode ) and  
         ( truckline.tlshiphea
```

## Colonnes
| Colonne |
|---------|
| truckline_tlsort |
| truckhead_thcode |
| truckhead_thtyp |
| truckhead_thstatus |
| truckhead_thdriver |
| truckref_trinout |
| truckref_tradcode |
| truckref_trtyp |
| adresses_adcode |
| adresses_adname |
| truckline_tlshiphead |
| truckline_tlshipline |
| truckline_tlsalhead |
| truckline_tlsalline |
| shipline_slitem |
| shipline_slqty |
| truckhead_thdat |
| items_itcode |
| items_itname |
| items_itum |

