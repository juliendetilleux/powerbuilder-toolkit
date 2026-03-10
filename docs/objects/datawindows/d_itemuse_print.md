# d_itemuse_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itactiv,   
         items.itsale,   
         items.itum,   
         techlink.tivalue,   
         techdata.tdum,   
         choiceline.clname,   
         items.ittyp  
    FROM items,   
         techlink,   
         techdata,   
         choiceline  
   WHERE ( items.itcode = techlink.tiitem ) and  
         ( techdata.tdcode = techlink.ticode ) and  
         ( techdata.tdum = choiceline.clline ) and  
         ( ( items.itcode not in ( '###########M' , '###########P'  ) ) AND  
         ( Techlink.Ticode = :as_ticode ) AND  
         ( choiceline.clcode = 'TECD' ) )   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| itname |
| items_itactiv |
| items_itsale |
| itum |
| techlink_tivalue |
| techdata_tdum |
| choiceline_clname |
| items_ittyp |

