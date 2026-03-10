# ds_stocks_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         stocks.stloc,   
         stocks.stqty,   
         stocks.stalloc,   
         lots.lorecdat,   
         lots.lolotctrl,   
         stocks.stitem,   
         stocks.stlot  
    FROM lots,   
         stocks  
   WHERE ( stocks.stlot = lots.locode ) and  
         ( lots.loitem = :Selected_item ) AND  
         ( stocks.stqty <> 0 or stocks.stalloc <> 0  )   
ORDER BY stocks.stqty DESC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| stocks_stloc |
| stocks_stqty |
| stocks_stalloc |
| lots_lorecdat |
| lots_lolotctrl |
| stocks_stitem |
| stocks_stlot |

