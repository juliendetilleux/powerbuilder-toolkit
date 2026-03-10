# d_truck_turn_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT truckhead.thcode,   
         truckref.trdesc,   
         truckhead.thdat,   
         truckhead.thstatus,   
         truckref.trinout,   
         truckref.trcost,
		(select max( turnhead.thdesc )
		  from truckline, turnhead, salhead, salline 
		where tlcode = truckhead.thcode and
			salline.slstatus < '8' and
			salline.slcode = truckline.tlsalhead and
			salline.slline = truckline.tlsalline and
			salline.slcode = salhead.shcode and
			salhead.shturnid = turnhead.thid 
		/*order by truckline.tlsalhead, truckline.tlsalline*/ ) as turn  
    FROM truckhead,   
         truckref  
   WHERE ( truckref.trtyp = truckhead.thtyp ) and  
         ( truckhead.thstatus >= :Selected_minst ) AND  
         ( truckhead.thstatus <= :Selected_maxst ) AND  
         ( truckhead.thdat >= :Selected_date)   
ORDER BY truckhead.thcode DESC   

```

## Colonnes
| Colonne |
|---------|
| truckhead_thcode |
| truckref_trdesc |
| truckhead_thdat |
| truckhead_thstatus |
| truckref_trinout |
| truckref_trcost |
| turn |

