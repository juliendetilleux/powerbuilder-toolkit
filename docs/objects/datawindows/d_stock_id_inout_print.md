# d_stock_id_inout_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         items.itname,   
         items.itum,   
         lots.lolotctrl  ,
         (select fhdesc from filehead where fhcode = :as_project) , 
         (select fldesc from fileline where flcode = :as_project and flline = :as_sous_project)
    FROM lots,   
         items  
   WHERE ( items.itcode = lots.loitem ) and  
         ( ( lots.locode = :as_lot  ) )    

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_loitem |
| items_itname |
| items_itum |
| lots_lolotctrl |
| cfhdesc |
| cfldesc |

