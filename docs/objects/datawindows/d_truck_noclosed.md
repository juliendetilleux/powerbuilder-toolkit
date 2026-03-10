# d_truck_noclosed

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT truckhead.thcode,   
         truckhead.thdat,   
         truckhead.thdriver,   
         truckhead.thstatus,   
         truckhead.thtyp,   
         truckref.trdesc,   
         truckref.trcost,
		(select sum(isnull(shiphead.shpalnbr,0)) from shiphead where shiphead.shcode IN 
										(select truckline.tlshiphead from truckline where truckline.tlcode = truckhead.thcode))  as palnbr 
    FROM truckhead,   
         truckref  
   WHERE ( truckhead.thtyp = truckref.trtyp ) and  
         ( ( truckhead.thstatus > '1' ) AND  
         ( truckhead.thstatus < '7' ) AND  
         ( truckref.tractiv = 'Y' ) AND  
         ( truckref.trinout = 'O' ) AND  
         ( truckref.tradcode = :as_SelAdCode ) )   
ORDER BY truckhead.thcode ASC   

```

## Colonnes
| Colonne |
|---------|
| thcode |
| thdat |
| thdriver |
| thstatus |
| thtyp |
| truckref_trdesc |
| truckref_trcost |
| palnbr |

