# d_outqual_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  Select 'Lots en Quarantaine',
         lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lostock,   
         lots.lostatus,   
         items.itum,   
         lots.lorecdat,   
         items.itstdpur,
         lots.lostock * items.itstdpur,
         lots.loexpdat   
    From items,   
         lots  
   Where ( lots.loitem = items.itcode ) And  
         ( lots.lostock > 0 ) And 
         ( lots.lostatus = 'Q' ) 

Union all 

  Select 'Lots Rejetés',
         lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lostock,   
         lots.lostatus,   
         items.itum,   
         lots.lorecdat,   
         items.itstdpur,
         lots.lostock * items.itstdpur,
         lots.loexpdat  
    From items,   
         lots  
   Where ( lots.loitem = items.itcode ) And  
         ( lots.lostock > 0 ) And 
         ( lots.lostatus = 'R' ) 

Union all 

  Select 'Lots Périmés',
         lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lostock,   
         lots.lostatus,   
         items.itum,   
         lots.lorecdat,   
         items.itstdpur,
         lots.lostock * items.itstdpur,   
         lots.loexpdat  
    From items,   
         lots  
   Where ( lots.loitem = items.itcode ) And  
         ( lots.lostock > 0  ) And  
         ( lots.lostatus Not In ( 'R', 'Q') ) And  
         ( lots.loexpdat <= :Sel_exp )   

```

## Colonnes
| Colonne |
|---------|
| cf_quality |
| lots_locode |
| lots_loitem |
| items_itname |
| lots_lostock |
| lots_lostatus |
| items_itum |
| lots_lorecdat |
| items_itstdpur |
| qty_x_stdpur |
| lots_loexpdat |

