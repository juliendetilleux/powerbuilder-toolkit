# d_qclabel_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         lots.lorecdat,   
         lots.loreldat,   
         lots.loexpdat,   
         lots.loqcstatus,   
         lots.loorgcode,   
         items.itcode,   
         items.itname,   
         items.itdefaultlot,   
         items.itum,   
         qcctrlhead.qhctrlid,   
         qcctrlhead.qhcreadat  
    FROM items,   
         lots,   
         qcctrlhead  
   WHERE ( lots.loitem = items.itcode ) and  
         ( qcctrlhead.qhlot = lots.locode ) and  
         ( ( qcctrlhead.qhctrlid = :ran_QcId ) )    

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| lots_lorecdat |
| lots_loreldat |
| lots_loexpdat |
| lots_loqcstatus |
| lots_loorgcode |
| items_itcode |
| items_itname |
| items_itdefaultlot |
| items_itum |
| qcctrlhead_qhctrlid |
| qcctrlhead_qhcreadat |

