# d_lot_status_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         lots.lostatus,   
         lots.lostock,   
         lots.loalloc,   
         lots.loreldat,   
         lots.loexpdat,   
         lots.loorder,    
         lots.lorecdat,   
         lots.lowip,   
         lots.loqcstatus,   
         lots.loctrl,   
         lots.locmnt,   
         lots.loorgcode,   
         lots.lofreezdate,
		isnull((select ppvalue from progparam where ppcode = 'FREEZART' ), '') as FREEZART,
		isnull((select itisfrozen from items where itcode = lots.loitem ), '') as itisfrozen,
		lots.loexcmrp   ,
		lots.loid,
		lots.lodensity,
		lots.lodegree,
		lots.loavailabledate,
		items.itcalcalcool,
		items.ittyp,
		items.itcat,
		items.itlot		
    FROM lots JOIN items ON lots.loitem = items.itcode   
   WHERE lots.locode = :Selected_lot    

```

## Colonnes
| Colonne |
|---------|
| locode |
| loitem |
| lostatus |
| lostock |
| loalloc |
| loreldat |
| loexpdat |
| loorder |
| lorecdat |
| lowip |
| loqcstatus |
| loctrl |
| locmnt |
| loorgcode |
| lofreezdate |
| freezart |
| itisfrozen |
| loexcmrp |
| loid |
| lots_lodensity |
| lots_lodegree |
| lots_loavailabledate |
| items_itcalcalcool |
| items_ittyp |
| items_itcat |
| items_itlot |

