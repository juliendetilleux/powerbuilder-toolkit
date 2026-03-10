# d_infointlot_suplot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT lots.loexpdat,   
         lots.lostock,   
         lots.loalloc,   
         lots.lostatus,   
         lots.locode  
    FROM lots  
   WHERE lots.locode = :as_Lot    

```

## Colonnes
| Colonne |
|---------|
| loexpdat |
| lostock |
| loalloc |
| lostatus |
| locode |

