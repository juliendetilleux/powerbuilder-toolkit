# d_custord_trucksel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT truckhead.thcode,   
         truckhead.thdat,   
         truckhead.thstatus,   
         truckhead.thstarttim,   
         truckhead.thstoptim,   
         truckhead.thtrucktim,   
         truckhead.thstartkm,   
         truckhead.thstopkm,   
         truckhead.thdriver,   
         truckhead.thcost,   
         truckhead.thweight,   
         truckhead.thpack,   
         truckhead.thcmnt,   
         ( select count(truckline.tlcode) from truckline where truckline.tlcode = truckhead.thcode and truckline.tlshiphead = 0 ) as unshipped_count,   
         truckref.trdesc,
		(select first turnhead.thdesc
		  from truckline, turnhead, salhead, salline 
		where tlcode = truckhead.thcode and	
			salline.slstatus < '8' and
			salline.slcode = truckline.tlsalhead and
			salline.slline = truckline.tlsalline and
			salline.slcode = salhead.shcode and
			salhead.shturnid = turnhead.thid
		order by truckline.tlsalhead, truckline.tlsalline) as turn    
    FROM truckhead,   
         truckref  
   WHERE ( truckhead.thtyp = truckref.trtyp ) and  
         ( ( unshipped_count > 0 ) AND  
         ( truckref.tractiv = 'Y' ) AND  
         ( truckhead.thstatus between '1' and '5' ) )    

```

## Colonnes
| Colonne |
|---------|
| thcode |
| thdat |
| thstatus |
| thstarttim |
| thstoptim |
| thtrucktim |
| thstartkm |
| thstopkm |
| thdriver |
| thcost |
| thweight |
| thpack |
| thcmnt |
| unshipped_count |
| truckref_trdesc |
| turn |

