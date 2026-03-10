# d_truck_shiporder

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT shiphead.shcode,   
         shiphead.shcust,   
         shiphead.shshipto,   
         shiphead.shprseq,   
         adresses.adname,   
         shipto.stdesc,
		(select count(*)
		    from shipgrhead
		 where shipgrhead.ghshipid = shiphead.shcode and
				shipgrhead.ghlevel = 1)  as nbpal ,
		(select adname from adresses where adcode = isnull ( shiphead.shmccode,'##########')) as mcdoname
    FROM shiphead,   
         truckline,   
         adresses,   
         shipto  
   WHERE ( truckline.tlshiphead = shiphead.shcode ) and  
         ( adresses.adcode = shiphead.shcust ) and  
         ( shipto.stseq = shiphead.shshipto ) and  
         ( shipto.stcode = shiphead.shcust ) and  
         ( ( truckline.tlcode = :Selected_truck ) )   
ORDER BY shiphead.shprseq ASC,   
         shiphead.shcode ASC   

```

## Colonnes
| Colonne |
|---------|
| shiphead_shcode |
| shiphead_shcust |
| shiphead_shshipto |
| shiphead_shprseq |
| adresses_adname |
| shipto_stdesc |
| nbpal |
| mcdoname |

