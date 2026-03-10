# ds_dischead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: dischead

## SQL
```sql
  SELECT dischead.dhcode,   
         dischead.dhname,   
         dischead.dhactiv,   
         dischead.dhstartdate,   
         dischead.dhstopdate,   
         dischead.dhdesc  
    FROM dischead   
   WHERE dischead.dhstopdate > :adt_lastsync  

```

## Colonnes
| Colonne |
|---------|
| dhcode |
| dhname |
| dhactiv |
| dhstartdate |
| dhstopdate |
| dhdesc |

