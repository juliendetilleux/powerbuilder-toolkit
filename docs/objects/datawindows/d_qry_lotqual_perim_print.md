# d_qry_lotqual_perim_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  

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
	    items.itstat2   ,
		dateformat( lots.loexpdat, 'MM/YYYY' ) as month
    From items,   
         lots  
   Where ( lots.loitem = items.itcode ) And  
         ( lots.lostock <> 0  ) And  
         ( lots.lostatus Not In ( 'R', 'Q' ) )  And  
         ( lots.loexpdat >= :radt_Date_Start )   And  
         ( lots.loexpdat < :radt_Date_Stop )   /*HA2317*/


 ORDER BY 11

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
| month |

