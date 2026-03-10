# d_shiptruck_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT truckhead.thcode,   
         truckhead.thdat,   
         truckhead.thdriver,   
         truckref.trdesc
    FROM truckhead, truckref
   WHERE ( truckhead.thcode = :Selected_truck ) AND
         ( truckhead.thtyp = truckref.trtyp )  

```

## Colonnes
| Colonne |
|---------|
| truckhead_thcode |
| truckhead_thdat |
| truckhead_thdriver |
| truckref_trdesc |

