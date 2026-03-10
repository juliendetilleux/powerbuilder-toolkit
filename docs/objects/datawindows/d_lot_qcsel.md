# d_lot_qcsel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loexpdat,   
         lots.lostock,   
         lots.loalloc,   
         lots.lostatus,   
         lots.lorecdat,
         lots.loorgcode  
    FROM lots  
   WHERE lots.loitem = :Sel_item and 
         isnull(lots.lolotctrl, 'Y') <> 'N'


```

## Colonnes
| Colonne |
|---------|
| locode |
| loexpdat |
| lostock |
| loalloc |
| lostatus |
| lorecdat |
| loorgcode |

