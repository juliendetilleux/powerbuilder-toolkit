# d_qry_truckcost_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
/* jm012 Ajout de l'argument multiCo. Celui ci n'est pas utilisé dans la requète */
  SELECT 'O' trucktype,
         truckhead.thcode truck,   
         truckhead.thdat truckdat,   
         truckref.trdesc truckname,   
         truckhead.thdriver truckdriver,   
         0 start_time,
         0 stop_time,
         0 start_km,
         0 stop_km,
         purinvhead.picode invoicenum,
         purinvline.plpurval truckval,
         ( select sum(tlweight) from truckline where tlcode = truckhead.thcode) truckweight,
         ( select sum(tlweight) from truckline where tlcode in 
               (select distinct pstruck from purinvsplit
                   where purinvsplit.pscode = purinvline.plcode and
                         purinvline.plline = purinvsplit.psline and 
                         purinvhead.picode = purinvsplit.pscode )) invweight
    FROM purinvhead,
         purinvline,   
         purinvsplit,   
         truckhead,   
         truckref  
   WHERE ( purinvhead.picode = purinvline.plcode) and
         ( truckhead.thtyp = truckref.trtyp ) and  
         ( purinvsplit.pstruck = truckhead.thcode ) and  
         ( purinvline.plcode = purinvsplit.pscode ) and 
         ( purinvline.plline = purinvsplit.psline ) and 
         ( ( truckref.trinout = 'O' ) AND  
         ( truckhead.thdat between :Start_date and :Stop_date ) )   
UNION  all 
  SELECT 'I',
         truckhead.thcode,   
         truckhead.thdat,   
         truckref.trdesc,   
         truckhead.thdriver,
         truckhead.thstarttim,
         truckhead.thstoptim,
         truckhead.thstartkm,
         truckhead.thstopkm,   
         0,
         thcost,
         ( select sum(tlweight) from truckline where tlcode = truckhead.thcode) truckweight,
         1   
    FROM truckhead,   
         truckref  
   WHERE ( truckhead.thtyp = truckref.trtyp ) and  
         ( ( truckref.trinout <> 'O' ) AND  
         ( truckhead.thdat between :Start_date an
```

## Colonnes
| Colonne |
|---------|
| ctrucktype |
| truckhead_truck |
| truckhead_truckdat |
| truckref_truckname |
| truckhead_truckdriver |
| purinvhead_start_time |
| purinvhead_stop_time |
| purinvhead_start_km |
| purinvhead_stop_km |
| purinvhead_invoicenum |
| purinvline_truckval |
| ctruckweight |
| cinvweight |

