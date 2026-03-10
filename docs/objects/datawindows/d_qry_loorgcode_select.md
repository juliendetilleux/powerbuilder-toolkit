# d_qry_loorgcode_select

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lorecdat,   
         lots.lostock,   
         lots.loexpdat,   
         lots.loorgcode  
    FROM items,   
         lots  
   WHERE ( lots.loitem = items.itcode ) and  
         ( lots.loorgcode like :Sel_lot ) AND  
         ( lots.lorecdat between :Start_date and :Stop_date ) AND  
         ( items.itdefaultlot <> lots.locode ) AND     
         ( ( items.ittyp in ('C', 'P') OR items.itsale = 'Y' ) ) 

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_loitem |
| items_itname |
| lots_lorecdat |
| lots_lostock |
| lots_loexpdat |
| lots_loorgcode |

