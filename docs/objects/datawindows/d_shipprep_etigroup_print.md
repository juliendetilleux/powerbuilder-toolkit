# d_shipprep_etigroup_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  /*HA2648-15406*/
  SELECT items.itcode,   
         items.itname,   
         items.itdesc2,   
         items.itean2,   
         items.itean2conv,   
         items.itean3,   
         items.itean3conv,   
         lots.locode,   
         lots.loexpdat,   
         lots.loorgcode,   
         items.itdefaultlot  
    FROM items,   
         lots  
   WHERE ( lots.loitem = items.itcode ) and  
         ( ( items.itcode = :ras_Item ) AND  
         ( lots.locode = :ras_Lot ) )    

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itdesc2 |
| items_itean2 |
| items_itean2conv |
| items_itean3 |
| items_itean3conv |
| lots_locode |
| lots_loexpdat |
| lots_loorgcode |
| items_itdefaultlot |

