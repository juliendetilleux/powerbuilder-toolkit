# d_qry_lotqual_nauto_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
         lots.lostock * items.itstdpur as stockvalue,
         lots.loexpdat,
	    items.itstat1,
	    items.itstat2    
    From items,   
         lots  
   Where ( lots.loitem = items.itcode ) And  
         ( lots.lostock <> 0 ) And 
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
         lots.loexpdat,
	    items.itstat1,
	    items.itstat2   
    From items,   
         lots  
   Where ( lots.loitem = items.itcode ) And  
         ( lots.lostock <> 0 ) And 
         ( lots.lostatus = 'R' ) 

Union all 

  Select 'Lots Provisoires',
         lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lostock,   
         lots.lostatus,   
         items.itum,   
         lots.lorecdat,   
         items.itstdpur,
         lots.lostock * items.itstdpur,
         lots.loexpdat,
	    items.itstat1,
	    items.itstat2   
    From items,   
         lots  
   Where ( lots.loitem = items.itcode ) And  
         ( lots.lostock <> 0 ) And 
         ( lots.lostatus = 'P' ) 

Union all 

  Select 'Lots Périmés',
         lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lostock,   
         'X',   
         items.itum,   
         lots.lorecdat,   
         items.itstdpur,
         lots.lostock * items.itstdpur,   
         lots.loexpdat,
	    items.itstat1,
	    items.itstat2   
    From items,   
         lots  
   Where ( lots.loitem = items.i
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
| stockvalue |
| lots_loexpdat |
| itstat1 |
| itstat2 |

